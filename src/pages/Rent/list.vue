<template>
<div @touchstart = "onTouch($event)"
  @touchend = "onTouchend($event)">
  <div class="rents-search">
    <m-search  @select="onSelect" />
  </div>
  <Scroll
    class="comments-list rent-list" 
    :height="height" 
     @on-reach-bottom="onReachBottom"
    >
    <div
      v-if="realRents.length !== 0"
      v-for="(rent, index) in realRents">
      <m-message 
        :tabName="tabName"
        class="list-item"
        :item="rent"
        :commuNum="rent.contacts"
        @click.native="onClick()"/>  
        
      <m-dialog 
        v-if="dialogStatus"
        @touchend.native = "slide($event)"
        :on-close="() => dialogStatus = false" 
        :item="rent"
        :commuNum="rent.contacts"/>
    </div>
    <div v-if="realRents.length === 0 && cid" >
      暂时没有人要合租哦？来发布一个吧~
    </div>
  </Scroll>
  
  <div class="btn-publish">
    <m-button :type="6" @click="$router.push('/rent/publish')"/>
  </div>
</div>

</template>

<script>
import api from '../../api';
import { debounce } from '@/util';
import { mapState, mapMutations } from 'vuex';
import { bus } from '@/bus';

const sexMap = {
  f: '女',
  m: '男'
}

var startX = 0,
    startY = 0,
    moveEndX = 0,
    moveEndY = 0;
var X,Y;

export default {
  data() {
    return {
      height:0,
      tabName: 'rent',
      dialogStatus: false,
      btnActive: true,
      isShow: false,
      loading: false,
      reachEnd: false,
      page: 1
    }
  },
  computed: {
    ...mapState(['cid', 'rents']),
    realRents() {
      console.log('realRents',this.rents)
      return this.rents.map(item => {
        const res = JSON.parse(JSON.stringify(item));
        res.sex = sexMap[res.sex];
        console.log('rents',res);

        return res;
      });
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
    window.addEventListener('scroll', this.showBtn);
    // this.rents = this.getRentList();
    // bus.$on('select', this.handelSearch)
    
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('scroll', this.showBtn);
  },
  methods: {
    ...mapMutations(['updateRents', 'updateCid', 'updateUid']),
    onResize() {
      const dom = document.documentElement || document.body;
      const clientHeight = dom.clientHeight;
      this.height = clientHeight - 93;
    },
    onClick() {
      this.dialogStatus = true
    },
    slide(e) {
      e.stopPropagation()
    },
    handelSearch(item) {
      this.cid = item.id
    },
    async onSelect({
      id: poi
    }) {
      let res = await api.getRents({poi, page: 1});
      console.log('select',res)
      this.updateRents({rents: res, clear: true});
      this.updateCid({cid: poi});

      // 这里可能是别的页面搜索，所以调回列表页
      // this.$router.push('/Rents');
    },
    
    async onReachBottom() {
      if (this.loading || this.reachEnd) return;
      try {
        this.loading = true;
        const params = {
          poi: this.cid,
          page: this.page + 1
        };
        const res = await api.getRents(params);
        console.log(res)
        if (res.length === 0) {
          this.reachEnd = true;
        }
        this.updateRents({Rents: res});
        this.page++;
      } catch (err) {
      } finally {
        this.loading = false;
      }
    },

    async getRentList() {
      try {
        this.loading = true;
        const params = {
          poi: this.cid,
          page: 1
        };
        var res = await api.getRents(params);

        
        if (res.length === 0) {
          this.reachEnd = true;
        }
        let res = await api.getRents({poi, page: 1});
        this.updateRents({Rents: res, clear: true});
        this.updateCid({cid: poi});
      } catch (err) {
      } finally {
        this.loading = false;
      }
    },

    

    // button control
    showBtn() {
      this.btnActive = true;
    },
    onTouch(e) {
      //e.preventDefault();
      startX = e.changedTouches[0].pageX,
      startY = e.changedTouches[0].pageY;
      console.log('touch');
    },
    onTouchend(e){
      var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        var direction = getDirection(startX, startY, endx, endy);
        if (direction == 1) {
          console.log("向上！")
          this.btnActive = false;
        }else if(direction == 2) {
          console.log('down');
          this.btnActive = true;
        }
    },
  }
}
//获得角度
function getAngle(angx, angy) {
    return Math.atan2(angy, angx) * 180 / Math.PI;
};

//根据起点终点返回方向 1向上 2向下 3向左 4向右 0未滑动
function getDirection(startx, starty, endx, endy) {
  var angx = endx - startx;
  var angy = endy - starty;
  var result = 0;

  //如果滑动距离太短
  if (Math.abs(angx) < 2 && Math.abs(angy) < 2) {
      return result;
  }

  var angle = getAngle(angx, angy);
  if (angle >= -135 && angle <= -45) {
      result = 1;
  } else if (angle > 45 && angle < 135) {
      result = 2;
  } else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
      result = 3;
  } else if (angle >= -45 && angle <= 45) {
      result = 4;
  }

  return result;
}
</script>

<style lang="scss">
@import "../../assets/style/comments-list.scss";
</style>

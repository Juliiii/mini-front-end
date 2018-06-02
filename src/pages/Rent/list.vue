<template>
<div @touchstart = "onTouch($event)"
    @touchend = "onTouchend($event)">
  <!-- <m-search /> -->
  
  <Scroll
    class="comments-list rent-list" 
    :height="height" 
    >
    <div v-for="(item, index) in infoData">
     <m-message :personInfo="item" :key="index" :tabName="tabName" class="list-item" @click.native="onClick()"/>  
    </div>
    <m-dialog 
      v-if="dialogStatus"
      @touchend.native = "slide($event)"
      :on-close="() => dialogStatus = false" />
  </Scroll>
  <div class="btn-publish">
    <m-button :type="6" @click="$router.push('/rent/publish')"/>
  </div>
</div>

</template>

<script>
import axios from '@/axios'

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
      infoData: []
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
    window.addEventListener('scroll', this.showBtn);
    this.infoData = this.getInfo()
    
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('scroll', this.showBtn);
    
  },
  methods: {
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
      //e.preventDefault()
    },
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
    getInfo() {
      axios.get('/join_rents/filter-by-user?user_id=6&offset=&limit=')
      .then(function(response){
        console.log(response.data);
        return response.data;
      })
      .catch(function(err){
        console.log(err);
      });
    }
    
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

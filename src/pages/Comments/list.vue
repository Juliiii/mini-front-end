<template>
  <Scroll
    class="comments-list"
    :height="height"
    @on-reach-bottom="onReachBottom">
    <!-- <m-message :tabName="tabName" class="list-item" /> -->
    <m-message
      v-if="realComments.length !== 0"
      v-for="(comment, index) in realComments"
      :tabName="tabName"
      class="list-item"
      :item="comment"
      :key="index" />
    <div v-if="realComments.length === 0 && cid">
      暂时没有人来评价, 要不你来评价一下？
      <m-button @click="$router.push('/comments/publish')" :type="3" style="margin: 5px auto 0 auto;"/>
    </div>
  </Scroll>
</template>

<script>
import api from '@/api';
import { mapState, mapMutations } from 'vuex';

const keyCnMap = {
  village: '小区名称',
  how_go: '上班方式',
  how_long: '上班时间',
  is_clean: '干净程度',
  has_food: '周边美食',
  has_mall: '周边商业区',
  description: '描述信息'
};

export default {
  data() {
    return {
      height: 0,
      tabName: 'comment',
      page: 1,
      loading: false,
      reachEnd: false
    }
  },
  computed: {
    ...mapState(['cid', 'comments']),
    realComments() {
      return this.comments.map(item => {
        const res = JSON.parse(JSON.stringify(item));
        const how_go_arr = ['班车', '地铁', '公交', '骑行', '步行', '开车', '其他'];
        res.how_long = `${res.how_long}分钟`;
        res.how_go = how_go_arr[res.how_go - 1];
        res.tags = ['has_food', 'is_clean', 'has_mall'].map(item => `${keyCnMap[item]}${res[item]}分`);
        return res;
      })
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    ...mapMutations(['updateComments']),
    onResize() {
      const dom = document.documentElement || document.body;
      const clientHeight = dom.clientHeight;
      this.height = clientHeight - 93;
    },
    async onReachBottom() {
      if (this.loading || this.reachEnd) return;
      try {
        this.loading = true;
        const params = {
          poi: this.cid,
          page: this.page + 1
        };

        const res = await api.getComments(params);
        if (res.length === 0) {
          this.reachEnd = true;
        }
        this.updateComments({comments: res});
        this.page++;
      } catch (err) {
      } finally {
        this.loading = false;
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/style/comments-list.scss";
</style>

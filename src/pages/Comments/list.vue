<template>
  <Scroll class="comments-list" :height="height" @on-reach-bottom="onReachBottom">
    <!-- <m-message :tabName="tabName" class="list-item" /> -->
    <m-message
      v-if="comments.length !== 0"
      v-for="comment in comments"
      :tabName="tabName"
      class="list-item"
      :item="comment"
      :key="comment.uid" />
    <div v-if="comments.length === 0 && cid">
      暂时没有人来评价, 要不你来评价一下？
      <m-button @click="$router.push('/comments/publish')" :type="3" style="margin: 5px auto 0 auto;"/>
    </div>
  </Scroll>
</template>

<script>
import api from '@/api';
import { mapState, mapMutations } from 'vuex';
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
    ...mapState(['cid', 'comments'])
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

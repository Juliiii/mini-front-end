<template>
  <Scroll class="comments-list" :height="height" @on-reach-bottom="onReachBottom">
    <m-message :tabName="tabName" class="list-item" />
    <m-message :tabName="tabName" class="list-item" />
    <m-message :tabName="tabName" class="list-item" />
    <m-message :tabName="tabName" class="list-item" />
    <m-message :tabName="tabName" class="list-item" />
    <m-message :tabName="tabName" class="list-item" />
    <m-message :tabName="tabName" class="list-item" />
    <m-message :tabName="tabName" class="list-item" />

    <m-message :tabName="tabName" class="list-item" />


    <m-message v-for="comment in comments" :tabName="tabName" class="list-item" :key="comment.id" />
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
      page: 0,
      limit: 10,
      loading: false,
      reachEnd: false
    }
  },
  computed: {
    ...mapState(['title', 'address', 'id', 'category', 'comments'])
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
          poi: this.id,
          title: this.title,
          category: this.category,
          address: this.address,
          offset: (this.page + 1) * this.limit,
          limit
        };

        const res = await api.getComments(params);
        if (res.data.length === 0) {
          this.reachEnd = true;
        }
        this.updateComments({comments: res.data});
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

<template>
<div class="comments-wrapper">
  <div class="comments-search">
    <m-search  @select="onSelect" />

  </div>
  <div class="button-group">
    <m-button :type="1" @click="$router.push('/comments')"/>
    <m-button :type="2" @click="$router.push('/comments/map')"/>
    <m-button :type="3" @click="$router.push('/comments/publish')"/>
  </div>
  <div class="line"></div>
  <router-view class="comments-view" />
</div>
</template>

<script>
import { mapMutations } from 'vuex';
import api from '@/api';
export default {
  methods: {
    ...mapMutations(['updateComments', 'updateCid']),
    async onSelect({
      id: poi,
      title,
      address,
      category
    }) {
      const res = await api.getComments({
        poi, title, address, category, offset: 0, limit: 10
      });

      // 评价列表存在vuex
      this.updateComments({comments: res.data, clear: true});
      this.updateCid({
        cid: poi,
        title,
        address,
        category
      });

      // 这里可能是别的页面搜索，所以调回列表页
      this.$router.push('/comments');
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/style/comments.scss";
</style>

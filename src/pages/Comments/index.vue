<template>
<div class="comments-wrapper">
  <m-search  @select="onSelect" />
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
import api from '@/api';
export default {
  methods: {
    async onSelect({
      id: poi,
      title,
      address,
      category
    }) {
      const res = await api.getComments({
        poi, title, address, category, offset: 0, limit: 10
      });
    }
  }
}
</script>

<style lang='scss' scoped>
@import '../../assets/style/comments.scss';
</style>

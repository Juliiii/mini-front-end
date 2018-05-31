<template>
<div class="comments-wrapper">
  <Search />
  <div class="button-group">
    <Button :type="1" @click="$router.push('/comments')"/>
    <Button :type="2" @click="$router.push('/comments/map')"/>
    <Button :type="3" @click="$router.push('/comments/publish')"/>
  </div>
  <div class="line"></div>
  <router-view class="comments-view" />
</div>
</template>

<script>
import Button from '@/components/Button';
import Search from '@/components/Search';
export default {
  components: {
    Button,
    Search
  }
}
</script>

<style lang='scss' scoped>
@import '../../assets/style/comments.scss';
</style>

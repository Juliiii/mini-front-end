<template>
<div class="comments-wrapper">
  <m-search />
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
export default {
}
</script>

<style lang='scss' scoped>
.comments-wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  .button-group {
    margin: 0 auto;
    width: 90%;
    display: flex;
    justify-content: space-between;
  }

  .line {
    margin: 10px 0 0 0;
    height: 1px;
    width: 100%;
    background-color: #d7d7d7;
  }

  .comments-view {
    flex: 1;
  }
}
</style>

<template>
<div class="publish-item-wrapper">
  <div class="publish-item-area">发布于<span>蓝虹雅苑</span></div>
  <div class="publish-item-body">
    <div class="publish-item-content">这个小区还不错，很多人住在这里。也许是不错的吧</div>
    <div class="publish-item-traffic">骑车<span>30分钟</span></div>
  </div>
  <Msgbottom tabName="comment" :tags="tags" class="publish-item-msg-button"/>
</div>
</template>

<script>
import Msgbottom from '@/components/msg-bottom';
export default {
  components: {
    Msgbottom
  },
  data() {
    return {
      tags: ['小区干净', '吃的很多']
    };
  }
}
</script>

<style lang="scss">
@import '../../assets/style/publish-item.scss';
</style>

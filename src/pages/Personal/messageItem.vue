<template>
<div class="publish-item-wrapper">
  <div class="publish-item-area">来自<span>{{item.requestname}}</span></div>
  <div class="publish-item-body">
    <div class="publish-item-content">这个小区还不错，很多人住在这里。也许是不错的吧</div>
  </div>
  <m-msg-bottom tabName="message" :state="item.state" :reqId="item.id" :date="item.contact_at" :status="0" :commuNum="1" class="publish-item-msg-button"/>
</div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({

      })
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/style/publish-item.scss";
</style>

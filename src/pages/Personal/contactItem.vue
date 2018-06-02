<template>
<div class="contact-item-wrapper">
  <div class="contact-item-has-contact">已联系</div>
  <div class="contact-item-content">这个小区还不错，很多人住在这里。也许是不错的吧</div>
  <m-msg-bottom tabName="rent" :commuNum="4" :tags="tags"  class="contact-item-msg-button"/>
</div>
</template>

<script>
export default {
  data() {
    return {
      tags: ['小区干净', '吃的很多']
    };
  }
}
</script>

<style lang="scss">
.contact-item-wrapper {
  padding: 10px 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  .contact-item-has-contact {
    color: #d7d7d7;
  }
  .contact-item-msg-button {
    width: 100%;
  }
  .contact-item-content {
    margin: 10px 0;
    font-size: 14px;
  }
}
</style>

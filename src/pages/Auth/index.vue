<template>
<div class="auth-wrapper">
  <Upload
      class="auth-upload"
      type="drag"
      action="//jsonplaceholder.typicode.com/posts/">
      <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>上传Offer或者其他可以证明您被录取的照片</p>
      </div>
  </Upload>

  <Upload
      class="auth-upload"
      type="drag"
      action="//jsonplaceholder.typicode.com/posts/">
      <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>上传您的身份信息</p>
      </div>
  </Upload>

  <m-button :type="10" @click="onClick" class="auth-publish-button" />
</div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
    onClick() {

    }
  }
};
</script>

<style lang="scss">
@import "../../assets/style/auth.scss";
</style>

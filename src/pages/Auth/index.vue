<template>
<div class="auth-wrapper">
  <Upload
      class="auth-upload"
      type="drag"
      @on-success="onOfferImgUpload"
      @on-error="onOfferImgError"
      action="//www.ultrasoftware.cn/user/upload-offer-img">
      <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>上传Offer或者其他可以证明您被录取的照片</p>
      </div>
  </Upload>

  <Upload
      class="auth-upload"
      type="drag"
      @on-error="onIdImgError"
      @on-success="onIdImgUpload"
      action="//www.ultrasoftware.cn/user/upload-id-img">
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
      form: {
        offer_img_url: '',
        id_img_url: ''
      }
    };
  },
  methods: {
    onClick() {

    },
    onOfferImgUpload(response, file, fileList) {
      console.log(response);
    },
    onIdImgUpload(response, file, fileList) {
      console.log(response);
    },
    onIdImgError() {
      this.$Message.error({
        content: '上传身份信息图片失败啦'
      });
    },
    onOfferImgError() {
      this.$Message.error({
        content: '上传offer证明图片失败啦'
      });
    }
  }
};
</script>

<style lang="scss">
@import "../../assets/style/auth.scss";
</style>

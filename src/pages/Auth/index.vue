<template>
<div class="auth-wrapper">
  <Upload
      class="auth-upload"
      type="drag"
      name="upfile1"
      @on-success="onOfferImgUpload"
      @on-error="onOfferImgError"
      :action="offerAction">
      <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>上传Offer或者其他可以证明您被录取的照片</p>
      </div>
  </Upload>

  <Upload
      class="auth-upload"
      type="drag"
      name="upfile2"
      @on-error="onIdImgError"
      @on-success="onIdImgUpload"
      :action="idAction">
      <div style="padding: 20px 0">
          <Icon type="ios-cloud-upload" size="52" style="color: #3399ff"></Icon>
          <p>上传您的身份信息</p>
      </div>
  </Upload>

  <!-- <m-button :type="10" @click="onClick" class="auth-publish-button" /> -->
</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      form: {
        offer_img_url: '',
        id_img_url: ''
      }
    };
  },
  computed: {
    ...mapState(['uid']),
    action() {
      return `//jushuo.anycodes.cn/uploaddata?openid=${this.uid}`;
    },
    offerAction() {
      return `${this.action}&type=1`;
    },
    idAction() {
      return `${this.action}&type=2`;
    }
  },
  methods: {
    onClick() {

    },
    onOfferImgUpload(response, file, fileList) {
      this.$Message.success({
        content: '上传offer图片成功啦'
      });
    },
    onIdImgUpload(response, file, fileList) {
      this.$Message.success({
        content: '上传身份信息图片成功啦'
      });
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

<template>
<div class="personal-wrapper">
  <div class="personal-profile">
    <div class="personal-avatar-wrapper">
      <img class="personal-avatar" src="../../assets/img/11.jpg" alt="">
    </div>
    <div class="personal-info-wrapper">
      <div class="personal-info-item">
        <span class="personal-info-name">刘居说 (已认证) <span class="personal-info-spec" style="margin-left: 5px;"> 男 24岁</span></span>
        <m-button :type="8" class="button-edit" @click="$router.push('/edit')"/>
      </div>
      <div class="personal-info-spec personal-info-item">liujushuo@email.com</div>
      <div class="personal-info-spec personal-info-item">13719177292</div>
      <div class="personal-info-spec personal-info-item">腾讯科技有限公司</div>
    </div>
  </div>

  <div class="line"></div>


  <publish-item />

  <contact-item v-for="contact in contacts" :key="contact" />
</div>
</template>

<script>
import contactItem from './contactItem';
import publishItem from './publishItem';
export default {
  components: {
    publishItem,
    contactItem
  },
  data() {
    return {
      contacts: [1,2,3,4]
    };
  }
};
</script>

<style lang="scss">
@import "../../assets/style/mixin.scss";
.personal-wrapper {
  padding: 3px;

  .line {
    width: 100%;
    height: 1px;
    background-color: #d7d7d7;
  }
  .personal-profile {
    display: flex;
    justify-content: flex-start;
    padding: 5px 0;
    .personal-avatar-wrapper {
      flex-basis: 80px;
      padding: 6px 5px;
      .personal-avatar {
        width: rem(100);
        height: rem(100);
        margin-right: rem(30);
        border-radius: 100%;
      }
    }
    .personal-info-wrapper {
      flex: 1;
      text-align: left;
      font-size: 14px;
      padding: 3px;
      .personal-info-name {
        font-size: 16px;
      }
      .personal-info-spec {
        color: #85cdbf;
      }

      .personal-info-item {
        margin: 5px 0;
      }

      :first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .button-edit {
          height: 28px !important;
          font-size: 14px !important;
        }
      }
    }
  }
}
</style>

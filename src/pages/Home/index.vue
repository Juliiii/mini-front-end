<template>
<div class="homepage-wrapper">
  <H2>居说</H2>
  <p>一款为实习生、毕业生提供</p>
  <p style="width: 300px" >以公司为中心真实客观的房源评价软件</p>

  <div @click="onClick">
    <img src="https://upload.wikimedia.org/wikipedia/zh/thumb/9/99/Tencent_QQ.svg/1200px-Tencent_QQ.svg.png" alt="" class="logo">
    <p>点击进行登录</p>
  </div>
</div>  
</template>

<script>
export default {
  methods: {
    onClick() {
      window.location.href = 'https://graph.qq.com/oauth/show?which=Login&display=pc&redirect_uri=http://jushuo.anycodes.cn/qqlogin&client_id=101481304&response_type=code&state=1111';
    }
  }
};
</script>

<style lang="scss">
.homepage-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 10%;
  .logo {
    height: 125px;
    width: 100px;
    margin: 100px 0 10px 0;
  }
}
</style>

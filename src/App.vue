<template>
  <div id="app">
    <m-tabs :configs="tabsConfigs"  v-if="path !== '/'" />
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  data () {
    return {
      tabsConfigs: [
        { text: '房源评价', link: '/comments' },
        { text: '我要合租', link: '/rent' },
        { text: '个人中心', link: '/personal' }
      ],
      dialogStatus: true,
      path: '/'
    };
  },
  created () {
    this.path = this.$route.fullPath;
  },
  watch: {
    '$route.fullPath'(val) {
      this.path = val;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style lang="scss">
@import "./assets/style/common";
</style>

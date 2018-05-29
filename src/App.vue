<template>
  <div id="app">
    <tabs :configs="tabsConfigs" />
    <search />
    <router-view/>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs';
import Button from '@/components/Button';
import Search from '@/components/Search';
export default {
  name: 'App',
  components: {
    Tabs,
    Button,
    Search
  },
  data () {
    return {
      tabsConfigs: [
        { text: '房源评价' },
        { text: '我要合租' },
        { text: '个人中心' }
      ]
    };
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

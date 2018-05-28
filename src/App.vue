<template>
  <div id="app">
    <tabs :configs="tabsConfigs" />
    <router-view/>
  </div>
</template>

<script>
import Tabs from '@/components/Tabs';
import Button from '@/components/Button';
export default {
  name: 'App',
  components: {
    Tabs,
    Button
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<style lang="scss">
@import './assets/style/common';
</style>

<template>
<div class="tabs-wrapper" id="tabs">
  <div class="tabs-row">
    <div
      class="tabs-column"
      v-for="(config, index) in configs"
      :key="config.text" @click="onClick(config, index)">
      <span class="tabs-item" :class="{'tabs-active': activeTab === config.text}">
        {{config.text}}
      </span>
    </div>
  </div>
  <div
    :style="{
      width: `${tabsItemWidth}px`,
      transform: `translate3d(${transformXOffset}px, 0px, 0px)`
    }"
    class="tabs-line"></div>
</div>
</template>

<script>
export default {
  props: {
    configs: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  created () {
    this.activeTab = this.configs.length ? this.configs[0].text : '';
  },
  mounted () {
    this.$router.push(this.configs[0].link)
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize);
  },
  data () {
    return {
      activeTab: '',
      tabsItemWidth: 0,
      transformXOffset: 0
    };
  },
  methods: {
    onClick (config, index) {
      const dom = document.querySelectorAll('#tabs .tabs-item')[index];
      this.transformXOffset = dom.getBoundingClientRect().left;
      this.activeTab = config.text;
      this.$router.push(config.link);
    },
    onResize () {
      const dom = document.querySelectorAll('#tabs .tabs-item')[0];
      const rect = dom.getBoundingClientRect();
      this.tabsItemWidth = rect.width;
      this.transformXOffset = rect.left;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/style/tabs.scss";
</style>

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
    const dom = document.querySelectorAll('#tabs .tabs-item')[0];
    const rect = dom.getBoundingClientRect();
    this.tabsItemWidth = rect.width;
    this.transformXOffset = rect.left;
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
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs-wrapper {
  display: flex;
  flex-direction: column;
  height: 56px;
  border-bottom: 1px solid #d7d7d7;
  .tabs-row {
    display: flex;
    .tabs-column {
      flex: 1;
      line-height: 56px;
      .tabs-item {
        font-size: 18px;
        color: #7c7c7c;
        display: inline-block;
      }

      .tabs-active {
        color: #85cdbf;
      }
    }
  }
  .tabs-line {
    width: 20px;
    height: 2px;
    background-color: #85cdbf;
    transition: all .3s;
  }
}

</style>

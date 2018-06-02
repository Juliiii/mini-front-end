<template>
<div class="rent-wrapper">
  <router-view class="rent-view" />
</div>
  
</template>

<script>

export default {
  data() {
    return {
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      const dom = document.documentElement || document.body;
      const clientHeight = dom.clientHeight;
      this.height = clientHeight - 93;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/mixin.scss';
div.search-wrapper {
  padding-bottom: 0;
}

</style>

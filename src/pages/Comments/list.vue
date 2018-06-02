<template>
  <Scroll class="comments-list" :height="height">
<!--     <m-message :tabName="tabName" class="list-item" />
    <m-message :tabName="tabName" class="list-item" />
    <m-message :tabName="tabName" class="list-item" />
    <m-message :tabName="tabName" class="list-item" />
    <m-message :tabName="tabName" class="list-item" />
    <m-message :tabName="tabName" class="list-item" />
    <m-message :tabName="tabName" class="list-item" />
    <m-message :tabName="tabName" class="list-item" />

    <m-message :tabName="tabName" class="list-item" />
 -->  </Scroll>
</template>

<script>
export default {
  data() {
    return {
      height: 0,
      tabName: 'comment'
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

<style lang="scss">
@import '../../assets/style/comments-list.scss';
</style>

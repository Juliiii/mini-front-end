<template>
<div class="rent-wrapper">
  <m-search />
  <Scroll class="comments-list" :height="height">
    <m-message :tabName="tabName" class="list-item" @click.native="onClick()"/>
    <m-message :tabName="tabName" class="list-item"  @click.native="onClick()"/>
    <m-message :tabName="tabName" class="list-item"  @click.native="onClick()"/>
    <m-message :tabName="tabName" class="list-item"  @click.native="onClick()"/>
    <m-message :tabName="tabName" class="list-item"  @click.native="onClick()"/>
    <m-message :tabName="tabName" class="list-item"  @click.native="onClick()"/>
    <m-message :tabName="tabName" class="list-item"  @click.native="onClick()"/>
    <m-message :tabName="tabName" class="list-item"  @click.native="onClick()"/>

    <m-message :tabName="tabName" class="list-item"  @click.native="onClick()"/>
    <m-dialog 
      v-if="dialogStatus"
      @touchend.native = "slide($event)"
      :on-close="() => dialogStatus = false" />
  </Scroll>
  <div class="btn-publish">
    <m-button :type="6" @click="$router.push('/rent/publish')"/>
  </div>
</div>
  
</template>

<script>

export default {
  data() {
    return {
      height: 0,
      tabName: 'rent',
      dialogStatus: false
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
    },
    onClick() {
      this.dialogStatus = true
    },
    slide(e) {
      e.stopPropagation()
      //e.preventDefault()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/mixin.scss';
div.search-wrapper {
  padding-bottom: 0;
}
.comments-list {
  width: 100%;

  .list-item {
    width: 90%;
    margin: 10 auto 30px auto;
  }
}
.btn-publish {
  height: rem(100);
  padding-top: rem(20);
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: linear-gradient(RGBA(255,255,255,.75), RGBA(255,255,255,1));
  justify-content: center;
}
</style>

<template>
  <Scroll class="comments-list" :height="height">
    <Message class="list-item" />
    <Message class="list-item" />
    <Message class="list-item" />
    <Message class="list-item" />
    <Message class="list-item" />
    <Message class="list-item" />
    <Message class="list-item" />
    <Message class="list-item" />

    <Message class="list-item" />
  </Scroll>
</template>

<script>
import Message from '@/components/Message';
export default {
  components: {
    Message
  },
  data() {
    return {
      height: 0
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
.comments-list {
  width: 100%;
  .list-item {
    width: 90%;
    margin: 30px auto 10px auto;
  }
}
</style>

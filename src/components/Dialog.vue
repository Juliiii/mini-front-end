<template>
  <div class="dialog-wrapper" @click="onClose && onClose()">
    <div class="box">
      <div class="dialog" @click.stop="() => {}">
        <Message />
        <SentMessage :on-close="onClose" />
      </div>
    </div>
  </div>
</template>

<script>
import Message from '@/components/Message';
import SentMessage from '@/components/SentMessage';

export default {
  props: ['on-close'],
  components: {
    Message,
    SentMessage
  }
}
</script>
<style lang="scss">
@import '../assets/style/dialog.scss';
</style>
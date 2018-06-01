<template>
  <div class="dialog-wrapper" @click="onClose && onClose()">
    <div class="box">
      <div class="dialog" @click.stop="() => {}">
        <m-message :tabName="tabName"/>
        <m-sentMessage :on-close="onClose" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-dialog',
  props: ['on-close','tabName'],
}
</script>
<style lang="scss">
@import '../assets/style/dialog.scss';
</style>
<template>
  <div class="dialog-wrapper m-dialog" @click="onClose && onClose()">
    <div class="box">
      <div class="dialog" @click.stop="() => {}">
        <m-message :tabName="tabName"/>
        <m-sentMessage :on-close="onClose" :on-contact="onContact"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-dialog',
  props: ['on-close','on-contact','tabName'],
}
</script>
<style lang="scss">
@import '../assets/style/dialog.scss';
</style>
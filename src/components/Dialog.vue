<template>
  <div class="dialog-wrapper m-dialog" @click="onClose && onClose()">
    <div class="box">
      <div class="dialog" @click.stop="() => {}">
        <m-message :commuNum="commuNum" :tabName="tabName" :item="item"/>
        <m-sentMessage :on-close="onClose" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'm-dialog',
  data () {
    return {
      tabName: 'rent'
    }
  },
  props: ['on-close', 'item', 'commuNum']
}
</script>
<style lang="scss">
@import '../assets/style/dialog.scss';
</style>
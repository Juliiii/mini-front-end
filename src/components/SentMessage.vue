
<template>
<div class="message-wrapper s-message-wrapper" id="message">
	<div class="s-content">
    <textarea name="tarea" id="tarea" placeholder="快来描述一下自己吧！"></textarea>
	</div>
  <div class="s-btn">
    <a href="javascript:;" @click="onSubmit">取得联系</a>
  </div>
</div>
</template>

<script>
import Msgbottom from '@/components/msg-bottom';

export default {
	components: {
		Msgbottom
  },
  data () {
    return {

    };
  },
  props: ['on-close'],
  methods:{
    onSubmit() {
      // 提交留言
      this.onClose()
    }
  }
}
</script>
<style lang="scss">
@import '../assets/style/message.scss';
</style>



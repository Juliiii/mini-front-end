
<template>
<div class="message-wrapper s-message-wrapper" id="message">
	<div class="s-content">
    <textarea name="tarea" v-model="content" id="tarea" placeholder="快来描述一下自己吧！"></textarea>
	</div>
  <div class="s-btn">
    <a href="javascript:;" @click="onSubmit">取得联系</a>
  </div>
</div>
</template>

<script>
import api from '../api'
export default {
  name: 'm-sentMessage',
  data () {
    return {
      content: ''
    };
  },
  props: ['on-close', 'rid'],
  methods:{
    onSubmit(rid) {
      // 提交留言
      this.onClose();
      this.onContact(this.rid, this.content)
    },
    async onContact(rid, content) {
      if (this.loading) return;
      console.log('contact')
      try {
        this.loading = true;
        const params = {
          rid: 1,
          content: content
        };

        const res = await api.addContact(params);
        alert(res.state)
      } catch (err) {
      } finally {
        this.loading = false;
      }
      
    },
  }
}
</script>
<style lang="scss">
@import '../assets/style/message.scss';
</style>



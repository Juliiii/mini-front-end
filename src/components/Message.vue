
<template>
<div class="message-wrapper" id="message">
	<m-msg-header :personInfo="item" :tabName="tabName"/>
	
	<div class="content">
		<p>{{item.description}}</p>
	</div>

	<m-msg-bottom :up="item.up" :tags="item.tags" :down="item.down" :tabName="tabName" :commuNum="commuNum"/>
</div>
</template>

<script>

export default {
	name: 'm-message',
  data () {
    return {
			
    };
	},
	mounted( ){
		console.log(this.item)
	},
	props: {
		tabName: {
			type: String,
      required: true,
      default: () => ''
		},
		item: {
			type: Object,
			required: true,
			default: () => ({
			})
		},
		commuNum: {
			type: Number,
			required: true,
			default: () => 0
		}
	}
}
</script>
<style lang="scss">
@import '../assets/style/message.scss';
</style>




<template>
<div class="message-wrapper" id="message">
	<m-msg-header :personInfo="personInfo" :tabName="tabName"/>
	
	<div class="content">
		<p>{{content}}</p>
	</div>

	<m-msg-bottom :tabName="tabName" :tags="tags" :commuNum="commuNum"/>
</div>
</template>

<script>

export default {
	name: 'm-message',
  data () {
    return {
			personInfo: {
				sex: '女',
				age: 18,
				addr: '帝景园',
				cycle: '走路',
				time: '10分钟'
			},
			tags:[
				'干净1',
				'干净2',
				'干净3',
				'干净4',
				'干净5'
			],
			commuNum: 10,
			content:'fdsfdsfdsfdssssssssssssssssssssssssssssssssssssssssssssssssssfdsf'
    };
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
		}
	}
}
</script>
<style lang="scss">
@import '../assets/style/message.scss';
</style>



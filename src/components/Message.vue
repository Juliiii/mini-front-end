
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
				sex: this.personInfo.sex || '',
				age: this.personInfo.age || '',
				addr: this.personInfo.village || '',
				cycle: this.personInfo.how_go || '',
				time: this.personInfo.how_long || ''
			},
			tags:[
				'干净1',
				'干净2',
				'干净3',
				'干净4',
				'干净5'
			],
			commuNum: 10,
			content: this.personInfo.discription || ''
    };
	},
	props: {
		tabName: {
			type: String,
      required: true,
      default: () => ''
		},
		personInfo: {
			type: Object,
      required: true,
      default: () => {}
		}
	},
	mounted() {
		console.log(this.tabName);
	}
}
</script>
<style lang="scss">
@import '../assets/style/message.scss';
</style>



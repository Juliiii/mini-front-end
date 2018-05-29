
<template>
<div class="message-wrapper" id="message">
	<Msgheader :personInfo="personInfo" :tabName="tabName"/>
	
	<div class="content">
		<p>{{content}}</p>
	</div>

	<Msgbottom :tabName="tabName" :tags="tags" :commuNum="commuNum"/>
</div>
</template>

<script>
import Msgheader from '@/components/msg-header';
import Msgbottom from '@/components/msg-bottom';

export default {
	components: {
		Msgheader,
		Msgbottom
  },
  data () {
    return {
			tabName: 'comment',
			personInfo: {
				sex: '女',
				age: 18,
				addr: '帝景园',
				cycle: '走路',
				time: '10分钟'
			},
			tags:[
				'干净',
				'干净',
				'干净',
				'干净',
				'干净'
			],
			commuNum: 10,
			content:'fdsfdsfdsfdssssssssssssssssssssssssssssssssssssssssssssssssssfdsf'
    };
  }
}
</script>
<style lang="scss">
@import '../assets/style/message.scss';
</style>



<template>
	<div class="m-header-wrapper">
		<div class="tit">
			<img src="../assets/img/11.jpg" alt="">
			<div class="tit-info" v-if="tabName == 'comment'">
				<div class="info-addr">
					发布于<span class="addr">{{personInfo.addr}}</span>
				</div>
				<div class="info-time">
					<span class="cycle">{{personInfo.cycle}}</span><span class="time">{{personInfo.time}}</span>
				</div>
			</div>
			<div class="head-info" v-if="tabName == 'rent'">
				{{personInfo.sex}} &nbsp;{{personInfo.age}}岁
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'm-msg-header',
  props: {
		personInfo: {
			type: Object,
			default: function(){
				return {
					sex: '男',
					age: 0,
					addr: '不详',
					cycle: '',
					time: ''
				}
				
			}

		},
		/*
		评价：comment
		合租：rent
		 */
		tabName: {
			type: String,
      required: true,
      default: () => ''
		}
  },
  data () {
    return {
      
    };
  }
}
</script>
<style lang="scss">
@import '../assets/style/msg-header.scss';
</style>

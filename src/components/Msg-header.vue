<template>
	<div class="m-header-wrapper">
		<div class="tit">
			<img :src="avatar" alt="">
			<div class="tit-info" v-if="tabName == 'comment'">
				<div class="info-addr">
					发布于<span class="addr">{{personInfo.village}}</span>
				</div>
				<div class="info-time">
					<span class="cycle">{{personInfo.how_go}}</span><span class="time">{{personInfo.how_long}}</span>
				</div>
			</div>
			<div class="head-info" v-if="tabName == 'rent'">
				{{personInfo.sex ? personInfo.sex : '不详'}} &nbsp;{{personInfo.age}}岁
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'm-msg-header',
	computed: {
		avatar() {
			return this.personInfo.picture ? this.personInfo.picture : 'https://upload.wikimedia.org/wikipedia/zh/thumb/9/99/Tencent_QQ.svg/1200px-Tencent_QQ.svg.png';
		}
	},
  props: {
		personInfo: {
			type: Object,
			default: function(){
				return {
					sex: '不详',
					age: 0,
					village: '不详',
					how_go: '',
					how_long: ''
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

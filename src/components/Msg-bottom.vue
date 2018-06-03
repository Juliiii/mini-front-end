<template>
	<div class="m-bottom-wrapper">
		<div v-if="tabName == 'comment'" class="icon-wrapper-com">
			<div class="icon">
				<Icon :type="tIconType" color="#FFC100" size="60px"></Icon>
				{{moodInfo.thumbNum}}
				<Icon :type="mIconType"></Icon>{{moodInfo.moodNum}}
			</div>
<!-- 			<div class="tag" v-for="tag in tags" :key="tag">
				<span>#{{tag}} &nbsp;</span>
			</div>
 -->		</div>
		
		<div v-if="tabName == 'rent'" class="icon-wrapper-joint">
			<div class="commu-num">
				{{commuNum}}人已联系
			</div>
			<!-- <div class="tag" v-for="tag in tags" :key="tag">
				<span>#{{tag}} &nbsp;</span>
			</div> -->
		</div>

		<div v-if="tabName == 'message'" class="m-bottom-message">
			<span class="commu-num">
				{{date}}
			</span>
			<div class="m-buttom-button-group">
				<template v-if="status === 0">
					<IButton type="text">保持联系</IButton>
					<IButton type="text">拒绝联系</IButton>
				</template>
				<template v-else-if="status === 1">
					<IButton type="text" disabled>已联系</IButton>
				</template>
				<template v-else>
					<IButton type="text" disabled>已拒绝</IButton>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'm-msg-bottom',
  props: {
		/*
		评价：comment
		合租：rent
		 */
		tabName: {
			type: String,
      required: true,
      default: () => ''
		},
/* 		tags: {
      type: Array,
      required: true,
      default: () => []
		},
 */		commuNum: {
			type: Number,
      required: true,
      default: () => 0
		},
		moodInfo: {
			type: Object,
			default: function() {
				return {
					thumb: 'up',
					thumbNum: 1110,
					moodType: 'sad',
					moodNum: 11111
				}
				
			}
		},
		status: {
			type: Number
		},
		date: {
			type: String
		}
  },
  data () {
    return {
      
    };
	},
	computed: {
    tIconType: function () {
      return 'thumbs' + this.moodInfo.thumb
		},
		mIconType: function () {
      return 'android-' + this.moodInfo.moodType
		}
  }
}
</script>
<style lang="scss">
@import "../assets/style/msg-bottom.scss";
</style>

<template>
	<div class="m-bottom-wrapper">
		<div v-if="tabName == 'comment'" class="icon-wrapper-com">
			<div class="icon">
				<Icon type="thumbsup" color="#FFC100" size="60px"></Icon>
				&nbsp;{{up}}&nbsp;&nbsp;
				<Icon type="android-sad"></Icon>&nbsp;{{ down}}
			</div>
 			<div class="tag" v-for="tag in tags" :key="tag">
				<span>#{{tag}} &nbsp;</span>
			</div>
		</div>
		
		<div v-if="tabName == 'rent'" class="icon-wrapper-joint">
			<div class="commu-num">
				{{commuNum}}人已联系
			</div>
			<div class="tag" v-for="tag in tags" :key="tag">
				<span>#{{tag}} &nbsp;</span>
			</div>
		</div>

		<div v-if="tabName == 'message'" class="m-bottom-message">
			<span class="commu-num">
				{{formatDate}}
			</span>
			<div class="m-buttom-button-group">
				<template v-if="state === 0">
					<IButton type="text" @click="onAgree">保持联系</IButton>
					<IButton type="text" @click="onReject">拒绝联系</IButton>
				</template>
				<template v-else-if="state === 1">
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
import moment from "moment";
import api from '@/api';
import { mapMutations } from 'vuex';


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
 		tags: {
      type: Array,
      // required: true,
      default: () => []
		},
	commuNum: {
			type: Number,
      required: true,
      default: () => 0
		},
		
		state: {
			type: Number
		},
		date: {
			type: String
		},
		reqId: {
			type: Number
		},
		up: {
			type: Number
		},
		down: {
			type: Number
		}
  },
  data () {
    return {
      
    };
	},
	computed: {
    tIconType: function () {
      return 'thumbs' + this.up
		},
		mIconType: function () {
      return 'android-' + this.down
		},
		formatDate() {
				return moment(new Date(this.date)).format('YYYY-MM-DD HH:mm:ss');
		}
	},
	methods: {
		...mapMutations(['updateContacts']),
		async onAgree() {
			await api.reContact({
				id: this.reqId,
				op: 1
			});

			const res = await api.getContact();
			this.updateContacts({contacts: res, clear: true});
		},
		async onReject() {
			await api.reContact({
				id: this.reqId,
				op: 2
			});

			const res = await api.getContact();
			this.updateContacts({contacts: res, clear: true});
		}
	}
}
</script>
<style lang="scss">
@import "../assets/style/msg-bottom.scss";
</style>

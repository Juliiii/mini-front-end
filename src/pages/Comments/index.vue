<template>
<div class="comments-wrapper">
  <div class="comments-search">
    <m-search  @select="onSelect" />

  </div>
  <div class="button-group">
    <m-button :type="1" @click="$router.push('/comments')"/>
    <m-button :type="2" @click="$router.push('/comments/map')"/>
    <m-button :type="3" @click="$router.push('/comments/publish')"/>
  </div>
  <div class="line"></div>
  <router-view class="comments-view" />
</div>
</template>

<script>
import { mapMutations } from 'vuex';
import api from '@/api';
export default {
  async created() {
    if (process.env.NODE_ENV !== 'development') {
    // 登录后获取openid
      this.updateUid({uid: this.$route.query.openid});
    } else {
      this.updateUid({uid: '01234567890123456789012345678901'});
    }
  },
  methods: {
    ...mapMutations(['updateComments', 'updateCid', 'updateUid']),
    async onSelect({
      id: poi
    }) {
      let res = await api.getComments({poi, page: 1});
      // // 评价列表存在vuex
      this.updateComments({comments: res, clear: true});
      this.updateCid({cid: poi});

      // 这里可能是别的页面搜索，所以调回列表页
      this.$router.push('/comments');
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/style/comments.scss";
</style>

<template>
<div class="search-wrapper">
  <IInput
    v-model="keyWord"
    icon="ios-search"
    placeholder="输入公司名"
    class="search-input"
    @on-change="onChange">
  </IInput>
  <div
    v-if="lists.length"
    class="list-wrapper">
    <div v-for="item in lists" :key="item.id" @click="onSelect(item)">
      <div class="list-item">{{item.address}}</div>
    </div>
  </div>
</div>
</template>
<script>
import api from '../api';
import { debounce } from '@/util';
import { bus } from '@/bus';

import { mapMutations } from 'vuex';

export default {
  name: 'm-search',
  data () {
    return {
      keyWord: '',
      lists: []
    };
  },
  methods: {
    ...mapMutations(['updateCid', 'updateComments','updateRents']),
    onSelect (item) {
      this.keyWord = item.address;
      this.$emit('select', item);
      this.lists = [];
    },
    onChange: debounce(async function() {
      if (this.keyWord === '') {
        this.lists = [];
        this.updateCid({cid: ''});
        this.updateComments({comments: [], clear: true});
        this.updateRents({rents: [], clear: true});
        
        return;
      }
      const res = await api.getAddressList(this.keyWord);
      console.log(res)
      this.lists = res.data ? res.data : [];
    }, 1000)
  }
};
</script>
<style lang='scss' scoped>
.search-wrapper {
  padding: 10px 0;
  .search-input {
    width: 100%;
  }
  .list-wrapper {
    width: 100%;
    border-radius: 3px;
    border: 1px solid rgb(238, 238, 238);
    margin: 5px auto 0 auto;
    .list-item {
      text-align: left;
      padding: 5px 2px;
    }
  }
}
</style>

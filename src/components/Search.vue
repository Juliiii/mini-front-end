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
// mock
const res ={
  "status": 0,
  "message": "query ok",
  "count": 10,
  "data": [
      {
          "id": "15336847776077850441",
          "title": "腾讯大厦",
          "address": "广东省深圳市南山区深南大道10000号",
          "category": "房产小区:商务楼宇",
          "type": 0,
          "location": {
              "lat": 22.5405026,
              "lng": 113.934528362
          },
          "adcode": 440305,
          "province": "广东省",
          "city": "深圳市",
          "district": "南山区"
      },
      {
          "id": "13429767705569088855",
          "title": "腾讯深圳总部",
          "address": "广东省深圳市南山区深南大道10000腾讯大厦",
          "category": "公司企业:公司企业",
          "type": 0,
          "location": {
              "lat": 22.54043,
              "lng": 113.93454
          },
          "adcode": 440305,
          "province": "广东省",
          "city": "深圳市",
          "district": "南山区"
      },
      {
          "id": "8234090150440726281",
          "title": "腾讯科技(深圳)有限公司(飞亚达大厦)",
          "address": "广东省深圳市南山区高新区南一道飞亚达科技大厦内",
          "category": "公司企业:公司企业",
          "type": 0,
          "location": {
              "lat": 22.53938,
              "lng": 113.95578
          },
          "adcode": 440305,
          "province": "广东省",
          "city": "深圳市",
          "district": "南山区"
      },
      {
          "id": "7940779634265115690",
          "title": "腾讯连锁网吧(山海店)",
          "address": "海南省昌江黎族自治县环城东二路山海黎巷美食街2楼",
          "category": "娱乐休闲:网吧",
          "type": 0,
          "location": {
              "lat": 19.28954,
              "lng": 109.05672
          },
          "adcode": 469026,
          "province": "海南省",
          "city": "昌江黎族自治县"
      },
      {
          "id": "15619489163514104007",
          "title": "腾讯网吧(得胜街)",
          "address": "湖北省荆门市沙洋县五里铺",
          "category": "娱乐休闲:网吧",
          "type": 0,
          "location": {
              "lat": 30.734257889,
              "lng": 112.207789421
          },
          "adcode": 420822,
          "province": "湖北省",
          "city": "荆门市",
          "district": "沙洋县"
      },
      {
          "id": "15038408277648023524",
          "title": "腾讯网吧(东海路)",
          "address": "山东省烟台市龙口市东海路10号",
          "category": "娱乐休闲:网吧",
          "type": 0,
          "location": {
              "lat": 37.599166972,
              "lng": 120.486025214
          },
          "adcode": 370681,
          "province": "山东省",
          "city": "烟台市",
          "district": "龙口市"
      },
      {
          "id": "14674731267856708902",
          "title": "腾讯科技(北京)有限公司(希格玛大厦)",
          "address": "北京市海淀区知春路49号希格玛大厦1-6层",
          "category": "公司企业:公司企业",
          "type": 0,
          "location": {
              "lat": 39.97715,
              "lng": 116.33701
          },
          "adcode": 110108,
          "province": "北京市",
          "city": "北京市",
          "district": "海淀区"
      },
      {
          "id": "14924032395826868516",
          "title": "腾讯公园",
          "address": "广东省中山市腾讯公园(南下新码头西南150米)",
          "category": "旅游景点:公园",
          "type": 0,
          "location": {
              "lat": 22.50375,
              "lng": 113.37764
          },
          "adcode": 442000,
          "province": "广东省",
          "city": "中山市"
      },
      {
          "id": "17666708151708400824",
          "title": "定州市腾讯网上服务有限公司",
          "address": "河北省定州市中国建设银行定州中山西路储蓄所旁",
          "category": "娱乐休闲:网吧",
          "type": 0,
          "location": {
              "lat": 38.51984,
              "lng": 114.96985
          },
          "adcode": 139001,
          "province": "河北省",
          "city": "定州市"
      },
      {
          "id": "14821797590757176839",
          "title": "腾讯网吧",
          "address": "辽宁省葫芦岛市龙港区海翔路1-11号",
          "category": "娱乐休闲:网吧",
          "type": 0,
          "location": {
              "lat": 40.72161,
              "lng": 120.85954
          },
          "adcode": 211403,
          "province": "辽宁省",
          "city": "葫芦岛市",
          "district": "龙港区"
      }
  ],
  "request_id": "1621494444233286985"
};
import { debounce } from '@/util';

export default {
  data () {
    return {
      keyWord: '',
      lists: []
    };
  },
  methods: {
    onSelect (item) {
      this.keyWord = item.address;
      this.$emit('select', this.keyWord);
      this.lists = [];
    },
    onChange: debounce(async function() {
      if (this.keyWord === '') {
        this.lists = [];
        return;
      }
      // const res = await this.axios.get(`${MAP_URL}?${params}`);
      this.lists = res.data;
      console.log(res);
    }, 1000)
  }
};
</script>
<style lang='scss' scoped>
.search-wrapper {
  padding: 10px 0;
  .search-input {
    width: 90%;
  }
  .list-wrapper {
    width: 90%;
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

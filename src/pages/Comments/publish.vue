<template>
<div class="comments-publish-wrapper">
  <div class="form-item">
    <span class="form-label">小区名称:</span>
    <IInput class="form-item" v-model="form.village" placeholder="例如：帝景园"></IInput>
  </div>
  <div class="form-item">
    <span class="form-label">上班方式</span>
    <div class="dropdown-wrapper">
      <div class="dropdown-result" @click="onDropdownClick">
        <span class="dropdown-placeholder" v-show="form.how_go === ''" >例如：骑车</span>
        {{form.how_go}}
      </div>
      <div
        v-show="isShow"
        class="list-wrapper">
        <div v-for="item in goWorkWays" :key="item" @click="onSelect(item)">
          <div class="list-item">{{item}}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="form-item">
    <span class="form-label">上班耗时</span>
    <IInput class="form-item" v-model="form.how_long" placeholder="例如: 30分钟"></IInput>
  </div>
  <div class="form-item">
    <span class="form-label">干净程度</span>
    <Rate show-text allow-half v-model="form.is_clean"></Rate>
  </div>
  <div class="form-item">
    <span class="form-label">周边美食</span>
    <Rate show-text allow-half v-model="form.has_food"></Rate>
  </div>
  <div class="form-item">
    <span class="form-label">周边商业区</span>
    <Rate show-text allow-half v-model="form.has_mall"></Rate>
  </div>
  <div class="form-item">
    <span class="form-label">描述信息</span>
    <IInput class="form-item" v-model="form.description" type="textarea" :autosize="{minRows: 4,maxRows: 8}" placeholder="例如：周围环境很好，很方便"></IInput>
  </div>
  <div class="button-group">
    <m-button :type="4" class="button-reset" @click="onReset"/>
    <m-button :type="5" class="button-publish" @click="onPublish"/>
  </div>
</div>
</template>

<script>
import api from '@/api';

const keyCnMap = {
  village: '小区名称',
  how_go: '上班方式',
  how_long: '上班时间',
  is_clean: '干净程度',
  has_food: '周边美食',
  has_mall: '周边商业区',
  description: '描述信息'
};

const initForm = {
    village: '',
    how_go: '',
    how_long: '',
    is_clean: 1,
    has_food: 1,
    has_mall: 1,
    description: ''  
};

export default {
  data () {
    return {
      isShow: false,
      goWorkWays: ['班车', '地铁', '公交', '骑行', '步行', '开车', '其他'],
      form: {
        village: '',
        how_go: '',
        how_long: '',
        is_clean: 1,
        has_food: 1,
        has_mall: 1,
        description: ''
      }
    }
  },
  methods: {
    onDropdownClick() {
      this.isShow = true;
    },
    onSelect(item) {
      this.form.how_go = item;
      this.isShow = false;
    },
    onReset() {
      for (const key of Object.keys(this.form)) {
        this.form[key] = initForm[key];
      }
    },
    async onPublish() {
      for (const key of Object.keys(this.form)) {
        if (key !== 'description' && !this.form[key]) {
          this.$Message.error({
            content: `${keyCnMap[key]}别留空哦~`
          });

          return;
        }
      }

      // 发布
      try {
        const how_go_map = this.goWorkWays.reduce((acc, item, index) => {
         acc[item] = index + 1;
         return acc;
        }, {});

        await api.publishComments({
          ...this.form,
          how_go: how_go_map[this.form.how_go],
          is_clean: Math.floor(this.form.is_clean),
          has_food: Math.floor(this.form.has_food),
          has_mall: Math.floor(this.form.has_mall),
          uid: '12323',
          cid: '2323'
        });

        this.$Message.success({
          content: `发布成功~`
        });

        this.$router.push('/comments');
      } catch (err) {

      }
    }
  }
}
</script>

<style lang='scss'>
@import "../../assets/style/comments-publish.scss";
</style>

<template>
<div class="comments-publish-wrapper">
  <div class="form-item">
    <span class="form-label">小区名称:</span>
    <IInput class="form-item" v-model="form.name" placeholder="例如：帝景园"></IInput>
  </div>
  <div class="form-item">
    <span class="form-label">上班方式</span>
    <div class="dropdown-wrapper">
      <div class="dropdown-result" @click="onDropdownClick">
        <span class="dropdown-placeholder" v-show="form.way === ''" >例如：骑车</span>
        {{form.way}}
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
    <IInput class="form-item" v-model="form.time" placeholder="例如: 30分钟"></IInput>
  </div>
  <div class="form-item">
    <span class="form-label">周边美食</span>
    <Rate show-text allow-half v-model="valueCustomText"></Rate>
  </div>
  <div class="form-item">
    <span class="form-label">周边商业区</span>
    <Rate show-text allow-half v-model="valueCustomText"></Rate>
  </div>
  <div class="form-item">
    <span class="form-label">描述信息</span>
    <IInput class="form-item" v-model="form.desc" type="textarea" :autosize="{minRows: 4,maxRows: 8}" placeholder="例如：周围环境很好，很方便"></IInput>
  </div>
  <div class="button-group">
    <m-button :type="4" class="button-reset" @click="onReset"/>
    <m-button :type="5" class="button-publish" />
  </div>
</div>
</template>

<script>
    export default {
      data () {
        return {
          isShow: false,
          goWorkWays: ['走路', '公交', '地铁', '骑车', '小车'],
          form: {
            name: '',
            way: '',
            time: '',
            desc: ''
          },
          valueCustomText: 3
        }
      },
      methods: {
        onDropdownClick() {
          console.log(1);
          this.isShow = true;
          console.log(this.isShow);
        },
        onSelect(item) {
          this.form.way = item;
          this.isShow = false;
        },
        onReset() {
          for (const key of Object.keys(this.form)) {
            this.form[key] = '';
          }
        }
      }
    }
</script>

<style lang='scss'>
@import '../../assets/style/comments-publish.scss';
</style>

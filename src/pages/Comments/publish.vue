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
    <Button :type="4" class="button-reset" @click="onReset"/>
    <Button :type="5" class="button-publish" />
  </div>
</div>
</template>

<script>
import Button from '@/components/Button';
    export default {
      components: {
        Button,
      },
      data () {
        return {
          isShow: false,
          goWorkWays: ['走路', '公交', '地铁', '骑车', '小车'],
          form: {
            name: '',
            way: '',
            time: '',
            desc: ''
          }
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

<style lang='scss' scoped>
.comments-publish-wrapper {
  height: 100%;
  padding: 30px 10px 5px 10px;
  .form-item {
    display: flex;
    align-items: center;
    .form-label {
      text-align: left;
      font-size: 14px;
      flex-basis: 120px;
    }
  }
  .dropdown-wrapper {
    width: 100%;
    position: relative;
    .dropdown-placeholder {
      color: #bbbec4;
    }
    .dropdown-result {
      width: 100%;
      height: 32px;
      text-align: left;
      display: flex;
      align-items: center;
      padding: 4px 7px;
      border-radius: 4px;
      border: 1px solid #dddee1;
    }

    .dropdown-result:hover {
      border-color: #57a3f3;
    }

    .list-wrapper {
      background-color: #fff;
      z-index: 1;
      position: absolute;
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

  .button-group {
    left: 50%;
    width: 100%;
    transform: translateX(-50%);
    position: fixed;
    bottom: 5px;
  }

  .form-item {
    margin: 8px 0;
  }

  .form-rate-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>

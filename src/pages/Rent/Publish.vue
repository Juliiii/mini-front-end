<template>
<div class="comments-publish-wrapper">
  <div class="form-item">
    <IInput class="form-item" v-model="form.addr" placeholder="公司地址"></IInput>
  </div>
  <div class="form-item">
    <div class="form-column">
      <IInput class="form-item" v-model="form.name" placeholder="姓名"></IInput>
    </div>
    <div class="form-column">
      <RadioGroup v-model="form.sex">
        <Radio label="男"></Radio>
        <Radio label="女"></Radio>
      </RadioGroup>
    </div>
    <div class="form-column">
      <IInput class="form-item" v-model="form.age" placeholder="年龄"></IInput>
    </div>
  </div>
  <div class="form-item">
    <IInput class="form-item" v-model="form.community" placeholder="小区名称"></IInput>
  </div>
  <div class="form-item">
    <IInput class="form-item" v-model="form.email" placeholder="邮箱"></IInput>
  </div>
  <div class="form-item">
    <IInput class="form-item" v-model="form.tele" placeholder="手机"></IInput>
  </div>
  <div class="form-item">
    <IInput class="form-item" v-model="form.hobby" placeholder="#爱好"></IInput>
  </div>
  <div class="form-item form-item2">
    <div class="form-column">
      <span class="form-label">是否养宠物</span>
      <Select v-model="form.hasPetModel">
        <Option v-for="item in form.hasPetList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
    <div class="form-column">
      <span class="form-label">是否熬夜</span>
      <Select v-model="form.staylateModel">
        <Option v-for="item in form.staylateList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
  </div>
  <div class="form-item">
    <span class="form-label">洁净程度</span>
    <Rate show-text allow-half v-model="form.cleanValue">
        <span style="color: #f5a623">{{ form.cleanValue }}</span>
    </Rate>
  </div>
  <div class="form-item">
    <span class="form-label">心理价位</span>
    <div class="form-column column-price">
      <IInput class="form-item" v-model="form.priceMin"></IInput>
      <span class="form-label">-</span>
      <IInput class="form-item" v-model="form.priceMax"></IInput>
      
    </div>
  </div>
  <div class="form-item">
    <IInput class="form-item" v-model="form.desc" type="textarea" :autosize="{minRows: 4,maxRows: 8}" placeholder="描述信息"></IInput>
  </div>

  <div class="button-group">
    <m-button :type="4" class="button-reset" @click="onReset"/>
    <m-button :type="6" class="button-publish" />
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
            addr: '',
            name: '',
            sex: '',
            age: '',
            community: '',
            email: '',
            tele: '',
            hobby: '',
            hasPetList: [
                {
                    value: '0',
                    label: '不养'
                },
                {
                    value: '1',
                    label: '计划/养'
                },
                {
                    value: '2',
                    label: '不介意养'
                }
            ],
            hasPetModel: '',
            staylateList: [
                {
                    value: '0',
                    label: '从不'
                },
                {
                    value: '1',
                    label: '偶尔'
                },
                {
                    value: '2',
                    label: '经常'
                }
            ],
            
            staylateModel: '',
            price: '',
            cleanStar: 3,
            cleanValue: 3.8,
            
            addInfo: ''
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
@import '../../assets/style/mixin.scss';

.comments-publish-wrapper {
  height: 100%;
  padding: 0 10px 5px 10px;
  .form-item {
    display: flex;
    align-items: center;
    .form-label {
      text-align: left;
      font-size: 14px;
      flex-basis: rem(160);
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
  .form-item2 {
    justify-content: space-between;
    
  }
  .form-column {
    width: rem(330);
    display: flex;
    align-items: center;
    .ivu-select, .ivu-radio-group {
      flex: 1;
    }
    .form-label {
      flex-basis: rem(160);
    }
  }
  .form-rate-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .three-sele {
    display: flex;
    input {
      width: rem(340);
    }
  }
  .column-price {
    .form-label{
      text-align: center;
    }
  }
}
</style>

<template>
<div class="comments-publish-wrapper rent-publish-wrapper">
  <Scroll class="comments-list"  :height="height">

 <!--  <div class="form-item">
    <IInput class="form-item" v-model="form.addr" placeholder="公司地址"></IInput>
    
    
  </div> -->
  <m-search   @select="onSelect"  class="rent-list" />
<!--   <div class="form-item">
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
  </div> -->
  <div class="form-item">
    <IInput class="form-item" v-bind:class="{ err: ismailErr}"  v-model="form.email" placeholder="邮箱" @on-blur="checkMail()" @on-change="() => {ismailErr = false}"></IInput>
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
      <m-select :selectList="form.hasPetList" :flag="0" />
    </div>
    <div class="form-column">
      <span class="form-label">是否熬夜</span>
        <m-select :selectList="form.staylateList"  :flag="1" />
    </div>
  </div>
  <div class="form-item">
    <span class="form-label">洁净程度</span>
    <Rate show-text allow-half v-model="is_clean"></Rate>
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
    <IInput class="form-item" v-model="form.discription" type="textarea" :autosize="{minRows: 4,maxRows: 8}" placeholder="描述信息"></IInput>
  </div>

  <div class="button-group">
    <m-button :type="4" class="button-reset" @click="onReset"/>
    <m-button :type="6" class="button-publish" @click="onPublish" />
  </div>

  </Scroll>

  
</div>
</template>

<script>
import api from '@/api';
import { mapState, mapMutations } from 'vuex';
import { bus } from '@/bus';

export default {
  data () {
    return {
      isShow: false,
      height:0,
      goWorkWays: ['走路', '公交', '地铁', '骑车', '小车'],
      form: {
        cid: '',
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
                label: '否'
            },
            {
                value: '1',
                label: '计划/养'
            },
            {
                value: '2',
                label: '看情况'
            }
        ],
        adopt_pet: '',
        staylateList: [
            {
                value: '0',
                label: '从不'
            },
            {
                value: '1',
                label: '极少'
            },
            {
                value: '2',
                label: '有时'
            },
            {
                value: '3',
                label: '经常'
            },
            {
                value: '4',
                label: '总是'
            }
        ],
        sleep_at: ''
       },
       is_clean: 0,
       ismailErr: false
    }
  },
  
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);

    bus.$on('receivePet', this.handelPet);
    bus.$on('receiveSleep', this.handelSleep);
    bus.$on('select', this.handelSearch)
    
    
    // this.onPublish();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      const dom = document.documentElement || document.body;
      const clientHeight = dom.clientHeight;
      this.height = clientHeight - 93;
      console.log(clientHeight, this.height);
    },
    onDropdownClick() {
      console.log(1);
      this.isShow = true;
      console.log(this.isShow);
    },
    onSelect(item) {
      this.form.way = item;
      this.isShow = false;
    },
    handelSearch(item) {
      this.form.cid = item.id
      console.log(item)
    },
    onReset() {
      for (const key of Object.keys(this.form)) {
        this.form[key] = '';
      }
    },
    checkMail() {
      this.ismailErr = !ismail(this.form.email);
    },
    handelPet(item) {
      this.form.adopt_pet = item.value;
    },
    handelSleep(item) {
      this.form.sleep_at = item.value;
    },
    onstayLate(v) {
      console.log(v);
    },
    async onPublish() {
      try {
        this.loading = true;
        const params = {
          contacts: 0,
          price_low: this.form.priceMin,
          price_high: this.form.priceMax,
          is_clean: this.is_clean,
          adopt_pet: this.form.adopt_pet,
          sleep_at: this.form.sleep_at,
          hobby: this.form.hobby,
          publish_at: new Date(),
          discription: this.form.discription,
          remark: ''
        };

        const res = await api.publishRent(params);
        console.log(res)
        if (res.status === 200) {
          this.reachEnd = true;
          // this.$router.push('/rent');
          
        }
      console.log(params)
        
      } catch (err) {

      } finally {
        this.loading = false;

      }
      
    }

    
  }
}

// 校验
function ismail(mail){  
  var filter = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;  
  if (filter.test(mail)) {  
    console.log(mail)
      return true;   
  } else {  
    console.log(mail, 'false')
      return false;  
  }   
}  
</script>

<style lang='scss' scoped>
@import '../../assets/style/mixin.scss';
@import '../../assets/style/comments-publish.scss';

</style>

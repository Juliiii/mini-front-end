<template>
<div class="edit-wrapper">
  <div class="edit-avatar">
    <img class="personal-avatar" src="../../assets/img/11.jpg" alt="">
    <div class="button-reauth-wrapper">
      <Button :type="9" />
    </div>
  </div>
  <div class="comments-publish-wrapper personal-edit-wrapper">
    <div class="form-item">
      <span class="form-label">名字:</span>
      <IInput class="form-item" v-model="form.name" placeholder="例如：刘居说"></IInput>
    </div>
    <div class="form-item">
      <span class="form-label">公司</span>
      <IInput class="form-item" v-model="form.work" placeholder="例如：腾讯科技有限公司"></IInput>
    </div>
    <div class="form-item">
      <span class="form-label">年龄</span>
      <IInput class="form-item" v-model="form.sex" placeholder="例如: 24岁"></IInput>
    </div>
    <div class="form-item">
      <span class="form-label">性别</span>
      <RadioGroup v-model="form.age">
        <Radio label="男"></Radio>
        <Radio label="女"></Radio>
      </RadioGroup>
    </div>
    <div class="form-item">
      <span class="form-label">邮件</span>
      <IInput class="form-item" v-model="form.email" placeholder="例如：liujushuo@tencent.com"></IInput>
    </div>
    <div class="form-item">
      <span class="form-label">手机</span>
      <IInput class="form-item" v-model="form.phone" placeholder="例如：15119665392"></IInput>
    </div>
    <div class="form-item">
      <span class="form-label">爱好</span>
      <IInput class="form-item" v-model="form.desc" type="textarea" :autosize="{minRows: 2,maxRows: 4}" placeholder="例如：#爱宠物#爱做饭#爱打扫"></IInput>
    </div>
    <div class="form-item">
      <span class="form-label">养宠物</span>
      <RadioGroup v-model="form.pet">
        <Radio label="会"></Radio>
        <Radio label="不会"></Radio>
        <Radio label="看情况"></Radio>
      </RadioGroup>
    </div>
    <div class="form-item">
      <span class="form-label">熬夜</span>
      <RadioGroup v-model="form.overnight">
        <Radio label="经常"></Radio>
        <Radio label="偶尔"></Radio>
        <Radio label="从不"></Radio>
      </RadioGroup>
    </div>
    <div class="form-item">
      <span class="form-label">洁净程度</span>
      <RadioGroup v-model="form.overnight">
        <Radio label="爱干净"></Radio>
        <Radio label="比较邋遢"></Radio>
        <Radio label="看心情"></Radio>
      </RadioGroup>
    </div>
    <div class="button-group">
      <m-button :type="4" class="button-reset" @click="onReset"/>
      <m-button :type="7" class="button-publish" />
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        sex: '',
        work: '',
        age: '',
        email: '',
        phone: '',
        desc: '',
      }
    }
  }
};
</script>

<style lang='scss'>
@import "../../assets/style/comments-publish.scss";
@import "../../assets/style/mixin.scss";
@import "../../assets/style/edit.scss";
</style>

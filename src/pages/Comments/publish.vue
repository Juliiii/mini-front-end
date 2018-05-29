<template>
<div class="comments-publish-wrapper">
  <IInput class="form-item" v-model="formValidate.name" placeholder="小区名称"></IInput>
  <Select class="form-item" v-model="formValidate.city" placeholder="上班方式">
      <Option value="onfoot">走路</Option>
      <Option value="bus">公交</Option>
      <Option value="subsway">地铁</Option>
      <Option value="car">小车</Option>
      <Option value="bike">自行车</Option>
  </Select>
  <IInput class="form-item" v-model="formValidate.mail" placeholder="上班耗时"></IInput>
  <div class="form-item form-rate-item">
    <span>周边美食：</span>
    <Rate show-text allow-half v-model="valueCustomText">
    </Rate>
  </div>
  <div class="form-item form-rate-item">
    <span>周边商业区：</span>
    <Rate show-text allow-half v-model="valueCustomText">
    </Rate>
  </div>
  <IInput class="form-item" v-model="formValidate.desc" type="textarea" :autosize="{minRows: 4,maxRows: 8}" placeholder="描述信息"></IInput>
  <div class="button-group">
    <Button :type="4" class="button-reset" />
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
                formValidate: {
                    name: '',
                    mail: '',
                    city: '',
                    gender: '',
                    interest: [],
                    date: '',
                    time: '',
                    desc: ''
                },
                ruleValidate: {
                    name: [
                        { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                    ],
                    mail: [
                        { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                        { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    city: [
                        { required: true, message: 'Please select the city', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    interest: [
                        { required: true, type: 'array', min: 1, message: 'Choose at least one hobby', trigger: 'change' },
                        { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    date: [
                        { required: true, type: 'date', message: 'Please select the date', trigger: 'change' }
                    ],
                    time: [
                        { required: true, type: 'string', message: 'Please select time', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                        { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleReset (name) {
                this.$refs[name].resetFields();
            }
        }
    }
</script>

<style lang='scss' scoped>
.comments-publish-wrapper {
  height: 100%;
  padding: 30px 10px 5px 10px;
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

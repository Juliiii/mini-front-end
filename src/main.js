// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from './axios';
import 'iview/dist/styles/iview.css';
import { Rate, Radio, Checkbox, Button, Icon, Input, Option, Form, Row, Col, FormItem, Select, CheckboxGroup, RadioGroup, TimePicker, DatePicker } from 'iview';

Vue.component('Icon', Icon);
Vue.component('IButton', Button);
Vue.component('IInput', Input);
Vue.component('Option', Option);
Vue.component('Form', Form);
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.component('FormItem', FormItem);
Vue.component('Select', Select);
Vue.component('CheckboxGroup', CheckboxGroup);
Vue.component('RadioGroup', RadioGroup);
Vue.component('TimePicker', TimePicker);
Vue.component('DatePicker', DatePicker);
Vue.component('Radio', Radio);
Vue.component('Rate', Rate);
Vue.component('Checkbox', Checkbox);
Vue.config.productionTip = false;
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

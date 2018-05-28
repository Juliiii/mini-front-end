// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from './axios';
import 'iview/dist/styles/iview.css';
import { Button, Icon } from 'iview';

Vue.component('Icon', Icon);
Vue.component('IButton', Button);
Vue.config.productionTip = false;
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

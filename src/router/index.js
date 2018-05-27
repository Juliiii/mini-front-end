import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // 搜索页面
    {
      path: '/search',
      name: 'Search',
      component: HelloWorld
    },
    // 我要合租页面
    {
      path: '/rent',
      name: 'Rent',
      component: HelloWorld
    },
    // 个人中心页面
    {
      path: '/personal',
      name: 'Personal',
      component: HelloWorld
    },
    // 认证页面
    {
      path: '/auth',
      name: 'Auth',
      component: HelloWorld
    },
    // 评论页面
    {
      path: '/comment',
      name: 'Comment',
      component: HelloWorld
    },
    // 发布租房页面
    {
      path: '/publish',
      name: 'Publish',
      component: HelloWorld
    }
  ]
});

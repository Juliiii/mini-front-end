import Vue from 'vue';
import Router from 'vue-router';
import Comments from '@/pages/Comments';
import Rent from '@/pages/Rent';

import CommentsList from '@/pages/Comments/list';
import CommentsMap from '@/pages/Comments/echarts';
import CommentsPublish from '@/pages/Comments/publish';

import RentList from '@/pages/Rent/list';
import RentPublish from '@/pages/Rent/publish';

import Personal from '@/pages/Personal';
import Edit from '@/pages/Edit';
import Auth from '@/pages/Auth';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/comments',
      name: 'Comments',
      component: Comments,
      children: [
        {
          path: '',
          component: CommentsList
        },
        {
          path: 'publish',
          component: CommentsPublish
        },
        {
          path: 'map',
          component: CommentsMap
        }
      ]
    },
    // 我要合租页面
    {
      path: '/rent',
      name: 'Rent',
      component: Rent,
      children: [{
        path: '',
        component: RentList
      }, {
        path: 'publish',
        component: RentPublish
      }]
    },
    // 个人中心页面
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/auth',
      name: 'Auth',
      component: Auth
    }
  ]
});

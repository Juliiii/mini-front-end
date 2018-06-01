import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Comments from '@/pages/Comments';
import Rent from '@/pages/Rent';

import CommentsList from '@/pages/Comments/list';
import CommentsMap from '@/pages/Comments/echarts';
import CommentsPublish from '@/pages/Comments/publish';

import RentPublish from '@/pages/Rent/publish';

import Personal from '@/pages/Personal';
import Edit from '@/pages/Edit';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/comments',
            name: 'Comments',
            component: Comments,
            children: [{
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
            component: Rent,
            children: [{
                path: 'publish',
                component: RentPublish
            }]
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
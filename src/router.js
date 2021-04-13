import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter({
    routes: [{

        // 菜单
        path: '/menu',
        component: () => import('./pages/menu.vue')

    }, {

        // 表单校验
        path: '/validate',
        component: () => import('./pages/validate.vue')

    }, {

        // 插槽
        path: '/v-slot',
        component: () => import('./pages/v-slot/index.vue')

    }, {

        // 事件测试
        path: '/emit',
        component: () => import('./pages/emit/index.vue')

    }, {

        // 默认路由
        path: "/*",
        redirect: 'menu'

    }]
});

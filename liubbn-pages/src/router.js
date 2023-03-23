import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let rt = new Router({
    routes: [
        {
            path: '/',
            name: 'layout',
            meta: {
                title: '主页'
            },
            component: () => import('./pages/layout.vue'),
            redirect: {
                name: 'index'
            },
            children: [
                {
                    path: '/index',
                    alias: '/home',
                    name: 'index',
                    component: () => import('./pages/template/home.vue')
                },
                {
                    path: '/gallery',
                    name: 'gallery',
                    component: () => import('./pages/template/gallery.vue')
                },
            ]
        }
    ]
})


export default rt
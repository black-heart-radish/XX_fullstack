import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import Home1 from '../views/Home1'
import Home2 from '../views/Home2'
import Detail from '@/views/Detail'
import { nextTick } from 'vue/types/umd'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
            children: [{
                    path: '/',
                    component: Home1
                },
                {
                    path: '/home1',
                    component: Home1
                },
                {
                    path: '/home2',
                    component: Home2
                }
            ]
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/detail:username',
            name: 'Detail',
            component: Detail, 
            // redirect: '/login'
            alias: '/hello'
        }
    ]
})
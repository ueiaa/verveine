//创建一个路由器，并暴露出去

//step1:引入createRouter
import { createRouter, createWebHistory } from 'vue-router'
//引入可能要呈现的组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'


//step2:创建路由器
const router = createRouter({
    history:createWebHistory(),//路由器的工作模式
    routes:[
        {
            name:'shouye',
            path:'/home',
            component:Home
        },
        {
            name:'xinwen',
            path:'/news',
            component:News
        },
        {
            name:'guanyu',
            path:'/about',
            component:About
        }
    ]
})

export default router
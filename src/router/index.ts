//创建一个路由器，并暴露出去

//step1:引入createRouter
import { createRouter, createWebHistory } from 'vue-router'
//引入可能要呈现的组件
import Home from '@/pages/Home.vue'
import News from '@/pages/News.vue'
import About from '@/pages/About.vue'
import Detail from '@/pages/Detail.vue'

//组件通信使用
import Props from '@/pages/01_props/Father.vue'
import Event from '@/pages/02_custom-event/Father.vue'
import Bus from '@/pages/03_mitt/Father.vue'
import Model from '@/pages/04_v-model/Father.vue'
import AttrsListeners from '@/pages/05_$attrs/Father.vue'
import RefchildrenParent from '@/pages/06_$refs-$parent/Father.vue'
import ProvideInject from '@/pages/07_provide-inject/Father.vue'
import Pinia from '@/pages/08_pinia/Father.vue'
import Slot from '@/pages/09_slot/Father.vue'


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
            component:News,
            children:[
                // query写法
                // {
                //     name:'xiangqing',
                //     path:'detail',  //子级路径不用斜杠
                //     component:Detail
                // }
                // params写法
                {
                    name:'xiangqing',
                    //path:'detail/:id/:title/:content'  //传递params参数时，需要提前在规则中占位
                    path:'detail', //传递query参数时不能写占位
                    component:Detail,

                    //第一种（布尔写法）：将路由收到的所有params参数作为props传给路由组件
                    //props:true  //路由规则的props配置  //这样的话news页面的:to要用params

                    //第二种（函数写法）：可以自己决定将什么作为props给路由组件
                    props(route){
                        return route.query  //这样的话news页面的:to要用query
                    }

                    //第三种（对象写法）：可以自己决定将什么作为props给路由组件
                    //props:{a:100,b:200,c:300}
                }
            ]
        },
        {
            name:'guanyu',
            path:'/about',
            component:About
        },
        // 重定向
        {
            path:'/',
            redirect:'/home'
        },


        //组件通信使用
        {
            path:'/props',
            component:Props
        },
        {
            path:'/event',
            component:Event
        },
        {
            path:'/mitt',
            component:Bus
        },
        {
            path:'/model',
            component:Model
        },
        {
            path:'/attrs',
            component:AttrsListeners
        },
        {
            path:'/props',
            component:Props
        },
    ]
})

export default router
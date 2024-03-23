import {createApp} from 'vue'

import App from './App.vue'

import router from './router'

import {createPinia} from 'pinia'

//创建应用
const app = createApp(App)
//创建pinia
const pinia = createPinia()

//使用路由器
app.use(router)
//安装pinia
app.use(pinia)

//挂载整个应用到app容器中
app.mount('#app')
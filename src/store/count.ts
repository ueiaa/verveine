import {defineStore} from 'pinia'

export const useCountStore = defineStore('count',{
    //actions里面放着的是一个一个的方法，用于响应组件中的“动作”
    actions:{
        increment(value){
            //修改数据
            if(value < 10){
                this.sum += value
            }
        }
    },
    //真正存储数据的地方
    state(){
        return {
            sum:6,
            name:'zhangsan',
            age:18
        }
    }
})
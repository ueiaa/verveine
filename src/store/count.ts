import {defineStore} from 'pinia'

export const useCountStore = defineStore('count',{
    //actions里面放着的是一个一个的方法，用于响应组件中的“动作”
    actions:{
        increment(value: number){
            //修改数据
            if(value < 10){
                //操作countStore中的sum
                this.sum += value
            }
        }
    },
    //真正存储数据的地方（状态）
    state(){
        return {
            sum:6,
            name:'zhangsan',
            age:18
        }
    },
    //计算
    getters:{
        bigSum:state => state.sum*10,
        //upperName(state){
            //return state.name.toUpperCase()
        //} 
        upperName():string{
            return this.name.toUpperCase() 
        }
    }
})
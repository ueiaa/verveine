import {defineStore} from 'pinia'
import axios from 'axios'
import { nanoid } from 'nanoid'


//选项式写法
/* export const useTalkStore = defineStore('talk',{
    actions:{
        async getATalk(){
            //发请求
            //let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            //连续解构赋值+重命名写法
            let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
            //把请求回来的字符串包装成一个对象
            let obj = {id:nanoid(),title}
            console.log(obj)
            this.talkList.unshift(obj)
        }
    },
    //真正存储数据的地方
    state(){
        return {
            /* talkList:[
                {id:'akhdaui01',title:'ttttt01'},
                {id:'akhdaui02',title:'ttttt02'},
                {id:'akhdaui03',title:'ttttt03'}
            ] 
            talkList:JSON.parse(localStorage.getItem('talkList') as string) || []
        }
    },
    getters:{}
}) */

//组合式写法
import {reactive} from 'vue'
export const useTalkStore = defineStore('talk',()=>{
    const talkList = reactive(
        JSON.parse(localStorage.getItem('talkList') as string) || []
    )
    async function getATalk(){
        //发请求
        //let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        //连续解构赋值+重命名写法
        let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        //把请求回来的字符串包装成一个对象
        let obj = {id:nanoid(),title}
        console.log(obj)
        talkList.unshift(obj)
    }
    //！交出去
    return {talkList,getATalk}
})
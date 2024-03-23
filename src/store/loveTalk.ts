import {defineStore} from 'pinia'

export const useTalkStore = defineStore('talk',{
    //真正存储数据的地方
    state(){
        return {
            talkList:[
                {id:'akhdaui01',title:'ttttt01'},
                {id:'akhdaui02',title:'ttttt02'},
                {id:'akhdaui03',title:'ttttt03'}
            ]
        }
    }
})
<template>
    <div class="talk">
        <button @click="getTalk">获取一句土味情话</button>
        <ul>
            <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
        </ul>
    </div>
</template>

<script lang="ts" setup name="LoveTalk">
    import {reactive} from 'vue';
    import axios from 'axios';
    import {nanoid} from 'nanoid';

    
    let talkList = reactive([
        {id:'akhdaui01',title:'ttttt01'},
        {id:'akhdaui02',title:'ttttt02'},
        {id:'akhdaui03',title:'ttttt03'}
    ])

    async function getTalk(){
        //发请求
        //let result = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        //连续解构赋值+重命名写法
        let {data:{content:title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
        //把请求回来的字符串包装成一个对象
        let obj = {id:nanoid(),title}
        console.log(obj)
        talkList.unshift(obj)
    }
</script>

<style>
.talk {
    background-color: pink;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}

</style>
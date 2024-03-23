<template>
    <div class="count">
        <h2>当前求和为：{{ countStore.sum }}</h2>
        <h3>姓名：{{ countStore.name }}</h3>
        <h3>年龄：{{ countStore.age }}</h3>
        <select v-model.number="n" name="" id=""> <!-- v-model.number 是把n转成数字 -->
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>

        </select>
        <button @click="add">加</button>
        <button @click="minus">减</button>
    </div>
</template>

<script lang="ts" setup name="Count">
    import { ref } from 'vue';
    //引入useCountStore
    import {useCountStore} from '@/store/count'

    //使用useCountStore，得到一个专门保存count相关的store
    const countStore = useCountStore()

    //以下两种方式都可以拿到state中的数据
    //console.log('@@@',countStore.sum)  //因为countStore是reactive对象，不用.value即可拿到sum
    //console.log('@@@',countStore.$state.sum)  

    let n = ref(1)  //用户选择的数字

    function add(){
        //第一种：pinia可以直接操作存储的数据
        //countStore.sum += 1
        //第二种:批量变更
        countStore.$patch({
            //sum:999,
            name:'lisi',
            age:20
        })
        //第三种
        countStore.increment(n.value)
    }
    function minus(){
        
    }

    
</script>

<style>
.count {
    background-color: skyblue;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px;
}
select,button{
    margin: 0 5px;
    height: 25px;
}

</style>
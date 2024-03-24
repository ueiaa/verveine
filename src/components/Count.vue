<template>
    <div class="count">
        <h2>当前求和为：{{ countStore.sum }}，放大十倍后：{{ countStore.bigSum }}</h2>
        <h3>姓名：{{ countStore.name }}，大写：{{ upperName }}</h3>
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
    import { storeToRefs } from 'pinia';

    //使用useCountStore，得到一个专门保存count相关的store
    const countStore = useCountStore()

    //借助storeToRefs将store中的数据转为ref对象，方便在模板中使用
    //storeToRefs只会关注store中的数据，不会对方法进行ref包裹
    const {sum, name, age,bigSum,upperName} = storeToRefs(countStore)

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
        //第三种：借助actions修改（在对应的ts文件中的actions编写业务逻辑）
        countStore.increment(n.value)
    }
    function minus(){
        countStore.sum -= n.value
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
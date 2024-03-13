<template>
<!-- html -->
    <div class="person">
        <h2>情况三：监视【reactive】定义的【对象类型】数据</h2>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改person</button>
    </div>
</template>

<!-- <script lang="ts">
// JS或TS
    export default{
        name:'Person',
    }
</script> -->

<script lang="ts" setup name="Person">
    import {ref, watch} from 'vue'
    import {reactive,toRefs,toRef} from 'vue'

    let person = reactive({
        name:'张三',
        age:18
    })

    function changeName(){
        person.name += '~'
    }

    function changeAge(){
        person.age += 2
    }

    function changePerson(){
        Object.assign(person,{name:'李四',age:30})
    }

    //监视
    //情况三：监视【reactive】定义的【对象类型】数据
    //默认开启深度监视（无法关闭）
    watch(person,(newValue,oldValue)=>{
        console.log('person变化了',newValue,oldValue)
    },{deep:true,immediate:true})

</script>

<style>
/* 样式 */
.person{
    background-color: skyblue;
    border-radius: 20px;
    font-size: large;
}
button{
    border-radius: 10px;
    size: 50px 30px;
}
</style>
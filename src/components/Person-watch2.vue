<template>
<!-- html -->
    <div class="person">
        <h2>情况二：监视【Ref】定义的【对象类型】数据</h2>
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

    let person = ref({
        name:'张三',
        age:18
    })

    function changeName(){
        person.value.name += '~'
    }

    function changeAge(){
        person.value.age += 2
    }

    function changePerson(){
        person.value = {name:'李四',age:30}
    }

    //监视，情况二：监视【Ref】定义的【对象类型】数据，监视的是对象的地址值，如果想监视对象内部属性的变化，需要手动开启深度监视
    //watch的第一个参数：被监视的数据
    //watch的第二个参数：监视的回调
    //watch的第三个参数：配置对象（deep、immediate等）    
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
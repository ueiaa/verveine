<template>
<!-- html -->
    <div class="person">
        <h2>name:{{ name }}</h2>
        <h2>age:{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">show tel</button>

        <h2>一辆{{ car.brand }}车，价值{{ car.price }}</h2>
    </div>
</template>

<!-- <script lang="ts">
// JS或TS
    export default{
        name:'Person',
    }
</script> -->

<script lang="ts" setup name="Person">
    import {ref} from 'vue'
    //name和age是一个RedImpl的实例对象，简称ref对象，它们的value属性是响应式的
    let name = ref('张三')
    let age = ref(18)
    let tel = '13800000000'

    function changeName(){
        //JS中操作ref对象需要.value
        name.value = 'zhangsan'
    }
    function changeAge(){
        age.value = 20
    }
    function showTel(){
        alert(tel)
    }
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
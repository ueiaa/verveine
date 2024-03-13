<template>
<!-- html -->
    <div class="person">
        <h2>情况四：监视【ref】或【reactive】定义的【对象类型】数据中的某个属性</h2>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <h2>汽车：{{ person.car.c1 }}、{{ person.car.c2 }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changeCar1">修改第一台车</button>
        <button @click="changeCar2">修改第二台车</button>
        <button @click="changeCar">修改车</button>
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
        age:18,
        car:{
            c1:'benz',
            c2:'bmw'
        }
    })

    function changeName(){
        person.name += '~'
    }

    function changeAge(){
        person.age += 2
    }

    function changeCar1(){
        person.car.c1 = 'auto'
    }
    function changeCar2(){
        person.car.c2 = 'aima'
    }
    function changeCar(){
        person.car = {c1:'yadi',c2:'tailing'}
    }

    //监视
    //情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
    watch(()=> person.name,(newValue,oldValue)=>{
        console.log('person.name变化了',newValue,oldValue)
    })

    //这样只能监视car1，car2单独的变化，整个car变化监视不到
    watch(person.car,(newValue,oldValue)=>{
        console.log('person.car变化了',newValue,oldValue)
    })
    //写成函数式才可以监视整个car变化
    watch(()=>person.car,(newValue,oldValue)=>{
        console.log('person.car变化了',newValue,oldValue)
    })
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
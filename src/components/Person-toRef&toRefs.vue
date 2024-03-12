<template>
<!-- html -->
    <div class="person">
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄：{{ person.age }}</h2>
        <button @click = "changeName">修改姓名</button>
        <button @click = "changeAge">修改年龄</button>
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
    import {reactive,toRefs,toRef} from 'vue'

    //定义
    let person = reactive({name:'张三',age:18})
    
    //解构
    let {name,age} = toRefs(person)
    //toRefs将由reactive包裹的对象变成ref包裹的，批量

    let nl = toRef(person,'age')
    //toRef解构一个单独的属性

    function changeName(){
        name.value += '~'
    }
    function changeAge(){
        age.value += 2
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
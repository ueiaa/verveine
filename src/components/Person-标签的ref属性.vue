<template>
<!-- html -->
    <div class="person">
        <h1>China</h1>
        <h2 ref="title2">Beijing</h2>
        <h3>Gugong</h3>
        <button @click="showLog">输出h2这个元素</button>
    </div>
</template>

<!-- <script lang="ts">
// JS或TS
    export default{
        name:'Person',
    }
</script> -->

<script lang="ts" setup name="Person">
    import {ref, watch, watchEffect, defineExpose} from 'vue'
    import {reactive,toRefs,toRef} from 'vue'

    //创建一个title2，用于存储ref标记的内容
    let title2 = ref()
    
    //要传给父组件的内容
    //let name = ref('张三')
    //let age = ref(18)


    function showLog(){
        console.log(title2.value)
    }
    

    //使用defineExpose将组件中的数据交给外部
    //defineExpose({name,age})
    
</script>

<style scoped>
/* scoped 只对当前页面的内容起作用 */
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
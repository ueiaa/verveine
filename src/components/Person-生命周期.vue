<template>
<!-- html -->
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点击sum+1</button>
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
    import {onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted} from 'vue'

    let sum = ref(0)

    function add(){
        sum.value += 1
    }

    //生命周期
    //创建
    console.log('创建')

    //挂载
    onBeforeMount(()=>{
        console.log('挂载前')
    })
    //挂载完毕
    onMounted(()=>{
        console.log('子--挂载完毕')
    })

    //更新前
    onBeforeUpdate(()=>{
        console.log('更新前')
    })
    //更新完毕
    onUpdated(()=>{
        console.log('更新完毕')
    })

    //卸载前
    onBeforeUnmount(()=>{
        console.log('卸载前')
    })
    //卸载完毕
    onUnmounted(()=>{
        console.log('卸载完毕')
    })
    
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
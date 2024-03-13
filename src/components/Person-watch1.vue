<template>
<!-- html -->
    <div class="person">
        <h2>情况一：监视【Ref】定义的【基本类型】数据</h2>
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="changeSum">点击sum+1</button>
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

    let sum = ref(0)

    function changeSum(){
        sum.value += 1
    }

    //监视
    const stopWatch = watch(sum,(newValue,oldValue)=>{
        console.log('sum变化',newValue,oldValue)
        if(newValue >= 10){
            stopWatch()
        }
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
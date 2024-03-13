<template>
<!-- html -->
    <div class="person">
        <!-- 当水温达到60的度时或者当水位达到80m时，给服务器发送请求 -->
        <h2>当前水温为：{{ temp }}℃</h2>
        <h2>当前水位为：{{ height }}m</h2>
        <button @click="changeTemp">水温值加一</button>
        <button @click="changeHeight">水位值加一</button>
    </div>
</template>

<!-- <script lang="ts">
// JS或TS
    export default{
        name:'Person',
    }
</script> -->

<script lang="ts" setup name="Person">
    import {ref, watch, watchEffect} from 'vue'
    import {reactive,toRefs,toRef} from 'vue'

    let temp = ref(10)
    let height = ref(10)

    function changeTemp(){
        temp.value += 10
    }
    function changeHeight(){
        height.value += 10
    }

    //监视
    
    // watch([temp,height],(value)=>{
    //     //解构
    //     let [newTemp,newHeight] = value
    //     if(newTemp >= 60 || newHeight >= 80){
    //         console.log('给服务器发请求')
    //     }
    // })

    watchEffect(()=>{
        if(temp.value >= 60 || height.value >= 80){
            console.log('给服务器发请求')
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
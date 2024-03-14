<template>
<!-- html -->
    <div class="person">
        <h2>当前求和为：{{ sum }}</h2>
        <button @click="add">点击sum+1</button>
        <hr>
        <img v-for="(dog,index) in dogList" :src="dog" :key="index">
        <br>
        <button @click="getDog">dog+1</button>
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

    import useSum from '@/hooks/useSum';
    import useDog from '@/hooks/useDog';

    const {sum,add} = useSum()
    const {dogList,getDog} = useDog()
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
img{
    height: 100px;
    margin-right: 10px;
}
</style>
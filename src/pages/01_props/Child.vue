<template>
    <div class="child">
        <h3>子组件</h3>
        <h4>子的玩具：{{ toy }}</h4>
        <!-- 展示父组件传来的值 -->
        <h4>父给子的车：{{ car }}</h4>
        <button @click="getToy(toy)">把玩具给父亲</button>
    </div>
</template>
<script setup lang="ts" name="Child">
    import { ref } from 'vue';

    //数据
    const toy = ref('atm')
    
    //接收父组件传来的值
    defineProps(['car','getToy'])
</script>

<style scoped>
.child{
    background-color:skyblue;
    padding:10px;
    box-shadow:0 0 10px black;
    border-radius: 10px;
}
</style>
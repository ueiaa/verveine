<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>父的车：{{ car }}</h4>
        <!-- 展示子组件传来的值 -->
        <h4 v-show="toy">子给父的玩具：{{ toy }}</h4>
        <Child :car="car" :getToy="getToy"/>
    </div>
</template>
<script setup lang="ts" name="Father">
    import Child from './Child.vue';
    import {ref} from 'vue'

    //数据
    const car = ref('benz')
    const toy = ref()

    //方法 用来作为工具给子装数据
    function getToy(value:string){
        toy.value = value
    }
</script>
<style scoped>
.father{
    background-color:rgb(165,164,164);
    padding: 20px;
    border-radius: 10px;
}
</style>
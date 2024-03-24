<template>
    <div class="father">
        <h3>父组件</h3>
        <h4 v-show="toy">子给的玩具：{{ toy }}</h4>
        <!-- 给子组件绑定事件 -->
        <Child @sendToy="getToy"/>
    </div>
</template>
<script setup lang="ts" name="Father">
    import Child from './Child.vue';
    import {ref} from 'vue'

    let toy = ref('')

    //用于保存传递过来的数据
    function getToy(value:string){
        console.log('getToy',value)
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
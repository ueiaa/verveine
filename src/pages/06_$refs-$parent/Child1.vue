<template>
    <div class="child1">
        <h3>子组件1</h3>
        <h4>玩具：{{ toy }}</h4>
        <h4>书籍：{{ book }}本</h4>
        <button @click="minusHouse($parent)">减少父亲的一套house</button>
    </div>
</template>
<script setup lang="ts" name="Child1">
    import { ref } from 'vue';
    
    let toy = ref('atm')
    let book = ref(3)

    function minusHouse(parent:any){
        parent.house -= 1
    }

    //把数据交给外部
    defineExpose({toy,book})
</script>

<style scoped>
.child1{
    background-color:skyblue;
    padding:10px;
    box-shadow:0 0 10px black;
    border-radius: 10px;
}
</style>
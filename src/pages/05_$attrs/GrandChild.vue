<template>
    <div class="grand-child">
        <h3>孙组件</h3>
        <h4>{{ a }}</h4>
        <h4>{{ b }}</h4>
        <h4>{{ c }}</h4>
        <h4>{{ d }}</h4>
        <h4>{{ x }}</h4>
        <h4>{{ y }}</h4>
        <button @click="updateA(6)">点击将父组件的a更新</button>
    </div>
</template>
<script setup lang="ts" name="GrandChild">
    defineProps(['a','b','c','d','x','y','updateA'])
</script>

<style scoped>
.grand-child{
    background-color:#58bb89;
    padding:10px;
    box-shadow:0 0 10px black;
    border-radius: 10px;
}
</style>
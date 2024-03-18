<template>
    <div class="about">
        <h2>关于</h2>
    </div>
</template>

<script setup lang="ts" name="About">
    import { onMounted,onUnmounted } from 'vue';

    onMounted(()=>{
        console.log('About组件挂载')
    })
    onUnmounted(()=>{
        console.log('About组件卸载')
    })
</script>

<style scoped>
.home {
    display: flex;
    justify-content: center;align-items: center;
    height: 100%;
}
</style>
<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">
                <a href="#">{{news.title}}</a>
            </li>
        </ul>
        <!-- 展示区 -->
        <div class="news-content">
            
        </div>
    </div>
</template>

<script setup lang="ts" name="News">
    import {reactive} from 'vue'

    const newsList = reactive([
        {id:'01',title:'aa',content:'a01'},
        {id:'02',title:'bb',content:'b01'},
        {id:'03',title:'cc',content:'c03'},
        {id:'04',title:'dd',content:'d04'}
    ])
</script>

<style scoped>
.home {
    display: flex;
    justify-content: center;align-items: center;
    height: 100%;
}
</style>
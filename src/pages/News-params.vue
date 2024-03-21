<template>
    <div class="news">
        <!-- 导航区 -->
        <ul>
            <li v-for="news in newsList" :key="news.id">
               
                <RouterLink 
                    :to="{
                        name:'xiangqing',   //只能用name
                        params:{
                            id:news.id,
                            title:news.title,
                            content:news.content
                        }
                    }"
                >
                    {{news.title}}
                </RouterLink>
                
            </li>
        </ul>
        <!-- 展示区 -->
        <div class="news-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts" name="News">
    import {reactive} from 'vue'
    import { RouterView,RouterLink } from 'vue-router';

    const newsList = reactive([
        {id:'01',title:'aa',content:'a01'},
        {id:'02',title:'bb',content:'b02'},
        {id:'03',title:'cc',content:'c03'},
        {id:'04',title:'dd',content:'d04'}
    ])
</script>

<style scoped>
.news {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    height: 100%;
}
.news ul {
    margin-top: 30px;
    /* list-style: none; */
    padding-left: 10px;
}
.news li::marker{
    color: #64967e;
}
.news li>a {
    font-size: 18px;
    line-height: 40px;
    text-decoration: none;
    color: #64967e;
    text-shadow: 0 0 1px rgb(0, 84, 0);
}
</style>
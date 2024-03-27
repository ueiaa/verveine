<template>
    <div class="app">
        <h1>
            Vue3组件间通信
        </h1>
        <div class="row">
            <div class="col-xs-3 col-md-3 col-lg-3 col-x1-3">
                <!-- 导航区 -->
                <router-link active-class="active" class="list-group-item" to="/props">1.props</router-link>
                <router-link active-class="active" class="list-group-item" to="/event">2.event</router-link>
                <router-link active-class="active" class="list-group-item" to="/mitt">3.mitt</router-link>
                <router-link active-class="active" class="list-group-item" to="/model">4.v-model</router-link>
            </div>
            <div class="co1-xs-9 col-md-9 co1-1g-9 col-x1-9">
                <div class="panel-body">
                    <!-- 占位一个展示区 -->
                    <router-view></router-view>
                </div>
            </div>
            <div class="line"></div>
            
        </div>
    </div>
</template>

<script lang="ts" setup name="App">
    import Canvas from './components/Canvas.vue'
</script>

<style>

</style>
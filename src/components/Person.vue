<template>
<!-- html -->
    <div class="person">
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}</h2>
        <button @click="changePrice">修改汽车价格</button>
        <br>
        <h2>游戏列表</h2>
        <ul>
            <li v-for="g in games" :key="g.id">{{g.name}}</li>
        </ul>
        <button @click="changeFirstName">修改第一个游戏的名字</button>
    </div>
</template>

<!-- <script lang="ts">
// JS或TS
    export default{
        name:'Person',
    }
</script> -->

<script lang="ts" setup name="Person">
    
    import {reactive} from 'vue'
    let car = reactive({brand:'benz', price:100})
    let games = reactive([
        {id:'a01',name:'01'},
        {id:'a02',name:'02'},
        {id:'a03',name:'03'},
    ])

    function changePrice(){
        car.price += 20
    }
    function changeFirstName(){
        games[0].name = 'b01'
    }
</script>

<style>
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
</style>
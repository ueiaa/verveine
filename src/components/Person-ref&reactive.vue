<template>
<!-- html -->
    <div class="person">
        <h2>一辆{{ car.brand }}车，价值{{ car.price }}</h2>
        <button @click="changePrice">修改汽车价格</button>
        <br>
        <button @click="changeCar">修改汽车</button>
    </div>
</template>

<!-- <script lang="ts">
// JS或TS
    export default{
        name:'Person',
    }
</script> -->

<script lang="ts" setup name="Person">
    import {ref} from 'vue'
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
    function changeCar(){
        //car被reactive包裹，需要使用Object.assign
        Object.assign(car,{brand:'auto', price:10})
        //car被ref包裹，可以直接整个改
        //car.value = {brand:'auto', price:10}
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
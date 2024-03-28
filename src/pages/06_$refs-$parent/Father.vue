<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>house:{{ house }}</h4>
        <button @click="changeToy">修改子组件1的玩具</button>
        <button @click="getAllChild($refs)">让所有孩子的书变多</button>
        <Child1 ref="c1"/>
        <Child2 ref="c2"/>
    </div>
</template>
<script setup lang="ts" name="Father">
    import Child1 from './Child1.vue'
    import Child2 from './Child2.vue'
    import {ref} from 'vue'

    let c1 = ref()
    let c2 = ref()
    let house = ref(4)

    function changeToy(){
        c1.value.toy = 'piggy'
    }

    function getAllChild(refs:{[key:string]:any}){  //或者直接(refs:any)
        for(let key in refs){
            refs[key].book += 3
        }
    }

    defineExpose({house})

</script>
<style scoped>
.father{
    background-color:rgb(165,164,164);
    padding: 20px;
    border-radius: 10px;
}
</style>
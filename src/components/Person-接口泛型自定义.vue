<template>
<!-- html -->
    <div class="person">
        
    </div>
</template>

<!-- <script lang="ts">
// JS或TS
    export default{
        name:'Person',
    }
</script> -->

<script lang="ts" setup name="Person">
    import {ref, watch, watchEffect, defineExpose} from 'vue'
    import {reactive,toRefs,toRef} from 'vue'

    // import { type PersonInter } from '@/types'

    // let person:PersonInter = {id:'a01',name:'张三',age:18}

    // let personList:Array<PersonInter> = [
    //     {id:'a01',name:'张三',age:18},
    //     {id:'a02',name:'李四',age:18},
    //     {id:'a03',name:'王五',age:18},
        
    // ]
    
</script>

<style scoped>
/* scoped 只对当前页面的内容起作用 */
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
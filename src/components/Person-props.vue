<template>
<!-- html -->
    <div class="person">
        <ul>
            <!-- 注意要加key -->
            <!-- <li v-for="i in list" key="i"> 
                {{ i.name }}--{{ i.age }}
            </li> -->
        </ul>
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

    //import { defineProps} from 'vue'
    //import {type Persons} from '@/types'

    //接受父组件传来的内容
    //defineProps(['a'])

    //接受a，同时将内容保存起来
    //let x = defineProps(['a','list'])

    //接收list+限制类型
    //defineProps<{list:Persons}>()

    //接收list+限制类型+限制必要性+指定默认值
    // withDefaults(defineProps<{list?:Persons}>(),{
    //     list:()=>[{id:'b01',name:'赵六',age:10}]
    // })
    
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
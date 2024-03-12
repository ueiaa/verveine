<template>
<!-- html -->
    <div class="person">
        姓：<input type="text" v-model="firstName">
        名：<input type="text" v-model="lastName">
        全名：<span>{{ firstName }}{{ lastName }}</span>
        <button @click="changeFullName">全名改为：lisi</button>
    </div>
</template>

<!-- <script lang="ts">
// JS或TS
    export default{
        name:'Person',
    }
</script> -->

<script lang="ts" setup name="Person">
    import {computed, ref} from 'vue'
    import {reactive,toRefs,toRef} from 'vue'

    let firstName = ref('张')
    let lastName = ref('三')
    // 计算属性——只读取，不修改
    /* let fullName = computed(()=>{
        return firstName.value + '-' + lastName.value
    }) */


    // 计算属性——既读取又修改
    let fullName = computed({
        // 读取
        get(){
        return firstName.value + '-' + lastName.value
        },
        // 修改
        set(val){
        console.log('有人修改了fullName',val)
        firstName.value = val.split('-')[0]
        lastName.value = val.split('-')[1]
        }
    })

    function changeFullName(){
        fullName.value = 'li-si'
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
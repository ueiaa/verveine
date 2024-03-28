<template>
    <div class="father">
        <h3>父组件</h3>
        <h4>{{ username }}</h4>
        <h4>{{ password }}</h4>
        <!-- v-model用在html标签上 -->
        <!-- <input type="text" v-model="username"> -->
        <!-- v-model的底层实现 -->
        <!-- <input type="text" :value="username" @input="username = (<HTMLInputElement>$event.target).value"> -->
            <!-- (<HTMLInputElement>$event.target)断言$event.target为html里面输入类型的元素 -->

        <!-- v-model用在组件标签上 -->
        <AtwwInput v-model:usn="username" v-model:psw="password"/>
        <!-- 本质 实现 -->
        <!-- <AtwwInput :modelValue="username" @update:modelValue="username = $event"/> -->
        <!-- :modelValue是要传递到子组件的内容  @update:modelValue是事件名 -->
    </div>
</template>
<script setup lang="ts" name="Father">
    import {ref} from 'vue'
    import AtwwInput from './AtwwInput.vue'
    let username = ref('zhangsan')
    let password = ref('123456')
</script>
<style scoped>
.father{
    background-color:rgb(165，164,164);
    padding: 20px;
    border-radius: 10px;
}
</style>
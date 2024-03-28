<template>
    <input 
        type="text" 
        :value="usn"
        @input="emit('update:usn',(<HTMLInputElement>$event.target).value)"
    >
    <br>
    <input 
        type="text" 
        :value="psw"
        @input="emit('update:psw',(<HTMLInputElement>$event.target).value)">
</template>
<script setup lang="ts" name="AtwwInput">

    //接收modelValue并渲染到页面上
    defineProps(['usn','psw'])
    const emit = defineEmits(['update:usn','update:psw'])
</script>
<style scoped>
    input {
        border: 2px solid black;
        height: 30px;
        font-size: 20px;
        color: white;
        background-image: linear-gradient(45deg, pink, #70476b, #45318d);
    }
</style>
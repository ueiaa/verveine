<template>
    <div class="canvas">

        <canvas ref="canvas" class="canvasTest" width="150px" height="150px">
            this is a canvas test
        </canvas>

        <svg width="100" height="100">
            <circle cx="100" cy="50" stroke="red" stroke-width="5" fill="black"/>
        </svg>
    </div>
</template>

<script lang="ts" setup name="Canvas">
    import { ref } from 'vue';
    import { onMounted } from 'vue';

    const canvas = ref()

   
    onMounted(()=>{
        //渲染完成后获取CanvasRenderingContext2D对象
        const ctx = canvas.value.getContext('2d')

        //绘制一条直线
        /* ctx.moveTo(100,400);
        ctx.lineTo(100,400);
        ctx.stroke(); */

        //绘制矩形
        /* ctx.fillRect(25,25,100,100);
        ctx.clearRect(45,45,60,60);
        ctx.strokeRect(50,50,50,50); */

        //填充三角形
        /* ctx.beginPath();
        ctx.moveTo(75,50);
        ctx.lineTo(100,75);
        ctx.lineTo(100,25);
        ctx.fill(); */

        // 描边三角形
        ctx.beginPath();
        ctx.moveTo(125, 125);
        ctx.lineTo(125, 45);
        ctx.lineTo(45, 125);
        ctx.closePath();
        ctx.stroke();
    })
        

    
</script>

<style>
.canvasTest{
    border: 1px solid black;
    font-size: 20px;
    font-weight: 100;
}
</style>

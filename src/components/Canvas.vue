<template>
    <div class="canvas">

        <canvas ref="canvas" class="canvasTest" width="150px" height="150px">
            this is a canvas test
        </canvas>

        <svg width="100" height="100">
            <circle cx="100" cy="50" stroke="red" stroke-width="5" fill="black"/>
        </svg>

        <br>
        <input type="email" name="email"/><br>
        <input type="url" name="url"/><br>
        <input type="tel" name="tel"/><br>
        <input type="number" name="number" min="2" max="5" step="1" value="2"/><br>
        <input type="range" name="range" min="20" max="200" value="50"/><br>
        <input type="date" name="date"/><br>
        <input type="week" name="week"/><br>
        <input type="time" name="time"/><br>
        <input type="datetime-local" name="datetime-local"/><br>
        <input type="color" name="color"/>

        <form action="" method="get" autocomplete="on">
            姓名：<input type="text" name="name" pattern="[A-z0-9]{8}"/><br>
            密码：<input type="password" name="pwd" /><br>
            <input type="submit" formnovalidate="true" value="提交未经验证">
        </form>

        <!-- 实现多行文字居左，一行水平居中 -->
        <div class="Text">
            <span>我是多行文字，我是多行文字，我是多行文字，我是多行文字，我是多行文字，我是多行文字，
                我是多行文字，我是多行文字，我是多行文字，我是多行文字，我是多行文字，我是多行文字，我是多行文字，
                我是多行文字，我是多行文字，我是多行文字，我是多行文字，我是多行文字，我是多行文字，我是多行文字，
            </span>
        </div>
        <div class="Text"><span>我是单行文字</span></div>

        <!-- 实现一个最大的正方形 -->
        <div class="section"></div>
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
.section{
    width: 100%;
    padding-bottom: 100%;
    background-color: #333;
}
.Text{
    text-align: center;
    span{
        display: inline-block;
        text-align: left;
    }
}
</style>

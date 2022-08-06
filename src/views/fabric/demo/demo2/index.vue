<template>
  <div>
      <canvas id="c"></canvas>
      <button @click="add">添加</button>
      <button @click="del">删除</button>
  </div>
</template>
<script>
  let canvas = null
  export default {
    name: '',
    data() {
      return {
        
      }
    },
    mounted() {
      canvas = new fabric.Canvas('c', {
        width: 1000,
        height: 600
      })

      var rect = new fabric.Rect({
        width: 200,
        height: 200,
        left: 100,
        top: 100,
        fill: 'red'
      })
      canvas.add(rect)

      rect.on({
        'mousedown': e => { console.log('mousedown') },
        'mouseover': e => { console.log('mouseover') },
      })
      
      canvas.on({
        'object:added': e => { console.log('object:added') },
        'object:removed': e => { console.log('object:removed') },
        'mouse:over': e => { console.log('mouse:over') }
      })
    },
    methods: {
      add() {
        var rect = new fabric.Rect({
          width: 200,
          height: 200,
          left: 200,
          top: 200,
          fill: 'red'
        })
        canvas.add(rect)
      },
      del() {
        canvas.remove(canvas.getActiveObject())
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  html,
  body {
    height: 100%;
    width: 100%;
  }
  canvas {
    border: 1px solid #999;
  }
</style>
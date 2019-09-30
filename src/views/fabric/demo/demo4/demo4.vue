<template>
  <div>
      <canvas id="c"></canvas>
      <button @click="add">添加</button>
      <button @click="copy">复制</button>
      <button @click="hide">隐藏</button>
  </div>
</template>
<script>
  let canvas = null
  let circle
  export default {
    name: '',
    data() {
      return {
        
      }
    },
    mounted() {
      canvas = new fabric.Canvas('c', {
        width: 1000,
        height: 600,
        renderOnAddRemove: false,
        includeDefaultValues: false   // 不保存默认属性
      })
      
      var rect = new fabric.Rect({
        width: 350,
        height: 300,
        fill: 'yellow'
      })
      let triangle1 = new fabric.Triangle({
        width: 80,
        height: 80,
        fill: 'yellow',
        originX: 'center',
        originY: 'center',
        angle: 180,
        left: 0,
        top: 40
      })
      let triangle2 = new fabric.Triangle({
        width: 80,
        height: 80,
        fill: 'yellow',
        originX: 'center',
        originY: 'center',
        left: 0,
        top: 260
      })
      let triangle3 = new fabric.Triangle({
        width: 80,
        height: 80,
        fill: 'yellow',
        originX: 'center',
        originY: 'center',
        angle: 180,
        left: 350,
        top: 40
      })
       let triangle4 = new fabric.Triangle({
        width: 80,
        height: 80,
        fill: 'yellow',
        originX: 'center',
        originY: 'center',
        left: 350,
        top: 260
      })
      let group = new fabric.Group([triangle1,rect], {
        left: 100,
        top: 100
      })
      canvas.add(group)
      canvas.renderAll()
    },
    methods: {
      add() {
         var rect = new fabric.Rect({
          width: 200,
          height: 200,
          left: 200,
          top: 200,
          fill: 'blue',
          name: '99999'
        })
        var text = new fabric.Text('测试', {
          fill: 'red',
          fontSize: 30,
          left: 200,
          top: 200
        })
        canvas.add(rect)
        canvas.renderAll()
      },
      copy() {
        canvas.getActiveObject().clone(function(cloned) {
          if (cloned.type == 'activeSelection') {
            cloned.canvas = canvas
            cloned.forEachObject(obj => {
              canvas.add(obj)
            })
          } else {
            canvas.add(cloned)
          }
        })

      },
      hide() {
        // rect.visible = !rect.visible
        circle.set({visible: !circle.visible})
        canvas.renderAll()
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
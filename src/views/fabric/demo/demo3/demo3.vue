<template>
  <div>
      <canvas id="c"></canvas>
      <button @click="add">添加</button>
      <button @click="copy">复制</button>
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
        height: 600,
        includeDefaultValues: false   // 不保存默认属性
      })
      // 所有canvas对象都具备name属性
      fabric.Object.prototype.set({
        originX: 'center',
        originY: 'center',
        id: '',
        used: '0',
        modelType: '',
        name: ''
      })
      fabric.Object.prototype.toObject = (function(toObject) {
        return function() {
          return fabric.util.object.extend(toObject.call(this), {
            id: this.id,    // 自定义属性
            used: this.used,
            modelType: this.modelType,
            name: this.name
          })
        }
      })(fabric.Object.prototype.toObject)

      var rect = new fabric.Rect({
        width: 200,
        height: 200,
        left: 100,
        top: 100,
        fill: 'red',
        name: '欧克欧克'
      })
      canvas.add(rect)
      canvas.on('after:render', e => {
        console.log(canvas.toObject())
      })
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
        // canvas.add(rect)

        var group = new fabric.Group([rect, text])
        canvas.add(group)
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
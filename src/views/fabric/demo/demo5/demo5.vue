<template>
  <div>
    <canvas id="cvs"></canvas>
  </div>
</template>

<script>
  let cvs = null
  export default {
    name: '',
    data() {
      return {
        cvs: null,
        data: [
          {
            id: 1001,
            modelType: 'aaa',
            used: '0'
          },
          {
            id: 1002,
            modelType: 'bbb',
            used: '0'
          },
          {
            id: 1003,
            modelType: 'ccc',
            used: '1'
          }
        ]
      }
    },
    mounted() {
      // let {cvs} = this
      cvs = new fabric.Canvas('cvs', {
        width: 800,
        height: 500,
        backgroundColor: '#cccccc',
        includeDefaultValues: false   // 不保存默认属性
      })
      
      // 所有canvas对象都具备name属性
      fabric.Object.prototype.set({
        id: '',
        used: '0',
        modelType: '',
      })
      fabric.Object.prototype.toObject = (function(toObject) {
        return function() {
          return fabric.util.object.extend(toObject.call(this), {
            id: this.id,    // 自定义属性
            used: this.used,
            modelType: this.modelType
          })
        }
      })(fabric.Object.prototype.toObject)

      // let rect1 = new fabric.Rect({
      //   width: 100,
      //   height: 100,
      //   top: 100,
      //   left: 100,
      //   id: 1001,
      //   fill: 'red'
      // })
      // let rect2 = new fabric.Rect({
      //   width: 100,
      //   height: 100,
      //   top: 100,
      //   left: 200,
      //   id: 1002,
      //   fill: 'yellow'
      // })
      // for (let i = 0; i < 2000; i++) {
      //   cvs.add(rect1, rect2)
      // }
      // console.log(JSON.stringify(cvs.toObject()))

      this.loadCvs()
    },
    methods: {
      loadCvs() {
        let json = '{"version":"3.4.0","objects":[{"type":"rect","version":"3.4.0","left":100,"top":100,"width":100,"height":100,"fill":"red","id":1001,"used":"0","modelType":""},{"type":"rect","version":"3.4.0","left":200,"top":100,"width":100,"height":100,"fill":"yellow","id":1002,"used":"0","modelType":""}],"background":"#cccccc"}'
        cvs.loadFromJSON(json, () => {
          console.log(cvs.toObject())
          cvs.forEachObject(obj => {
            if (obj.id == 1001) {
              obj.set({
                fill: 'blue'
              })
            }
          })
          cvs.renderAll()
        })
      }
    }
  }
</script>

<style lang="" scoped>
  
</style>
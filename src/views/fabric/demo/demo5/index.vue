<template>
  <div>
    <canvas id="cvs"></canvas>
  </div>
</template>

<script>
/**
 * 定义mdoelType: 类型-尺寸
 * 
 */
  export default {
    name: '',
    data() {
      return {
        cvs: null
      }
    },
    mounted() {
      this.cvs = new fabric.Canvas('cvs', {
        width: window.innerWidth-88,
        height: window.innerHeight-50,
        includeDefaultValues: false   // 不保存默认属性
      })
      
      // 所有canvas对象都具备自定义属性
      fabric.Object.prototype.set({
        stationId: '',
        used: '0',
        modelType: '',
        fill: '#e6e6e6'
      })
      fabric.Object.prototype.toObject = (function(toObject) {
        return function() {
          return fabric.util.object.extend(toObject.call(this), {
            stationId: this.stationId,    // 自定义属性
            used: this.used,
            modelType: this.modelType,
            angle: this.angle,
            fill: this.fill
          })
        }
      })(fabric.Object.prototype.toObject)

      this.loadCvs()
    },
    methods: {
      loadCvs() {
        let {cvs} = this
        let colors = ['blue', 'red']
        let mapData = []
        for (let i = 0; i < 1000; i++) {
          mapData.push({
            stationId: '1000' + i,
            modelType: 'L-1212',
            used: '0',
            left: window.innerWidth * Math.random(),
            top: window.innerHeight * Math.random(),
            fill: colors[i%2]
          })
        }
        console.time('aa')
        mapData.forEach(v => {
          // cvs.add(new fabric.Rect({...v}))
          let station = this.makeStation(v.left, v.top, v.fill, 0.3)
          cvs.add(station)
        })
        console.timeEnd('aa')
        console.log(cvs.toObject())
        // console.log(JSON.stringify(cvs.toObject()))
      },
      makeStation(left, top, fill, scale) {
        let {cvs} = this
        // const path1 = new fabric.Path('M0.7,13.7c0-7.2,5.8-13,13-13l102,0c7.2,0,13,5.8,13,13v42c0,7.2-5.9,13-13,13h-102c-7.2,0-13-5.9-13-13V13.7 z',{
        //   fill: fill,
        //   strokeWidth: 2,
        //   stroke: '#333333'
        // })
        // const path2 = new fabric.Path('M47.1,115.8h35.1V89.1c0-11.7-35.1-11.7-35.1,0V115.8z',{
        //   fill: fill,
        //   strokeWidth: 2,
        //   stroke: '#333333'
        // })
        // const rect = new fabric.Rect({
        //   width: 35.1,
        //   height: 6,
        //   left: 47.1,
        //   top: 115.8,
        //   fill: fill,
        //   strokeWidth: 2,
        //   stroke: '#333333'
        // })
        // var width = path1.width
        // var height = path1.height
        // const mix = new fabric.Group([path1,path2,rect])
        // mix.set({left,top,scaleX:scale,scaleY:scale,originX:'center',originY:'center'})
        // return mix;

        const path1 = new fabric.Path('M125.3,112.4c0,7.2-5.8,13-13,13h-28c-7.2,0-12.9-5.2-12.8-11.5c0,0,0,0,3.2-12.9c4.5-18,12.2-37.1,0.9-50.6 c-12-14.4-31.4-5.7-48.8-2.3c-14.7,2.9-14.7,2.9-14.7,2.9C5.7,51.8,0.5,46.7,0.5,39.6v-26c0-7.1,5.8-13,13-13h98.8 c7.2,0,13,5.8,13,13V112.4z',{
          fill: fill,
          strokeWidth: 2,
          stroke: '#333333'
        })
        const path2 = new fabric.Path('M19.7,78.6l24.8,24.8l18.8-18.8c8.3-8.3-16.5-33.1-24.8-24.8L19.7,78.6z',{
          fill: fill,
          strokeWidth: 2,
          stroke: '#333333'
        })
        const rect = new fabric.Rect({
          width: 6,
          height: 35.1,
          originX: 'center',
          originY: 'center',
          angle: 135,
          left: 31,
          top: 94.15,
          fill: fill,
          strokeWidth: 2,
          stroke: '#333333',
        })
        var width = path1.width
        var height = path1.height
        const mix = new fabric.Group([path1,path2,rect])
        mix.set({left,top,scaleX:scale,scaleY:scale,originX:'center',originY:'center'})
        return mix;
      }
    }
  }
</script>

<style scoped>
  
</style>
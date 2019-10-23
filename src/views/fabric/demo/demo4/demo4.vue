<template>
  <div>
    <canvas id="cvs"></canvas>
  </div>
</template>

<script>
let c = null
  export default {
    data() {
      return {
        
      }
    },
    mounted() {
      c = new fabric.Canvas('cvs', {
        // renderOnAddRemove: false
      })
      fabric.loadSVGFromURL('/maps/b8-3.svg', (objs, opts) => {
        // console.log(objs)
        // console.log(opts)
        c.setWidth(opts.width)
        c.setHeight(opts.height)
        // const obj = fabric.util.groupSVGElements(objs, opts)
        // c.add(obj)

        let bgGroup = []
        let stations = []
        objs.forEach((obj, i) => {
          if (!obj.stroke || obj.stroke != '#999799') {
           bgGroup.push(obj)
          } else {
            console.log(obj.type,obj.width)
            if (obj.type == 'rect' && (obj.width == 1.9 || obj.width == 11.2)) {
              stations.push([objs[i-2], objs[i-1], obj])
            }
            // c.add(obj)
            // obj.set({
            //   stroke: '#333333',
            //   fill: '#f2ade4'
            // })
          }
        })
        stations.forEach(v => {
          let group = new fabric.Group(v)
          c.add(group)
        })
        let bg = fabric.util.groupSVGElements(bgGroup, opts)
        bg.set({
          selectable: false
        })
        c.add(bg)
        bg.moveTo(0)
        c.renderAll()
      })
      this.events()
    },
    methods: {
      events() {
        let isDragging = false
        c.on({
          'mouse:wheel': e => {
            if (e.e.ctrlKey) {
              e.e.preventDefault()
              const deltaY = e.e.deltaY
              const newZoom = deltaY > 0 ? -0.1 : 0.1
              this.setZoom(newZoom, {x: e.e.offsetX, y: e.e.offsetY})
            }
          },
          'mouse:down': e => {
            let selections = c.getActiveObjects()
            if (selections.length == 0 && !e.e.shiftKey) {
              isDragging = true
              c.selection = false
            }
          },
          'mouse:move': e => {
            if (isDragging) {
              let delta = new fabric.Point(e.e.movementX, e.e.movementY)
              c.relativePan(delta)
            }
          },
          'mouse:up': e => {
            if (isDragging) {
              isDragging = false
              c.selection = true
            }
          },
          'mouse:dblclick': e => {
            console.log(e)
            // if ()
          }
        })
      },
      setZoom(zoom, point) {
        const newZoom = c.getZoom() + zoom
        if (newZoom < 0.1) return
        c.zoomToPoint(point, newZoom)
      }
    }
  }
</script>

<style lang="" scoped>
  
</style>
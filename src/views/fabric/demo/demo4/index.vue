<template>
  <div>
    <canvas id="cvs" />
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
    /**
       * 通过在特殊形状后加上文字标记，识别有效形状（这里标记R/L/C/M）
       */
    fabric.loadSVGFromURL('/maps/B8二楼测试版_画板 1.svg', (objs, opts) => {
      // console.log(objs)
      // console.log(opts)
      c.setWidth(opts.width)
      c.setHeight(opts.height)
      // const obj = fabric.util.groupSVGElements(objs, opts)
      // c.add(obj)
      const inoperableObjs = []
      objs.forEach((obj, i) => {
        if (!obj.stroke || obj.stroke != '#999799') {
          inoperableObjs.push(obj)
        } else {
          obj.set({
            stroke: '#333333',
            fill: '#e6e6e6'
          })
          if (objs[i + 1].type == 'text') {
            switch (objs[i + 1].text) {
              case 'R':
                objs[i + 1].text = ''
                const stationRect = new fabric.Group([obj, objs[i + 1]], {
                  modelType: 'station-rect'
                })
                c.add(stationRect)
                break
              case 'L':
                objs[i + 1].text = ''
                const stationL = new fabric.Group([obj, objs[i + 1]], {
                  modelType: 'station-L'
                })
                c.add(stationL)
                break
              case 'C':
                objs[i + 1].text = ''
                const chair = new fabric.Group([obj, objs[i + 1]], {
                  modelType: 'chair'
                })
                c.add(chair)
                break
              case 'M':
                objs[i + 1].text = ''
                const meetingRoom = new fabric.Group([obj, objs[i + 1]], {
                  modelType: 'meetingRoom'
                })
                c.add(meetingRoom)
                break
            }
          }
        }
      })
      const bg = new fabric.Group(inoperableObjs, {
        selectable: false
      })
      c.add(bg)
      bg.moveTo(0)
      // let zoomPoint = new fabric.Point(c.width / 2 , c.height / 2);
      // c.zoomToPoint(zoomPoint, scale);
      // c.absolutePan({x:0, y:0});
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
            this.setZoom(newZoom, { x: e.e.offsetX, y: e.e.offsetY })
          }
        },
        'mouse:down': e => {
          const selections = c.getActiveObjects()
          if (selections.length == 0 && !e.e.shiftKey) {
            isDragging = true
            c.selection = false
          }
        },
        'mouse:move': e => {
          if (isDragging) {
            const delta = new fabric.Point(e.e.movementX, e.e.movementY)
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

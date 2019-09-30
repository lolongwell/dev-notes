<template>
    <div>
        <canvas id="c"></canvas>
    </div>
</template>
<script>
export default {
    data() {
        return {
            canvas: null
        }
    },
    mounted() {
        this.canvas = new fabric.Canvas('c', {
            hoverCursor: 'pointer',
            renderOnAddRemove: false,
            selection: false,
            width: 1000,
            height: 1000
        })
        fabric.Group.prototype.originX = fabric.Group.prototype.originY = 'center';
        var red = new fabric.Rect({
            width: 200,
            height: 200,
            left: 100,
            top: 100,
            fill: 'red'
        })
        var blue = new fabric.Rect({
            width: 200,
            height: 200,
            left: 150,
            top: 150,
            fill: 'blue'
        })
        var yellow = new fabric.Rect({
            width: 200,
            height: 200,
            left: 200,
            top: 200,
            fill: 'yellow',
        })
        this.canvas.add(red, blue, yellow)
        // this.canvas.moveTo(yellow, 0)
        // yellow.moveTo(0)
        // blue.moveTo(0)
        // this.canvas.insertAt(yellow, 1, true)
        this.canvas.renderAll()
        console.log(this.canvas.toJSON())
    },
    methods: {
        
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


<template>
 <div class="app-container">
   <div class="nav">头部---------------------------------</div>
   <div class="main">
     <div class="form">表单-------------------------------</div>
     <canvas id="c"></canvas>
     <button class="btn" @click="toggleFullScreen($event)">全屏</button>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFullscreen: true,
      canvas: null
    }
  },
  mounted() {
    this.canvas = new fabric.Canvas('c', {
      width: 1000,
      height: 500,
      backgroundColor: '#ffffff'
    })
    this.addRect()
    window.onresize = () => {
      if (!this.checkFull()) {
        this.isFullscreen = true
      }
    }
  },
  methods: {
    addRect() {
      let {canvas} = this
      let rect = new fabric.Rect({
        width: 200,
        height: 200,
        left: 100,
        top: 100,
        fill: 'red'
      })
      canvas.add(rect)
    },
    checkFull() {
        var isFull = document.fullscreenEnabled || window.fullScreen || document.webkitIsFullScreen || document.msFullscreenEnabled;
        if (isFull === undefined) {isFull = false;}
        return isFull
    } ,
    FullScreen(el){
      if(this.isFullscreen){//退出全屏
        if(document.exitFullscreen){
          document.exitFullscreen()
        }else if( document.mozCancelFullScreen){
          document.mozCancelFullScreen()
        }else if(document.webkitExitFullscreen){
          //改变平面图在google浏览器上面的样式问题
          // $("#canvasPaintArea").css("position","static").css("width","100%");
          // $(".buildingsFloor").css("width","70%");
          // $(".floor-plan").css("width","78%");
          document.webkitExitFullscreen()
        }else if(!document.msRequestFullscreen){
          document.msExitFullscreen()
        }
      }else{    //进入全屏
        if(el.requestFullscreen){
          el.requestFullscreen()
        }else if(el.mozRequestFullScreen){
          el.mozRequestFullScreen()
        }else if(el.webkitRequestFullscreen){
          //改变平面图在google浏览器上面的样式问题
          // $("#canvasPaintArea").css("position","absolute").css("width","94%");
          // $(".buildingsFloor").css("width","98%");
          // $(".floor-plan").css("width","90%");
          el.webkitRequestFullscreen(); 
        }else if(el.msRequestFullscreen){
          this.isFullscreen=true;
          el.msRequestFullscreen()            
        }
      }
  },
  toggleFullScreen(e){
      this.isFullscreen=!this.isFullscreen;
      this.FullScreen(document.getElementById("c"));
  }
  }
}
</script>

<style scoped>
  canvas {
        border: 1px solid #000;
    }

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  .app-container {
    padding-left: 10px;
  }
  .main {position: relative;}
  .btn {
    position: absolute;
    right: 10px;
    top: 10px;
  }
</style>
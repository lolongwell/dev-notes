<template>
  <div class="preview">
    <div v-html="svgHTML"></div>
  </div>
</template>

<script>
  // import "@/utils/hammer.min.js";  // 手势库
  export default {
    name: 'mapView',
    data() {
      return {
        
      }
    },
    props: {
      svgHTML: {      // svg xml文本内容
        type: String,
        default: ''
      }
    },
    mounted() {
      // this.initZoomPan()
      this.initZoomPan1()
    },
    methods: {
      /**
       * 上下左右移动，ios需禁用右划
       * 以双指中心点放大
       * 点击穿透问题
       */
      // 竖图操作
      initZoomPan() {
        let _this = this
        function point2D(x,y){
          return {x : x,y : y};
        }
        var reqAnimationFrame = (function () {
            return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        })();
        var tMatrix = [1,0,0,1,0,0]//x缩放，无，无，y缩放，x平移，y平移
        var initScale = 1;//初始化scale
        var el =  document.querySelector(".preview div svg");//获取元素
        var mc = new Hammer.Manager(el)
        var ticking = false
        var poscenter = point2D(0,0);//缓存双指的中心坐标
        var duration = '';//设置过渡效果，用于双击缩放效果
        var lastTranslate = point2D(0,0);//记录上次的偏移值
        var odiv = document.querySelector(".preview div")
        var lastcenter= point2D(odiv.offsetWidth/2,odiv.offsetHeight/2)//图像的中心点，用于对比双指中心点
        var center = lastcenter
        mc.add(new Hammer.Pan({ threshold: 0, pointers: 1 }))
        mc.add(new Hammer.Pinch({ threshold: 0 }))
        mc.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
        mc.add( new Hammer.Tap({ event: 'singletap' }) );
        // mc.add( new Hammer.Rotate() )
        mc.get('doubletap').recognizeWith('singletap')
        mc.get('singletap').requireFailure('doubletap')
        // mc.get('pinch').recognizeWith('rotate')
        // mc.get('rotate').requireFailure('pinch')
        mc.on("panmove", onPan);
        mc.on("panstart",onPanStart)
        mc.on("pinchmove", onPinch);
        mc.on("pinchstart",onPinchStart);
        mc.on("doubletap",onDoubleTap);
        mc.on("singletap",onSingleTap);
        // mc.on("rotate",onRotate);

        function onPanStart(ev){
          lastTranslate = point2D(tMatrix[4],tMatrix[5])//缓存上一次的偏移值
        }
        function onPan(ev){	
            duration = ''
            tMatrix[4] = lastTranslate.x + ev.deltaX
            tMatrix[5] = lastTranslate.y + ev.deltaY
            requestElementUpdate('onpan');
          
        }
        function onPinchStart(ev){
          duration = '';
          lastTranslate = point2D(tMatrix[4],tMatrix[5])//记录上一次的偏移值
          initScale = tMatrix[0] || 1;
          poscenter = point2D(ev.center.x, ev.center.y)
          lastcenter = point2D(center.x + lastTranslate.x,center.y + lastTranslate.y)//重新计算放大后的中心坐标
          poscenter = point2D(ev.center.x - lastcenter.x, ev.center.y-lastcenter.y)
          requestElementUpdate('onpinchStart');
        }
        function onPinch(ev){
          var nowScale = tMatrix[0] = tMatrix[3] = initScale * ev.scale;
          var composscal = (1 - ev.scale) 
          tMatrix[4] = (1 - ev.scale) * poscenter.x + lastTranslate.x
          tMatrix[5] = (1 - ev.scale) * poscenter.y + lastTranslate.y
          requestElementUpdate('onpinch')
        }

        function onDoubleTap(ev){
          duration = ".3s ease all";
          var nowScale = tMatrix[0];
          if(nowScale != 1 || tMatrix[4]!= 0){
            //scale不等于1，要重回1
            tMatrix[0] = tMatrix[3] = 1;
            tMatrix[4] = tMatrix[5] = 0;
          }else{
            var pointer = ev.center
            var scale = 2
            tMatrix[0] = tMatrix[3] = scale
            tMatrix[4] = (1 - scale) * ( pointer.x - center.x) 
            tMatrix[5] = (1 - scale) * ( pointer.y - center.y)
          }
          requestElementUpdate('doubleTap');
        }

        function onSingleTap(ev) {
          _this.$emit('hideView')
          requestElementUpdate('onsingletap');
        }

        function onRotate(ev) {
          console.log('rotate')
          console.log(ev)
        } 

        function updateElementTransform() {
          el.style.transition = duration
            var tmp = tMatrix.join(',')
            el.style.transform = 'matrix(' + tmp + ')';
            ticking = false;
        }
        function requestElementUpdate() {
          arguments && console.log(arguments[0])
            if(!ticking) {
                reqAnimationFrame(updateElementTransform);
                ticking = true;
            }
        }
        requestElementUpdate();
         // 点击穿透bug
        odiv.addEventListener('touchend', e => {
          e.preventDefault()
          e.stopPropagation()
        }, false)
      },
      // 横图操作
      initZoomPan1() {
        let _this = this
        function point2D(x,y){
          return {x : x,y : y};
        }
        var reqAnimationFrame = (function () {
            return window[Hammer.prefixed(window, 'requestAnimationFrame')] || function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        })();
        var tMatrix = [1,0,0,1,0,0]//x缩放，无，无，y缩放，x平移，y平移
        var initScale = 1;//初始化scale
        var el =  document.querySelector(".preview div svg");//获取元素
        el.style.height = window.innerWidth + 'px'
        el.style.width = 'auto'
        var mc = new Hammer.Manager(el)
        var ticking = false
        var poscenter = point2D(0,0);//缓存双指的中心坐标
        var duration = '';//设置过渡效果，用于双击缩放效果
        var lastTranslate = point2D(0,0);//记录上次的偏移值
        var odiv = document.querySelector(".preview div")
        var lastcenter= point2D(odiv.offsetHeight/2,odiv.offsetWidth/2)//图像的中心点，用于对比双指中心点
        var center = lastcenter
        mc.add(new Hammer.Pan({ threshold: 0, pointers: 1 }))
        mc.add(new Hammer.Pinch({ threshold: 0 }))
        mc.add( new Hammer.Tap({ event: 'doubletap', taps: 2 }) );
        mc.add( new Hammer.Tap({ event: 'singletap' }) );
        // mc.add( new Hammer.Rotate() )
        mc.get('doubletap').recognizeWith('singletap')
        mc.get('singletap').requireFailure('doubletap')
        // mc.get('pinch').recognizeWith('rotate')
        // mc.get('rotate').requireFailure('pinch')
        mc.on("panmove", onPan);
        mc.on("panstart",onPanStart)
        mc.on("pinchmove", onPinch);
        mc.on("pinchstart",onPinchStart);
        mc.on("doubletap",onDoubleTap);
        mc.on("singletap",onSingleTap);
        // mc.on("rotate",onRotate);

        function onPanStart(ev){
          lastTranslate = point2D(-tMatrix[5],tMatrix[4])//缓存上一次的偏移值
        }
        function onPan(ev){	
          duration = ''
          tMatrix[4] = lastTranslate.y + ev.deltaY
          tMatrix[5] = -lastTranslate.x - ev.deltaX
          requestElementUpdate('onpan');
          
        }
        function onPinchStart(ev){
          duration = '';
          lastTranslate = point2D(-tMatrix[5],tMatrix[4])//记录上一次的偏移值
          initScale = tMatrix[0] || 1;
          poscenter = point2D(ev.center.x, ev.center.y)
          lastcenter = point2D(center.x + lastTranslate.x,center.y + lastTranslate.y)//重新计算放大后的中心坐标
          poscenter = point2D(ev.center.x - lastcenter.x, ev.center.y-lastcenter.y)
          requestElementUpdate('onpinchStart');
        }
        function onPinch(ev){
          var nowScale = tMatrix[0] = tMatrix[3] = initScale * ev.scale;
          var composscal = (1 - ev.scale) 
          tMatrix[4] = (1 - ev.scale) * poscenter.y + lastTranslate.y
          tMatrix[5] = -(1 - ev.scale) * poscenter.x - lastTranslate.x
          requestElementUpdate('onpinch')
        }

        function onDoubleTap(ev){
          duration = ".3s ease all";
          var nowScale = tMatrix[0];
          if(nowScale != 1 || tMatrix[4]!= 0){
            //scale不等于1，要重回1
            tMatrix[0] = tMatrix[3] = 1;
            tMatrix[4] = tMatrix[5] = 0;
          }else{
            var pointer = ev.center
            var scale = 2
            tMatrix[0] = tMatrix[3] = scale
            tMatrix[4] = (1 - scale) * ( pointer.y - center.y) 
            tMatrix[5] = (1 - scale) * ( -pointer.x + center.x)
          }
          requestElementUpdate('doubleTap');
        }

        function onSingleTap(ev) {
          _this.$emit('hideView')
          requestElementUpdate('onsingletap');
        }

        function onRotate(ev) {
          console.log('rotate')
          console.log(ev)
        } 

        function updateElementTransform() {
          el.style.transition = duration
            var tmp = tMatrix.join(',')
            el.style.transform = 'matrix(' + tmp + ')';
            ticking = false;
        }
        function requestElementUpdate() {
          arguments && console.log(arguments[0])
            if(!ticking) {
                reqAnimationFrame(updateElementTransform);
                ticking = true;
            }
        }
        requestElementUpdate();
        // 点击穿透bug
        odiv.addEventListener('touchend', e => {
          e.preventDefault()
          e.stopPropagation()
        }, false)
      }
    }
  }
</script>

<style scoped>
.preview {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: black;
  z-index: 101;
  display: flex;
  justify-content: center;
  align-items: center;
}
.preview div {
  width: 100vh;
  height: 100vw;
  transition: 0s ease all;
  transform: rotate(90deg);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
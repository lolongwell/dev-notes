<template>
  <div class="app-container">
    <div class="nav">头部---------------------------------</div>
    <div class="main">
      <div class="form">表单-------------------------------</div>
      <div class="view">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <canvas id="c"></canvas> 
        <button class="btn" @click="toggleFullScreen">全屏</button>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * bug: 部分元素全屏时，下拉组件无法显示
 */
import screenfull from 'screenfull'
export default {
  data() {
    return {
      isFullscreen: false,
      canvas: null,
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: ''
    };
  },
  mounted() {
    this.canvas = new fabric.Canvas("c", {
      width: 1000,
      height: 500,
      backgroundColor: "#ffffff"
    });
    this.addRect();
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    addRect() {
      let { canvas } = this;
      let rect = new fabric.Rect({
        width: 200,
        height: 200,
        left: 100,
        top: 100,
        fill: "red"
      });
      canvas.add(rect);
    },
    toggleFullScreen() {
      if (!screenfull.isEnabled) {
        this.$message({
          message: '不支持全屏。',
          type: 'warning'
        })
        return false
      }
      // screenfull.toggle()
      screenfull.toggle(document.querySelector('.view'))
    },
    change() {
      this.isFullscreen = screenfull.isFullscreen
    },
    init() {
      if (screenfull.isEnabled) {
        screenfull.on('change', this.change)
      }
    },
    destroy() {
      if (screenfull.isEnabled) {
        screenfull.off('change', this.change)
      }
    }
  }
};
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
.main {
  position: relative;
}
.btn {
  position: absolute;
  right: 10px;
  top: 10px;
}
:-webkit-full-screen {
  position: absolute !important;
  z-index: 2847483646 !important;
}
</style>
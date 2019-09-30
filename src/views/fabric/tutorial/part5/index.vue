<template>
  <div class="app-container">
    <div
      id="wmd-preview"
      class="wmd-preview"
      data-medium-element="true"
      style="height: auto; left: 0px;"
    >
      <div class="md-section-divider"></div>
      <div class="md-section-divider"></div>
      <h1 data-anchor-id="hs0z" id="fabricjs介绍-第五部分">Fabric.js介绍 第五部分</h1>
      <p data-anchor-id="nn5o">我们已经涵盖了上一系列的许多话题;从基础对象操作到动画，事件，滤镜，组合和子类。但还有几件非常有趣和有用的事情要讨论！</p>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="w06n" id="缩放和平移zoom-and-panning">缩放和平移（Zoom and panning）</h2>
      <ol data-anchor-id="aes0">
        <li>
          <p>
            让我们看看如何通过鼠标交互实现缩放和平移的基本系统。我们将使用鼠标滚轮在画布上放大20倍（2000％）并使用alt +单击动作进行拖动。
            <br>我们开始基本控制：
            <br>
            <a href="http://fabricjs.com/fabric-intro-part-5#step1" target="_blank">查看demo</a>
          </p>
        </li>
        <li>
          <p>
            这是一个基本的缩放控制，限制在1%到2000%之间。我们现在要添加画布的拖动。我们将使用ALT +拖动，但您可以更改为另一种组合。按住alt键下拉鼠标会将布尔值设为true，这样鼠标移动事件就能知道是开始拖拽了：
            <br>
            <a href="http://fabricjs.com/fabric-intro-part-5#step2" target="_blank">查看demo</a>
          </p>
        </li>
        <li>
          <p>
            好的，这是一个基本设置，可以让你控制缩放和平移。仍然有一些可能的增强。 例如，我们可以使轮缩放使画布围绕光标所在的点居中：
            <br>
            <a href="http://fabricjs.com/fabric-intro-part-5#step3" target="_blank">查看demo</a>
          </p>
        </li>
        <li>
          <p>
            最后一点，我们可以限制平移区域以避免在一个方向上无限延伸。我们描出一个1000×1000像素的矩形来表示平移区域。我们添加代码来限制边界内的移动：
            <br>
            <a href="http://fabricjs.com/fabric-intro-part-5#step4" target="_blank">查看demo</a>
          </p>
        </li>
      </ol>
    </div>
  </div>
</template>
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
      <h1 data-anchor-id="usei" id="fabricjs介绍-第一部分">Fabric.js介绍 第一部分</h1>
      <p data-anchor-id="083j">
        <img src="https://github.com/kangax/fabric.js/raw/master/lib/screenshot.png" alt=" ">
      </p>
      <p data-anchor-id="pr61">
        今天我开始像您介绍
        <a href="http://fabricjs.com/" target="_blank">Fabric</a>，一个功能强大的Javascript库，运行在HTML5 canvas上，Fabric为画布提供了一个缺失的对象模型，以及一个SVG解析器，一个交互层，以及一整套其他必不可少的工具。它是一个完全开放源码的项目，在MIT许可，多年来做出了许多贡献。
      </p>
      <p data-anchor-id="96i6">
        三年前我开始开发Fabric，在发现使用原生canvas的API之后，我正在为
        <a href="http://printio.ru/" target="_blank">printio.ru</a>创建一个互动设计编辑器：我的创业公司允许用户设计自己的服装。在这些日子里，我们想要的那种交互性只存在于Flash应用中。而现在，"Fabric"成为可能。
      </p>
      <p data-anchor-id="jtmk">让我们来看看吧！</p>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="k6of" id="为什么要做fabric">为什么要做fabric</h2>
      <p data-anchor-id="3lmf">
        <a
          href="http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html"
          target="_blank"
        >Canvas</a>可以让我们在网络上创造出绝对惊人的图形。但它提供的API是令人失望的。如果我们只想在画布上画几条基本的形状，不会觉得有什么繁琐。但是一旦需要任何形式的互动，任何时候改变图片或绘制更复杂的形状，代码复杂度会急剧增加。
      </p>
      <p data-anchor-id="nond">Fabric旨在解决这个问题。</p>
      <p data-anchor-id="0mpy">
        原生canvas方法只允许我们触发简单的图形命令，盲目的修改canvas的位图，想画一个矩形？使用
        <code>fillRect(left, top, width, height).</code>，想画一条线？使用
        <code>moveTo(left, top)</code> 和
        <code>lineTo(x, y)</code>的组合命令，就好像我们
        <strong>用刷子画画</strong>，上层涂上越来越多的颜料，几乎没有控制。
      </p>
      <p data-anchor-id="ngyt">Fabric不是在这么低的层次上运行，而是在原生方法之上提供简单而强大的对象模型。它负责画布状态和渲染，并让我们直接使用绘制后的“对象”。</p>
      <p data-anchor-id="ftma">
        让我们来看一个简单的例子来说明这个差异。假设我们想在画布上画一个红色的矩形。以下是我们如何使用原生的
        <code>&lt;canvas&gt;</code> API。
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="u0eb" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="com">// 有一个id是c的canvas元素</span></code></li><li
  class="L1"
><code class="language-js"><span class="kwd">var</span><span class="pln"> canvasEl </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'c'</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"></code></li><li class="L3"><code class="language-js"><span class="com">// 获取2d位图模型</span></code></li><li
  class="L4"
><code class="language-js"><span class="kwd">var</span><span class="pln"> ctx </span><span class="pun">=</span><span class="pln"> canvasEl</span><span class="pun">.</span><span class="pln">getContext</span><span class="pun">(</span><span class="str">'2d'</span><span class="pun">);</span></code></li><li
  class="L5"
><code class="language-js"></code></li><li class="L6"><code class="language-js"><span class="com">// 设置填充颜色</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">ctx</span><span class="pun">.</span><span class="pln">fillStyle </span><span class="pun">=</span><span class="pln"> </span><span class="str">'red'</span><span class="pun">;</span></code></li><li
  class="L8"
><code class="language-js"></code></li><li class="L9"><code class="language-js"><span class="com">// 创建一个坐标100，190，尺寸是20，20的矩形</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">ctx</span><span class="pun">.</span><span class="pln">fillRect</span><span class="pun">(</span><span class="lit">100</span><span class="pun">,</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> </span><span class="lit">20</span><span class="pun">,</span><span class="pln"> </span><span class="lit">20</span><span class="pun">);</span></code></li></ol></pre>
      <p data-anchor-id="7usk">现在使用Fabric做同样的事情：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="vuve" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="com">// 用原生canvas元素创建一个fabric实例</span></code></li><li
  class="L1"
><code class="language-js"><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'c'</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"></code></li><li class="L3"><code class="language-js"><span class="com">// 创建一个矩形对象</span></code></li><li
  class="L4"
><code class="language-js"><span class="kwd">var</span><span class="pln"> rect </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">  top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span><span class="pun">,</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">  width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span><span class="pun">,</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">  height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span></code></li><li
  class="L0"
><code class="language-js"><span class="pun">});</span></code></li><li class="L1"><code class="language-js"></code></li><li class="L2"><code class="language-js"><span class="com">// 将矩形添加到canvas画布上</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">rect</span><span class="pun">);</span></code></li></ol></pre>
      <p data-anchor-id="kdgw">
        <img src="http://fabricjs.com/article_assets/1.png" alt=" " title>
      </p>
      <p data-anchor-id="sccc">
        在这种情况下，这两个例子非常相似，大小几乎没有差别。但是，您可以看到使用canvas的方法有多么不同。使用原生方法，我们在
        <strong>上下文</strong>中操作（表示整个画布位图的对象），在Fabric中，我们操作对象，实例化它们，更改其属性，并将其添加到画布。你可以看到这些对象是Fabric中的
        <strong>第一等公民</strong>。
      </p>
      <p data-anchor-id="6pom">但渲染纯正的红色矩形就如此无聊。我们至少可以做一些有趣的事情！也许，稍稍旋转？</p>
      <p data-anchor-id="wktl">旋转45度，首先使用原生的canvas方法：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="eopl" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> canvasEl </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'c'</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"><span class="kwd">var</span><span class="pln"> ctx </span><span class="pun">=</span><span class="pln"> canvasEl</span><span class="pun">.</span><span class="pln">getContext</span><span class="pun">(</span><span class="str">'2d'</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">ctx</span><span class="pun">.</span><span class="pln">fillStyle </span><span class="pun">=</span><span class="pln"> </span><span class="str">'red'</span><span class="pun">;</span></code></li><li
  class="L3"
><code class="language-js"></code></li><li class="L4"><code class="language-js"><span class="pln">ctx</span><span class="pun">.</span><span class="pln">translate</span><span class="pun">(</span><span class="lit">100</span><span class="pun">,</span><span class="pln"> </span><span class="lit">100</span><span class="pun">);</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">ctx</span><span class="pun">.</span><span class="pln">rotate</span><span class="pun">(</span><span class="typ">Math</span><span class="pun">.</span><span class="pln">PI </span><span class="pun">/</span><span class="pln"> </span><span class="lit">180</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> </span><span class="lit">45</span><span class="pun">);</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">ctx</span><span class="pun">.</span><span class="pln">fillRect</span><span class="pun">(-</span><span class="lit">10</span><span class="pun">,</span><span class="pln"> </span><span class="pun">-</span><span class="lit">10</span><span class="pun">,</span><span class="pln"> </span><span class="lit">20</span><span class="pun">,</span><span class="pln"> </span><span class="lit">20</span><span class="pun">);</span></code></li></ol></pre>
      <p data-anchor-id="4bin">使用Fabric：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="9vau" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'c'</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"></code></li><li class="L2"><code class="language-js"><span class="com">// 创建一个45度的矩形</span></code></li><li
  class="L3"
><code class="language-js"><span class="kwd">var</span><span class="pln"> rect </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">  fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span><span class="pun">,</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span><span class="pun">,</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">  height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span><span class="pun">,</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">  angle</span><span class="pun">:</span><span class="pln"> </span><span class="lit">45</span></code></li><li
  class="L0"
><code class="language-js"><span class="pun">});</span></code></li><li class="L1"><code class="language-js"></code></li><li class="L2"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">rect</span><span class="pun">);</span></code></li></ol></pre>
      <p data-anchor-id="0abc">
        <img src="http://fabricjs.com/article_assets/2.png" alt=" " title>
      </p>
      <p data-anchor-id="oru5">这里发生了什么？</p>
      <p data-anchor-id="x92d">
        我们在Fabric中所做的一切都是将对象的“角度”值更改为
        <code>45</code>。然而使用原生的方法，事情变得更加有趣，记住我们无法对对象进行操作，相反，我们调整整个画布位图（
        <code>ctx.translate</code>，
        <code>ctx.rotate</code>）的位置和角度，以适应我们的需要。然后，我们再次绘制矩形，但记住要正确地偏移位图（-10，-10），所以它仍然呈现在100,100点。作为练习，我们不得不在旋转画布位图时将度数转换为弧度。
      </p>
      <p data-anchor-id="ve90">我相信你刚刚开始明白为什么面料存在，以及它解决了多少低级写法。</p>
      <p data-anchor-id="75li">
        如果在某些时候，我们想将现在熟悉的红色矩形移动到画布上稍微不同的位置怎么办？我们如何在无法操作对象的情况下执行此操作？我们会在canvas位图上调用另一个
        <code>fillRect</code>吗？
      </p>
      <p data-anchor-id="eyxg">
        不完全的。调用另一个
        <code>fillRect</code>命令实际上在画布上绘制的东西所有之上绘制矩形。还记得我前边说的用刷子画画吗？为了“移动”它，我们需要先
        <strong>擦除以前绘制的内容</strong>，然后在新的位置绘制矩形。
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="10fy" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> canvasEl </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'c'</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"></code></li><li class="L2"><code class="language-js"><span class="pun">...</span></code></li><li class="L3"><code class="language-js"><span class="pln">ctx</span><span class="pun">.</span><span class="pln">strokRect</span><span class="pun">(</span><span class="lit">100</span><span class="pun">,</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> </span><span class="lit">20</span><span class="pun">,</span><span class="pln"> </span><span class="lit">20</span><span class="pun">);</span></code></li><li
  class="L4"
><code class="language-js"><span class="pun">...</span></code></li><li class="L5"><code class="language-js"></code></li><li class="L6"><code class="language-js"><span class="com">// 擦除整个画布</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">ctx</span><span class="pun">.</span><span class="pln">clearRect</span><span class="pun">(</span><span class="lit">0</span><span class="pun">,</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> canvasEl</span><span class="pun">.</span><span class="pln">width</span><span class="pun">,</span><span class="pln"> canvasEl</span><span class="pun">.</span><span class="pln">height</span><span class="pun">);</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">ctx</span><span class="pun">.</span><span class="pln">fillRect</span><span class="pun">(</span><span class="lit">20</span><span class="pun">,</span><span class="pln"> </span><span class="lit">50</span><span class="pun">,</span><span class="pln"> </span><span class="lit">20</span><span class="pun">,</span><span class="pln"> </span><span class="lit">20</span><span class="pun">);</span></code></li></ol></pre>
      <p data-anchor-id="9caw">我们如何用Fabric完成这个？</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="58ns" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'c'</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"><span class="pun">...</span></code></li><li class="L2"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">rect</span><span class="pun">);</span></code></li><li
  class="L3"
><code class="language-js"><span class="pun">...</span></code></li><li class="L4"><code class="language-js"></code></li><li class="L5"><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">({</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">renderAll</span><span class="pun">();</span></code></li></ol></pre>
      <p data-anchor-id="iacb">
        <img src="http://fabricjs.com/article_assets/3.png" alt=" " title>
      </p>
      <p
        data-anchor-id="7zp8"
      >注意一个非常重要的区别。使用Fabric，在尝试“修改”任何内容之前，我们不再需要擦除内容。我们仍然使用对象，只需更改其属性，然后重新绘制画布即可获得“最新图片”。</p>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="ntv2" id="fabric中的对象">Fabric中的对象</h2>
      <p data-anchor-id="xpzq">
        我们已经看到如何通过实例化
        <code>fabric.Rect</code>构造函数来处理矩形。当然，Fabric也涵盖了所有其他的基本形状：圆，三角形，椭圆等。所有的这些在就是Fabric“命名空间”下的：
        <code>fabric.Circle</code>，
        <code>fabric.Triangle</code>，
        <code>fabric.Ellipse</code>等。
      </p>
      <p data-anchor-id="pvad">Fabric提供了7种基础形状：</p>
      <ul data-anchor-id="dzzk">
        <li>
          <a href="http://fabricjs.com/docs/fabric.Circle.html" target="_blank">fabric.Circle</a>
        </li>
        <li>
          <a href="http://fabricjs.com/docs/fabric.Ellipse.html" target="_blank">fabric.Ellipse</a>
        </li>
        <li>
          <a href="http://fabricjs.com/docs/fabric.Line.html" target="_blank">fabric.Line</a>
        </li>
        <li>
          <a href="http://fabricjs.com/docs/fabric.Polygon.html" target="_blank">fabric.Polygon</a>
        </li>
        <li>
          <a href="http://fabricjs.com/docs/fabric.Polyline.html" target="_blank">fabric.Polyline</a>
        </li>
        <li>
          <a href="http://fabricjs.com/docs/fabric.Rect.html" target="_blank">fabric.Rect</a>
        </li>
        <li>
          <a href="http://fabricjs.com/docs/fabric.Triangle.html" target="_blank">fabric.Triangle</a>
        </li>
      </ul>
      <p data-anchor-id="achh">想画一个圈子？只需创建一个圆形对象，并将其添加到画布。与任何其他基本形状相同：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="zskd" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> circle </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span></code></li><li
  class="L2"
><code class="language-js"><span class="pun">});</span></code></li><li class="L3"><code class="language-js"><span class="kwd">var</span><span class="pln"> triangle </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Triangle</span><span class="pun">({</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">30</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'blue'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span></code></li><li
  class="L5"
><code class="language-js"><span class="pun">});</span></code></li><li class="L6"><code class="language-js"></code></li><li class="L7"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">circle</span><span class="pun">,</span><span class="pln"> triangle</span><span class="pun">);</span></code></li></ol></pre>
      <p data-anchor-id="ycru">
        <img src="http://fabricjs.com/article_assets/4.png" alt=" " title>
      </p>
      <p data-anchor-id="3pd6">这是一个绿色的圆形在100，100的位置，蓝色的三角形在50，50的位置。</p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="7gvk" id="操作对象">操作对象</h3>
      <p
        data-anchor-id="rvxl"
      >创建图形对象矩形，圆形或其他东西，当然只是开始。在某些时候，我们可能想修改这些对象。或许某些行为需要触发状态的变化，或进行某种动画。或者我们可能希望在某些鼠标交互中更改对象属性（颜色，不透明度，大小，位置）。</p>
      <p data-anchor-id="y094">Fabric为我们处理画布渲染和状态管理。我们只需要自己修改对象。</p>
      <p data-anchor-id="uent">
        以前的例子演示了
        <code>set</code>方法，以及如何从对象前一个位置调用
        <code>set（{left：20，top：50}）</code>来移动对象。以类似的方式，我们可以改变对象的任何其他属性。但这些属性是什么？
      </p>
      <p data-anchor-id="9v9u">
        那么，正如你所期望的那样，可以改变定位：
        <strong>top</strong>，
        <strong>left</strong>。尺寸：
        <strong>width</strong>，
        <strong>height</strong>。渲染：
        <strong>fill</strong>,
        <strong>opacity</strong>,
        <strong>stroke</strong>,
        <strong>strokeWidth</strong>。缩放和旋转：
        <strong>scaleX</strong>,
        <strong>scaleY</strong>,
        <strong>angle</strong>;甚至可以翻转：
        <strong>flipX</strong>，
        <strong>flipY</strong>。歪斜：
        <strong>skewX</strong>，
        <strong>skewY</strong>。
      </p>
      <p data-anchor-id="f67v">
        是的，在Fabric中翻转对象非常简单，将
        <code>flip[X|Y]</code>设置为
        <code>true</code>即可。
      </p>
      <p data-anchor-id="2sin">
        您可以通过
        <code>get</code>方法读取任何这些属性，并通过
        <code>set</code>进行设置。我们尝试改变一些红色矩形的属性：
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="5lgo" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'c'</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"><span class="pun">...</span></code></li><li class="L2"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">rect</span><span class="pun">);</span></code></li><li
  class="L3"
><code class="language-js"></code></li><li class="L4"><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">(</span><span class="str">'fill'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'red'</span><span class="pun">);</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">({</span><span class="pln"> strokeWidth</span><span class="pun">:</span><span class="pln"> </span><span class="lit">5</span><span class="pun">,</span><span class="pln"> stroke</span><span class="pun">:</span><span class="pln"> </span><span class="str">'rgba(100,200,200,0.5)'</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">(</span><span class="str">'angle'</span><span class="pun">,</span><span class="pln"> </span><span class="lit">15</span><span class="pun">).</span><span class="kwd">set</span><span class="pun">(</span><span class="str">'flipY'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">);</span></code></li></ol></pre>
      <p data-anchor-id="49ih">
        <img src="http://fabricjs.com/article_assets/5.png" alt=" " title>
      </p>
      <p
        data-anchor-id="1td1"
      >首先，我们将“fill”值设置为“red”，使对象成为红色。下一个语句设置“strokeWidth”和“stroke”值，给出矩形为淡绿色的5px笔画。最后，我们正在改变“angle”和“flipY”的属性。注意每个3个语句中的每个语句使用的语法略有不同。</p>
      <p data-anchor-id="xeah">
        这表明
        <code>set</code>是一种通用的方法。你可能经常使用它，所以它被设计得尽可能的方便。
      </p>
      <p data-anchor-id="qawn">
        说了如何
        <code>set</code>的方法，那么如何获取呢？这就有了与之对应的
        <code>get</code>方法，h还有一些具体的
        <code>get*</code>，要读取对象的“width”值，可以使用
        <code>get（'width'</code>）或
        <code>getWidth（）</code>。获取“scaleX”值使用
        <code>get（'scaleX'）</code>或
        <code>getScaleX（）</code>，等等。对于每个“公有”对象属性（“stroke”，“strokeWidth”，“angle”等），都可以使用getWidth或getScaleX等方法。
      </p>
      <p data-anchor-id="krgb">
        您可能会注意到，在早期的示例中，对象在实例化的时候，我们直接传入的配置参数，而上边的例子我们才实例化对象的时候没有传入配置，而是使用的
        <code>set</code>方法传递配置。这是因为它是完全一样的。您可以在创建时“配置”对象，也可以使用
        <code>set</code>方法:
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="bcz6" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> rect </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">10</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#f55'</span><span class="pun">,</span><span class="pln"> opacity</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.7</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L1"
><code class="language-js"></code></li><li class="L2"><code class="language-js"><span class="com">// 或者这样</span></code></li><li class="L3"><code class="language-js"></code></li><li class="L4"><code class="language-js"><span class="kwd">var</span><span class="pln"> rect </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">();</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">10</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#f55'</span><span class="pun">,</span><span class="pln"> opacity</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.7</span><span class="pln"> </span><span class="pun">});</span></code></li></ol></pre>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="h1ln" id="默认选项">默认选项</h3>
      <p data-anchor-id="004h">在这一点上，您可能会问，当我们创建对象而不传递任何“配置”对象时会发生什么。它还有这些属性吗？</p>
      <p data-anchor-id="l8cv">当然是。 Fabric中的对象总是具有默认的属性集。当在创建过程中发生变化时，这是对给定的“给定”的默认属性集。我们可以自己试试看看：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="v4dw" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> rect </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">();</span><span class="pln"> </span><span class="com">// 注意没有传递参数</span></code></li><li
  class="L1"
><code class="language-js"></code></li><li class="L2"><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="str">'width'</span><span class="pun">);</span><span class="pln"> </span><span class="com">// 0</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="str">'height'</span><span class="pun">);</span><span class="pln"> </span><span class="com">// 0</span></code></li><li
  class="L4"
><code class="language-js"></code></li><li class="L5"><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="str">'left'</span><span class="pun">);</span><span class="pln"> </span><span class="com">// 0</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="str">'top'</span><span class="pun">);</span><span class="pln"> </span><span class="com">// 0</span></code></li><li
  class="L7"
><code class="language-js"></code></li><li class="L8"><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="str">'fill'</span><span class="pun">);</span><span class="pln"> </span><span class="com">// rgb(0,0,0)</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="str">'stroke'</span><span class="pun">);</span><span class="pln"> </span><span class="com">// null</span></code></li><li
  class="L0"
><code class="language-js"></code></li><li class="L1"><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="str">'opacity'</span><span class="pun">);</span><span class="pln"> </span><span class="com">// 1</span></code></li></ol></pre>
      <p data-anchor-id="wca6">
        我们的矩形有一个默认的属性集。它位于0,0，是黑色，完全不透明，没有描边，
        <strong>没有尺寸</strong>（宽度和高度为0）。由于没有尺寸，我们无法在画布上看到它。但是给它宽度/高度的任何正值肯定会在画布的左上角显示一个黑色矩形。
      </p>
      <p data-anchor-id="xqa3">
        <img src="http://fabricjs.com/article_assets/6.png" alt=" " title>
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="gq31" id="层次和继承">层次和继承</h3>
      <p data-anchor-id="abey">Fabric对象不仅彼此独立存在。它们形成一个非常精确的层次。</p>
      <p data-anchor-id="u0lg">
        大多数对象从根
        <code>fabric.Object</code>继承。
        <code>fabric.Object</code>几乎代表二维形状，位于二维canvas平面，它是一个具有left / top和width / height属性的实体，以及一些其他图形特征。我们在物体上看到的那些属性：fill，stroke，angle，opacity，flip[X|Y]等，对于从
        <code>fabric.Object</code>继承的所有Fabric对象都是通用的。
      </p>
      <p data-anchor-id="uie6">
        这个继承允许我们在
        <code>fabric.Object</code>上定义方法，并在所有的“类”之间共享它们。例如，如果您想在所有对象上使用
        <code>getAngleInRadians</code>方法，您只需在
        <code>fabric.Object.prototype</code>上创建它即可：
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="eqjn" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">fabric</span><span class="pun">.</span><span class="typ">Object</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">getAngleInRadians </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="str">'angle'</span><span class="pun">)</span><span class="pln"> </span><span class="pun">/</span><span class="pln"> </span><span class="lit">180</span><span class="pln"> </span><span class="pun">*</span><span class="pln"> </span><span class="typ">Math</span><span class="pun">.</span><span class="pln">PI</span><span class="pun">;</span></code></li><li
  class="L2"
><code class="language-js"><span class="pun">};</span></code></li><li class="L3"><code class="language-js"></code></li><li class="L4"><code class="language-js"><span class="kwd">var</span><span class="pln"> rect </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> angle</span><span class="pun">:</span><span class="pln"> </span><span class="lit">45</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="pln">getAngleInRadians</span><span class="pun">();</span><span class="pln"> </span><span class="com">// 0.785...</span></code></li><li
  class="L6"
><code class="language-js"></code></li><li class="L7"><code class="language-js"><span class="kwd">var</span><span class="pln"> circle </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span><span class="pln"> angle</span><span class="pun">:</span><span class="pln"> </span><span class="lit">30</span><span class="pun">,</span><span class="pln"> radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">10</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">circle</span><span class="pun">.</span><span class="pln">getAngleInRadians</span><span class="pun">();</span><span class="pln"> </span><span class="com">// 0.523...</span></code></li><li
  class="L9"
><code class="language-js"></code></li><li class="L0"><code class="language-js"><span class="pln">circle instanceof fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">;</span><span class="pln"> </span><span class="com">// true</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">circle instanceof fabric</span><span class="pun">.</span><span class="typ">Object</span><span class="pun">;</span><span class="pln"> </span><span class="com">// true</span></code></li></ol></pre>
      <p data-anchor-id="1frq">您可以看到，方法立即在所有实例上可用。</p>
      <p data-anchor-id="todh">
        虽然子类“class”继承自
        <code>fabric.Object</code>，但它们通常也定义自己的方法和属性。例如，
        <code>fabric.Circle</code>需要有“radius”属性。而
        <code>Fabric.Image</code>（我们稍后会看），需要使用
        <code>getElement</code> /
        <code>setElement</code>方法来访问/设置图像实例的真实HTML
        <code>&lt;img&gt;</code>元素。
      </p>
      <p data-anchor-id="ld7h">使用原型来获取自定义渲染和行为对于高级项目来说是非常普遍的。</p>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="d1un" id="canvas">Canvas</h2>
      <p data-anchor-id="v2ao">现在我们更详细地讨论了对象，让我们回到canvas。</p>
      <p data-anchor-id="29es">
        首先你可以看到所有的Fabric例子如果创建canvas对象：
        <code>new fabric.Canvas（'...'）</code>。
        <code>fabric.Canvas</code>作为围绕
        <code>&lt;canvas&gt;</code>元素的包装器，并负责管理该canvas上的所有Fabric对象。它需要一个元素的id，并返回一个
        <code>fabric.Canvas</code>的实例。
      </p>
      <p data-anchor-id="bofd">
        我们可以
        <code>add</code>对象，引用它们，或者
        <code>remove</code>它们：
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="1sa5" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'c'</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"><span class="kwd">var</span><span class="pln"> rect </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">();</span></code></li><li
  class="L2"
><code class="language-js"></code></li><li class="L3"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">rect</span><span class="pun">);</span><span class="pln"> </span><span class="com">// 添加对象</span></code></li><li
  class="L4"
><code class="language-js"></code></li><li class="L5"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">item</span><span class="pun">(</span><span class="lit">0</span><span class="pun">);</span><span class="pln"> </span><span class="com">// 源于刚刚添加的第一个矩形对象</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">getObjects</span><span class="pun">();</span><span class="pln"> </span><span class="com">// 获取所有对象（只有一个矩形）</span></code></li><li
  class="L7"
><code class="language-js"></code></li><li class="L8"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">remove</span><span class="pun">(</span><span class="pln">rect</span><span class="pun">);</span><span class="pln"> </span><span class="com">// 移除这个矩形</span></code></li></ol></pre>
      <p data-anchor-id="v5on">
        管理对象是Fabric的主要用途。其实它本事也是
        <strong>可配置</strong>的，需要为整个画布设置背景颜色或图像？将所有内容剪切到某个区域？设置不同的宽度/高度？指定画布是否互动？所有这些选项（和其他）可以在
        <code>fabric.Canvas</code>上设置，无论是在创建时还是之后：
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="9hij" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'c'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  backgroundColor</span><span class="pun">:</span><span class="pln"> </span><span class="str">'rgb(100,100,200)'</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  selectionColor</span><span class="pun">:</span><span class="pln"> </span><span class="str">'blue'</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  selectionLineWidth</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  </span><span class="com">// ...</span></code></li><li
  class="L5"
><code class="language-js"><span class="pun">});</span></code></li><li class="L6"><code class="language-js"></code></li><li class="L7"><code class="language-js"><span class="com">// 或者</span></code></li><li class="L8"><code class="language-js"></code></li><li class="L9"><code class="language-js"><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'c'</span><span class="pun">);</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">setBackgroundImage</span><span class="pun">(</span><span class="str">'http://...'</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">onFpsUpdate </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(){</span><span class="pln"> </span><span class="com">/* ... */</span><span class="pln"> </span><span class="pun">};</span></code></li><li
  class="L2"
><code class="language-js"><span class="com">// ...</span></code></li></ol></pre>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="55sc" id="互动">互动</h3>
      <p data-anchor-id="m030">虽然我们是一个canvas元素的主题，我们来谈谈互动。Fabric的独特功能之一，在我们刚刚看到的所有的对象模型之上，是一层交互性。</p>
      <p data-anchor-id="mhjj">
        存在对象模型以允许编程访问和操纵画布上的对象。但在外部，在用户层面上，有一种方式可以通过鼠标（或触摸，触摸设备）来操纵这些对象。一旦您通过
        <code>new fabric.Canvas（'...'）</code>初始化画布，可以选择对象，拖动它们，缩放或旋转它们，甚至组合在一起操纵一个
        <strong>组合</strong>！
      </p>
      <p data-anchor-id="lrq6">
        <img src="http://fabricjs.com/article_assets/7.png" alt=" " title>
        <br>
        <img src="http://fabricjs.com/article_assets/8.png" alt=" " title>
      </p>
      <p data-anchor-id="0vmv">如果我们希望用户允许在画布上拖动某些东西，比如一个图片，我们需要做的就是初始化画布并在其上添加一个对象。不需要额外的配置或设置。</p>
      <p
        data-anchor-id="84m3"
      >为了控制这种交互性，我们可以在画布上使用Fabric的“selection”布尔属性，结合各个对象的“selectable”布尔属性来使用。</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="lhkg" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'c'</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"><span class="pun">...</span></code></li><li class="L2"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">selection </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span><span class="pln"> </span><span class="com">// 禁止所有选中</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">(</span><span class="str">'selectable'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">);</span><span class="pln"> </span><span class="com">// 只是禁止这个矩形选中</span></code></li></ol></pre>
      <p data-anchor-id="pdrm">
        但是如果你不想要这样的互动层呢？如果是这样，您可以随时用
        <code>fabric.StaticCanvas</code>替换
        <code>fabric.Canvas</code>。初始化的语法是相同的;初始化时使用
        <code>StaticCanvas</code>而不是
        <code>Canvas</code>。
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="4hh6" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> staticCanvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">StaticCanvas</span><span class="pun">(</span><span class="str">'c'</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"></code></li><li class="L2"><code class="language-js"><span class="pln">staticCanvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">    width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">10</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span><span class="pun">,</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">    left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">    fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'yellow'</span><span class="pun">,</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">    angle</span><span class="pun">:</span><span class="pln"> </span><span class="lit">30</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">  </span><span class="pun">}));</span></code></li></ol></pre>
      <p
        data-anchor-id="6koa"
      >这将创建一个“更轻”的画布版本，没有任何事件处理逻辑。请注意，您仍然有一个完整的对象模型来使用：添加对象，删除或修改它们，以及更改任何画布配置，所有这一切仍然有效。这只是事件处理没有了。</p>
      <p data-anchor-id="was4">
        当我们浏览自定义构建选项时，您会看到，如果
        <code>StaticCanvas</code>是您需要的选项，您甚至可以创建一个较轻的Fabric版本。如果您需要非交互式图表，或者在应用程序中使用过滤器的非交互式图像，这可能是一个不错的选择。
      </p>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="szqu" id="图像">图像</h2>
      <p data-anchor-id="qsov">说到图像...</p>
      <p data-anchor-id="qclm">
        在画布上添加矩形和圆圈很有趣，但为什么我们不玩某些图像？正如你现在想象的那样，Fabric使这个很容易。我们来实例化
        <code>fabric.Image</code>对象并将其添加到画布中：
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="fwjk" style><ol class="linenums"><li class="L0"><code class="language-html"><span class="tag">&lt;canvas</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"c"</span><span class="tag">&gt;&lt;/canvas&gt;</span></code></li><li
  class="L1"
><code class="language-html"><span class="tag">&lt;img</span><span class="pln"> </span><span class="atn">src</span><span class="pun">=</span><span class="atv">"my_image.png"</span><span class="pln"> </span><span class="atn">id</span><span class="pun">=</span><span class="atv">"my-image"</span><span class="tag">&gt;</span></code></li></ol></pre>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="r7nb" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'c'</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"><span class="kwd">var</span><span class="pln"> imgElement </span><span class="pun">=</span><span class="pln"> document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'my-image'</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="kwd">var</span><span class="pln"> imgInstance </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Image</span><span class="pun">(</span><span class="pln">imgElement</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  angle</span><span class="pun">:</span><span class="pln"> </span><span class="lit">30</span><span class="pun">,</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">  opacity</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.85</span></code></li><li
  class="L7"
><code class="language-js"><span class="pun">});</span></code></li><li class="L8"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">imgInstance</span><span class="pun">);</span></code></li></ol></pre>
      <p data-anchor-id="ecmv">
        注意我们如何将图像元素传递给
        <code>fabric.Image</code>构造函数。这将创建一个
        <code>fabric.Image</code>的实例，就像文档中的图像一样。此外，我们立即将左/顶值设置为100/100，角度为30，不透明度为0.85。一旦添加到画布中，图像呈现在100,100位置，30度角，并且稍微透明！不错。
      </p>
      <p data-anchor-id="6ap9">
        <img src="http://fabricjs.com/article_assets/9.png" alt=" " title>
      </p>
      <p data-anchor-id="qhfx">
        现在，如果我们在文档中真的没有图像，而只是一个图像的URL呢？我们来看看如何使用
        <code>fabric.Image.fromURL</code>：
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="idrv" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">fabric</span><span class="pun">.</span><span class="typ">Image</span><span class="pun">.</span><span class="pln">fromURL</span><span class="pun">(</span><span class="str">'my_image.png'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">oImg</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">oImg</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="wzpv">
        看起来很简单，不是吗？只需调用具有图像URL的
        <code>fabric.Image.fromURL</code>，并在加载和创建图像后给它一个回调函数来调用。回调函数接收已经创建的
        <code>fabric.Image</code>对象作为第一个参数。此时，您可以将其添加到画布中，也可以先更改，然后添加到画布：
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="lwxi" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">fabric</span><span class="pun">.</span><span class="typ">Image</span><span class="pun">.</span><span class="pln">fromURL</span><span class="pun">(</span><span class="str">'my_image.png'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">oImg</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="com">// 将其缩小，然后将其翻转，然后再将其添加到画布上</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  oImg</span><span class="pun">.</span><span class="pln">scale</span><span class="pun">(</span><span class="lit">0.5</span><span class="pun">).</span><span class="kwd">set</span><span class="pun">(</span><span class="str">'</span><span class="pln">flipX</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">);</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">oImg</span><span class="pun">);</span></code></li><li
  class="L4"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="ajpu" id="路径paths">路径（Paths）</h2>
      <p data-anchor-id="ca4r">我们已经看过简单的形状，然后看了图像。那么更复杂，丰富的形状和内容呢？</p>
      <p data-anchor-id="xm3j">认识更强大的搭档：路径（Path）和组合（Group）</p>
      <p
        data-anchor-id="wr05"
      >Fabric中的path表示可以填充，描边和修改的形状的轮廓。path由一系列命令组成，基本上模仿了从一个点到另一个点的笔。借助“move”，“line”，“curve”或“arc”等命令，path可以形成令人难以置信的复杂形状。在Paths（路径组合）团队的帮助下，可能性更大。</p>
      <p data-anchor-id="p0r4">
        Fabric中的路径与
        <a href="http://www.w3.org/TR/SVG/paths.html#PathElement" target="_blank">SVG 元素</a>非常相似。它们使用相同的命令，可以从
        <code>&lt;path&gt;</code>元素创建，并将其序列化。稍后我们将更加仔细地观察序列化和SVG解析，但现在值得一提的是，您很可能很少手动创建Path实例，相反，您将使用Fabric的内置SVG解析器。但是要了解Path对象是什么，我们来尝试用手创建一个简单的对象：
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="gcdk" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'c'</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"><span class="kwd">var</span><span class="pln"> path </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Path</span><span class="pun">(</span><span class="str">'M 0 0 L 200 100 L 170 200 z'</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">path</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">({</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">120</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">120</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">path</span><span class="pun">);</span></code></li></ol></pre>
      <p data-anchor-id="foqh">
        <img src="http://fabricjs.com/article_assets/10.png" alt=" " title>
      </p>
      <p data-anchor-id="tbs9">
        我们通过传递一串路径指令，实例化
        <code>fabric.Path</code>对象，虽然看起来很神秘，但实际上很容易理解。“M”代表“move”命令，并告诉笔移动到
        <code>0，0</code>坐标。“L”表示“line”，笔画线为
        <code>200，100</code>坐标。然后，另一个“L”创建一个连接
        <code>170，200</code>坐标的线段。最后，“z”指示绘画笔关闭当前路径并完成形状。结果，我们得到一个三角形。
      </p>
      <p data-anchor-id="h4jp">
        由于
        <code>fabric.Path</code>与Fabric中的任何其他对象一样，我们还可以更改其某些属性。但是我们可以修改更多：
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="d4w5" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pun">...</span></code></li><li class="L1"><code class="language-js"><span class="kwd">var</span><span class="pln"> path </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Path</span><span class="pun">(</span><span class="str">'M 0 0 L 300 100 L 200 300 z'</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pun">...</span></code></li><li class="L3"><code class="language-js"><span class="pln">path</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">({</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span><span class="pun">,</span><span class="pln"> stroke</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span><span class="pun">,</span><span class="pln"> opacity</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.5</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">path</span><span class="pun">);</span></code></li></ol></pre>
      <p data-anchor-id="91r0">
        <img src="http://fabricjs.com/article_assets/11.png" alt=" " title>
      </p>
      <p data-anchor-id="od70">出于好奇，我们来看一下稍微更复杂的path语法。你会看到为什么手动创建路径可能不是最好的主意。</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="uk9s" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pun">...</span></code></li><li class="L1"><code class="language-js"><span class="kwd">var</span><span class="pln"> path </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Path</span><span class="pun">(</span><span class="str">'</span><span class="pln">M121</span><span class="pun">.</span><span class="lit">32</span><span class="pun">,</span><span class="lit">0L44.58</span><span class="pun">,</span><span class="lit">0C36.67</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">29.5</span><span class="pun">,</span><span class="lit">3.22</span><span class="pun">,</span><span class="lit">24.31</span><span class="pun">,</span><span class="lit">8.41</span><span class="pln">\</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">c</span><span class="pun">-</span><span class="lit">5.19</span><span class="pun">,</span><span class="lit">5.19</span><span class="pun">-</span><span class="lit">8.41</span><span class="pun">,</span><span class="lit">12.37</span><span class="pun">-</span><span class="lit">8.41</span><span class="pun">,</span><span class="lit">20.28c0</span><span class="pun">,</span><span class="lit">15.82</span><span class="pun">,</span><span class="lit">12.87</span><span class="pun">,</span><span class="lit">28.69</span><span class="pun">,</span><span class="lit">28.69</span><span class="pun">,</span><span class="lit">28.69c0</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">4.4</span><span class="pun">,</span><span class="pln">\</span></code></li><li
  class="L3"
><code class="language-js"><span class="lit">0</span><span class="pun">,</span><span class="lit">7.48</span><span class="pun">,</span><span class="lit">0C36.66</span><span class="pun">,</span><span class="lit">72.78</span><span class="pun">,</span><span class="lit">8.4</span><span class="pun">,</span><span class="lit">101.04</span><span class="pun">,</span><span class="lit">8.4</span><span class="pun">,</span><span class="lit">101.04C2.98</span><span class="pun">,</span><span class="lit">106.45</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">113.66</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">121.32</span><span class="pln">\</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">c0</span><span class="pun">,</span><span class="lit">7.66</span><span class="pun">,</span><span class="lit">2.98</span><span class="pun">,</span><span class="lit">14.87</span><span class="pun">,</span><span class="lit">8.4</span><span class="pun">,</span><span class="lit">20.29l0</span><span class="pun">,</span><span class="lit">0c5.42</span><span class="pun">,</span><span class="lit">5.42</span><span class="pun">,</span><span class="lit">12.62</span><span class="pun">,</span><span class="lit">8.4</span><span class="pun">,</span><span class="lit">20.28</span><span class="pun">,</span><span class="lit">8.4c7.66</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">14.87</span><span class="pln">\</span></code></li><li
  class="L5"
><code class="language-js"><span class="pun">-</span><span class="lit">2.98</span><span class="pun">,</span><span class="lit">20.29</span><span class="pun">-</span><span class="lit">8.4c0</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">28.26</span><span class="pun">-</span><span class="lit">28.25</span><span class="pun">,</span><span class="lit">43.66</span><span class="pun">-</span><span class="lit">43.66c0</span><span class="pun">,</span><span class="lit">3.08</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">7.48</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">7.48c0</span><span class="pun">,</span><span class="lit">15.82</span><span class="pun">,</span><span class="pln">\</span></code></li><li
  class="L6"
><code class="language-js"><span class="lit">12.87</span><span class="pun">,</span><span class="lit">28.69</span><span class="pun">,</span><span class="lit">28.69</span><span class="pun">,</span><span class="lit">28.69c7.66</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">14.87</span><span class="pun">-</span><span class="lit">2.99</span><span class="pun">,</span><span class="lit">20.29</span><span class="pun">-</span><span class="lit">8.4c5.42</span><span class="pun">-</span><span class="lit">5.42</span><span class="pun">,</span><span class="lit">8.4</span><span class="pun">-</span><span class="lit">12.62</span><span class="pun">,</span><span class="lit">8.4</span><span class="pln">\</span></code></li><li
  class="L7"
><code class="language-js"><span class="pun">-</span><span class="lit">20.28l0</span><span class="pun">-</span><span class="lit">76.74c0</span><span class="pun">-</span><span class="lit">7.66</span><span class="pun">-</span><span class="lit">2.98</span><span class="pun">-</span><span class="lit">14.87</span><span class="pun">-</span><span class="lit">8.4</span><span class="pun">-</span><span class="lit">20.29C136.19</span><span class="pun">,</span><span class="lit">2.98</span><span class="pun">,</span><span class="lit">128.98</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">121.32</span><span class="pun">,</span><span class="lit">0z</span><span class="str">');</span></code></li><li
  class="L8"
><code class="language-js"></code></li><li class="L9"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">path</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">({</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">200</span><span class="pln"> </span><span class="pun">}));</span></code></li></ol></pre>
      <p data-anchor-id="1rqo">看一下这里发生了什么？</p>
      <p
        data-anchor-id="zhwo"
      >那么“M”仍然代表“move”的命令，所以笔在“121.32,0”点开始绘画。然后有“L”命令使其为“44.58,0”。到现在为止还可以理解。下一步是什么？ “C”指令，代表“cubic bezier”（贝塞尔曲线）。它使笔从当前点绘制贝塞尔曲线到“36.67,0”，它以“29.5,3.22”为起点的控制点，“24.31,8.41”为终点的控制点。这整个事情之后是十几个其他的“cubic bezier”命令，最终创建一个漂亮的箭头形状。</p>
      <p data-anchor-id="fjs4">
        <img src="http://fabricjs.com/article_assets/12.png" alt=" " title>
      </p>
      <p data-anchor-id="cw4d">
        不过你可能永远不会使用这样复杂的命令，相反，您可能需要使用像
        <code>fabric.loadSVGFromString</code>或
        <code>fabric.loadSVGFromURL</code>方法来加载整个SVG文件,然后让Fabric的SVG解析器完成对所有SVG元素的遍历和创建相应的Path对象的工作。
      </p>
      <p data-anchor-id="dsos">
        谈到整个SVG文件，而Fabric的路径通常表示SVG
        <code>&lt;path&gt;</code>元素，SVG文档中通常存在的路径集合表示为Group（
        <code>fabric.Group</code>实例）。你可以想像，Group(组合)只不过是一组Path实例和其他对象。而且由于
        <code>fabric.Group</code>从
        <code>fabric.Object</code>继承，它可以像任何其他对象一样添加到画布中，并以相同的方式进行操作。
      </p>
      <p
        data-anchor-id="6yc1"
      >就像Path一样，你可能不会直接的使用它。但是，如果您在解析SVG文档之后偶然发现了一个问题，那么您将确切地知道它是什么以及它的目的是什么。</p>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="vyyc" id="后记">后记</h2>
      <p
        data-anchor-id="szk2"
      >我们只触及了Fabric的表面。你现在可以很容易地创建任何一个简单的形状，复杂的形状，图像;将它们添加到画布中，并以任何你想要的方式进行修改：位置、尺寸、角度、颜色、笔画、不透明度等。</p>
      <p data-anchor-id="2vvj">在本系列的下一部分，我们将看看组合，动画，文本，SVG解析，渲染，序列化，事件，图像，滤镜等。</p>
      <p data-anchor-id="j9i8">
        与此同时，你可以随意查看带注释的
        <a href="http://fabricjs.com/demos/" target="_blank">演示</a>或
        <a href="http://fabricjs.com/benchmarks/" target="_blank">基准</a>，加入
        <a
          href="https://groups.google.com/forum/?fromgroups#!forum/fabricjs"
          target="_blank"
        >Google小组</a>或
        <a href="http://stackoverflow.com/questions/tagged/fabricjs" target="_blank">其他地方</a>的讨论，或者直接访问
        <a href="http://fabricjs.com/docs/" target="_blank">docs</a>、
        <a href="https://github.com/kangax/fabric.js/wiki" target="_blank">wiki</a>和
        <a href="https://github.com/kangax/fabric.js" target="_blank">源代码</a>。
      </p>
      <p data-anchor-id="zrls">做一些有趣的实验！我希望你喜欢这次旅行。</p>
    </div>
  </div>
</template>
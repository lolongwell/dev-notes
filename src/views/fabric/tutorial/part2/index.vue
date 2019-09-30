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
      <h1 data-anchor-id="coyw" id="fabricjs介绍-第二部分">Fabric.js介绍 第二部分</h1>
      <p
        data-anchor-id="s3vq"
      >在本系列的第一部分，我们只开始熟悉Fabric.js。我们研究了Fabric在其对象模型和对象层次结构中使用Fabric的各种实例：简单的形状，图像和复杂的路径。我们还学习了如何使用画布上的Fabric对象执行简单的操作。</p>
      <p data-anchor-id="5gkk">既然基础知识都差不多了，让我们开始学习一些有趣的东西吧！</p>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="neh1" id="动画animate">动画（animate）</h2>
      <p
        data-anchor-id="6u4m"
      >没有听说过哪一个强大的canvas库是没有动画功能的，当然Fabric也不例外。既然有这样一个强大的对象模型和图形功能，那么没有内置动画简直就是一种耻辱。</p>
      <p data-anchor-id="rk7t">
        住改变任何对象的属性是多么容易？我们调用
        <code>set</code>方法，传递相应的值：
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="m4uo" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">(</span><span class="str">'angle'</span><span class="pun">,</span><span class="pln"> </span><span class="lit">45</span><span class="pun">);</span></code></li></ol></pre>
      <p data-anchor-id="ny0d">
        那么，动画对象就像一样简单。每个Fabric对象都有
        <code>animate</code>方法，它可以让对象执行动画。
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="n4xt" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="pln">animate</span><span class="pun">(</span><span class="str">'angle'</span><span class="pun">,</span><span class="pln"> </span><span class="lit">45</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  onChange</span><span class="pun">:</span><span class="pln"> canvas</span><span class="pun">.</span><span class="pln">renderAll</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="pln">canvas</span><span class="pun">)</span></code></li><li
  class="L2"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p
        data-anchor-id="qstn"
      >第一个参数是动画的属性，第二个参数是动画的最终位置，如果矩形为-15°角，我们传递45，这个矩形将从-15°到45°进行动画。第三个参数是一个可选的对象，指定动画的细节：持续时间，回调，动效等。</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="kc8r" style><ol class="linenums"><li class="L0"><code class="language-animate```的一个方便之处在于它还支持相对值。例如，如果要将对象向左移动100px，则可以这样做："></code></li><li
  class="L1"
><code class="language-animate```的一个方便之处在于它还支持相对值。例如，如果要将对象向左移动100px，则可以这样做："><span class="str">```js</span></code></li><li
  class="L2"
><code class="language-animate```的一个方便之处在于它还支持相对值。例如，如果要将对象向左移动100px，则可以这样做："><span class="str">rect.animate('left', '+=100', { onChange: canvas.renderAll.bind(canvas) });</span></code></li><li
  class="L3"
><code class="language-animate```的一个方便之处在于它还支持相对值。例如，如果要将对象向左移动100px，则可以这样做："></code></li><li
  class="L4"
><code class="language-animate```的一个方便之处在于它还支持相对值。例如，如果要将对象向左移动100px，则可以这样做："></code></li><li
  class="L5"
><code class="language-animate```的一个方便之处在于它还支持相对值。例如，如果要将对象向左移动100px，则可以这样做："><span class="str">&lt;div class="md-section-divider"&gt;&lt;/div&gt;</span></code></li></ol></pre>
      <p data-anchor-id="vb49">同样的，逆时针旋转5度，可以像这样完成：</p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="66wa" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="pln">animate</span><span class="pun">(</span><span class="str">'angle'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'-=5'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> onChange</span><span class="pun">:</span><span class="pln"> canvas</span><span class="pun">.</span><span class="pln">renderAll</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="pln">canvas</span><span class="pun">)</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L1"
><code class="language-js"></code></li><li class="L2"><code class="language-js"></code></li><li class="L3"><code class="language-js"><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-section-divider"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li></ol></pre>
      <p data-anchor-id="m3n0">
        你可能会想知道为什么我们总是在那里指定“onChange”回调。不是说第三个参数是可选的吗？是为了每个动画帧的渲染都能让我们看到实际的动画效果！您可以看到，当我们调用
        <code>animate</code>方法时，它只会随着时间的推移赋予属性值，遵循特定的算法(例如动效)。所以
        <code>rect.animate（'angle'，45）</code>会改变对象的角度，但不会在每次角度变化后重新渲染画布屏幕。我们显然需要这种重新渲染才能看到实际的动画。
      </p>
      <p data-anchor-id="cwtd">记住，在画布的下面有整个对象模型。对象有自己的属性和关系，而canvas只负责将它们的存在投射到外部世界。</p>
      <p data-anchor-id="9tl5">
        每次更改之后，
        <code>animate</code>不会自动重新绘制画布的原因是由于性能。毕竟，我们可以在画布上有数以千计的动画对象，如果每个对象都尝试重新渲染屏幕，这是非常不妥的。在许多对象的情况下，您可以使用像
        <code>requestAnimationFrame</code>（或其他基于定时器的）循环来独立地渲染画布，而不需要为每个对象调用
        <code>renderAll</code>。但大多数情况下，您可能需要将
        <code>canvas.renderAll</code>显式指定为“onChange”的回调。
      </p>
      <p data-anchor-id="pb62">那么我们可以通过哪些其他选项来动画？</p>
      <ul data-anchor-id="bc39">
        <li>
          <strong>from</strong> 允许指定动画属性的起始值（如果我们不希望使用当前值）。
        </li>
        <li>
          <strong>duration</strong> 默认为500ms。可以用来改变动画的持续时间。
        </li>
        <li>
          <strong>onComplete</strong> 动画结束之后的回调。
        </li>
        <li>
          <strong>easing</strong> 动效函数。
        </li>
      </ul>
      <p data-anchor-id="ps7w">除了easing，所有这些选择都应该是不言而喻的。我们来看看吧。</p>
      <p data-anchor-id="hhri">
        默认情况下，动画使用“easeInSine”动效执行。如果这不是你需要的，那么在
        <code>fabric.util.ease</code>下有一大堆动效的选项。例如，如果我们想以一种有弹性的方式将对象移到左边：
      </p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="s0ou" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="pln">animate</span><span class="pun">(</span><span class="str">'left'</span><span class="pun">,</span><span class="pln"> </span><span class="lit">500</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  onChange</span><span class="pun">:</span><span class="pln"> canvas</span><span class="pun">.</span><span class="pln">renderAll</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="pln">canvas</span><span class="pun">),</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  duration</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1000</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  easing</span><span class="pun">:</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">ease</span><span class="pun">.</span><span class="pln">easeOutBounce</span></code></li><li
  class="L4"
><code class="language-js"><span class="pun">});</span></code></li><li class="L5"><code class="language-js"></code></li><li class="L6"><code class="language-js"></code></li><li class="L7"><code class="language-js"><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-section-divider"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li></ol></pre>
      <p data-anchor-id="laiy">
        注意使用了
        <code>fabric.util.ease.easeOutBounce</code>作为easing的值，其他值得注意的还包括
        <code>easeInCubic</code>，
        <code>easeOutCubic</code>，
        <code>easeInElastic</code>，
        <code>easeOutElastic</code>，
        <code>easeInBounce</code>和
        <code>easeOutExpo</code>。
      </p>
      <p
        data-anchor-id="fuir"
      >所以这覆盖了Fabric的动画部分。只是给你一些可能的想法：使对象的angle改变来形成旋转动画，使对象的top/left改变来形成移动的动画，使对象的width/height改变来形成大小缩放的动画，等等。</p>
      <h2 data-anchor-id="uixn" id="图像滤镜filters">图像滤镜（filters）</h2>
      <p data-anchor-id="2iqd">
        在第一节中我们学习了在Fabric中如何使用图像：
        <code>fabric.Image</code>构造函数，它接受图像元素。还有
        <code>fabric.Image.fromURL</code>方法，可以创建URL字符串的图像实例。并且这些图像可以像其他对象一样投射到canvas画布上。
      </p>
      <p data-anchor-id="xssf">但是，像图像这种有趣的东西，对他们应用图像滤镜更加酷！</p>
      <p
        data-anchor-id="aubf"
      >Fabric在默认情况下提供了很少的滤镜，对于支持或不支持WEBGL的浏览器都可以使用，也很容易去定义。一些你可能非常熟悉的内置的滤镜：去除白色背景、灰度滤镜、反色或亮度调色。其他的则可能不太受欢迎： colormatrix，sepia，noise。</p>
      <p data-anchor-id="a0go">
        那么我们怎么在Fabric中使用滤镜呢？
        <code>fabric.Image</code>的每个实例都有“filters”属性，它是一个简单的滤镜数组。该数组中的每个滤镜都是一个Fabric滤镜的一个实例，或您自己的自定义滤镜的一个实例。
      </p>
      <p data-anchor-id="a01f">让我们创建一个灰度（Grayscale）图像：</p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="uhi6" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">fabric</span><span class="pun">.</span><span class="typ">Image</span><span class="pun">.</span><span class="pln">fromURL</span><span class="pun">(</span><span class="str">'pug.jpg'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">img</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="com">// 添加滤镜</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  img</span><span class="pun">.</span><span class="pln">filters</span><span class="pun">.</span><span class="pln">push</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Image</span><span class="pun">.</span><span class="pln">filters</span><span class="pun">.</span><span class="typ">Grayscale</span><span class="pun">());</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  </span><span class="com">// 图片加载完成之后，应用滤镜效果</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  img</span><span class="pun">.</span><span class="pln">applyFilters</span><span class="pun">();</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  </span><span class="com">// 将处理后的图片添加到canvas画布上</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">img</span><span class="pun">);</span></code></li><li
  class="L7"
><code class="language-js"><span class="pun">});</span></code></li><li class="L8"><code class="language-js"></code></li><li class="L9"><code class="language-js"></code></li><li class="L0"><code class="language-js"><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-section-divider"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li></ol></pre>
      <p data-anchor-id="iu8c">
        <img src="http://fabricjs.com/article_assets/2_1.png" alt=" " title>
      </p>
      <p data-anchor-id="jmwm">图像的色偏（Sepia）版本怎么样？</p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="43ue" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">fabric</span><span class="pun">.</span><span class="typ">Image</span><span class="pun">.</span><span class="pln">fromURL</span><span class="pun">(</span><span class="str">'pug.jpg'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">img</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  img</span><span class="pun">.</span><span class="pln">filters</span><span class="pun">.</span><span class="pln">push</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Image</span><span class="pun">.</span><span class="pln">filters</span><span class="pun">.</span><span class="typ">Sepia</span><span class="pun">());</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  img</span><span class="pun">.</span><span class="pln">applyFilters</span><span class="pun">();</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">img</span><span class="pun">);</span></code></li><li
  class="L4"
><code class="language-js"><span class="pun">});</span></code></li><li class="L5"><code class="language-js"></code></li><li class="L6"><code class="language-js"></code></li><li class="L7"><code class="language-js"><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-section-divider"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li></ol></pre>
      <p data-anchor-id="qyka">
        <img src="http://fabricjs.com/article_assets/2_2.png" alt=" " title>
      </p>
      <p data-anchor-id="eark">
        由于“filters”属性是一个数组，我们可以用数组方法执行任何所需的操作：移除滤镜（pop，splice，shift），添加滤镜（push，unshift，splice），甚至可以组合多个滤镜。当我们调用
        <code>applyFilters</code>时，“filters”数组中存在的任何滤镜将逐个应用，所以让我们尝试创建一个既色偏又明亮（Brightness）的图像。
      </p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="b1xw" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">fabric</span><span class="pun">.</span><span class="typ">Image</span><span class="pun">.</span><span class="pln">fromURL</span><span class="pun">(</span><span class="str">'pug.jpg'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">img</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  img</span><span class="pun">.</span><span class="pln">filters</span><span class="pun">.</span><span class="pln">push</span><span class="pun">(</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Image</span><span class="pun">.</span><span class="pln">filters</span><span class="pun">.</span><span class="typ">Sepia</span><span class="pun">(),</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Image</span><span class="pun">.</span><span class="pln">filters</span><span class="pun">.</span><span class="typ">Brightness</span><span class="pun">({</span><span class="pln"> brightness</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}));</span></code></li><li
  class="L4"
><code class="language-js"></code></li><li class="L5"><code class="language-js"><span class="pln">  img</span><span class="pun">.</span><span class="pln">applyFilters</span><span class="pun">();</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">img</span><span class="pun">);</span></code></li><li
  class="L7"
><code class="language-js"><span class="pun">});</span></code></li><li class="L8"><code class="language-js"></code></li><li class="L9"><code class="language-js"></code></li><li class="L0"><code class="language-js"><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-section-divider"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li></ol></pre>
      <p data-anchor-id="6gc6">
        <img src="http://fabricjs.com/article_assets/2_3.png" alt=" " title>
      </p>
      <p data-anchor-id="h0mg">
        请注意，我们还将
        <code>{brightness：100}</code>对象传递给Brightness滤镜。这是因为有些滤镜不可配置，例如，灰度，反转，棕褐色（e.g. grayscale, invert, sepia），而其他过滤器可以配置。对于Brightness滤镜，能够配置亮度级别（-1 - 1 即： 全黑色 - 全白色）。对于噪声（noise）滤镜，能配置的是噪声值（0-1000）。对于“删除颜色”滤镜，能配置的是阈值和距离值。等等。
      </p>
      <p data-anchor-id="1kte">那么现在，您已经熟悉了Fabric滤镜，现在是时候开箱并创建自己的滤镜了！</p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="lpea" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">fabric</span><span class="pun">.</span><span class="typ">Image</span><span class="pun">.</span><span class="pln">filters</span><span class="pun">.</span><span class="typ">Redify</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">createClass</span><span class="pun">({</span></code></li><li
  class="L1"
><code class="language-js"></code></li><li class="L2"><code class="language-js"><span class="pln">  type</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Redify'</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"></code></li><li class="L4"><code class="language-js"><span class="pln">  </span><span class="com">/**</span></code></li><li
  class="L5"
><code class="language-js"><span class="com">   * 用于编程的片段源码</span></code></li><li
  class="L6"
><code class="language-js"><span class="com">   */</span></code></li><li class="L7"><code class="language-js"><span class="pln">  fragmentSource</span><span class="pun">:</span><span class="pln"> </span><span class="str">'precision highp float;\n'</span><span class="pln"> </span><span class="pun">+</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    </span><span class="str">'uniform sampler2D uTexture;\n'</span><span class="pln"> </span><span class="pun">+</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">    </span><span class="str">'varying vec2 vTexCoord;\n'</span><span class="pln"> </span><span class="pun">+</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">    </span><span class="str">'void main() {\n'</span><span class="pln"> </span><span class="pun">+</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">      </span><span class="str">'vec4 color = texture2D(uTexture, vTexCoord);\n'</span><span class="pln"> </span><span class="pun">+</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">      </span><span class="str">'color.g = 0;\n'</span><span class="pln"> </span><span class="pun">+</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">      </span><span class="str">'color.b = 0;\n'</span><span class="pln"> </span><span class="pun">+</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">      </span><span class="str">'gl_FragColor = color;\n'</span><span class="pln"> </span><span class="pun">+</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">    </span><span class="str">'}'</span><span class="pun">,</span></code></li><li
  class="L6"
><code class="language-js"></code></li><li class="L7"><code class="language-js"><span class="pln">  applyTo2d</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">options</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    </span><span class="kwd">var</span><span class="pln"> imageData </span><span class="pun">=</span><span class="pln"> options</span><span class="pun">.</span><span class="pln">imageData</span><span class="pun">,</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">        data </span><span class="pun">=</span><span class="pln"> imageData</span><span class="pun">.</span><span class="pln">data</span><span class="pun">,</span><span class="pln"> i</span><span class="pun">,</span><span class="pln"> len </span><span class="pun">=</span><span class="pln"> data</span><span class="pun">.</span><span class="pln">length</span><span class="pun">;</span></code></li><li
  class="L0"
><code class="language-js"></code></li><li class="L1"><code class="language-js"><span class="pln">    </span><span class="kwd">for</span><span class="pln"> </span><span class="pun">(</span><span class="pln">i </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">&lt;</span><span class="pln"> len</span><span class="pun">;</span><span class="pln"> i </span><span class="pun">+=</span><span class="pln"> </span><span class="lit">4</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">      data</span><span class="pun">[</span><span class="pln">i </span><span class="pun">+</span><span class="pln"> </span><span class="lit">1</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">      data</span><span class="pun">[</span><span class="pln">i </span><span class="pun">+</span><span class="pln"> </span><span class="lit">2</span><span class="pun">]</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> </span><span class="lit">0</span><span class="pun">;</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">    </span><span class="pun">}</span></code></li><li
  class="L5"
><code class="language-js"></code></li><li class="L6"><code class="language-js"><span class="pln">  </span><span class="pun">}</span></code></li><li
  class="L7"
><code class="language-js"><span class="pun">});</span></code></li><li class="L8"><code class="language-js"></code></li><li class="L9"><code class="language-js"><span class="pln">fabric</span><span class="pun">.</span><span class="typ">Image</span><span class="pun">.</span><span class="pln">filters</span><span class="pun">.</span><span class="typ">Brightness</span><span class="pun">.</span><span class="pln">fromObject </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Image</span><span class="pun">.</span><span class="pln">filters</span><span class="pun">.</span><span class="typ">BaseFilter</span><span class="pun">.</span><span class="pln">fromObject</span><span class="pun">;</span></code></li><li
  class="L0"
><code class="language-js"></code></li><li class="L1"><code class="language-js"></code></li><li class="L2"><code class="language-js"><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-section-divider"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li></ol></pre>
      <p data-anchor-id="8yna">
        <img src="http://fabricjs.com/article_assets/2_4.png" alt=" " title>
      </p>
      <p data-anchor-id="g9v3">
        深入研究这段代码，主要的操作是在循环中进行。我们把绿色(data[i+1])和蓝色(data[i+2])替换为0，本质上是移除它们。标准rgb三元色的红色组件保持不变，基本上使整个图像变成红色。如您所见，
        <code>applyTo</code>方法传递一个选项对象，该对象包含滤镜管道的该阶段的图像的数据
        <code>imageData</code>。从这里，我们可以遍历其像素（getImageData（）.data），以任何我们想要的方式修改它们。如果要浏览器WEBGL启用的滤镜能够在GPU上运行，要做到这一点，你必须提供一个片段着色器来描述在像素上执行的操作。在Fabric中定义了许多滤镜，您可以在其中看到如何编写片段或着色器的示例。
      </p>
      <h2 data-anchor-id="dhsx" id="颜色colors">颜色（Colors）</h2>
      <p
        data-anchor-id="451h"
      >无论您是否使用十六进制，RGB或RGBA颜色，Fabric都能提供一个完整的颜色基础，以帮助您最自然地表达自己。以下是在Fabric中定义颜色的一些方法：</p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="ovu4" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Color</span><span class="pun">(</span><span class="str">'#f55'</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Color</span><span class="pun">(</span><span class="str">'#123123'</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Color</span><span class="pun">(</span><span class="str">'356735'</span><span class="pun">);</span></code></li><li
  class="L3"
><code class="language-js"><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Color</span><span class="pun">(</span><span class="str">'rgb(100,0,100)'</span><span class="pun">);</span></code></li><li
  class="L4"
><code class="language-js"><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Color</span><span class="pun">(</span><span class="str">'rgba(10, 20, 30, 0.5)'</span><span class="pun">);</span></code></li><li
  class="L5"
><code class="language-js"></code></li><li class="L6"><code class="language-js"></code></li><li class="L7"><code class="language-js"><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-section-divider"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li></ol></pre>
      <p data-anchor-id="40ou">
        转换也很简单。
        <code>toHex（）</code>将颜色实例转换为十六进制表示。
        <code>toRgb（）</code>可以转换为RGB，
        <code>toRgba（）</code>转换为带Alpha通道的RGB。
      </p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="1jmc" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Color</span><span class="pun">(</span><span class="str">'#f55'</span><span class="pun">).</span><span class="pln">toRgb</span><span class="pun">();</span><span class="pln"> </span><span class="com">// "rgb(255,85,85)"</span></code></li><li
  class="L1"
><code class="language-js"><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Color</span><span class="pun">(</span><span class="str">'rgb(100,100,100)'</span><span class="pun">).</span><span class="pln">toHex</span><span class="pun">();</span><span class="pln"> </span><span class="com">// "646464"</span></code></li><li
  class="L2"
><code class="language-js"><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Color</span><span class="pun">(</span><span class="str">'fff'</span><span class="pun">).</span><span class="pln">toHex</span><span class="pun">();</span><span class="pln"> </span><span class="com">// "FFFFFF"</span></code></li><li
  class="L3"
><code class="language-js"></code></li><li class="L4"><code class="language-js"></code></li><li class="L5"><code class="language-js"><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-section-divider"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li></ol></pre>
      <p data-anchor-id="1omh">转换不仅仅可以使单一的颜色。您也可以用另一种颜色叠加，或将其转换为灰度版本。</p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="cik0" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> redish </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Color</span><span class="pun">(</span><span class="str">'#f55'</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"><span class="kwd">var</span><span class="pln"> greenish </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Color</span><span class="pun">(</span><span class="str">'#5f5'</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"></code></li><li class="L3"><code class="language-js"><span class="pln">redish</span><span class="pun">.</span><span class="pln">overlayWith</span><span class="pun">(</span><span class="pln">greenish</span><span class="pun">).</span><span class="pln">toHex</span><span class="pun">();</span><span class="pln"> </span><span class="com">// "AAAA55"</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">redish</span><span class="pun">.</span><span class="pln">toGrayscale</span><span class="pun">().</span><span class="pln">toHex</span><span class="pun">();</span><span class="pln"> </span><span class="com">// "A1A1A1"</span></code></li><li
  class="L5"
><code class="language-js"></code></li><li class="L6"><code class="language-js"></code></li><li class="L7"><code class="language-js"><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-section-divider"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li></ol></pre>
      <h2 data-anchor-id="oieq" id="渐变gradients">渐变（Gradients）</h2>
      <p data-anchor-id="alra">更加表现出色的方式是通过渐变。渐变让我们将一种颜色混合到另一种颜色中，创造出一些令人惊叹的图形效果。</p>
      <p data-anchor-id="73yt">
        Fabric通过
        <code>setGradient</code>方法支持渐变，在所有对象上定义。调用
        <code>setGradient('fill', { ... })</code>就像设置一个对象的“fill”值一样，只不过我们用渐变而不是单色来填充对象。
      </p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="dpa9" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> circle </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span></code></li><li
  class="L4"
><code class="language-js"><span class="pun">});</span></code></li><li class="L5"><code class="language-js"></code></li><li class="L6"><code class="language-js"><span class="pln">circle</span><span class="pun">.</span><span class="pln">setGradient</span><span class="pun">(</span><span class="str">'fill'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  x1</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">  y1</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">  x2</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">  y2</span><span class="pun">:</span><span class="pln"> circle</span><span class="pun">.</span><span class="pln">height</span><span class="pun">,</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  colorStops</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">    </span><span class="lit">0</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#000'</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">    </span><span class="lit">1</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#fff'</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  </span><span class="pun">}</span></code></li><li
  class="L5"
><code class="language-js"><span class="pun">});</span></code></li><li class="L6"><code class="language-js"></code></li><li class="L7"><code class="language-js"></code></li><li class="L8"><code class="language-js"><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-section-divider"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li></ol></pre>
      <p data-anchor-id="skaz">
        <img src="http://fabricjs.com/article_assets/2_15.png" alt=" " title>
      </p>
      <p data-anchor-id="o80j">在上面的例子中，我们在100,100的位置创建一个圆圈，半径为50px。然后，我们将其填充设置为跨越整个圆形高度的渐变，从黑色到白色。</p>
      <p data-anchor-id="7p9i">
        传递给一个方法的参数是一个options对象，它需要2个坐标对（x1，y1和x2，y2）以及“colorStops”对象。坐标指出了渐变开始和结束的位置，
        <code>colorStops</code>指出了渐变的颜色，只要它们的范围从0到1（例如0,0.1,0.3,0.5,0.75,1），您可以根据需要定义多少个
        <code>colorStops</code>。0表示渐变的开始，1表示结束。
      </p>
      <p data-anchor-id="ai6q">
        坐标相对于物体左上角，因此圆的最高点为0，最低点为
        <code>circle.height</code>。
        <code>setGradient</code>以相同的方式计算宽度坐标（x1，x2）。
      </p>
      <p data-anchor-id="28vd">这是一个从左到右的红蓝渐变：</p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="wyvj" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">circle</span><span class="pun">.</span><span class="pln">setGradient</span><span class="pun">(</span><span class="str">'fill'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  x1</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  y1</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  x2</span><span class="pun">:</span><span class="pln"> circle</span><span class="pun">.</span><span class="pln">width</span><span class="pun">,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  y2</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  colorStops</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">    </span><span class="lit">0</span><span class="pun">:</span><span class="pln"> </span><span class="str">"red"</span><span class="pun">,</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">    </span><span class="lit">1</span><span class="pun">:</span><span class="pln"> </span><span class="str">"blue"</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">  </span><span class="pun">}</span></code></li><li
  class="L9"
><code class="language-js"><span class="pun">});</span></code></li><li class="L0"><code class="language-js"></code></li><li class="L1"><code class="language-js"></code></li><li class="L2"><code class="language-js"><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-section-divider"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li></ol></pre>
      <p data-anchor-id="1rdh">
        <img src="http://fabricjs.com/article_assets/2_16.png" alt=" " title>
      </p>
      <p data-anchor-id="te0a">这是一个彩虹🌈渐变，颜色跨度20%：</p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="rnra" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">circle</span><span class="pun">.</span><span class="pln">setGradient</span><span class="pun">(</span><span class="str">'fill'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  x1</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  y1</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  x2</span><span class="pun">:</span><span class="pln"> circle</span><span class="pun">.</span><span class="pln">width</span><span class="pun">,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  y2</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  colorStops</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">    </span><span class="lit">0</span><span class="pun">:</span><span class="pln"> </span><span class="str">"red"</span><span class="pun">,</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">    </span><span class="lit">0.2</span><span class="pun">:</span><span class="pln"> </span><span class="str">"orange"</span><span class="pun">,</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    </span><span class="lit">0.4</span><span class="pun">:</span><span class="pln"> </span><span class="str">"yellow"</span><span class="pun">,</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">    </span><span class="lit">0.6</span><span class="pun">:</span><span class="pln"> </span><span class="str">"green"</span><span class="pun">,</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">    </span><span class="lit">0.8</span><span class="pun">:</span><span class="pln"> </span><span class="str">"blue"</span><span class="pun">,</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">    </span><span class="lit">1</span><span class="pun">:</span><span class="pln"> </span><span class="str">"purple"</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  </span><span class="pun">}</span></code></li><li
  class="L3"
><code class="language-js"><span class="pun">});</span></code></li><li class="L4"><code class="language-js"></code></li><li class="L5"><code class="language-js"></code></li><li class="L6"><code class="language-js"><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-section-divider"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li></ol></pre>
      <p data-anchor-id="f58t">
        <img src="http://fabricjs.com/article_assets/2_17.png" alt=" " title>
      </p>
      <p data-anchor-id="0eks">你还能想到哪些炫酷的版本？</p>
      <h2 data-anchor-id="5dyo" id="文本text">文本（Text）</h2>
      <p data-anchor-id="iam0">
        如果你想不仅在画布上显示图像和矢量形状，还要显示文本，该怎么办？Fabric也为您准备好了！认识
        <code>fabric.Text</code>对象。
      </p>
      <p data-anchor-id="461h">
        我们提供文本的原因有两个，首先是允许以面向对象的方式处理文本。原生canvas方法，只允许在非常低的级别上填充或描边文本。通过实例化
        <code>fabric.Text</code>实例，我们可以使用文本，就像我们将使用任何其他Fabric对象：移动它，缩放它，更改其属性等。
      </p>
      <p data-anchor-id="6jrj">第二个原因是提供比canvas给我们更丰富的功能，包括：</p>
      <ul data-anchor-id="yaso">
        <li>
          <strong>支持多行Multiline support</strong> 不幸的是，原生文本方法忽略了新建一行。
        </li>
        <li>
          <strong>文本对齐Text alignment</strong> 左，中，右。使用多行文本时很有用。
        </li>
        <li>
          <strong>文本背景Text background</strong> 背景也支持文本对齐。
        </li>
        <li>
          <strong>文字装饰Text decoration</strong> 下划线，上划线，贯穿线。
        </li>
        <li>
          <strong>行高Line Height</strong> 在使用多行文本时有用。
        </li>
        <li>
          <strong>字符间距Char spacing</strong> 使文本更紧凑或更间隔。
        </li>
        <li>
          <strong>子范围Subranges</strong> 将颜色和属性应用到文本对象的子对象中。
        </li>
        <li>
          <strong>多字节Multibyte</strong> 支持表情符号。
        </li>
        <li>
          <strong>交互式画布编辑On canvas editing</strong> 可以直接在画布上键入文本。
        </li>
      </ul>
      <p data-anchor-id="dmu7">做一个hello world的例子：</p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="2l6c" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> text </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">'hello world'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">text</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"></code></li><li class="L3"><code class="language-js"></code></li><li class="L4"><code class="language-js"><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-section-divider"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li></ol></pre>
      <p data-anchor-id="mrme">
        那就对了！在画布上显示文本就像在所需位置添加
        <code>fabric.Text</code>实例一样简单。您可以看到，唯一必需的第一个参数是实际的文本字符串。第二个参数是通常的选项对象，它可以具有通常的left，top，填fill，opacity等属性。
      </p>
      <p data-anchor-id="8s1p">当然，文本对象也有自己独有的与文本相关的属性。我们来看看其中的一些：</p>
      <h3 data-anchor-id="h919" id="字体fontfamily">字体（fontFamily）</h3>
      <p data-anchor-id="p7pn">默认设置为“Times New Roman”，此属性允许我们更改用于呈现文本对象的字体系列。更改它将立即使文本以新字体呈现。</p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="xeoq" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> comicSansText </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">"I'm in Comic Sans"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  fontFamily</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Comic Sans'</span></code></li><li
  class="L2"
><code class="language-js"><span class="pun">});</span></code></li><li class="L3"><code class="language-js"></code></li><li class="L4"><code class="language-js"></code></li><li class="L5"><code class="language-js"><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-section-divider"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li></ol></pre>
      <p data-anchor-id="6z7w">
        <img src="http://fabricjs.com/article_assets/2_5.png" alt=" " title>
      </p>
      <h3 data-anchor-id="or1j" id="字体大小fontsize">字体大小（fontSize）</h3>
      <p
        data-anchor-id="xmt9"
      >字体大小控制渲染文本的大小。请注意，与Fabric中的其他对象不同，您不能直接更改文本的width / height属性。相反，您需要更改“fontSize”值才能使文本对象更大或更小。或者，您可以随时使用scaleX / scaleY属性。</p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="10qv" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> text40 </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">"I'm at fontSize 40"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  fontSize</span><span class="pun">:</span><span class="pln"> </span><span class="lit">40</span></code></li><li
  class="L2"
><code class="language-js"><span class="pun">});</span></code></li><li class="L3"><code class="language-js"><span class="kwd">var</span><span class="pln"> text20 </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">"I'm at fontSize 20"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  fontSize</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span></code></li><li
  class="L5"
><code class="language-js"><span class="pun">});</span></code></li><li class="L6"><code class="language-js"></code></li><li class="L7"><code class="language-js"></code></li><li class="L8"><code class="language-js"><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-section-divider"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li></ol></pre>
      <p data-anchor-id="trwj">
        <img src="http://fabricjs.com/article_assets/2_6.png" alt=" " title>
      </p>
      <h3 data-anchor-id="e2eb" id="粗体fontweight">粗体（fontWeight）</h3>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="bp2h" style><ol class="linenums"><li class="L0"><code
  class="language-fontWeight```允许使文本更粗或更薄。就像CSS一样，您可以使用关键字（“normal”，“bold”）或数字（100,200,400,600,800）。请注意，您是否可以使用某些值取决于所选字体的粗体的可用性。如果您使用远程字体，则需要确保提供正常和粗体字体定义。"
></code></li><li
  class="L1"
><code
  class="language-fontWeight```允许使文本更粗或更薄。就像CSS一样，您可以使用关键字（“normal”，“bold”）或数字（100,200,400,600,800）。请注意，您是否可以使用某些值取决于所选字体的粗体的可用性。如果您使用远程字体，则需要确保提供正常和粗体字体定义。"
></code></li><li
  class="L2"
><code
  class="language-fontWeight```允许使文本更粗或更薄。就像CSS一样，您可以使用关键字（“normal”，“bold”）或数字（100,200,400,600,800）。请注意，您是否可以使用某些值取决于所选字体的粗体的可用性。如果您使用远程字体，则需要确保提供正常和粗体字体定义。"
></code></li><li
  class="L3"
><code
  class="language-fontWeight```允许使文本更粗或更薄。就像CSS一样，您可以使用关键字（“normal”，“bold”）或数字（100,200,400,600,800）。请注意，您是否可以使用某些值取决于所选字体的粗体的可用性。如果您使用远程字体，则需要确保提供正常和粗体字体定义。"
><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"md-section-divider"</span><span class="tag">&gt;&lt;/div&gt;</span></code></li><li
  class="L4"
><code
  class="language-fontWeight```允许使文本更粗或更薄。就像CSS一样，您可以使用关键字（“normal”，“bold”）或数字（100,200,400,600,800）。请注意，您是否可以使用某些值取决于所选字体的粗体的可用性。如果您使用远程字体，则需要确保提供正常和粗体字体定义。"
></code></li><li
  class="L5"
><code
  class="language-fontWeight```允许使文本更粗或更薄。就像CSS一样，您可以使用关键字（“normal”，“bold”）或数字（100,200,400,600,800）。请注意，您是否可以使用某些值取决于所选字体的粗体的可用性。如果您使用远程字体，则需要确保提供正常和粗体字体定义。"
><span class="pln">```js</span></code></li><li
  class="L6"
><code
  class="language-fontWeight```允许使文本更粗或更薄。就像CSS一样，您可以使用关键字（“normal”，“bold”）或数字（100,200,400,600,800）。请注意，您是否可以使用某些值取决于所选字体的粗体的可用性。如果您使用远程字体，则需要确保提供正常和粗体字体定义。"
><span class="pln">var normalText = new fabric.Text("I'm a normal text", {</span></code></li><li
  class="L7"
><code
  class="language-fontWeight```允许使文本更粗或更薄。就像CSS一样，您可以使用关键字（“normal”，“bold”）或数字（100,200,400,600,800）。请注意，您是否可以使用某些值取决于所选字体的粗体的可用性。如果您使用远程字体，则需要确保提供正常和粗体字体定义。"
><span class="pln">  fontWeight: 'normal'</span></code></li><li
  class="L8"
><code
  class="language-fontWeight```允许使文本更粗或更薄。就像CSS一样，您可以使用关键字（“normal”，“bold”）或数字（100,200,400,600,800）。请注意，您是否可以使用某些值取决于所选字体的粗体的可用性。如果您使用远程字体，则需要确保提供正常和粗体字体定义。"
><span class="pln">});</span></code></li><li
  class="L9"
><code
  class="language-fontWeight```允许使文本更粗或更薄。就像CSS一样，您可以使用关键字（“normal”，“bold”）或数字（100,200,400,600,800）。请注意，您是否可以使用某些值取决于所选字体的粗体的可用性。如果您使用远程字体，则需要确保提供正常和粗体字体定义。"
><span class="pln">var boldText = new fabric.Text("I'm at bold text", {</span></code></li><li
  class="L0"
><code
  class="language-fontWeight```允许使文本更粗或更薄。就像CSS一样，您可以使用关键字（“normal”，“bold”）或数字（100,200,400,600,800）。请注意，您是否可以使用某些值取决于所选字体的粗体的可用性。如果您使用远程字体，则需要确保提供正常和粗体字体定义。"
><span class="pln">  fontWeight: 'bold'</span></code></li><li
  class="L1"
><code
  class="language-fontWeight```允许使文本更粗或更薄。就像CSS一样，您可以使用关键字（“normal”，“bold”）或数字（100,200,400,600,800）。请注意，您是否可以使用某些值取决于所选字体的粗体的可用性。如果您使用远程字体，则需要确保提供正常和粗体字体定义。"
><span class="pln">});</span></code></li></ol></pre>
      <p data-anchor-id="bysk">
        <img src="http://fabricjs.com/article_assets/2_7.png" alt=" " title>
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="kdol" id="文本修饰textdecoration">文本修饰（textDecoration）</h3>
      <p
        data-anchor-id="ip8z"
      >文本修饰允许添加下划线，上划线或贯穿线到文本。这与CSS类似，但是Fabric进一步，并允许使用上述的任何组合。所以你可以有一个文本，既有下划线又有上划线，还有贯穿线。等等。</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="n9mg" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> underlineText </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">"I'm an underlined text"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  underline</span><span class="pun">;</span><span class="pln"> </span><span class="kwd">true</span></code></li><li
  class="L2"
><code class="language-js"><span class="pun">});</span></code></li><li class="L3"><code class="language-js"><span class="kwd">var</span><span class="pln"> strokeThroughText </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">"I'm a stroke-through text"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  linethrough</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span></code></li><li
  class="L5"
><code class="language-js"><span class="pun">});</span></code></li><li class="L6"><code class="language-js"><span class="kwd">var</span><span class="pln"> overlineText </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">"I'm an overline text"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  overline</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span></code></li><li
  class="L8"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="s92s">
        <img src="http://fabricjs.com/article_assets/2_8.png" alt=" " title>
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="tnjh" id="阴影">阴影</h3>
      <p data-anchor-id="59sw">此属性在版本1.3.0之前被称为“textShadow”</p>
      <p data-anchor-id="dpfj">文本阴影由4个组件组成：颜色，水平偏移，垂直偏移和模糊大小。如果您在CSS中使用阴影，这可能看起来很熟悉。通过更改这些值可以实现许多组合。</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="ub09" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> shadowText1 </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">"I'm a text with shadow"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  shadow</span><span class="pun">:</span><span class="pln"> </span><span class="str">'rgba(0,0,0,0.3) 5px 5px 5px'</span></code></li><li
  class="L2"
><code class="language-js"><span class="pun">});</span></code></li><li class="L3"><code class="language-js"><span class="kwd">var</span><span class="pln"> shadowText2 </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">"And another shadow"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  shadow</span><span class="pun">:</span><span class="pln"> </span><span class="str">'rgba(0,0,0,0.2) 0 0 5px'</span></code></li><li
  class="L5"
><code class="language-js"><span class="pun">});</span></code></li><li class="L6"><code class="language-js"><span class="kwd">var</span><span class="pln"> shadowText3 </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">"Lorem ipsum dolor sit"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  shadow</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green -5px -5px 3px'</span></code></li><li
  class="L8"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="zwmx">
        <img src="http://fabricjs.com/article_assets/2_9.png" alt=" " title>
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="t2m3" id="字体风格fontstyle">字体风格（fontStyle）</h3>
      <p data-anchor-id="nt0c">字体样式可以是2个值之一：normal（正常）或italic（斜体）。这类似于同名的CSS属性。</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="9w8j" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> italicText </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">"A very fancy italic text"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  fontStyle</span><span class="pun">:</span><span class="pln"> </span><span class="str">'italic'</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  fontFamily</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Delicious'</span></code></li><li
  class="L3"
><code class="language-js"><span class="pun">});</span></code></li><li class="L4"><code class="language-js"><span class="kwd">var</span><span class="pln"> anotherItalicText </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">"another italic text"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  fontStyle</span><span class="pun">:</span><span class="pln"> </span><span class="str">'italic'</span><span class="pun">,</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">  fontFamily</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Hoefler Text'</span></code></li><li
  class="L7"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="b8yl">
        <img src="http://fabricjs.com/article_assets/2_10.png" alt=" " title>
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="14ng" id="描边的颜色和宽度stroke-and-strokewidth">描边的颜色和宽度（stroke and strokeWidth）</h3>
      <p data-anchor-id="s58e">通过结合stroke和strokeWidth，你可以在你的文字上获得一些有趣的效果。这里有几个例子:</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="blj1" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> textWithStroke </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">"Text with a stroke"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  stroke</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#ff1318'</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  strokeWidth</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span></code></li><li
  class="L3"
><code class="language-js"><span class="pun">});</span></code></li><li class="L4"><code class="language-js"><span class="kwd">var</span><span class="pln"> loremIpsumDolor </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">"Lorem ipsum dolor"</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  fontFamily</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Impact'</span><span class="pun">,</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">  stroke</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#c3bfbf'</span><span class="pun">,</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  strokeWidth</span><span class="pun">:</span><span class="pln"> </span><span class="lit">3</span></code></li><li
  class="L8"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="22hw">
        <img src="http://fabricjs.com/article_assets/2_11.png" alt=" " title>
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="6y5g" id="文本对齐textalign">文本对齐（textAlign）</h3>
      <p data-anchor-id="h9u0">使用多行文本时，文本对齐很有用。使用单行文本，边界框的宽度总是与该行的宽度完全匹配，因此没有任何对齐方式。</p>
      <p data-anchor-id="9w7v">允许的值为“left”，“center”和“right”。</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="ei3q" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> text </span><span class="pun">=</span><span class="pln"> </span><span class="str">'this is\na multiline\ntext\naligned right!'</span><span class="pun">;</span></code></li><li
  class="L1"
><code class="language-js"><span class="kwd">var</span><span class="pln"> alignedRightText </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="pln">text</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  textAlign</span><span class="pun">:</span><span class="pln"> </span><span class="str">'right'</span></code></li><li
  class="L3"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="c2mw">
        <img src="http://fabricjs.com/article_assets/2_12.png" alt=" " title>
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="hyll" id="行高lineheight">行高（lineHeight）</h3>
      <p
        data-anchor-id="6ise"
      >CSS中可能熟悉的另一个属性是lineHeight。它允许我们改变多行文本中文本行之间的垂直间距，只是值的规格和css中的不太一样，在以下示例中，第一个文本块的lineHeight为3，第二个为1。</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="hhsm" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> lineHeight3 </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">'Lorem ipsum ...'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  lineHeight</span><span class="pun">:</span><span class="pln"> </span><span class="lit">3</span></code></li><li
  class="L2"
><code class="language-js"><span class="pun">});</span></code></li><li class="L3"><code class="language-js"><span class="kwd">var</span><span class="pln"> lineHeight1 </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">'Lorem ipsum ...'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  lineHeight</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1</span></code></li><li
  class="L5"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="xk1w">
        <img src="http://fabricjs.com/article_assets/2_13.png" alt=" " title>
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="re4w" id="文本背景颜色textbackgroundcolor">文本背景颜色（textBackgroundColor）</h3>
      <p
        data-anchor-id="2fok"
      >最后，textBackgroundColor允许给文本一个背景。请注意，背景仅填充文本字符占用的空间，而不是整个边框。这意味着文本对齐改变了文本背景渲染的方式。一行的高度也是如此，因为背景是由lineHeight创建的线之间的垂直空间。</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="az04" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> text </span><span class="pun">=</span><span class="pln"> </span><span
  class="str"
>'this is\na multiline\ntext\nwith\ncustom lineheight\n&amp;background'</span><span
  class="pun"
>;</span></code></li><li
  class="L1"
><code class="language-js"><span class="kwd">var</span><span class="pln"> textWithBackground </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="pln">text</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  textBackgroundColor</span><span class="pun">:</span><span class="pln"> </span><span class="str">'rgb(0,200,0)'</span></code></li><li
  class="L3"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="agxp">
        <img src="http://fabricjs.com/article_assets/2_14.png" alt=" " title>
      </p>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="eunz" id="事件events">事件（Events）</h2>
      <p data-anchor-id="w3du">事件驱动架构是框架内一些惊人的功能和灵活性的基础。Fabric也不例外，并提供广泛的事件系统，从低级“鼠标”事件开始到高级对象。</p>
      <p
        data-anchor-id="pngm"
      >这些事件可以让我们在画布上发生的事件的同时，做一些事情。想知道什么时候鼠标被按下？只需要监听“mouse:down”事件，想知道什么时候对象被添加到canvas？ 监听“object:add”事件，如果想知道画布什么时候渲染完成呢？只需监听“after:render”。</p>
      <p data-anchor-id="nkmj">
        事件API非常简单，类似于jQuery，Underscore.js或其他流行的JS库。有一个
        <code>on</code>方法来初始化事件监听器，
        <code>off</code>用来删除它。
      </p>
      <p data-anchor-id="lm40">让我们来看个例子：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="amei" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'...'</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">on</span><span class="pun">(</span><span class="str">'mouse:down'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">options</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">options</span><span class="pun">.</span><span class="pln">e</span><span class="pun">.</span><span class="pln">clientX</span><span class="pun">,</span><span class="pln"> options</span><span class="pun">.</span><span class="pln">e</span><span class="pun">.</span><span class="pln">clientY</span><span class="pun">);</span></code></li><li
  class="L3"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="ijd5">
        我们将事件“mouse:down”事件侦听器添加到画布上，并给它一个事件处理程序，用于记录事件起始位置的坐标。换句话说，它会记录鼠标按下的位置。事件处理程序接收一个选项对象，它有两个属性
        <code>e</code>：事件源，以及
        <code>target</code>：在画布上点击的对象，它有时不存在。但是这个事件在任何时候都是存在的，但是只有当你在画布上点击某个对象时，
        <code>target</code>才会存在。
        <code>target</code>也只传递给有意义的事件处理程序。例如，会传递给“mouse:down”，而不会传递给“after:render”(表示整个画布被重新绘制)。
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="r25u" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">on</span><span class="pun">(</span><span class="str">'mouse:down'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">options</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(</span><span class="pln">options</span><span class="pun">.</span><span class="pln">target</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">    console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'有对象被点击咯! '</span><span class="pun">,</span><span class="pln"> options</span><span class="pun">.</span><span class="pln">target</span><span class="pun">.</span><span class="pln">type</span><span class="pun">);</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  </span><span class="pun">}</span></code></li><li
  class="L4"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="baii">上面的例子将记录“有对象被点击咯！”如果您单击一个对象。它还将显示点击的对象的类型。</p>
      <p
        data-anchor-id="446p"
      >那么Fabric中有哪些其他的事件呢？那么，从鼠标级别可以看到“mouse:down”，“mouse:move”和“mouse:up”。从通用方面看，有“after:render”。然后有选择相关的事件：“before:selection:cleared”, “selection:created”, “selection:cleared”，最后，对象的事件：“object:modified”，“object:selected”，“object:moving”，“object:scaling”，“object:rotate”，“object:added”和“object:removed”。</p>
      <p
        data-anchor-id="mmqy"
      >请注意，每当一个对象被移动（或缩放）甚至一个像素时，诸如“object:moving”（或“object:scaling”）的事件被连续地触发。另一方面，诸如“object:modified”或“selection:created”之类的事件仅在操作结束时被触发（对象修改或选择创建）。</p>
      <p data-anchor-id="j9l7">
        注意我们如何将事件附加到画布上（
        <code>canvas.on（'mouse：down'，...）</code>）。可以想象，这意味着事件都被限定为canvas实例。如果您在页面上有多个canvas，您可以将不同的事件侦听器附加到每个canvas上。他们都是独立的，只处理分配给他们自己的事件。
      </p>
      <p data-anchor-id="ipd2">为方便起见，Fabric将进一步提升事件系统，并允许您将侦听器直接附加到canvas画布中的对象上。让我们来看看：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="kddb" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> rect </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="pln">on</span><span class="pun">(</span><span class="str">'selected'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'selected a rectangle'</span><span class="pun">);</span></code></li><li
  class="L3"
><code class="language-js"><span class="pun">});</span></code></li><li class="L4"><code class="language-js"></code></li><li class="L5"><code class="language-js"><span class="kwd">var</span><span class="pln"> circle </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span><span class="pln"> radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">75</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'blue'</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">circle</span><span class="pun">.</span><span class="pln">on</span><span class="pun">(</span><span class="str">'selected'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="str">'selected a circle'</span><span class="pun">);</span></code></li><li
  class="L8"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p
        data-anchor-id="npty"
      >我们将事件侦听器直接附加到矩形和圆形实例。使用"selected"来代替"object:selected"。同样的，使用“modified”代替“object:modified”，使用“rotating”来代替“object:rotating”。等等。。</p>
      <p data-anchor-id="h0o9">
        查看此事件
        <a href="http://fabricjs.com/events" target="_blank">演示</a>，以更广泛地探索Fabric的事件系统
      </p>
    </div>
  </div>
</template>
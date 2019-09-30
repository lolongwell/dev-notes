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
      <h1 data-anchor-id="o5hw" id="fabricjs介绍-第四部分">Fabric.js介绍 第四部分</h1>
      <p data-anchor-id="pl72">我们已经在前几个系列涵盖了很多话题，从基础对象操作到动画，事件，滤镜，组合和子类。但还有几件非常有趣和有用的事情要讨论！</p>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="h41u" id="自由绘画">自由绘画</h2>
      <p data-anchor-id="c9zb">
        如果说有什么功能能让
        <code>&lt;canvas&gt;</code>在眼前一亮，那一定是它能够很好的支持自由绘图！由于画布只是一个2D位图， Fabric为我们提供了一张纸：可以自由绘画，而且非常自然。
      </p>
      <p data-anchor-id="l3bs">
        只需将Fabric canvas的
        <code>isDrawingMode</code>属性设置为
        <code>true</code>即可实现自由绘制模式。这样画布上的点击和移动就会被立刻解释为铅笔或刷子。
      </p>
      <p data-anchor-id="594t">
        当
        <code>isDrawingMode</code>为
        <code>true</code>时，您可以随意在画布上多次绘制，但是一旦你在画布上做任何动作，然后触发“mouseup”事件，Fabric就会触发"path:created" 事件，并且将刚刚的绘画转变为
        <code>fabric.Path</code>的实例，
      </p>
      <p data-anchor-id="02qr">
        如果在任何时刻，将
        <code>isDrawingMode</code>设置为
        <code>false</code>，你创建的路径对象会仍然存在于画布上。而且由于它们是
        <code>fabric.Path</code>对象，所以可以以任何方式修改它们： 移动，旋转，缩放等。
      </p>
      <p data-anchor-id="aobr">
        还有两个属性可以定制自由绘图：
        <code>freeDrawingBrush.color</code> and
        <code>freeDrawingBrush.width</code>，两者都可以通过
        <code>freeDrawingBrush</code>实例在Fabric画布实例上使用。
        <code>freeDrawingBrush.color</code>可以是任何常规的颜色值，代表画笔的颜色。
        <code>freeDrawingBrush.width</code>是一个像素，代表画笔的宽度。
      </p>
      <p data-anchor-id="xl6c">
        <img src="http://fabricjs.com/article_assets/4_1.png" alt=" " title>
      </p>
      <p
        data-anchor-id="9d9g"
      >在不久的将来，我们计划添加更多的自由绘图选项：各种版本的画笔（如喷雾式或粉笔式）。还可以自定义画笔模式，还有一个可以自己扩展的选项，类似于Fabric图像滤镜。</p>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="4to6" id="自定义">自定义</h2>
      <p data-anchor-id="fm97">
        一件有趣的事情是如何去自定义Fabric，您可以在
        <code>canvas</code>或
        <code>canvas</code>对象上调整数十种各样的参数，以使事情按照所需的方式运行。我们来看看其中的一些。
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="qfqm" id="锁定对象">锁定对象</h3>
      <p data-anchor-id="0z0i">
        画布上的每个对象都可以以几种方式锁定。“lockMovementX”，“lockMovementY”，“lockRotation”，“lockScalingX”，“lockScalingY”是锁定相应对象动作的属性。所以将某个对象的
        <code>lockMovementX</code>属性设置为
        <code>true</code>会阻止对象被水平移动，此时你仍然可以垂直移动它。类似的，
        <code>lockRotation</code>可以阻止旋转，
        <code>lockScalingX</code> /
        <code>lockScalingY</code> 可以阻止水平或者垂直缩放。所有这些都是可以叠加的，你可以将它们组合在一起使用。
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="3bbr" id="改变边框和角">改变边框和角</h3>
      <p data-anchor-id="yqhd">
        您可以通过“hasControls”和“hasBorders”属性来控制对象的边框和角的可见性。只是将它们设置为
        <code>false</code>。
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="q5kf" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">object</span><span class="pun">.</span><span class="pln">hasBorders </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span></code></li></ol></pre>
      <p data-anchor-id="dutj">
        <img src="http://fabricjs.com/article_assets/4_2.png" alt=" " title>
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="5ev7" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">object</span><span class="pun">.</span><span class="pln">hasControls </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span></code></li></ol></pre>
      <p data-anchor-id="djse">
        <img src="http://fabricjs.com/article_assets/4_3.png" alt=" " title>
      </p>
      <p
        data-anchor-id="chnd"
      >您还可以通过某些自定义属性来调整它的外观：“cornerDashArray”，“borderDashArray”，“borderColor”，“transparentCorners”“cornerColor”，“cornerStrokeColor”，“cornerStyle”，“selectionBackgroundColor”，“padding”和“cornerSize”。</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="1t89" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">object</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">({</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  borderColor</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  cornerColor</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  cornerSize</span><span class="pun">:</span><span class="pln"> </span><span class="lit">6</span></code></li><li
  class="L4"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="fxgu">
        <img src="http://fabricjs.com/article_assets/4_4.png" alt=" " title>
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="5eyf" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">  object</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">({</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">    transparentCorners</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">    cornerColor</span><span class="pun">:</span><span class="pln"> </span><span class="str">'blue'</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">    cornerStrokeColor</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span><span class="pun">,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">    borderColor</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span><span class="pun">,</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">    cornerSize</span><span class="pun">:</span><span class="pln"> </span><span class="lit">12</span><span class="pun">,</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">    padding</span><span class="pun">:</span><span class="pln"> </span><span class="lit">10</span><span class="pun">,</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">    cornerStyle</span><span class="pun">:</span><span class="pln"> </span><span class="str">'circle'</span><span class="pun">,</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    borderDashArray</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="lit">3</span><span class="pun">,</span><span class="pln"> </span><span class="lit">3</span><span class="pun">]</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">  </span><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="w6kg">
        <img src="http://fabricjs.com/article_assets/4_4b.png" alt=" " title>
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="5r1v" id="禁用选择">禁用选择</h3>
      <p data-anchor-id="xnt1">
        您可以通过将canvas的“selection”属性设置为
        <code>false</code>来禁用画布上的对象选择，这可以防止在画布上选中任何对象。如果只需要使某些对象不可选，则可以更改某个对象的“selectable”属性，只是将其设置为
        <code>false</code>，并且对象失去其交互性。
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="gchy" id="自定义选择">自定义选择</h3>
      <p data-anchor-id="2mnn">现在，如果你不想禁用选择，而是要改变它的外观呢？没问题。</p>
      <p
        data-anchor-id="gvy2"
      >canvas画布上有4个属性来控制它的表现： "selectionColor", "selectionBorderColor", "selectionLikeWidth", and "selectionDashArray"。这些都非常的语义化，让我们来看一个例子：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="yikf" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span><span class="pln"> radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">30</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#f55'</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}));</span></code></li><li
  class="L1"
><code class="language-js"></code></li><li class="L2"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">selectionColor </span><span class="pun">=</span><span class="pln"> </span><span class="str">'rgba(0,255,0,0.3)'</span><span class="pun">;</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">selectionBorderColor </span><span class="pun">=</span><span class="pln"> </span><span class="str">'red'</span><span class="pun">;</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">selectionLineWidth </span><span class="pun">=</span><span class="pln"> </span><span class="lit">5</span><span class="pun">;</span></code></li></ol></pre>
      <p data-anchor-id="6pei">
        <img src="http://fabricjs.com/article_assets/4_8.png" alt=" " title>
      </p>
      <p data-anchor-id="2ve3">
        最后一个属性“selectionDashArray”可不是那么简单，他允许我们使用虚线作为选择线。定义虚线模式的方式是通过数组指定间隔。因此，要创建一个模式，其中有一个大点的数字，后面跟着一个小一点的数字来代表虚线的间隔，我们可以使用
        <code>[10，5]</code>，作为“selectionDashArray”。这将画出10px长的线，然后跳过5px，再画一个10px长度的线，以此类推。如果我们使用
        <code>[2, 4, 6]</code>的数组，这样将通过绘制2px长的线，然后跳过4px，然后绘制6px线，然后跳过2px，然后绘制4px线，然后跳过6px，以此类推。例如，这就是
        <code>[5,10]</code>规则的样子：
      </p>
      <p data-anchor-id="n3h7">
        <img src="http://fabricjs.com/article_assets/4_9.png" alt=" " title>
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="quo2" id="虚线描边">虚线描边</h3>
      <p
        data-anchor-id="xikb"
      >与canvas上的“selectionDashArray”类似，所有Fabric对象都有“strokeDashArray”属性，负责在对象上执行虚线的描边操作。</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="3i2d" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> rect </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#06538e'</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">125</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">125</span><span class="pun">,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  stroke</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span><span class="pun">,</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  strokeDashArray</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="lit">5</span><span class="pun">,</span><span class="pln"> </span><span class="lit">5</span><span class="pun">]</span></code></li><li
  class="L6"
><code class="language-js"><span class="pun">});</span></code></li><li class="L7"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">rect</span><span class="pun">);</span></code></li></ol></pre>
      <p data-anchor-id="l5kz">
        <img src="http://fabricjs.com/article_assets/4_13.png" alt=" " title>
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="nbwv" id="可点击区域">可点击区域</h3>
      <p
        data-anchor-id="c2kg"
      >如你所知，所有的Fabric对象都有边界边框，用于拖动、旋转、缩放。您可能已经注意到，当用于控制的角和边框存在时，即使在单击没有绘制内容的对象边框内的空白时也可以拖动该对象。</p>
      <p data-anchor-id="ahjb">看看这个图像：</p>
      <p data-anchor-id="89hn">
        <img src="http://fabricjs.com/article_assets/4_14.png" alt=" " title>
      </p>
      <p data-anchor-id="wvw4">
        默认情况下，画布上的所有Fabric对象都可以通过边框拖动。如果你想要不同的行为，例如根据Fabric对象的实际内容进行点击或拖拽，您可以在对象上使用“perPixelTargetFind”属性。只需将其设置为
        <code>true</code>即可获得所需的行为。
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="xha6" id="旋转控件">旋转控件</h3>
      <p data-anchor-id="gu2q">
        由于版本1.0 Fabric在默认情况下使用默认UI，对象不能同时缩放和旋转。作为代替的是每个对象都有一个单独的旋转控件。该控件的相应属性为“hasRotatingPoint”，默认是
        <code>true</code>，将其设置为
        <code>false</code>可以禁用旋转控制。您也可以通过“rotatePointOffset”数字属性自定义其相对于对象的偏移量。
      </p>
      <p data-anchor-id="v3et">
        <img src="http://fabricjs.com/article_assets/4_10.png" alt=" " title>
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="t17d" id="fabric对象变形">Fabric对象变形</h3>
      <p data-anchor-id="kf2s">
        自
        <strong>1.0</strong>版以来，Fabric中还提供了许多其他与转换相关的属性，其中一个是画布实例上的“uniScaleTransform”。默认为
        <code>false</code>，可用于启用对象的非均匀缩放;换句话说，它允许在通过角拖动时改变对象的比例。
      </p>
      <p data-anchor-id="5gvo">
        <img src="http://fabricjs.com/article_assets/4_15.png" alt=" " title>
      </p>
      <p data-anchor-id="jeba">
        有“centeredScaling”和“centeredRotation”属性（在v1.3.4之前是一个属性“centerTransform”）。他们指定对象的中心是否应该用作转换的起点。当它们都设置为
        <code>true</code>，对象总是从中心缩放/旋转时，它会和
        <strong>1.0</strong>之前的行为相同。由于
        <strong>1.0</strong>变形原点是动态的，这样可以在缩放对象时进行更精细的控制。
      </p>
      <p
        data-anchor-id="ntex"
      >最后一对新属性是“originX”和“originY”。默认设置为“left”和“top”，它们允许以编程的方式更改变形的原点。当你拖动对象的角时，就是这些属性正在动态变化。</p>
      <p
        data-anchor-id="q23i"
      >那么什么时候需要我们手动更改它们？举个例子，当我们处理文本对象时，当您动态的改变文本并且文本框尺寸变大，“originX”和“originY”指出了增长的位置。所以如果你需要文本对象居中时，你可以将originX设置为“center”。如果让文本移到右边，你需要将“originX”设置为“right”等等。这种行为类似于CSS中的“position：absolute”。</p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="zd9r" id="画布的背景和叠加">画布的背景和叠加</h3>
      <p data-anchor-id="r3bb">从第一部分可以记得，您可以指定一个颜色来填充整个画布背景。只需将任意常规颜色值设置为canvas的“backgroundColor”属性。</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="qckx" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span><span class="pln"> radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">30</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#f55'</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}));</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">backgroundColor </span><span class="pun">=</span><span class="pln"> </span><span class="str">'rgba(0,0,255,0.3)'</span><span class="pun">;</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">renderAll</span><span class="pun">();</span></code></li></ol></pre>
      <p data-anchor-id="qjob">
        <img src="http://fabricjs.com/article_assets/4_5.png" alt=" " title>
      </p>
      <p data-anchor-id="d8gp">
        你可以进一步去分配图像作为背景。您需要使用
        <code>setBackgroundImage</code>方法，传递url和一个可选的完成回调。
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="uv8f" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span><span class="pln"> radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">30</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#f55'</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}));</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">setBackgroundImage</span><span class="pun">(</span><span class="str">'../assets/pug.jpg'</span><span class="pun">,</span><span class="pln"> canvas</span><span class="pun">.</span><span class="pln">renderAll</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="pln">canvas</span><span class="pun">));</span></code></li></ol></pre>
      <p data-anchor-id="i55r">
        <img src="http://fabricjs.com/article_assets/4_6.png" alt=" " title>
      </p>
      <p
        data-anchor-id="wbt1"
      >最后，您还可以设置叠加图像，在这种情况下，它将始终显示在画布上呈现的任何对象之上。只需使用setOverlayImage，传递url和一个可选的完成回调。</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="q0tu" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span><span class="pln"> radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">30</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#f55'</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}));</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">setOverlayImage</span><span class="pun">(</span><span class="str">'../assets/jail_cell_bars.png'</span><span class="pun">,</span><span class="pln"> canvas</span><span class="pun">.</span><span class="pln">renderAll</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="pln">canvas</span><span class="pun">));</span></code></li></ol></pre>
      <p data-anchor-id="05gp">
        <img src="http://fabricjs.com/article_assets/4_7.png" alt=" " title>
      </p>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="7p3g" id="nodejs上的fabric">Node.js上的Fabric</h2>
      <p
        data-anchor-id="o15t"
      >Fabric的独特之处在于它不仅可以在客户端，浏览器中也可以在服务器上工作！当您要从客户端发送数据并在服务器上直接创建该数据的映像时，这可能很有用。或者如果您为了速度，方便性或其他原因，只是想从控制台使用Fabric API。</p>
      <p data-anchor-id="q4fg">让我们来看看如何设置在Node环境下运行Fabric。</p>
      <p data-anchor-id="ahif">
        首先，您需要安装
        <a href="http://nodejs.org/" target="_blank">Node.js</a>，如果还没有。有几种方法来安装Node，具体取决于你的操作系统。您可以按照
        <a href="http://howtonode.org/how-to-install-nodejs" target="_blank">这些说明</a>或
        <a href="https://github.com/joyent/node/wiki/Installation" target="_blank">这些说明</a>。
      </p>
      <p data-anchor-id="syvg">
        Node安装成功之后，我们需要安装
        <a href="https://github.com/LearnBoost/node-canvas" target="_blank">node-canvas</a>库，node-canvas是NodeJS的Canvas实现。它依赖
        <a href="http://cairographics.org/" target="_blank">Cairo</a>- 可以在Mac，Linux或Windows上运行的2D图形库。node-canvas具有专门的
        <a href="https://github.com/LearnBoost/node-canvas/wiki" target="_blank">安装说明</a>，具体取决于您的操作系统。
      </p>
      <p data-anchor-id="3rbm">
        由于Fabric运行在Node上，它作为一个NPM包。所以下一步是安装NPM。您可以在其
        <a href="https://github.com/isaacs/npm" target="_blank">github repo</a>中找到安装说明，不过一般情况下当您安装Node的时候会自动安装了NPM。
      </p>
      <p data-anchor-id="egxa">
        最后一步是安装
        <a href="https://npmjs.org/package/fabric" target="_blank">Fabric</a>包，使用NPM。这通过运行
        <code>npm install fabric</code>（或
        <code>npm install -g fabric</code>来全局安装包）完成。
      </p>
      <p data-anchor-id="8hng">我们现在运行Node控制台，应该就使用node-canvas和Fabric了：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="tgm6" style><ol class="linenums"><li class="L0"><code class="language-bash"><span class="pun">&gt;</span><span class="pln"> node</span></code></li><li
  class="L1"
><code class="language-bash"><span class="pun">...</span></code></li><li class="L2"><code class="language-bash"><span class="pun">&gt;</span><span class="pln"> typeof require</span><span class="pun">(</span><span class="str">'canvas'</span><span class="pun">);</span><span class="pln"> </span><span class="pun">//</span><span class="pln"> </span><span class="str">"function"</span></code></li><li
  class="L3"
><code class="language-bash"><span class="pun">&gt;</span><span class="pln"> typeof require</span><span class="pun">(</span><span class="str">'fabric'</span><span class="pun">);</span><span class="pln"> </span><span class="pun">//</span><span class="pln"> </span><span class="str">"object"</span></code></li></ol></pre>
      <p data-anchor-id="8zrd">现在一切都准备好了，我们可以尝试一个简单的“helloworld”的测试。让我们创建一个helloworld.js文件：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="vk7u" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> fs </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">'fs'</span><span class="pun">),</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">    fabric </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">'fabric'</span><span class="pun">).</span><span class="pln">fabric</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">    out </span><span class="pun">=</span><span class="pln"> fs</span><span class="pun">.</span><span class="pln">createWriteStream</span><span class="pun">(</span><span class="pln">__dirname </span><span class="pun">+</span><span class="pln"> </span><span class="str">'/helloworld.png'</span><span class="pun">);</span></code></li><li
  class="L3"
><code class="language-js"></code></li><li class="L4"><code class="language-js"><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">createCanvasForNode</span><span class="pun">(</span><span class="lit">200</span><span class="pun">,</span><span class="pln"> </span><span class="lit">200</span><span class="pun">);</span></code></li><li
  class="L5"
><code class="language-js"><span class="kwd">var</span><span class="pln"> text </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">'Hello world'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">  left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">  fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#f55'</span><span class="pun">,</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">  angle</span><span class="pun">:</span><span class="pln"> </span><span class="lit">15</span></code></li><li
  class="L0"
><code class="language-js"><span class="pun">});</span></code></li><li class="L1"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">text</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"></code></li><li class="L3"><code class="language-js"><span class="kwd">var</span><span class="pln"> stream </span><span class="pun">=</span><span class="pln"> canvas</span><span class="pun">.</span><span class="pln">createPNGStream</span><span class="pun">();</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">stream</span><span class="pun">.</span><span class="pln">on</span><span class="pun">(</span><span class="str">'data'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">chunk</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  out</span><span class="pun">.</span><span class="pln">write</span><span class="pun">(</span><span class="pln">chunk</span><span class="pun">);</span></code></li><li
  class="L6"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="0hzv">
        然后运行它作为
        <code>node helloworld.js</code>，打开helloworld.png：
      </p>
      <p data-anchor-id="x2th">
        <img src="http://fabricjs.com/article_assets/4_11.png" alt=" " title>
      </p>
      <p data-anchor-id="n05b">那么这里发生了什么？我们来看看这段代码的重要部分。</p>
      <p data-anchor-id="o9c0">
        首先，我们引入了Fabric
        <code>fabric = require('fabric').fabric</code>，然后我们用
        <code>fabric.createCanvasForNode()</code>替代了平时使用的
        <code>new fabric.Canvas()</code>来创建了Fabric的canvas画布，此方法将width和height作为参数，并创建该大小的画布（在这种不传参的情况下为200x200）。
      </p>
      <p data-anchor-id="afbj">
        然后有熟悉的对象创建（
        <code>new fabric.Text（）</code>）和添加到画布（
        <code>canvas.add（text）</code>）。
      </p>
      <p data-anchor-id="ckoe">
        到目前做的一切都只是创建了一个Fabric画布，然后渲染了一个text文本，现在，如何创建在画布上呈现的任何图像？在canvas实例上使用可用的
        <code>createPNGStream</code>方法。
        <code>createPNGStream</code>返回Node的
        <a href="http://nodejs.org/api/stream.html" target="_blank">流</a>，然后可以使用
        <code>on（'data'）</code>输出到图像文件中，并将其写入与图像文件（
        <code>fs.createWriteStream（）</code>）对应的流中。
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="t7a6" style><ol class="linenums"><li class="L0"><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
></code></li><li
  class="L1"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="com">### Node服务器与Fabric</span></code></li><li
  class="L2"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
></code></li><li
  class="L3"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="pun">例如，让我们创建一个简单的</span><span class="typ">Node</span><span class="pun">服务器，它将使用</span><span class="pln">JSON</span><span class="pun">格式的</span><span class="typ">Fabric</span><span class="pun">数据收听传入的请求，并输出该数据的图像。整个脚本只有</span><span class="lit">25</span><span class="pun">行长！</span></code></li><li
  class="L4"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
></code></li><li
  class="L5"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">```js</span></code></li><li
  class="L6"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">var fabric = require('fabric').fabric,</span></code></li><li
  class="L7"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">    http = require('http'),</span></code></li><li
  class="L8"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">    url = require('url'),</span></code></li><li
  class="L9"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">    PORT = 8124;</span></code></li><li
  class="L0"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
></code></li><li
  class="L1"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">var server = http.createServer(function (request, response) {</span></code></li><li
  class="L2"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">  var params = url.parse(request.url, true);</span></code></li><li
  class="L3"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">  var canvas = fabric.createCanvasForNode(200, 200);</span></code></li><li
  class="L4"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
></code></li><li
  class="L5"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">  response.writeHead(200, { 'Content-Type': 'image/png' });</span></code></li><li
  class="L6"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
></code></li><li
  class="L7"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">  canvas.loadFromJSON(params.query.data, function() {</span></code></li><li
  class="L8"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">    canvas.renderAll();</span></code></li><li
  class="L9"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
></code></li><li
  class="L0"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">    var stream = canvas.createPNGStream();</span></code></li><li
  class="L1"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">    stream.on('data', function(chunk) {</span></code></li><li
  class="L2"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">      response.write(chunk);</span></code></li><li
  class="L3"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">    });</span></code></li><li
  class="L4"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">    stream.on('end', function() {</span></code></li><li
  class="L5"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">      response.end();</span></code></li><li
  class="L6"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">    });</span></code></li><li
  class="L7"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">  });</span></code></li><li
  class="L8"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">});</span></code></li><li
  class="L9"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
></code></li><li
  class="L0"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">server.listen(PORT);</span></code></li><li
  class="L1"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
></code></li><li
  class="L2"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
></code></li><li
  class="L3"
><code
  class="language-fabric.createCanvasForNode```和```canvas.createPNGStream```几乎是Node特有的唯一2种方法，其他一切都是一样的。您仍然可以按照通常的方式创建对象，将它们添加到画布上，修改，渲染等。值得一提的是，当您通过```createCanvasForNode```创建画布时，它将使用```nodeCanvas```属性进行扩展，该属性是对原始节点画布实例的引用。"
><span class="str">&lt;div class="md-section-divider"&gt;&lt;/div&gt;</span></code></li></ol></pre>
      <p
        data-anchor-id="drnd"
      >此片段中的大部分代码应该已经很熟悉了。它的要点在于服务器响应。我们正在创建Fabric画布，将JSON数据加载到其中，渲染它，并将最终结果作为服务器响应进行流式传输。</p>
      <p data-anchor-id="6nyt">要测试它，我们来获取一个绿色，并且稍微旋转的矩形：</p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="ij82" style><ol class="linenums"><li class="L0"><code><span class="pun">{</span><span class="str">"objects"</span><span class="pun">:[{</span><span class="str">"type"</span><span class="pun">:</span><span class="str">"rect"</span><span class="pun">,</span><span class="str">"left"</span><span class="pun">:</span><span class="lit">103.85</span><span class="pun">,</span><span class="str">"top"</span><span class="pun">:</span><span class="lit">98.85</span><span class="pun">,</span><span class="str">"width"</span><span class="pun">:</span><span class="lit">50</span><span class="pun">,</span><span class="str">"height"</span><span class="pun">:</span><span class="lit">50</span><span class="pun">,</span><span class="str">"fill"</span><span class="pun">:</span><span class="str">"#9ae759"</span><span class="pun">,</span><span class="str">"overlayFill"</span><span class="pun">:</span><span class="kwd">null</span><span class="pun">,</span><span class="str">"stroke"</span><span class="pun">:</span><span class="kwd">null</span><span class="pun">,</span><span class="str">"strokeWidth"</span><span class="pun">:</span><span class="lit">1</span><span class="pun">,</span><span class="str">"strokeDashArray"</span><span class="pun">:</span><span class="kwd">null</span><span class="pun">,</span><span class="str">"scaleX"</span><span class="pun">:</span><span class="lit">1.39</span><span class="pun">,</span><span class="str">"scaleY"</span><span class="pun">:</span><span class="lit">1.39</span><span class="pun">,</span><span class="str">"angle"</span><span class="pun">:</span><span class="lit">30</span><span class="pun">,</span><span class="str">"flipX"</span><span class="pun">:</span><span class="kwd">false</span><span class="pun">,</span><span class="str">"flipY"</span><span class="pun">:</span><span class="kwd">false</span><span class="pun">,</span><span class="str">"opacity"</span><span class="pun">:</span><span class="lit">0.8</span><span class="pun">,</span><span class="str">"selectable"</span><span class="pun">:</span><span class="kwd">true</span><span class="pun">,</span><span class="str">"hasControls"</span><span class="pun">:</span><span class="kwd">true</span><span class="pun">,</span><span class="str">"hasBorders"</span><span class="pun">:</span><span class="kwd">true</span><span class="pun">,</span><span class="str">"hasRotatingPoint"</span><span class="pun">:</span><span class="kwd">false</span><span class="pun">,</span><span class="str">"transparentCorners"</span><span class="pun">:</span><span class="kwd">true</span><span class="pun">,</span><span class="str">"perPixelTargetFind"</span><span class="pun">:</span><span class="kwd">false</span><span class="pun">,</span><span class="str">"rx"</span><span class="pun">:</span><span class="lit">0</span><span class="pun">,</span><span class="str">"ry"</span><span class="pun">:</span><span class="lit">0</span><span class="pun">}],</span><span class="str">"background"</span><span class="pun">:</span><span class="str">"rgba(0, 0, 0, 0)"</span><span class="pun">}</span></code></li><li
  class="L1"
><code></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-section-divider"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li></ol></pre>
      <p data-anchor-id="xu9d">URL编码后：</p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="buws" style><ol class="linenums"><li class="L0"><code><span class="pun">%</span><span class="lit">7B</span><span class="str">"objects"</span><span class="pun">%</span><span class="lit">3A</span><span class="pun">%</span><span class="lit">5B</span><span class="pun">%</span><span class="lit">7B</span><span class="str">"type"</span><span class="pun">%</span><span class="lit">3A</span><span class="str">"rect"</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"left"</span><span class="pun">%</span><span class="lit">3A103.85</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"top"</span><span class="pun">%</span><span class="lit">3A98.85</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"width"</span><span class="pun">%</span><span class="lit">3A50</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"height"</span><span class="pun">%</span><span class="lit">3A50</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"fill"</span><span class="pun">%</span><span class="lit">3A</span><span class="str">"%239ae759"</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"overlayFill"</span><span class="pun">%</span><span class="lit">3Anull</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"stroke"</span><span class="pun">%</span><span class="lit">3Anull</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"strokeWidth"</span><span class="pun">%</span><span class="lit">3A1</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"strokeDashArray"</span><span class="pun">%</span><span class="lit">3Anull</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"scaleX"</span><span class="pun">%</span><span class="lit">3A1.39</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"scaleY"</span><span class="pun">%</span><span class="lit">3A1.39</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"angle"</span><span class="pun">%</span><span class="lit">3A30</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"flipX"</span><span class="pun">%</span><span class="lit">3Afalse</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"flipY"</span><span class="pun">%</span><span class="lit">3Afalse</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"opacity"</span><span class="pun">%</span><span class="lit">3A0.8</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"selectable"</span><span class="pun">%</span><span class="lit">3Atrue</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"hasControls"</span><span class="pun">%</span><span class="lit">3Atrue</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"hasBorders"</span><span class="pun">%</span><span class="lit">3Atrue</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"hasRotatingPoint"</span><span class="pun">%</span><span class="lit">3Afalse</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"transparentCorners"</span><span class="pun">%</span><span class="lit">3Atrue</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"perPixelTargetFind"</span><span class="pun">%</span><span class="lit">3Afalse</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"rx"</span><span class="pun">%</span><span class="lit">3A0</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"ry"</span><span class="pun">%</span><span class="lit">3A0</span><span class="pun">%</span><span class="lit">7D</span><span class="pun">%</span><span class="lit">5D</span><span class="pun">%</span><span class="lit">2C</span><span class="str">"background"</span><span class="pun">%</span><span class="lit">3A</span><span class="str">"rgba(0%2C%200%2C%200%2C%200)"</span><span class="pun">%</span><span class="lit">7D</span></code></li><li
  class="L1"
><code></code></li><li class="L2"><code></code></li><li class="L3"><code><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-section-divider"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li></ol></pre>
      <p data-anchor-id="ozvy">并通过“data”查询参数传递给服务器。立即回应“image / png”的Content-type，如下所示：</p>
      <p
        data-anchor-id="mdsw"
      >正如你所看到的，在服务器上使用Fabric是非常简单直接的。随意试验这个片段。可以从URL参数中更改画布尺寸，或者在返回图像作为响应之前修改客户端数据。</p>
      <h3 data-anchor-id="oerh" id="在node环境自定义fabric的字体">在Node环境自定义Fabric的字体</h3>
      <p data-anchor-id="exgb">
        在我们可以在Fabric中使用自定义字体之前，我们需要先加载它们。在浏览器（客户端）中，加载字体的最常用方法是使用
        <a href="http://www.w3.org/TR/css3-fonts/#font-face-rule" target="_blank">CSS3 @font-face</a>规则。 在Node（服务器端）的Fabric中，我们可以使用node-canvas的
        <strong>Font API</strong>加载字体。
      </p>
      <p data-anchor-id="ws0o">
        下面的示例演示如何加载和使用自定义字体。将其保存到customfont.js并确保字体文件的路径正确。在这个例子中，我们使用
        <a href="http://www.google.com/fonts/specimen/Ubuntu" target="_blank">Ubuntu</a>作为自定义字体。
      </p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="gnue" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> fs </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">'fs'</span><span class="pun">),</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">    fabric </span><span class="pun">=</span><span class="pln"> require</span><span class="pun">(</span><span class="str">'fabric'</span><span class="pun">).</span><span class="pln">fabric</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">    canvas </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">createCanvasForNode</span><span class="pun">(</span><span class="lit">300</span><span class="pun">,</span><span class="pln"> </span><span class="lit">250</span><span class="pun">);</span></code></li><li
  class="L3"
><code class="language-js"></code></li><li class="L4"><code class="language-js"><span class="kwd">var</span><span class="pln"> font </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> canvas</span><span class="pun">.</span><span class="typ">Font</span><span class="pun">(</span><span class="str">'Ubuntu'</span><span class="pun">,</span><span class="pln"> __dirname </span><span class="pun">+</span><span class="pln"> </span><span class="str">'/fonts/Ubuntu-Regular.ttf'</span><span class="pun">);</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">font</span><span class="pun">.</span><span class="pln">addFace</span><span class="pun">(</span><span class="pln">__dirname </span><span class="pun">+</span><span class="pln"> </span><span class="str">'/fonts/Ubuntu-Bold.ttf'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'bold'</span><span class="pun">);</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">font</span><span class="pun">.</span><span class="pln">addFace</span><span class="pun">(</span><span class="pln">__dirname </span><span class="pun">+</span><span class="pln"> </span><span class="str">'/fonts/Ubuntu-Italic.ttf'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'normal'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'italic'</span><span class="pun">);</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">font</span><span class="pun">.</span><span class="pln">addFace</span><span class="pun">(</span><span class="pln">__dirname </span><span class="pun">+</span><span class="pln"> </span><span class="str">'/fonts/Ubuntu-BoldItalic.ttf'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'bold'</span><span class="pun">,</span><span class="pln"> </span><span class="str">'italic'</span><span class="pun">);</span></code></li><li
  class="L8"
><code class="language-js"></code></li><li class="L9"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">contextContainer</span><span class="pun">.</span><span class="pln">addFont</span><span class="pun">(</span><span class="pln">font</span><span class="pun">);</span><span class="pln">  </span><span class="com">// 使用 createPNGStream 或者 createJPEGStream 的时候</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">contextTop</span><span class="pun">.</span><span class="pln">addFont</span><span class="pun">(</span><span class="pln">font</span><span class="pun">);</span><span class="pln">        </span><span class="com">// 使用 toDataURL 或者 toDataURLWithMultiplier的时候</span></code></li><li
  class="L1"
><code class="language-js"></code></li><li class="L2"><code class="language-js"><span class="kwd">var</span><span class="pln"> text </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">'regular'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">    left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">150</span><span class="pun">,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">    top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span><span class="pun">,</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">    fontFamily</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Ubuntu'</span></code></li><li
  class="L6"
><code class="language-js"><span class="pun">});</span></code></li><li class="L7"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">text</span><span class="pun">);</span></code></li><li
  class="L8"
><code class="language-js"></code></li><li class="L9"><code class="language-js"><span class="pln">text </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">'bold'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">    left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">150</span><span class="pun">,</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">    top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">    fontFamily</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Ubuntu'</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">    fontWeight</span><span class="pun">:</span><span class="pln"> </span><span class="str">'bold'</span></code></li><li
  class="L4"
><code class="language-js"><span class="pun">});</span></code></li><li class="L5"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">text</span><span class="pun">);</span></code></li><li
  class="L6"
><code class="language-js"></code></li><li class="L7"><code class="language-js"><span class="pln">text </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">'italic'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">150</span><span class="pun">,</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">    top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">150</span><span class="pun">,</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">    fontFamily</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Ubuntu'</span><span class="pun">,</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">    fontStyle</span><span class="pun">:</span><span class="pln"> </span><span class="str">'italic'</span></code></li><li
  class="L2"
><code class="language-js"><span class="pun">});</span></code></li><li class="L3"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">text</span><span class="pun">);</span></code></li><li
  class="L4"
><code class="language-js"></code></li><li class="L5"><code class="language-js"><span class="pln">text </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">'bold italic'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">    left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">150</span><span class="pun">,</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">    top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">200</span><span class="pun">,</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    fontFamily</span><span class="pun">:</span><span class="pln"> </span><span class="str">'Ubuntu'</span><span class="pun">,</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">    fontWeight</span><span class="pun">:</span><span class="pln"> </span><span class="str">'bold'</span><span class="pun">,</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">    fontStyle</span><span class="pun">:</span><span class="pln"> </span><span class="str">'italic'</span></code></li><li
  class="L1"
><code class="language-js"><span class="pun">});</span></code></li><li class="L2"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">text</span><span class="pun">);</span></code></li><li
  class="L3"
><code class="language-js"></code></li><li class="L4"><code class="language-js"><span class="kwd">var</span><span class="pln"> out </span><span class="pun">=</span><span class="pln"> fs</span><span class="pun">.</span><span class="pln">createWriteStream</span><span class="pun">(</span><span class="pln">__dirname </span><span class="pun">+</span><span class="pln"> </span><span class="str">'/customfont.png'</span><span class="pun">);</span></code></li><li
  class="L5"
><code class="language-js"><span class="kwd">var</span><span class="pln"> stream </span><span class="pun">=</span><span class="pln"> canvas</span><span class="pun">.</span><span class="pln">createPNGStream</span><span class="pun">();</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">stream</span><span class="pun">.</span><span class="pln">on</span><span class="pun">(</span><span class="str">'data'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">chunk</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">    out</span><span class="pun">.</span><span class="pln">write</span><span class="pun">(</span><span class="pln">chunk</span><span class="pun">);</span></code></li><li
  class="L8"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="0sc7">
        运行
        <code>node customfont.js</code>创建一个图像（customfont.png），如下所示：
      </p>
      <p data-anchor-id="v7ki">
        <img src="http://fabricjs.com/article_assets/4_16.png" alt=" " title>
      </p>
      <p data-anchor-id="65ly">
        让我们仔细看看发生了什么。首先，通过将字体名称和路径（作为常规字体文件）作为参数传递，创建一个字体对象
        <code>new canvas.Font（）</code>。然后通过将字体path，weight和style作为参数传递，使用
        <code>font.addFace（）</code>添加其他字体。最后，使用
        <code>canvas.contextContainer.addFont（）</code>（当使用
        <strong>createPNGStream</strong>或
        <strong>createJPEGStream</strong>时）或
        <code>canvas.contextTop.addFont（）</code>（使用
        <strong>toDataURL</strong>或
        <strong>toDataURLWithMultiplier</strong>时）可以将字体添加到所需的上下文中。
      </p>
      <p data-anchor-id="1qbo">
        现在我们可以通过将
        <code>fabric.Text</code>对象的
        <strong>fontFamily</strong>属性设置为字体名称来使用我们的字体。结合
        <strong>fontWeight</strong>和
        <strong>fontStyle</strong>属性，我们可以应用我们添加的字体。有关这些属性的更多信息，请参阅第2部分。请注意，该示例显示了如何在创建新文本对象时使用自定义字体，但这也适用于通过JSON加载的文本对象。
      </p>
      <p data-anchor-id="ykpu">这就到了Fabric的4部分系列的结尾。我希望你现在拥有足够的知识，创造有趣，酷，有用，有趣，具有挑战性，令人兴奋的东西！</p>
    </div>
  </div>
</template>
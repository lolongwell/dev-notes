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
      <h1 data-anchor-id="nvdm" id="fabricjs介绍-第三部分">Fabric.js介绍 第三部分</h1>
      <p data-anchor-id="psgw">我们已经介绍了本系列的第一部分和第二部分的大部分基础知识。我们继续前进到更高级的技巧！</p>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="151w" id="组合group">组合（Group）</h2>
      <p data-anchor-id="xsem">
        <img src="http://fabricjs.com/article_assets/8.png" alt=" ">
      </p>
      <p
        data-anchor-id="4jfo"
      >我们首先谈论的是组合。组合是Fabric最强大的功能之一。 将任何Fabric对象分组成一个单一实体的简单方法，为什么要这样做？当然是为了能够将这些对象作为一个单元来处理。</p>
      <p
        data-anchor-id="y1mf"
      >可以用鼠标来将画布上的任何数量的Fabric对象进行分组，形成单一的组合形式，一旦分组，组内Fabric对象可以一起移动，甚至一起修改。他们组成一个组。我们可以缩放这个组合，旋转，甚至改变其表现性质：颜色、透明度、边界等。</p>
      <p
        data-anchor-id="6bzt"
      >这正是组合所要做的，每当您在画布上看到这样的选择时，Fabric将在内部创建一组对象。只有以编程方式提供使用组的访问才有意义。这就是是fabric的组合。</p>
      <p data-anchor-id="ymln">让我们创建一个包含两个Fabric对象的组合，圆和文本：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="j8ay" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> circle </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#eef'</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  scaleY</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0.5</span><span class="pun">,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  originX</span><span class="pun">:</span><span class="pln"> </span><span class="str">'center'</span><span class="pun">,</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  originY</span><span class="pun">:</span><span class="pln"> </span><span class="str">'center'</span></code></li><li
  class="L6"
><code class="language-js"><span class="pun">});</span></code></li><li class="L7"><code class="language-js"></code></li><li class="L8"><code class="language-js"><span class="kwd">var</span><span class="pln"> text </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span><span class="str">'hello world'</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">  fontSize</span><span class="pun">:</span><span class="pln"> </span><span class="lit">30</span><span class="pun">,</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">  originX</span><span class="pun">:</span><span class="pln"> </span><span class="str">'center'</span><span class="pun">,</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  originY</span><span class="pun">:</span><span class="pln"> </span><span class="str">'center'</span></code></li><li
  class="L2"
><code class="language-js"><span class="pun">});</span></code></li><li class="L3"><code class="language-js"></code></li><li class="L4"><code class="language-js"><span class="kwd">var</span><span class="pln"> group </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Group</span><span class="pun">([</span><span class="pln"> circle</span><span class="pun">,</span><span class="pln"> text </span><span class="pun">],</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">150</span><span class="pun">,</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">  top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  angle</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">10</span></code></li><li
  class="L8"
><code class="language-js"><span class="pun">});</span></code></li><li class="L9"><code class="language-js"></code></li><li class="L0"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">group</span><span class="pun">);</span></code></li></ol></pre>
      <p data-anchor-id="xxhl">
        首先，我们创建了一个“hello world”文本对象。将
        <code>originX</code>和
        <code>originY</code>设置为“center”会使得将以组合为中心，默认情况下，组合成员相对于组合的左上角定位。然后，圆圈以100px半径填充“#eef”颜色并垂直缩放0.5倍（scaleY = 0.5）。然后，我们创建了一个
        <code>fabric.Group</code>实例，通过一个包含这两个Fabric对象的数组传递给这个组合，并给它的位置为150/100和-10角度。最后，将这个组合添加到画布（使用
        <code>canvas.add（）</code>）。
      </p>
      <p data-anchor-id="s9qk">
        您会看到画布上的一个对象，看起来像一个椭圆标签。请注意，如果我们要修改他们的样子，可以将该他们作为单个实体使用，我们只是改变组合的属性，给出要更改的的
        <code>left</code>，
        <code>top</code>和
        <code>angle</code>值。
      </p>
      <p data-anchor-id="iivs">
        <img src="http://fabricjs.com/article_assets/3_1.png" alt=" " title>
      </p>
      <p data-anchor-id="yk0b">让我们再来修改一下canvas画布上的这个组合：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="x514" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">group</span><span class="pun">.</span><span class="pln">item</span><span class="pun">(</span><span class="lit">0</span><span class="pun">).</span><span class="pln">setFill</span><span class="pun">(</span><span class="str">'red'</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">group</span><span class="pun">.</span><span class="pln">item</span><span class="pun">(</span><span class="lit">1</span><span class="pun">).</span><span class="kwd">set</span><span class="pun">({</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  text</span><span class="pun">:</span><span class="pln"> </span><span class="str">'trololo'</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'white'</span></code></li><li
  class="L4"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="bm3f">
        这里发生了什么？我们通过
        <code>item（）</code>方法访问组中的各个对象，并修改其属性。第一个对象是椭圆，第二个是文字。让我们看看发生了什么：
      </p>
      <p data-anchor-id="xxka">
        <img src="http://fabricjs.com/article_assets/3_2.png" alt=" " title>
      </p>
      <p
        data-anchor-id="fsxn"
      >您现在可能注意到的一件重要的事情是，组合中的对象都相对于组合的中心定位，当我们改变了text对象中的内容时，即使内容的宽度改变了，但是它仍然保持居中的位置，如果你不想要这个行为，您需要指定对象的left/right坐标。在这种情况下，根据这些坐标将它们分组在一起。</p>
      <p data-anchor-id="0foi">让我们创建并组合3个圆，使它们相互水平定位：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="ic7v" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> circle1 </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span></code></li><li
  class="L4"
><code class="language-js"><span class="pun">});</span></code></li><li class="L5"><code class="language-js"><span class="kwd">var</span><span class="pln"> circle2 </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">  radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span><span class="pun">,</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span><span class="pun">,</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">  left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span></code></li><li
  class="L9"
><code class="language-js"><span class="pun">});</span></code></li><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> circle3 </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'blue'</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">200</span></code></li><li
  class="L4"
><code class="language-js"><span class="pun">});</span></code></li><li class="L5"><code class="language-js"></code></li><li class="L6"><code class="language-js"><span class="kwd">var</span><span class="pln"> group </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Group</span><span class="pun">([</span><span class="pln"> circle1</span><span class="pun">,</span><span class="pln"> circle2</span><span class="pun">,</span><span class="pln"> circle3 </span><span class="pun">],</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">200</span><span class="pun">,</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">  top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span></code></li><li
  class="L9"
><code class="language-js"><span class="pun">});</span></code></li><li class="L0"><code class="language-js"></code></li><li class="L1"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">group</span><span class="pun">);</span></code></li></ol></pre>
      <p data-anchor-id="bi15">
        <img src="http://fabricjs.com/article_assets/3_3.png" alt=" " title>
      </p>
      <p data-anchor-id="296a">
        使用团体时要注意的另一件事是
        <strong>对象的状态</strong>，举个例子，当使用图片形成组合时，您需要确保这些图像已经完全加载。由于Fabric已经提供了帮助方法来确保图像被加载，这变得相当容易：
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="wkm2" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">fabric</span><span class="pun">.</span><span class="typ">Image</span><span class="pun">.</span><span class="pln">fromURL</span><span class="pun">(</span><span class="str">'/assets/pug.jpg'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">img</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> img1 </span><span class="pun">=</span><span class="pln"> img</span><span class="pun">.</span><span class="pln">scale</span><span class="pun">(</span><span class="lit">0.1</span><span class="pun">).</span><span class="kwd">set</span><span class="pun">({</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L2"
><code class="language-js"></code></li><li class="L3"><code class="language-js"><span class="pln">  fabric</span><span class="pun">.</span><span class="typ">Image</span><span class="pun">.</span><span class="pln">fromURL</span><span class="pun">(</span><span class="str">'/assets/pug.jpg'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">img</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">    </span><span class="kwd">var</span><span class="pln"> img2 </span><span class="pun">=</span><span class="pln"> img</span><span class="pun">.</span><span class="pln">scale</span><span class="pun">(</span><span class="lit">0.1</span><span class="pun">).</span><span class="kwd">set</span><span class="pun">({</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">175</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">175</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L5"
><code class="language-js"></code></li><li class="L6"><code class="language-js"><span class="pln">    fabric</span><span class="pun">.</span><span class="typ">Image</span><span class="pun">.</span><span class="pln">fromURL</span><span class="pun">(</span><span class="str">'/assets/pug.jpg'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">img</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">      </span><span class="kwd">var</span><span class="pln"> img3 </span><span class="pun">=</span><span class="pln"> img</span><span class="pun">.</span><span class="pln">scale</span><span class="pun">(</span><span class="lit">0.1</span><span class="pun">).</span><span class="kwd">set</span><span class="pun">({</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">250</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">250</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L8"
><code class="language-js"></code></li><li class="L9"><code class="language-js"><span class="pln">      canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Group</span><span class="pun">([</span><span class="pln"> img1</span><span class="pun">,</span><span class="pln"> img2</span><span class="pun">,</span><span class="pln"> img3</span><span class="pun">],</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">200</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">200</span><span class="pln"> </span><span class="pun">}))</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">    </span><span class="pun">});</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="pun">});</span></code></li><li
  class="L2"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="gl54">
        <img src="http://fabricjs.com/article_assets/3_4.png" alt=" " title>
      </p>
      <p data-anchor-id="f4r6">
        在使用组合时可以使用哪些其他方法?使用
        <code>getObjects（）</code>方法，可以返回一个包含组合中所有对象的数组，使用
        <code>size（）</code>可以知道组合中所有对象的数量。使用
        <code>contains（）</code>可以检查某个对象是否在组合中。我们之前看到的
        <code>item（）</code>可以检索组中的特定对象。使用
        <code>forEachObject</code>可以遍历每个组合中的对象。还有
        <code>add（）</code>和
        <code>remove（）</code>方法来相应地从组中添加和删除对象。
      </p>
      <p
        data-anchor-id="uoyi"
      >您可以通过2种方式添加/删除组中的对象：更新组合的尺寸/位置，我们建议使用更新尺寸，除非您正在执行批量处理操作，并且在进程中组合的宽度/高度都没有问题。</p>
      <p data-anchor-id="gow0">在组合中心添加一个长方形：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="bni0" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">group</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="pun">...</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  originX</span><span class="pun">:</span><span class="pln"> </span><span class="str">'center'</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  originY</span><span class="pun">:</span><span class="pln"> </span><span class="str">'center'</span></code></li><li
  class="L4"
><code class="language-js"><span class="pun">}));</span></code></li></ol></pre>
      <p data-anchor-id="d1ba">在组合的中心附近100px添加矩形：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="la93" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">group</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="pun">...</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  originX</span><span class="pun">:</span><span class="pln"> </span><span class="str">'center'</span><span class="pun">,</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  originY</span><span class="pun">:</span><span class="pln"> </span><span class="str">'center'</span></code></li><li
  class="L6"
><code class="language-js"><span class="pun">}));</span></code></li></ol></pre>
      <p data-anchor-id="g01v">在组合中心添加矩形并且更新组合的尺寸：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="xhqg" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">group</span><span class="pun">.</span><span class="pln">addWithUpdate</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="pun">...</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  left</span><span class="pun">:</span><span class="pln"> group</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="str">'left'</span><span class="pun">),</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  top</span><span class="pun">:</span><span class="pln"> group</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="str">'top'</span><span class="pun">),</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  originX</span><span class="pun">:</span><span class="pln"> </span><span class="str">'center'</span><span class="pun">,</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  originY</span><span class="pun">:</span><span class="pln"> </span><span class="str">'center'</span></code></li><li
  class="L6"
><code class="language-js"><span class="pun">}));</span></code></li></ol></pre>
      <p data-anchor-id="847b">在组合的中心附近100px添加矩形并且更新组合的尺寸：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="1msy" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">group</span><span class="pun">.</span><span class="pln">addWithUpdate</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="pun">...</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  left</span><span class="pun">:</span><span class="pln"> group</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="str">'left'</span><span class="pun">)</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  top</span><span class="pun">:</span><span class="pln"> group</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="str">'top'</span><span class="pun">)</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  originX</span><span class="pun">:</span><span class="pln"> </span><span class="str">'center'</span><span class="pun">,</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  originY</span><span class="pun">:</span><span class="pln"> </span><span class="str">'center'</span></code></li><li
  class="L6"
><code class="language-js"><span class="pun">}));</span></code></li></ol></pre>
      <p data-anchor-id="f2g6">最后，如果您想创建一个已经存在于画布上的对象的组合，则需要首先克隆它们：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="lrgr" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="com">// 创建一个包含两个已存在对象的副本的组合</span></code></li><li
  class="L1"
><code class="language-js"><span class="kwd">var</span><span class="pln"> group </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Group</span><span class="pun">([</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">item</span><span class="pun">(</span><span class="lit">0</span><span class="pun">).</span><span class="pln">clone</span><span class="pun">(),</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">item</span><span class="pun">(</span><span class="lit">1</span><span class="pun">).</span><span class="pln">clone</span><span class="pun">()</span></code></li><li
  class="L4"
><code class="language-js"><span class="pun">]);</span></code></li><li class="L5"><code class="language-js"></code></li><li class="L6"><code class="language-js"><span class="com">// 移除所有对象并且重新渲染</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">clear</span><span class="pun">().</span><span class="pln">renderAll</span><span class="pun">();</span></code></li><li
  class="L8"
><code class="language-js"></code></li><li class="L9"><code class="language-js"><span class="com">// 将组合添加到canvas画布</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">group</span><span class="pun">);</span></code></li></ol></pre>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="mcih" id="序列化">序列化</h2>
      <p data-anchor-id="wsxh">
        一旦你开始构建一种有状态的应用程序，也许允许用户在服务器上保存画布内容的结果，或者将内容流传输到不同的客户端，你都需要
        <strong>canvas序列化</strong>。如果仍然要发送画布内容，也是可以的，有一个选项可以将画布导出到图像。但是上传图片到服务器无疑是相当占用带宽的，论大小，没有什么可以比得过文本了，这就是为什么Fabric为canvas画布序列化/反序列化提供了极好的支持。
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="gi4h" id="toobject-tojson">toObject, toJSON</h3>
      <p data-anchor-id="ytsf">
        Fabric中的canvas序列化方法主要是
        <code>toObject（）</code>和
        <code>toJSON（）</code>方法。我们来看一个简单的例子，首先序列化一个空的画布：
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="3zxg" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'c'</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">canvas</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="com">// '{"objects":[],"background":"rgba(0, 0, 0, 0)"}'</span></code></li></ol></pre>
      <p data-anchor-id="swzh">
        我们使用ES5
        <code>JSON.stringify（）</code>方法，如果
        <code>toJSON</code>方法存在，则会隐性调用。由于Fabric中的canvas实例已经具有
        <code>toJSON</code>方法，就相当于我们调用了
        <code>canvas.toJSON（）</code>。
      </p>
      <p
        data-anchor-id="y6hg"
      >注意返回的表示空的canvas画布的字符串。它是JSON形式，并且由“objects”和“background”属性组成。“objects”当前为空，因为canvas上没有任何内容，而background的默认值为“rgba（0，0，0，0）”）。</p>
      <p data-anchor-id="9qnx">让我们给画布不同的背景，看看它有什么变化：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="gtup" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">backgroundColor </span><span class="pun">=</span><span class="pln"> </span><span class="str">'red'</span><span class="pun">;</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">canvas</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="com">// '{"objects":[],"background":"red"}'</span></code></li></ol></pre>
      <p data-anchor-id="cwcc">正如所料，画布表现现在反映出新的背景颜色。现在，我们来添加一些Fabric对象！</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="hfyq" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span><span class="pun">,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span><span class="pun">,</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span></code></li><li
  class="L6"
><code class="language-js"><span class="pun">}));</span></code></li><li class="L7"><code class="language-js"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">canvas</span><span class="pun">));</span></code></li></ol></pre>
      <p data-anchor-id="rv1n">输出是：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="vw4j" style><ol class="linenums"><li class="L0"><code><span
  class="str"
>'{"objects":[{"type":"rect","left":50,"top":50,"width":20,"height":20,"fill":"green","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"rx":0,"ry":0}],"background":"rgba(0, 0, 0, 0)"}'</span></code></li></ol></pre>
      <p
        data-anchor-id="8usy"
      >看起来改变了好多，在“objects”数组新增了一个对象，序列化为JSON。请注意它的表示方式是如何包含其所有视觉特征：left, top, width, height, fill, stroke等。</p>
      <p data-anchor-id="35pa">如果我们要添加另一个对象，比如，一个位于矩形旁边的红色圆圈，您会看到相应改变：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="4jet" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span><span class="pun">,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span></code></li><li
  class="L5"
><code class="language-js"><span class="pun">}));</span></code></li><li class="L6"><code class="language-js"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">canvas</span><span class="pun">));</span></code></li></ol></pre>
      <p data-anchor-id="s2v0">输出是：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="a8be" style><ol class="linenums"><li class="L0"><code><span
  class="str"
>'{"objects":[{"type":"rect","left":50,"top":50,"width":20,"height":20,"fill":"green","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"rx":0,"ry":0},{"type":"circle","left":100,"top":100,"width":100,"height":100,"fill":"red","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"radius":50}],"background":"rgba(0, 0, 0, 0)"}'</span></code></li></ol></pre>
      <p data-anchor-id="ozxu">
        注意看
        <code>“type”：“rect”</code>和
        <code>“type”：“circle”</code>部分，即使起初看起来可能会有很多输出，但是与图像序列化所得到的结果无关。只是为了比较，让我们来看看你将用
        <code>canvas.toDataURL（'png'）</code>获得的一个字符串的大约1/10（！）
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="d8ov" style><ol class="linenums"><li class="L0"><code><span class="pln">data</span><span class="pun">:</span><span class="pln">image</span><span class="pun">/</span><span class="pln">png</span><span class="pun">;</span><span class="pln">base64</span><span class="pun">,</span><span
  class="pln"
>iVBORw0KGgoAAAANSUhEUgAAAyAAAAK8CAYAAAAXo9vkAAAgAElEQVR4Xu3dP4xtBbnG4WPAQOQ2YBCLK1qpoQE1</span><span
  class="pun"
>/</span><span class="pln">m</span><span class="pun">+</span><span
  class="typ"
>NVlCDwUACicRCEuysrOwkwcJgAglEItRQaWz9HxEaolSKtxCJ0FwMRIj32zqFcjm8e868s2fNWo</span><span
  class="pun"
>/</span><span class="typ">Jygl</span><span class="pun">+</span><span class="pln">e397rWetk5xf5pyZd13wPwIECBAgQIAAAQIECBxI4F0H</span><span class="pun">+</span><span
  class="pln"
>hwfQ4AAAQIECBAgQIAAgQsCxENAgAABAgQIECBAgMDBBATIwah9EAECBAgQIECAAAECAsQzQIAAAQIECBAgQIDAwQQEyMGofRABAgQIECBAgAABAgLEM0CAAAECBAgQIECAwMEEBMjBqH0QAQIECBAgQIAAAQICxDNAgAABAgQIECBAgMDBBATIwah9EAECBAgQIECAAAECAsQzQIAAAQIECBAgQIDAwQQEyMGofRABAgQIECBAgAABAgLEM0CAAAECBAgQIECAwMEEBMjBqH0QAQIECBAgQIAAAQICxDNAgAABAgQIECBAgMDBBATIwah9EAECBAgQIECAAAECAsQzQIAAAQIECBAgQIDAwQQEyMGofRABAgQIECBAgAABAgLEM0CAAAECBAgQIECAwMEEBMjBqH0QAQIECBAgQIAAAQICxDNAgAABAgQIECBAgMDBBATIwah9EAECBAgQIECAAAECAsQzQIAAAQIECBAgQIDAwQQEyMGofRABAgQIECBAgAABAgLEM0CAAAECBAgQIECAwMEEBMjBqH0QAQIECBAgQIAAAQICxDNAgAABAgQIECBAgMDBBATIwah9EAECBAgQIECAAAECAsQzQIAAAQIECBAgQIDAwQQEyMGofRABAgQIECBAgAABAgLEM0CAAAECBAgQIECAwMEEBMjBqH0QAQIECBAgQIAAAQICxDNAgAABAgQIECBAgMDBBATIwah9EAECBAgQIECAAAECAsQzQIAAAQIECBAgQIDAwQQEyMGofRABAgQIECBAgAABAgLEM0CAAAECBAgQIECAwMEEBMjBqH0QAQIECBAgQIAAAQICxDNAgAABAgQIECBAgMDBBATIwah9EAECBAgQIECAAAECyw</span><span
  class="pun"
>+</span><span class="typ">Qb134R</span><span class="pun">/</span><span class="pln">U2fevC8q</span><span class="pun">+</span><span class="lit">5esGWESBAgAABAgQIEFiOwPL</span><span class="pun">/</span><span
  class="pln"
>MC5AlvO0OBMCBAgQIECAAAECJxQQICcE9HYCBAgQIECAAAECBPYXECD7W3klAQIECBAgQIAAAQInFBAgJwT0dgIECBAgQIAAAQIE9hcQIPtbeSUBAgQIECBAgAABAicUECAnBPR2AgQIECBAgAABAgT2FxAg</span><span
  class="pun"
>+</span><span
  class="lit"
>1t5JQECBAgQIECAAAECJxQQICcE9HYCBAgQIECAAAECBPYXECD7W3klAQIECBAgQIAAAQInFBAgJwTc9</span><span
  class="pun"
>+</span><span class="lit">3z49yvmNd</span><span class="pun">+</span><span class="pln">dI7PzPHJOW6Y4wNzXD3HlXNc9pZdb85</span><span class="pun">/</span><span class="pln">vzbHK3P8aY7n5vj1HL</span><span class="pun">+</span><span class="pln">Y43dz417f97O9jgABAgQIECBAgMBSBATIKd2JCY5dWNwyx5fn</span><span class="pun">+</span><span class="typ">PwcV5U</span><span class="pun">/</span><span
  class="lit"
>6tXZ99M5fjjHk3Mjd6HifwQIECBAgAABAgQWLSBAirdnouP6WXfvHHfOcU1x9T6rXp4XPTLHA3NTX9jnDV5DgAABAgQIECBA4NACAuSE4hMdl8</span><span
  class="pun"
>+</span><span class="typ">Kr83xzTmuO</span><span class="pun">+</span><span class="pln">G61ttfnEXfnuN7c4PfaC21hwABAgQIECBAgMBJBQTIJQpOeFw7b71</span><span class="pun">/</span><span class="pln">jtsvccWh3vbYfNB9c6NfOtQH</span><span class="pun">+</span><span class="pln">hwCBAgQIECAAAECFxMQIMd8No7C4</span><span class="pun">+</span><span class="pln">F5283HfOtZv</span><span class="pun">/</span><span class="pln">ypOYG7hMhZ3wafT4AAAQIECBDYtoAA2fP</span><span class="pun">+</span><span class="pln">H</span><span class="pun">/</span><span class="lit">1Vqwd3f4jf8y1Lfdkunu7xV7OWenucFwECBAgQIEBg3QICZI</span><span class="pun">/</span><span class="lit">7O</span><span class="pun">/</span><span class="typ">Fxx7xs9wf3t36r3D3evciX7L7F7</span><span class="pun">+</span><span class="lit">6rIY8u8uycFAECBAgQIE</span></code></li></ol></pre>
      <p data-anchor-id="d0y5">
        你可能会想知道为什么还有
        <code>toObject</code>。很简单，
        <code>toObject</code>返回与
        <code>toJSON</code>相同的表示形式，只能以实际对象的形式，而不用字符串序列化。例如，以一个绿色矩形的canvas的之前的例子。
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="fzxu" style><ol class="linenums"><li class="L0"><code class="language-canvas.toObject（）```的输出是这样的："></code></li><li class="L1"><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">```json</span></code></li><li
  class="L2"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">{ "background" : "rgba(0, 0, 0, 0)",</span></code></li><li
  class="L3"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">  "objects" : [</span></code></li><li
  class="L4"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">    {</span></code></li><li
  class="L5"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "angle" : 0,</span></code></li><li
  class="L6"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "fill" : "green",</span></code></li><li
  class="L7"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "flipX" : false,</span></code></li><li
  class="L8"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "flipY" : false,</span></code></li><li
  class="L9"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "hasBorders" : true,</span></code></li><li
  class="L0"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "hasControls" : true,</span></code></li><li
  class="L1"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "hasRotatingPoint" : false,</span></code></li><li
  class="L2"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "height" : 20,</span></code></li><li
  class="L3"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "left" : 50,</span></code></li><li
  class="L4"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "opacity" : 1,</span></code></li><li
  class="L5"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "overlayFill" : null,</span></code></li><li
  class="L6"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "perPixelTargetFind" : false,</span></code></li><li
  class="L7"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "scaleX" : 1,</span></code></li><li
  class="L8"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "scaleY" : 1,</span></code></li><li
  class="L9"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "selectable" : true,</span></code></li><li
  class="L0"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "stroke" : null,</span></code></li><li
  class="L1"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "strokeDashArray" : null,</span></code></li><li
  class="L2"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "strokeWidth" : 1,</span></code></li><li
  class="L3"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "top" : 50,</span></code></li><li
  class="L4"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "transparentCorners" : true,</span></code></li><li
  class="L5"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "type" : "rect",</span></code></li><li
  class="L6"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">      "width" : 20</span></code></li><li
  class="L7"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">    }</span></code></li><li
  class="L8"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">  ]</span></code></li><li
  class="L9"
><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">}</span></code></li><li
  class="L0"
><code class="language-canvas.toObject（）```的输出是这样的："></code></li><li class="L1"><code class="language-canvas.toObject（）```的输出是这样的："></code></li><li class="L2"><code class="language-canvas.toObject（）```的输出是这样的："><span class="str">&lt;div class="md-section-divider"&gt;&lt;/div&gt;</span></code></li></ol></pre>
      <p data-anchor-id="kfi0">
        可以看出，
        <code>toJSON</code>输出本质上是一个字符串的
        <code>toObject</code>输出。现在，有趣的（有用的）事情是，toObject输出是聪明和懒惰的。您在“objects”数组中看到的内容是遍历canvas画布上所有的对象并调用该对象本身自己的
        <code>toObject</code>方法的结果。
        <code>fabric.Path</code>有自己的
        <code>toObject</code>，返回路径的“points”数组，
      </p>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="c4gg" style><ol class="linenums"><li class="L0"><code class="language-fabric.Image```也有自己的```toObject```，返回图像的“src”属性。以真正的面向对象的方式，所有对象都能够自己序列化。"></code></li><li
  class="L1"
><code class="language-fabric.Image```也有自己的```toObject```，返回图像的“src”属性。以真正的面向对象的方式，所有对象都能够自己序列化。"><span class="pun">这意味着当您创建自己的“类”，或者需要定制对象的序列化表示时，您需要做的就是使用</span><span class="str">```toObject```</span><span class="pun">方法</span><span class="pln"> </span><span class="pun">-</span><span class="pln"> </span><span class="pun">完全替换它或扩展它。我们来试试一下：</span></code></li><li
  class="L2"
><code class="language-fabric.Image```也有自己的```toObject```，返回图像的“src”属性。以真正的面向对象的方式，所有对象都能够自己序列化。"></code></li><li
  class="L3"
><code class="language-fabric.Image```也有自己的```toObject```，返回图像的“src”属性。以真正的面向对象的方式，所有对象都能够自己序列化。"></code></li><li
  class="L4"
><code class="language-fabric.Image```也有自己的```toObject```，返回图像的“src”属性。以真正的面向对象的方式，所有对象都能够自己序列化。"></code></li><li
  class="L5"
><code class="language-fabric.Image```也有自己的```toObject```，返回图像的“src”属性。以真正的面向对象的方式，所有对象都能够自己序列化。"><span class="pun">&lt;</span><span class="pln">div </span><span class="kwd">class</span><span class="pun">=</span><span class="str">"md-section-divider"</span><span class="pun">&gt;&lt;/</span><span class="pln">div</span><span class="pun">&gt;</span></code></li><li
  class="L6"
><code class="language-fabric.Image```也有自己的```toObject```，返回图像的“src”属性。以真正的面向对象的方式，所有对象都能够自己序列化。"></code></li><li
  class="L7"
><code class="language-fabric.Image```也有自己的```toObject```，返回图像的“src”属性。以真正的面向对象的方式，所有对象都能够自己序列化。"><span class="str">```js</span></code></li><li
  class="L8"
><code class="language-fabric.Image```也有自己的```toObject```，返回图像的“src”属性。以真正的面向对象的方式，所有对象都能够自己序列化。"><span class="str">var rect = new fabric.Rect();</span></code></li><li
  class="L9"
><code class="language-fabric.Image```也有自己的```toObject```，返回图像的“src”属性。以真正的面向对象的方式，所有对象都能够自己序列化。"><span class="str">rect.toObject = function() {</span></code></li><li
  class="L0"
><code class="language-fabric.Image```也有自己的```toObject```，返回图像的“src”属性。以真正的面向对象的方式，所有对象都能够自己序列化。"><span class="str">  return { name: 'trololo' };</span></code></li><li
  class="L1"
><code class="language-fabric.Image```也有自己的```toObject```，返回图像的“src”属性。以真正的面向对象的方式，所有对象都能够自己序列化。"><span class="str">};</span></code></li><li
  class="L2"
><code class="language-fabric.Image```也有自己的```toObject```，返回图像的“src”属性。以真正的面向对象的方式，所有对象都能够自己序列化。"><span class="str">canvas.add(rect);</span></code></li><li
  class="L3"
><code class="language-fabric.Image```也有自己的```toObject```，返回图像的“src”属性。以真正的面向对象的方式，所有对象都能够自己序列化。"><span class="str">console.log(JSON.stringify(canvas));</span></code></li></ol></pre>
      <p data-anchor-id="34cb">输出：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="l5fu" style><ol class="linenums"><li class="L0"><code><span class="str">'{"objects":[{"name":"trololo"}],"background":"rgba(0, 0, 0, 0)"}'</span></code></li></ol></pre>
      <p data-anchor-id="hsz7">
        您可以看到，objects数组现在有一个自定义的展示。这种覆盖可能不是很有用 - 尽管把重点提到了：我们如何拓展和更改矩形的
        <code>toObject</code>方法与额外的属性。
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="aou9" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> rect </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">();</span></code></li><li
  class="L1"
><code class="language-js"></code></li><li class="L2"><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="pln">toObject </span><span class="pun">=</span><span class="pln"> </span><span class="pun">(</span><span class="kwd">function</span><span class="pun">(</span><span class="pln">toObject</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">object</span><span class="pun">.</span><span class="pln">extend</span><span class="pun">(</span><span class="pln">toObject</span><span class="pun">.</span><span class="pln">call</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">),</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">      name</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">name</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">    </span><span class="pun">});</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  </span><span class="pun">};</span></code></li><li
  class="L8"
><code class="language-js"><span class="pun">})(</span><span class="pln">rect</span><span class="pun">.</span><span class="pln">toObject</span><span class="pun">);</span></code></li><li
  class="L9"
><code class="language-js"></code></li><li class="L0"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">rect</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"></code></li><li class="L2"><code class="language-js"><span class="pln">rect</span><span class="pun">.</span><span class="pln">name </span><span class="pun">=</span><span class="pln"> </span><span class="str">'trololo'</span><span class="pun">;</span></code></li><li
  class="L3"
><code class="language-js"></code></li><li class="L4"><code class="language-js"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">canvas</span><span class="pun">));</span></code></li></ol></pre>
      <p data-anchor-id="qxyc">输出：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="7z66" style><ol class="linenums"><li class="L0"><code><span
  class="str"
>'{"objects":[{"type":"rect","left":0,"top":0,"width":0,"height":0,"fill":"rgb(0,0,0)","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"rx":0,"ry":0,"name":"trololo"}],"background":"rgba(0, 0, 0, 0)"}'</span></code></li></ol></pre>
      <p data-anchor-id="d6md">
        我们使用附加属性“name”来扩展对象的现有
        <code>toObject</code>方法，所以“name”属性是
        <code>toObject</code>输出的一部分，值得一提的还有，如果你扩展这样的对象，您还需要确保对象所属的“class”（在这种情况下为
        <code>fabric.Rect</code>）在“stateProperties”数组中具有此属性，以便从字符串表示中加载canvas将解析并将其正确添加到对象中。
      </p>
      <p data-anchor-id="g6g3">
        您可以将对象标记为不可导出设置
        <code>excludeFromExport</code>为
        <code>true</code>。以这种方式，一些在canvas上用来辅助的对象在序列化过程中不会被保存。
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="ms7o" id="tosvg">toSVG</h3>
      <p
        data-anchor-id="bhx7"
      >另一种高效的基于文本的画布表示是SVG格式。由于Fabric专门从事画布上的SVG解析和渲染，所以将其作为双向过程并提供画布到SVG转换是有意义的。让我们将相同的矩形添加到画布中，并查看从toSVG方法返回的表示形式：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="qguu" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span><span class="pun">,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">20</span><span class="pun">,</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span></code></li><li
  class="L6"
><code class="language-js"><span class="pun">}));</span></code></li><li class="L7"><code class="language-js"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">canvas</span><span class="pun">.</span><span class="pln">toSVG</span><span class="pun">());</span></code></li></ol></pre>
      <p data-anchor-id="ogld">输出：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="egjz" style><ol class="linenums"><li class="L0"><code><span
  class="str"
>'&lt;?xml version="1.0" standalone="no" ?&gt;&lt;!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 20010904//EN" "http://www.w3.org/TR/2001/REC-SVG-20010904/DTD/svg10.dtd"&gt;&lt;svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="800" height="700" xml:space="preserve"&gt;&lt;desc&gt;Created with Fabric.js 0.9.21&lt;/desc&gt;&lt;rect x="-10" y="-10" rx="0" ry="0" width="20" height="20" style="stroke: none; stroke-width: 1; stroke-dasharray: ; fill: green; opacity: 1;" transform="translate(50 50)" /&gt;&lt;/svg&gt;'</span></code></li></ol></pre>
      <p data-anchor-id="6ytx">
        就像用
        <code>toJSON</code>和
        <code>toObject</code>一样，
        <code>toSVG</code>在canvas上调用时，将其逻辑委托给每个单独的对象，并且每个单独的对象都有自己的toSVG方法，它是特殊的对象类型。如果您需要修改或扩展对象的SVG表示，那么可以使用
        <code>toSVG</code>做同样的事情，就像我们对
        <code>toObject</code>一样。
      </p>
      <p data-anchor-id="6zd2">
        与Fabric的专有的
        <code>toObject / toJSON</code>相比，SVG表示的好处是可以将其投放到任何支持SVG的渲染器（浏览器，应用程序，打印机，相机等）中，并且它应该可以正常工作。但是，您首先需要将其加载到canvas画布上。谈到在画布上加载东西，现在我们可以将画布序列化成一个有效的文本块，我们将如何加载到画布上？
      </p>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="veak" id="反序列化svg解析器">反序列化，SVG解析器</h2>
      <p data-anchor-id="b949">
        与序列化类似，有两种方式从字符串加载canvas：从JSON表示，或从SVG。当使用JSON表示时，使用
        <code>loadFromJSON</code>和
        <code>oadFromDatalessJSON</code>方法。SVG时，使用
        <code>fabric.loadSVGFromURL</code>和
        <code>fabric.loadSVGFromString</code>。
      </p>
      <p data-anchor-id="ieue">请注意，前2个方法是实例方法，直接在canvas实例上调用，而最后2个方法是静态方法，在“fabric”对象上而不是在canvas上调用。</p>
      <p data-anchor-id="udr8">这些方法没有什么可说的。他们的工作正如你所期望的那样。例如，我们先从画布中获取以前的JSON输出并将其加载到干净的画布上：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="lg9y" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">();</span></code></li><li
  class="L1"
><code class="language-js"></code></li><li class="L2"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">loadFromJSON</span><span class="pun">(</span><span
  class="str"
>'{"objects":[{"type":"rect","left":50,"top":50,"width":20,"height":20,"fill":"green","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"rx":0,"ry":0},{"type":"circle","left":100,"top":100,"width":100,"height":100,"fill":"red","overlayFill":null,"stroke":null,"strokeWidth":1,"strokeDashArray":null,"scaleX":1,"scaleY":1,"angle":0,"flipX":false,"flipY":false,"opacity":1,"selectable":true,"hasControls":true,"hasBorders":true,"hasRotatingPoint":false,"transparentCorners":true,"perPixelTargetFind":false,"radius":50}],"background":"rgba(0, 0, 0, 0)"}'</span><span
  class="pun"
>);</span></code></li></ol></pre>
      <p data-anchor-id="e7ah">两个物体“神奇”出现在画布上：</p>
      <p data-anchor-id="rrzz">
        <img src="http://fabricjs.com/article_assets/3_5.png" alt=" " title>
      </p>
      <p data-anchor-id="xo1p">
        所以从字符串加载画布是很容易的。但是那个奇怪的
        <code>loadFromDatalessJSON</code>方法是干什么的？与我们刚刚使用的
        <code>loadFromJSON</code>有什么不同？为了理解为什么我们需要这种方法，我们需要看一下具有或多或少的复杂路径对象的序列化画布。像这个：
      </p>
      <p data-anchor-id="rus5">
        <img src="http://fabricjs.com/article_assets/3_6.png" alt=" " title>
      </p>
      <p data-anchor-id="16t1">
        而这个形状的
        <code>JSON.stringify（canvas）</code>输出是：
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="a4te" style><ol class="linenums"><li class="L0"><code><span class="pun">{</span><span class="str">"objects"</span><span class="pun">:[{</span><span class="str">"type"</span><span class="pun">:</span><span class="str">"path"</span><span class="pun">,</span><span class="str">"left"</span><span class="pun">:</span><span class="lit">184</span><span class="pun">,</span><span class="str">"top"</span><span class="pun">:</span><span class="lit">177</span><span class="pun">,</span><span class="str">"width"</span><span class="pun">:</span><span class="lit">175</span><span class="pun">,</span><span class="str">"height"</span><span class="pun">:</span><span class="lit">151</span><span class="pun">,</span><span class="str">"fill"</span><span class="pun">:</span><span class="str">"#231F20"</span><span class="pun">,</span><span class="str">"overlayFill"</span><span class="pun">:</span><span class="kwd">null</span><span class="pun">,</span><span class="str">"stroke"</span><span class="pun">:</span><span class="kwd">null</span><span class="pun">,</span><span class="str">"strokeWidth"</span><span class="pun">:</span><span class="lit">1</span><span class="pun">,</span><span class="str">"strokeDashArray"</span><span class="pun">:</span><span class="kwd">null</span><span class="pun">,</span><span class="str">"scaleX"</span><span class="pun">:</span><span class="lit">1</span><span class="pun">,</span><span class="str">"scaleY"</span><span class="pun">:</span><span class="lit">1</span><span class="pun">,</span><span class="str">"angle"</span><span class="pun">:-</span><span class="lit">19</span><span class="pun">,</span><span class="str">"flipX"</span><span class="pun">:</span><span class="kwd">false</span><span class="pun">,</span><span class="str">"flipY"</span><span class="pun">:</span><span class="kwd">false</span><span class="pun">,</span><span class="str">"opacity"</span><span class="pun">:</span><span class="lit">1</span><span class="pun">,</span><span class="str">"selectable"</span><span class="pun">:</span><span class="kwd">true</span><span class="pun">,</span><span class="str">"hasControls"</span><span class="pun">:</span><span class="kwd">true</span><span class="pun">,</span><span class="str">"hasBorders"</span><span class="pun">:</span><span class="kwd">true</span><span class="pun">,</span><span class="str">"hasRotatingPoint"</span><span class="pun">:</span><span class="kwd">false</span><span class="pun">,</span><span class="str">"transparentCorners"</span><span class="pun">:</span><span class="kwd">true</span><span class="pun">,</span><span class="str">"perPixelTargetFind"</span><span class="pun">:</span><span class="kwd">false</span><span class="pun">,</span><span class="str">"path"</span><span class="pun">:[[</span><span class="str">"M"</span><span class="pun">,</span><span class="lit">39.502</span><span class="pun">,</span><span class="lit">61.823</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">1.235</span><span class="pun">,-</span><span class="lit">0.902</span><span class="pun">,-</span><span class="lit">3.038</span><span class="pun">,-</span><span class="lit">3.605</span><span class="pun">,-</span><span class="lit">3.038</span><span class="pun">,-</span><span class="lit">3.605</span><span class="pun">],[</span><span class="str">"s"</span><span class="pun">,</span><span class="lit">0.702</span><span class="pun">,</span><span class="lit">0.4</span><span class="pun">,</span><span class="lit">3.907</span><span class="pun">,</span><span class="lit">1.203</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">3.205</span><span class="pun">,</span><span class="lit">0.8</span><span class="pun">,</span><span class="lit">7.444</span><span class="pun">,-</span><span class="lit">0.668</span><span class="pun">,</span><span class="lit">10.114</span><span class="pun">,-</span><span class="lit">1.97</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">2.671</span><span class="pun">,-</span><span class="lit">1.302</span><span class="pun">,</span><span class="lit">7.11</span><span class="pun">,-</span><span class="lit">1.436</span><span class="pun">,</span><span class="lit">9.448</span><span class="pun">,-</span><span class="lit">1.336</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">2.336</span><span class="pun">,</span><span class="lit">0.101</span><span class="pun">,</span><span class="lit">4.707</span><span class="pun">,</span><span class="lit">0.602</span><span class="pun">,</span><span class="lit">4.373</span><span class="pun">,</span><span class="lit">2.036</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">0.334</span><span class="pun">,</span><span class="lit">1.437</span><span class="pun">,-</span><span class="lit">5.742</span><span class="pun">,</span><span class="lit">3.94</span><span class="pun">,-</span><span class="lit">5.742</span><span class="pun">,</span><span class="lit">3.94</span><span class="pun">],[</span><span class="str">"s"</span><span class="pun">,</span><span class="lit">0.4</span><span class="pun">,</span><span class="lit">0.334</span><span class="pun">,</span><span class="lit">1.236</span><span class="pun">,</span><span class="lit">0.334</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">0.833</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">6.075</span><span class="pun">,-</span><span class="lit">1.403</span><span class="pun">,</span><span class="lit">6.542</span><span class="pun">,-</span><span class="lit">4.173</span><span class="pun">],[</span><span class="str">"s"</span><span class="pun">,-</span><span class="lit">1.802</span><span class="pun">,-</span><span class="lit">8.377</span><span class="pun">,-</span><span class="lit">3.272</span><span class="pun">,-</span><span class="lit">9.013</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">1.468</span><span class="pun">,-</span><span class="lit">0.633</span><span class="pun">,-</span><span class="lit">4.172</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,-</span><span class="lit">4.172</span><span class="pun">,</span><span class="lit">0</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">4.039</span><span class="pun">,</span><span class="lit">1.438</span><span class="pun">,</span><span class="lit">4.941</span><span class="pun">,</span><span class="lit">6.176</span><span class="pun">,</span><span class="lit">4.941</span><span class="pun">,</span><span class="lit">6.176</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">2.604</span><span class="pun">,-</span><span class="lit">1.504</span><span class="pun">,-</span><span class="lit">9.279</span><span class="pun">,-</span><span class="lit">1.234</span><span class="pun">,-</span><span class="lit">12.619</span><span class="pun">,</span><span class="lit">0.501</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">3.337</span><span class="pun">,</span><span class="lit">1.736</span><span class="pun">,-</span><span class="lit">8.379</span><span class="pun">,</span><span class="lit">2.67</span><span class="pun">,-</span><span class="lit">10.083</span><span class="pun">,</span><span class="lit">2.503</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">1.701</span><span class="pun">,-</span><span class="lit">0.167</span><span class="pun">,-</span><span class="lit">3.571</span><span class="pun">,-</span><span class="lit">1.036</span><span class="pun">,-</span><span class="lit">3.571</span><span class="pun">,-</span><span class="lit">1.036</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">1.837</span><span class="pun">,</span><span class="lit">0.034</span><span class="pun">,</span><span class="lit">3.239</span><span class="pun">,-</span><span class="lit">2.669</span><span class="pun">,</span><span class="lit">3.239</span><span class="pun">,-</span><span class="lit">2.669</span><span class="pun">],[</span><span class="str">"s"</span><span class="pun">,-</span><span class="lit">2.068</span><span class="pun">,</span><span class="lit">2.269</span><span class="pun">,-</span><span class="lit">5.542</span><span class="pun">,</span><span class="lit">0.434</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">3.47</span><span class="pun">,-</span><span class="lit">1.837</span><span class="pun">,-</span><span class="lit">1.704</span><span class="pun">,-</span><span class="lit">8.18</span><span class="pun">,-</span><span class="lit">1.704</span><span class="pun">,-</span><span class="lit">8.18</span><span class="pun">],[</span><span class="str">"s"</span><span class="pun">,-</span><span class="lit">2.937</span><span class="pun">,</span><span class="lit">5.909</span><span class="pun">,-</span><span class="lit">1</span><span class="pun">,</span><span class="lit">9.816</span><span class="pun">],[</span><span class="str">"C"</span><span class="pun">,</span><span class="lit">34.496</span><span class="pun">,</span><span class="lit">60.688</span><span class="pun">,</span><span class="lit">39.502</span><span class="pun">,</span><span class="lit">61.823</span><span class="pun">,</span><span class="lit">39.502</span><span class="pun">,</span><span class="lit">61.823</span><span class="pun">],[</span><span class="str">"z"</span><span class="pun">],[</span><span class="str">"M"</span><span class="pun">,</span><span class="lit">77.002</span><span class="pun">,</span><span class="lit">40.772</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,-</span><span class="lit">1.78</span><span class="pun">,-</span><span class="lit">5.03</span><span class="pun">,-</span><span class="lit">2.804</span><span class="pun">,-</span><span class="lit">8.546</span><span class="pun">],[</span><span class="str">"l"</span><span class="pun">,-</span><span class="lit">1.557</span><span class="pun">,</span><span class="lit">8.411</span><span class="pun">],[</span><span class="str">"l"</span><span class="pun">,</span><span class="lit">1.646</span><span class="pun">,</span><span class="lit">1.602</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,-</span><span class="lit">0.622</span><span class="pun">,-</span><span class="lit">0.668</span><span class="pun">,-</span><span class="lit">1.691</span><span class="pun">],[</span><span class="str">"C"</span><span class="pun">,</span><span class="lit">72.952</span><span class="pun">,</span><span class="lit">39.48</span><span class="pun">,</span><span class="lit">76.513</span><span class="pun">,</span><span class="lit">40.371</span><span class="pun">,</span><span class="lit">77.002</span><span class="pun">,</span><span class="lit">40.772</span><span class="pun">],[</span><span class="str">"z"</span><span class="pun">],[</span><span class="str">"M"</span><span class="pun">,</span><span class="lit">102.989</span><span class="pun">,</span><span class="lit">86.943</span><span class="pun">],[</span><span class="str">"M"</span><span class="pun">,</span><span class="lit">102.396</span><span class="pun">,</span><span class="lit">86.424</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">0.25</span><span class="pun">,</span><span class="lit">0.22</span><span class="pun">,</span><span class="lit">0.447</span><span class="pun">,</span><span class="lit">0.391</span><span class="pun">,</span><span class="lit">0.594</span><span class="pun">,</span><span class="lit">0.519</span><span class="pun">],[</span><span class="str">"C"</span><span class="pun">,</span><span class="lit">102.796</span><span class="pun">,</span><span class="lit">86.774</span><span class="pun">,</span><span class="lit">102.571</span><span class="pun">,</span><span class="lit">86.578</span><span class="pun">,</span><span class="lit">102.396</span><span class="pun">,</span><span class="lit">86.424</span><span class="pun">],[</span><span class="str">"z"</span><span class="pun">],[</span><span class="str">"M"</span><span class="pun">,</span><span class="lit">169.407</span><span class="pun">,</span><span class="lit">119.374</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">0.09</span><span class="pun">,-</span><span class="lit">5.429</span><span class="pun">,-</span><span class="lit">3.917</span><span class="pun">,-</span><span class="lit">3.914</span><span class="pun">,-</span><span class="lit">3.917</span><span class="pun">,-</span><span class="lit">2.402</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,-</span><span class="lit">11.396</span><span class="pun">,</span><span class="lit">1.603</span><span class="pun">,-</span><span class="lit">13.086</span><span class="pun">,-</span><span class="lit">6.677</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">3.56</span><span class="pun">,-</span><span class="lit">5.43</span><span class="pun">,</span><span class="lit">1.69</span><span class="pun">,-</span><span class="lit">12.461</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">0.575</span><span class="pun">,-</span><span class="lit">2.163</span><span class="pun">,-</span><span class="lit">1.691</span><span class="pun">,-</span><span class="lit">5.337</span><span class="pun">,-</span><span class="lit">3.637</span><span class="pun">,-</span><span class="lit">8.605</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">11.104</span><span class="pun">,</span><span class="lit">2.121</span><span class="pun">,</span><span class="lit">21.701</span><span class="pun">,-</span><span class="lit">5.08</span><span class="pun">,</span><span class="lit">19.038</span><span class="pun">,-</span><span class="lit">15.519</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">3.34</span><span class="pun">,-</span><span class="lit">13.087</span><span class="pun">,-</span><span class="lit">19.63</span><span class="pun">,-</span><span class="lit">9.481</span><span class="pun">,-</span><span class="lit">24.437</span><span class="pun">,-</span><span class="lit">9.349</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">4.809</span><span class="pun">,</span><span class="lit">0.135</span><span class="pun">,-</span><span class="lit">13.486</span><span class="pun">,-</span><span class="lit">2.002</span><span class="pun">,-</span><span class="lit">8.011</span><span class="pun">,-</span><span class="lit">11.618</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">5.473</span><span class="pun">,-</span><span class="lit">9.613</span><span class="pun">,</span><span class="lit">18.024</span><span class="pun">,-</span><span class="lit">5.874</span><span class="pun">,</span><span class="lit">18.024</span><span class="pun">,-</span><span class="lit">5.874</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">2.136</span><span class="pun">,</span><span class="lit">0.668</span><span class="pun">,-</span><span class="lit">4.674</span><span class="pun">,</span><span class="lit">4.807</span><span class="pun">,-</span><span class="lit">4.674</span><span class="pun">,</span><span class="lit">4.807</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">9.748</span><span class="pun">,-</span><span class="lit">6.811</span><span class="pun">,</span><span class="lit">22.301</span><span class="pun">,</span><span class="lit">4.541</span><span class="pun">,</span><span class="lit">22.301</span><span class="pun">,</span><span class="lit">4.541</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">3.097</span><span class="pun">,-</span><span class="lit">13.678</span><span class="pun">,-</span><span class="lit">23.153</span><span class="pun">,-</span><span class="lit">14.636</span><span class="pun">,-</span><span class="lit">30.041</span><span class="pun">,-</span><span class="lit">12.635</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">4.286</span><span class="pun">,-</span><span class="lit">0.377</span><span class="pun">,-</span><span class="lit">5.241</span><span class="pun">,-</span><span class="lit">3.391</span><span class="pun">,-</span><span class="lit">3.073</span><span class="pun">,-</span><span class="lit">6.637</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">2.314</span><span class="pun">,-</span><span class="lit">3.473</span><span class="pun">,</span><span class="lit">10.503</span><span class="pun">,-</span><span class="lit">13.976</span><span class="pun">,</span><span class="lit">10.503</span><span class="pun">,-</span><span class="lit">13.976</span><span class="pun">],[</span><span class="str">"s"</span><span class="pun">,-</span><span class="lit">2.048</span><span class="pun">,</span><span class="lit">2.046</span><span class="pun">,-</span><span class="lit">6.231</span><span class="pun">,</span><span class="lit">4.005</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">4.184</span><span class="pun">,</span><span class="lit">1.96</span><span class="pun">,-</span><span class="lit">6.321</span><span class="pun">,-</span><span class="lit">2.227</span><span class="pun">,-</span><span class="lit">4.362</span><span class="pun">,-</span><span class="lit">6.854</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">1.96</span><span class="pun">,-</span><span class="lit">4.627</span><span class="pun">,</span><span class="lit">8.191</span><span class="pun">,-</span><span class="lit">16.559</span><span class="pun">,</span><span class="lit">8.191</span><span class="pun">,-</span><span class="lit">16.559</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">1.96</span><span class="pun">,</span><span class="lit">3.207</span><span class="pun">,-</span><span class="lit">24.571</span><span class="pun">,</span><span class="lit">31.247</span><span class="pun">,-</span><span class="lit">21.723</span><span class="pun">,</span><span class="lit">26.707</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">2.85</span><span class="pun">,-</span><span class="lit">4.541</span><span class="pun">,</span><span class="lit">5.253</span><span class="pun">,-</span><span class="lit">11.93</span><span class="pun">,</span><span class="lit">5.253</span><span class="pun">,-</span><span class="lit">11.93</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">2.849</span><span class="pun">,</span><span class="lit">6.943</span><span class="pun">,-</span><span class="lit">22.434</span><span class="pun">,</span><span class="lit">25.283</span><span class="pun">,-</span><span class="lit">30.713</span><span class="pun">,</span><span class="lit">34.274</span><span class="pun">],[</span><span class="str">"s"</span><span class="pun">,-</span><span class="lit">5.786</span><span class="pun">,</span><span class="lit">19.583</span><span class="pun">,-</span><span class="lit">4.005</span><span class="pun">,</span><span class="lit">21.987</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">0.43</span><span class="pun">,</span><span class="lit">0.58</span><span class="pun">,</span><span class="lit">0.601</span><span class="pun">,</span><span class="lit">0.972</span><span class="pun">,</span><span class="lit">0.62</span><span class="pun">,</span><span class="lit">1.232</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">4.868</span><span class="pun">,-</span><span class="lit">3.052</span><span class="pun">,-</span><span class="lit">3.884</span><span class="pun">,-</span><span class="lit">13.936</span><span class="pun">,-</span><span class="lit">0.264</span><span class="pun">,-</span><span class="lit">19.66</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">3.829</span><span class="pun">,-</span><span class="lit">6.053</span><span class="pun">,</span><span class="lit">18.427</span><span class="pun">,-</span><span class="lit">20.207</span><span class="pun">,</span><span class="lit">18.427</span><span class="pun">,-</span><span class="lit">20.207</span><span class="pun">],[</span><span class="str">"v"</span><span class="pun">,-</span><span class="lit">1.336</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">0.444</span><span class="pun">,-</span><span class="lit">1.513</span><span class="pun">,-</span><span class="lit">0.089</span><span class="pun">,-</span><span class="lit">0.444</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">0.535</span><span class="pun">,</span><span class="lit">1.068</span><span class="pun">,-</span><span class="lit">3.65</span><span class="pun">,</span><span class="lit">1.245</span><span class="pun">,-</span><span class="lit">3.384</span><span class="pun">,-</span><span class="lit">0.889</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">0.268</span><span class="pun">,-</span><span class="lit">2.137</span><span class="pun">,-</span><span class="lit">0.356</span><span class="pun">,-</span><span class="lit">8.549</span><span class="pun">,-</span><span class="lit">0.356</span><span class="pun">,-</span><span class="lit">8.549</span><span class="pun">],[</span><span class="str">"s"</span><span class="pun">,-</span><span class="lit">1.157</span><span class="pun">,</span><span class="lit">5.789</span><span class="pun">,-</span><span class="lit">2.758</span><span class="pun">,</span><span class="lit">5.61</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">1.603</span><span class="pun">,-</span><span class="lit">0.179</span><span class="pun">,-</span><span class="lit">2.493</span><span class="pun">,-</span><span class="lit">2.672</span><span class="pun">,-</span><span class="lit">2.405</span><span class="pun">,-</span><span class="lit">5.432</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">0.089</span><span class="pun">,-</span><span class="lit">2.758</span><span class="pun">,-</span><span class="lit">1.157</span><span class="pun">,-</span><span class="lit">9.702</span><span class="pun">,-</span><span class="lit">1.157</span><span class="pun">,-</span><span class="lit">9.702</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">0.8</span><span class="pun">,</span><span class="lit">11.75</span><span class="pun">,-</span><span class="lit">8.277</span><span class="pun">,</span><span class="lit">8.011</span><span class="pun">,-</span><span class="lit">8.277</span><span class="pun">,</span><span class="lit">3.74</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,-</span><span class="lit">4.274</span><span class="pun">,-</span><span class="lit">4.541</span><span class="pun">,-</span><span class="lit">12.82</span><span class="pun">,-</span><span class="lit">4.541</span><span class="pun">,-</span><span class="lit">12.82</span><span class="pun">],[</span><span class="str">"s"</span><span class="pun">,</span><span class="lit">2.403</span><span class="pun">,</span><span class="lit">14.421</span><span class="pun">,-</span><span class="lit">1.336</span><span class="pun">,</span><span class="lit">14.421</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">3.737</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,-</span><span class="lit">6.944</span><span class="pun">,-</span><span class="lit">5.074</span><span class="pun">,-</span><span class="lit">9.879</span><span class="pun">,-</span><span class="lit">9.882</span><span class="pun">],[</span><span class="str">"C"</span><span class="pun">,</span><span class="lit">78.161</span><span class="pun">,</span><span class="lit">5.874</span><span class="pun">,</span><span class="lit">68.279</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">68.279</span><span class="pun">,</span><span class="lit">0</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">13.428</span><span class="pun">,</span><span class="lit">16.088</span><span class="pun">,</span><span class="lit">17.656</span><span class="pun">,</span><span class="lit">32.111</span><span class="pun">,</span><span class="lit">18.397</span><span class="pun">,</span><span class="lit">44.512</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">1.793</span><span class="pun">,</span><span class="lit">0.422</span><span class="pun">,-</span><span class="lit">2.908</span><span class="pun">,</span><span class="lit">2.224</span><span class="pun">,-</span><span class="lit">2.908</span><span class="pun">,</span><span class="lit">2.224</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">0.356</span><span class="pun">,-</span><span class="lit">2.847</span><span class="pun">,-</span><span class="lit">0.624</span><span class="pun">,-</span><span class="lit">7.745</span><span class="pun">,-</span><span class="lit">1.245</span><span class="pun">,-</span><span class="lit">9.882</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">0.624</span><span class="pun">,-</span><span class="lit">2.137</span><span class="pun">,-</span><span class="lit">1.159</span><span class="pun">,-</span><span class="lit">9.168</span><span class="pun">,-</span><span class="lit">1.159</span><span class="pun">,-</span><span class="lit">9.168</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">2.67</span><span class="pun">,-</span><span class="lit">0.979</span><span class="pun">,</span><span class="lit">5.253</span><span class="pun">,-</span><span class="lit">2.048</span><span class="pun">,</span><span class="lit">9.079</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">1.068</span><span class="pun">,</span><span class="lit">3.828</span><span class="pun">,-</span><span class="lit">0.801</span><span class="pun">,</span><span class="lit">6.054</span><span class="pun">,-</span><span class="lit">0.801</span><span class="pun">,</span><span class="lit">6.054</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">1.068</span><span class="pun">,-</span><span class="lit">2.227</span><span class="pun">,-</span><span class="lit">4.271</span><span class="pun">,-</span><span class="lit">2.137</span><span class="pun">,-</span><span class="lit">4.271</span><span class="pun">,-</span><span class="lit">2.137</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">1.336</span><span class="pun">,</span><span class="lit">1.783</span><span class="pun">,</span><span class="lit">0.177</span><span class="pun">,</span><span class="lit">2.493</span><span class="pun">,</span><span class="lit">0.177</span><span class="pun">,</span><span class="lit">2.493</span><span class="pun">],[</span><span class="str">"s"</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,-</span><span class="lit">1.424</span><span class="pun">,-</span><span class="lit">1.601</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">1.424</span><span class="pun">,-</span><span class="lit">1.603</span><span class="pun">,-</span><span class="lit">3.473</span><span class="pun">,-</span><span class="lit">0.981</span><span class="pun">,-</span><span class="lit">3.384</span><span class="pun">,</span><span class="lit">0.265</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,</span><span class="lit">0.089</span><span class="pun">,</span><span class="lit">1.247</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,</span><span class="lit">1.959</span><span class="pun">,-</span><span class="lit">2.849</span><span class="pun">,</span><span class="lit">1.959</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">2.846</span><span class="pun">,</span><span class="lit">0</span><span class="pun">,-</span><span class="lit">5.874</span><span class="pun">,-</span><span class="lit">3.47</span><span class="pun">,-</span><span class="lit">9.078</span><span class="pun">,-</span><span class="lit">3.116</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">3.206</span><span class="pun">,</span><span class="lit">0.356</span><span class="pun">,-</span><span class="lit">5.521</span><span class="pun">,</span><span class="lit">2.137</span><span class="pun">,-</span><span class="lit">5.698</span><span class="pun">,</span><span class="lit">6.678</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">0.179</span><span class="pun">,</span><span class="lit">4.541</span><span class="pun">,</span><span class="lit">1.869</span><span class="pun">,</span><span class="lit">5.251</span><span class="pun">,</span><span class="lit">1.869</span><span class="pun">,</span><span class="lit">5.251</span><span class="pun">],[</span><span class="str">"c"</span><span class="pun">,-</span><span class="lit">0.801</span><span class="pun">,-</span><span class="lit">0.443</span><span class="pun">,-</span><span class="lit">0.891</span><span class="pun">,-</span><span class="lit">1.067</span><span class="pun">,-</span><span class="lit">0.891</span><span class="pun">,-</span><span class="lit">3.473</span><span class="pun">],...</span></code></li></ol></pre>
      <p data-anchor-id="vcyg">...这只是整个输出的其中一部分！</p>
      <p data-anchor-id="pkzc">
        这里发生了什么？事实证明，这个
        <code>fabric.Path</code>实例（这个形状）包括数百条贝塞尔线，决定了它是如何被渲染的。JSON表示中的所有这些
        <code>[“c”，0,2.67，-0.979,5.253，-2.048,9.079]</code>数据片段对应于这些曲线中的每一个。而当数百（甚至数千）的这些数据片段构成画布的表现最终是相当巨大的。
      </p>
      <p data-anchor-id="6bbq">
        该怎么办？
        <br>这时使用
        <code>toDatalessJSON</code>会方便很多。我们来试试吧：
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="spid" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">item</span><span class="pun">(</span><span class="lit">0</span><span class="pun">).</span><span class="pln">sourcePath </span><span class="pun">=</span><span class="pln"> </span><span class="str">'/assets/dragon.svg'</span><span class="pun">;</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">console</span><span class="pun">.</span><span class="pln">log</span><span class="pun">(</span><span class="pln">JSON</span><span class="pun">.</span><span class="pln">stringify</span><span class="pun">(</span><span class="pln">canvas</span><span class="pun">.</span><span class="pln">toDatalessJSON</span><span class="pun">()));</span></code></li></ol></pre>
      <p data-anchor-id="qps2">输出：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="xt8w" style><ol class="linenums"><li class="L0"><code><span class="pun">{</span><span class="str">"objects"</span><span class="pun">:[{</span><span class="str">"type"</span><span class="pun">:</span><span class="str">"path"</span><span class="pun">,</span><span class="str">"left"</span><span class="pun">:</span><span class="lit">143</span><span class="pun">,</span><span class="str">"top"</span><span class="pun">:</span><span class="lit">143</span><span class="pun">,</span><span class="str">"width"</span><span class="pun">:</span><span class="lit">175</span><span class="pun">,</span><span class="str">"height"</span><span class="pun">:</span><span class="lit">151</span><span class="pun">,</span><span class="str">"fill"</span><span class="pun">:</span><span class="str">"#231F20"</span><span class="pun">,</span><span class="str">"overlayFill"</span><span class="pun">:</span><span class="kwd">null</span><span class="pun">,</span><span class="str">"stroke"</span><span class="pun">:</span><span class="kwd">null</span><span class="pun">,</span><span class="str">"strokeWidth"</span><span class="pun">:</span><span class="lit">1</span><span class="pun">,</span><span class="str">"strokeDashArray"</span><span class="pun">:</span><span class="kwd">null</span><span class="pun">,</span><span class="str">"scaleX"</span><span class="pun">:</span><span class="lit">1</span><span class="pun">,</span><span class="str">"scaleY"</span><span class="pun">:</span><span class="lit">1</span><span class="pun">,</span><span class="str">"angle"</span><span class="pun">:-</span><span class="lit">19</span><span class="pun">,</span><span class="str">"flipX"</span><span class="pun">:</span><span class="kwd">false</span><span class="pun">,</span><span class="str">"flipY"</span><span class="pun">:</span><span class="kwd">false</span><span class="pun">,</span><span class="str">"opacity"</span><span class="pun">:</span><span class="lit">1</span><span class="pun">,</span><span class="str">"selectable"</span><span class="pun">:</span><span class="kwd">true</span><span class="pun">,</span><span class="str">"hasControls"</span><span class="pun">:</span><span class="kwd">true</span><span class="pun">,</span><span class="str">"hasBorders"</span><span class="pun">:</span><span class="kwd">true</span><span class="pun">,</span><span class="str">"hasRotatingPoint"</span><span class="pun">:</span><span class="kwd">false</span><span class="pun">,</span><span class="str">"transparentCorners"</span><span class="pun">:</span><span class="kwd">true</span><span class="pun">,</span><span class="str">"perPixelTargetFind"</span><span class="pun">:</span><span class="kwd">false</span><span class="pun">,</span><span class="str">"path"</span><span class="pun">:</span><span class="str">"/assets/dragon.svg"</span><span class="pun">}],</span><span class="str">"background"</span><span class="pun">:</span><span class="str">"rgba(0, 0, 0, 0)"</span><span class="pun">}</span></code></li></ol></pre>
      <p data-anchor-id="fh52">
        这样看起来小多了，发生了什么？注意在调用
        <code>toDatalessJSON</code>之前做了什么，我们给了“sourcePath”属性一个路径：“/assets/dragon.svg”，然后，当我们调用
        <code>toDatalessJSON</code>时，从前一个输出（这几百个路径命令）的整个堆积如山的路径字符串被一个单独的“dragon.svg”字符串所取代。你可以看到它显示在上面。
      </p>
      <p data-anchor-id="7tu6">
        当使用大量复杂的形状时，
        <code>toDessessJSON</code>可以让我们进一步减少画布表现，并用简单的SVG链接代替巨大的路径数据表示。
      </p>
      <p data-anchor-id="7aha">
        现在回到
        <code>loadFromDatalessJSON</code>方法...你可以猜到，它只是允许从无数据版本的canvas表示中加载canvas。
        <code>`loadFromDatalessJSON</code>几乎非常了解如何使用这些“路径”字符串（如“/assets/dragon.svg”），加载它们，并用作相应路径对象的数据。
      </p>
      <p data-anchor-id="ca6f">现在，我们来看看SVG加载方法。我们可以使用字符串或URL：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="01v6" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">fabric</span><span class="pun">.</span><span class="pln">loadSVGFromString</span><span class="pun">(</span><span class="str">'...'</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">objects</span><span class="pun">,</span><span class="pln"> options</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> obj </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">groupSVGElements</span><span class="pun">(</span><span class="pln">objects</span><span class="pun">,</span><span class="pln"> options</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">obj</span><span class="pun">).</span><span class="pln">renderAll</span><span class="pun">();</span></code></li><li
  class="L3"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="1b0x">
        第一个参数是SVG字符串，第二个是回调函数，当SVG被解析和加载时调用回调，并且接收到2个参数 -
        <code>objects</code>和
        <code>option</code>，
        <code>objects</code>包含从SVG路径解析的对象数组，路径组（复杂对象），图像，文本等。为了将所有这些对象分组成一个连贯的集合，并使它们与SVG文档中的方式相同，我们使用
        <code>fabric.util.groupSVGElements</code>传递
        <code>objects</code>和
        <code>option</code>。在返回值中，我们可以获得
        <code>fabric.Path</code>或
        <code>fabric.Group</code>的一个实例，然后我们可以将其添加到画布上。
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="19jr" style><ol class="linenums"><li class="L0"><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
></code></li><li
  class="L1"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
><span class="com">## 子类</span></code></li><li
  class="L2"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
></code></li><li
  class="L3"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
><span class="pun">由于</span><span class="typ">Fabric</span><span class="pun">以真正的面向对象的方式构建，它旨在使子类化和扩展简单自然。从这个系列的第</span><span class="lit">1</span><span class="pun">部分你知道，</span><span class="typ">Fabric</span><span class="pun">中存在对象的现有层次结构。所有</span><span class="lit">2D</span><span class="pun">对象（路径，图像，文本等），还有一些“</span><span class="pln">classes</span><span class="pun">”，都继承自</span><span class="str">```fabric.Object```</span><span class="pun">，像</span><span class="str">```fabric.IText```</span><span class="pun">，甚至形成</span><span class="lit">3</span><span class="pun">级继承。</span></code></li><li
  class="L4"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
></code></li><li
  class="L5"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
><span class="pun">那么我们怎么去把</span><span class="typ">Fabric</span><span class="pun">中的一个现有的“</span><span class="kwd">class</span><span class="pun">”分类呢？或者甚至创造自己的？</span></code></li><li
  class="L6"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
></code></li><li
  class="L7"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
><span class="pun">对于这个任务，我们需要使用</span><span class="str">```fabric.util.createClass```</span><span class="pun">实用程序。</span><span class="str">```createClass```</span><span class="pun">只不过是对</span><span class="typ">JavaScript</span><span class="pun">的原型继承的简单抽象。我们先创建一个简单的</span><span class="typ">Point</span><span class="pun">“</span><span class="kwd">class</span><span class="pun">”：</span></code></li><li
  class="L8"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
></code></li><li
  class="L9"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
><span class="str">```js</span></code></li><li
  class="L0"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
><span class="str">var Point = fabric.util.createClass({</span></code></li><li
  class="L1"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
><span class="str">  initialize: function(x, y) {</span></code></li><li
  class="L2"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
><span class="str">    this.x = x || 0;</span></code></li><li
  class="L3"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
><span class="str">    this.y = y || 0;</span></code></li><li
  class="L4"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
><span class="str">  },</span></code></li><li
  class="L5"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
><span class="str">  toString: function() {</span></code></li><li
  class="L6"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
><span class="str">    return this.x + '/' + this.y;</span></code></li><li
  class="L7"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
><span class="str">  }</span></code></li><li
  class="L8"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
><span class="str">});</span></code></li><li
  class="L9"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
></code></li><li
  class="L0"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
></code></li><li
  class="L1"
><code
  class="language-fabric.loadSVGFromURL```的工作方式相同，除了将SVG内容的字符串替换为URL，还要注意，Fabric将尝试通过XMLHttpRequest获取该URL，因此SVG需要符合通常的SOP（标准操作程序）规则。"
><span class="str">&lt;div class="md-section-divider"&gt;&lt;/div&gt;</span></code></li></ol></pre>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="da8p" style><ol class="linenums"><li class="L0"><code
  class="language-createClass```接受一个对象并使用该对象的属性创建具有实例级属性的“class”。唯一需要特别处理的属性是“initialize”用作构造函数（相当于constructor）。所以现在，当初始化Point时，我们将创建一个带有“x”和“y”属性的实例，和“toString”方法："
></code></li><li
  class="L1"
><code
  class="language-createClass```接受一个对象并使用该对象的属性创建具有实例级属性的“class”。唯一需要特别处理的属性是“initialize”用作构造函数（相当于constructor）。所以现在，当初始化Point时，我们将创建一个带有“x”和“y”属性的实例，和“toString”方法："
></code></li><li
  class="L2"
><code
  class="language-createClass```接受一个对象并使用该对象的属性创建具有实例级属性的“class”。唯一需要特别处理的属性是“initialize”用作构造函数（相当于constructor）。所以现在，当初始化Point时，我们将创建一个带有“x”和“y”属性的实例，和“toString”方法："
></code></li><li
  class="L3"
><code
  class="language-createClass```接受一个对象并使用该对象的属性创建具有实例级属性的“class”。唯一需要特别处理的属性是“initialize”用作构造函数（相当于constructor）。所以现在，当初始化Point时，我们将创建一个带有“x”和“y”属性的实例，和“toString”方法："
><span class="tag">&lt;div</span><span class="pln"> </span><span class="atn">class</span><span class="pun">=</span><span class="atv">"md-section-divider"</span><span class="tag">&gt;&lt;/div&gt;</span></code></li><li
  class="L4"
><code
  class="language-createClass```接受一个对象并使用该对象的属性创建具有实例级属性的“class”。唯一需要特别处理的属性是“initialize”用作构造函数（相当于constructor）。所以现在，当初始化Point时，我们将创建一个带有“x”和“y”属性的实例，和“toString”方法："
></code></li><li
  class="L5"
><code
  class="language-createClass```接受一个对象并使用该对象的属性创建具有实例级属性的“class”。唯一需要特别处理的属性是“initialize”用作构造函数（相当于constructor）。所以现在，当初始化Point时，我们将创建一个带有“x”和“y”属性的实例，和“toString”方法："
><span class="pln">```js</span></code></li><li
  class="L6"
><code
  class="language-createClass```接受一个对象并使用该对象的属性创建具有实例级属性的“class”。唯一需要特别处理的属性是“initialize”用作构造函数（相当于constructor）。所以现在，当初始化Point时，我们将创建一个带有“x”和“y”属性的实例，和“toString”方法："
><span class="pln">var point = new Point(10, 20);</span></code></li><li
  class="L7"
><code
  class="language-createClass```接受一个对象并使用该对象的属性创建具有实例级属性的“class”。唯一需要特别处理的属性是“initialize”用作构造函数（相当于constructor）。所以现在，当初始化Point时，我们将创建一个带有“x”和“y”属性的实例，和“toString”方法："
></code></li><li
  class="L8"
><code
  class="language-createClass```接受一个对象并使用该对象的属性创建具有实例级属性的“class”。唯一需要特别处理的属性是“initialize”用作构造函数（相当于constructor）。所以现在，当初始化Point时，我们将创建一个带有“x”和“y”属性的实例，和“toString”方法："
><span class="pln">point.x; // 10</span></code></li><li
  class="L9"
><code
  class="language-createClass```接受一个对象并使用该对象的属性创建具有实例级属性的“class”。唯一需要特别处理的属性是“initialize”用作构造函数（相当于constructor）。所以现在，当初始化Point时，我们将创建一个带有“x”和“y”属性的实例，和“toString”方法："
><span class="pln">point.y; // 20</span></code></li><li
  class="L0"
><code
  class="language-createClass```接受一个对象并使用该对象的属性创建具有实例级属性的“class”。唯一需要特别处理的属性是“initialize”用作构造函数（相当于constructor）。所以现在，当初始化Point时，我们将创建一个带有“x”和“y”属性的实例，和“toString”方法："
></code></li><li
  class="L1"
><code
  class="language-createClass```接受一个对象并使用该对象的属性创建具有实例级属性的“class”。唯一需要特别处理的属性是“initialize”用作构造函数（相当于constructor）。所以现在，当初始化Point时，我们将创建一个带有“x”和“y”属性的实例，和“toString”方法："
><span class="pln">point.toString(); // "10/20"</span></code></li></ol></pre>
      <p data-anchor-id="fby8">如果我们想创建一个“Point”类的子类“ColoredPoint”，我们将使用createClass：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="6k80" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> </span><span class="typ">ColoredPoint</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">createClass</span><span class="pun">(</span><span class="typ">Point</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  initialize</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">x</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">,</span><span class="pln"> color</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">callSuper</span><span class="pun">(</span><span class="str">'initialize'</span><span class="pun">,</span><span class="pln"> x</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">);</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">color </span><span class="pun">=</span><span class="pln"> color </span><span class="pun">||</span><span class="pln"> </span><span class="str">'#000'</span><span class="pun">;</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  </span><span class="pun">},</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  toString</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">callSuper</span><span class="pun">(</span><span class="str">'toString'</span><span class="pun">)</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="str">' (color: '</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">color </span><span class="pun">+</span><span class="pln"> </span><span class="str">')'</span><span class="pun">;</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  </span><span class="pun">}</span></code></li><li
  class="L8"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="0u0y">
        注意如何将具有实例级属性的对象作为第二个参数传递，而第一个参数接收
        <code>Point</code>“class”，这告诉
        <code>createClass</code>将其用作这个父类的“class”。为了避免重复，我们使用的是
        <code>callSuper</code>方法，它调用父类“class”的方法。这意味着如果我们要改变
        <code>Point</code>，这些更改也会传播到
        <code>ColoredPoint</code>。看
        <code>ColoredPoint</code>的行为：
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="tgla" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> redPoint </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">ColoredPoint</span><span class="pun">(</span><span class="lit">15</span><span class="pun">,</span><span class="pln"> </span><span class="lit">33</span><span class="pun">,</span><span class="pln"> </span><span class="str">'#f55'</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"></code></li><li class="L2"><code class="language-js"><span class="pln">redPoint</span><span class="pun">.</span><span class="pln">x</span><span class="pun">;</span><span class="pln"> </span><span class="com">// 15</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">redPoint</span><span class="pun">.</span><span class="pln">y</span><span class="pun">;</span><span class="pln"> </span><span class="com">// 33</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">redPoint</span><span class="pun">.</span><span class="pln">color</span><span class="pun">;</span><span class="pln"> </span><span class="com">// "#f55"</span></code></li><li
  class="L5"
><code class="language-js"></code></li><li class="L6"><code class="language-js"><span class="pln">redPoint</span><span class="pun">.</span><span class="pln">toString</span><span class="pun">();</span><span class="pln"> </span><span class="str">"15/35 (color: #f55)"</span></code></li></ol></pre>
      <p
        data-anchor-id="6jsp"
      >所以现在我们去创建我们自己的“类”和“子类”，我们来看看如何使用已经存在的Fabric。例如，我们创建一个LabeledRect“类”，它基本上是一个与它相关联的一些标签的矩形。当在画布上渲染时，该标签将被表示为矩形内的文本。类似于以前的组合示例与圆和文本。当您使用Fabric时，您会注意到，可以通过使用组合或使用自定义类来实现这样的组合抽象。</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="frl6" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> </span><span class="typ">LabeledRect</span><span class="pln"> </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">createClass</span><span class="pun">(</span><span class="pln">fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">,</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"></code></li><li class="L2"><code class="language-js"><span class="pln">  type</span><span class="pun">:</span><span class="pln"> </span><span class="str">'labeledRect'</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"></code></li><li class="L4"><code class="language-js"><span class="pln">  initialize</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">options</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">    options </span><span class="pun">||</span><span class="pln"> </span><span class="pun">(</span><span class="pln">options </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L6"
><code class="language-js"></code></li><li class="L7"><code class="language-js"><span class="pln">    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">callSuper</span><span class="pun">(</span><span class="str">'initialize'</span><span class="pun">,</span><span class="pln"> options</span><span class="pun">);</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    </span><span class="kwd">this</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">(</span><span class="str">'label'</span><span class="pun">,</span><span class="pln"> options</span><span class="pun">.</span><span class="pln">label </span><span class="pun">||</span><span class="pln"> </span><span class="str">''</span><span class="pun">);</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">  </span><span class="pun">},</span></code></li><li
  class="L0"
><code class="language-js"></code></li><li class="L1"><code class="language-js"><span class="pln">  toObject</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">    </span><span class="kwd">return</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">object</span><span class="pun">.</span><span class="pln">extend</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">callSuper</span><span class="pun">(</span><span class="str">'toObject'</span><span class="pun">),</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">      label</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="kwd">get</span><span class="pun">(</span><span class="str">'label'</span><span class="pun">)</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">    </span><span class="pun">});</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  </span><span class="pun">},</span></code></li><li
  class="L6"
><code class="language-js"></code></li><li class="L7"><code class="language-js"><span class="pln">  _render</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">ctx</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">callSuper</span><span class="pun">(</span><span class="str">'_render'</span><span class="pun">,</span><span class="pln"> ctx</span><span class="pun">);</span></code></li><li
  class="L9"
><code class="language-js"></code></li><li class="L0"><code class="language-js"><span class="pln">    ctx</span><span class="pun">.</span><span class="pln">font </span><span class="pun">=</span><span class="pln"> </span><span class="str">'20px Helvetica'</span><span class="pun">;</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">    ctx</span><span class="pun">.</span><span class="pln">fillStyle </span><span class="pun">=</span><span class="pln"> </span><span class="str">'#333'</span><span class="pun">;</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">    ctx</span><span class="pun">.</span><span class="pln">fillText</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">label</span><span class="pun">,</span><span class="pln"> </span><span class="pun">-</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">width</span><span class="pun">/</span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="pun">-</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">height</span><span class="pun">/</span><span class="lit">2</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="lit">20</span><span class="pun">);</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  </span><span class="pun">}</span></code></li><li
  class="L4"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="j7h9">在这里似乎还有很多事情，但实际上很简单。</p>
      <p data-anchor-id="ofe0">
        首先，我们将父类“class”指定为
        <code>fabric.Rect</code>，以利用其渲染能力。接下来，我们定义“type”属性，将其设置为“labeledRect”。这只是为了一致，因为所有的Fabric对象都有类型属性（rect，circle，path，text等）。然后，我们已经熟悉的构造函数（
        <code>initialize</code>），我们再次使用
        <code>callSuper</code>。此外，我们将对象的标签设置为通过选项传递的值。最后，我们剩下两个方法：
        <code>toObject</code>和
        <code>_render</code>。
        <code>toObject</code>，正如您从序列化章节已经知道的那样，负责实例的对象（和JSON）表示。由于LabeledRect具有与常规
        <code>Rect</code>相同的属性，也是一个标签，因此我们将扩展父类的
        <code>toObject</code>方法，并在其中添加标签。最后但并非最不重要的是，
        <code>_rendermethod</code>是实际绘制实例的原因。还有一个
        <code>callSuper</code>调用，它是渲染矩形，有3行文本渲染逻辑。
      </p>
      <p data-anchor-id="wwdu">现在，如果我们要渲染这样的对象：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="ssj7" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> labeledRect </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> </span><span class="typ">LabeledRect</span><span class="pun">({</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  label</span><span class="pun">:</span><span class="pln"> </span><span class="str">'test'</span><span class="pun">,</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">  fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#faa'</span></code></li><li
  class="L7"
><code class="language-js"><span class="pun">});</span></code></li><li class="L8"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">labeledRect</span><span class="pun">);</span></code></li></ol></pre>
      <p data-anchor-id="9r4t">我们会得到这个：</p>
      <p data-anchor-id="xmx9">
        <img src="http://fabricjs.com/article_assets/3_7.png" alt=" " title>
      </p>
      <p data-anchor-id="a25f">更改标签值或任何其他的矩形属性将按预期工作：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="sqeq" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">labeledRect</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">({</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  label</span><span class="pun">:</span><span class="pln"> </span><span class="str">'trololo'</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'#aaf'</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  rx</span><span class="pun">:</span><span class="pln"> </span><span class="lit">10</span><span class="pun">,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  ry</span><span class="pun">:</span><span class="pln"> </span><span class="lit">10</span></code></li><li
  class="L5"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="eplh">
        <img src="http://fabricjs.com/article_assets/3_8.png" alt=" " title>
      </p>
      <p data-anchor-id="8s9a">
        当然，在这一点上，你可以随意修改这个“类”的行为。例如，将某些值设置为默认值，以避免每次传递给构造函数。或者使实例上的某些可配置属性可用。如果您使其他属性可配置，则可能需要在
        <code>toObject</code>和
        <code>initialize</code>中对其进行计算。
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="tq8r" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pun">...</span></code></li><li class="L1"><code class="language-js"><span class="pln">initialize</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">options</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  options </span><span class="pun">||</span><span class="pln"> </span><span class="pun">(</span><span class="pln">options </span><span class="pun">=</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L3"
><code class="language-js"></code></li><li class="L4"><code class="language-js"><span class="pln">  </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">callSuper</span><span class="pun">(</span><span class="str">'initialize'</span><span class="pun">,</span><span class="pln"> options</span><span class="pun">);</span></code></li><li
  class="L5"
><code class="language-js"></code></li><li class="L6"><code class="language-js"><span class="pln">  </span><span class="com">// 给所有标注的矩形固定宽/高100/50</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  </span><span class="kwd">this</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L8"
><code class="language-js"></code></li><li class="L9"><code class="language-js"><span class="pln">  </span><span class="kwd">this</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">(</span><span class="str">'label'</span><span class="pun">,</span><span class="pln"> options</span><span class="pun">.</span><span class="pln">label </span><span class="pun">||</span><span class="pln"> </span><span class="str">''</span><span class="pun">);</span></code></li><li
  class="L0"
><code class="language-js"><span class="pun">}</span></code></li><li class="L1"><code class="language-js"><span class="pun">...</span></code></li><li class="L2"><code class="language-js"><span class="pln">_render</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">(</span><span class="pln">ctx</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L3"
><code class="language-js"></code></li><li class="L4"><code class="language-js"><span class="pln">  </span><span class="com">// 使标签的字体和填充值可配置</span></code></li><li
  class="L5"
><code class="language-js"></code></li><li class="L6"><code class="language-js"><span class="pln">  ctx</span><span class="pun">.</span><span class="pln">font </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">labelFont</span><span class="pun">;</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  ctx</span><span class="pun">.</span><span class="pln">fillStyle </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">this</span><span class="pun">.</span><span class="pln">labelFill</span><span class="pun">;</span></code></li><li
  class="L8"
><code class="language-js"></code></li><li class="L9"><code class="language-js"><span class="pln">  ctx</span><span class="pun">.</span><span class="pln">fillText</span><span class="pun">(</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">label</span><span class="pun">,</span><span class="pln"> </span><span class="pun">-</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">width</span><span class="pun">/</span><span class="lit">2</span><span class="pun">,</span><span class="pln"> </span><span class="pun">-</span><span class="kwd">this</span><span class="pun">.</span><span class="pln">height</span><span class="pun">/</span><span class="lit">2</span><span class="pln"> </span><span class="pun">+</span><span class="pln"> </span><span class="lit">20</span><span class="pun">);</span></code></li><li
  class="L0"
><code class="language-js"><span class="pun">}</span></code></li><li class="L1"><code class="language-js"><span class="pun">...</span></code></li></ol></pre>
      <p
        data-anchor-id="an0m"
      >在这个说明中，我正在包装这个系列的第三部分，其中我们分为了Fabric的一些更先进的方面。在群组，课程和(反)序列化的帮助下，您可以将您的应用程序提升到一个全新的水平。</p>
    </div>
  </div>
</template>
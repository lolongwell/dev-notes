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
      <h1 data-anchor-id="j8kz" id="fabricjs介绍-第八部分">Fabric.js介绍 第八部分</h1>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="k6y5" id="新的clippath属性">新的clipPath属性</h2>
      <p data-anchor-id="q5ev">
        在2.4.0中，我们为所有对象引入了clipPath属性。 ClipPath将替换
        <code>clipTo: funcion() {}</code>，试图获得相同的灵活性但更好的兼容性。
      </p>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="ay8k" id="如何使用">如何使用</h3>
      <p data-anchor-id="puma">
        创建自己的clipPath作为普通的Fabric对象，并将其指定给要剪辑的对象的clipPath属性。
        <br>根据SVG规范中的定义，clipPath没有描边，而是充满黑色，与黑色像素重叠的对象的像素将是可见的，而与黑色像素重叠的对象的像素将是可见的。
        <br>让我们从一些基本的例子开始，让我们看看它是什么样的。
        <br>在第一个示例中，一个红色的rectable被一个圆圈夹住，只有圆圈内的部分是可见的。虽然不是很有用，但是基本的功能是这样的。
        <br>请注意：clipPath位于从物体中心开始的位置，物体的originX和originY不起任何作用，而clipPath的originX和originY则起作用，定位逻辑与
        <code>fabric.Group</code>相同。
      </p>
      <p data-anchor-id="l8dg">
        <a href="http://fabricjs.com/clippath-part1#ex1" target="_blank">查看demo</a>
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="1den" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pun">(</span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'ex1'</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> clipPath </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">    radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">40</span><span class="pun">,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">    top</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">40</span><span class="pun">,</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">    left</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">40</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">  </span><span class="pun">});</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> rect </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">200</span><span class="pun">,</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">    height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">    fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="pun">});</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  rect</span><span class="pun">.</span><span class="pln">clipPath </span><span class="pun">=</span><span class="pln"> clipPath</span><span class="pun">;</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">rect</span><span class="pun">);</span></code></li><li
  class="L4"
><code class="language-js"><span class="pun">})()</span></code></li></ol></pre>
      <p data-anchor-id="rch4">
        我们可以剪下一个组合：
        <br>
        <a href="http://fabricjs.com/clippath-part1#ex2" target="_blank">查看demo</a>
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="q959" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pun">(</span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'ex2'</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> clipPath </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">    radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">    top</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">    left</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">100</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">  </span><span class="pun">});</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> group </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Group</span><span class="pun">([</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'yellow'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'blue'</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">})</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  </span><span class="pun">]);</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  group</span><span class="pun">.</span><span class="pln">clipPath </span><span class="pun">=</span><span class="pln"> clipPath</span><span class="pun">;</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">group</span><span class="pun">);</span></code></li><li
  class="L5"
><code class="language-js"><span class="pun">})()</span></code></li></ol></pre>
      <p data-anchor-id="06jg">
        或者我们可以用组合来剪辑。在组合的情况下，记住组合中的每个对象在逻辑上都是
        <code>或</code>，没有
        <code>非零</code>或
        <code>偶数</code>的剪裁规则：
      </p>
      <p data-anchor-id="buyb">
        <a href="http://fabricjs.com/clippath-part1#ex3" target="_blank">查看demo</a>
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="oq7p" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pun">(</span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'ex3'</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> clipPath </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Group</span><span class="pun">([</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span><span class="pln"> radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">70</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">70</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">70</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span><span class="pln"> radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">40</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">95</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">95</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span><span class="pln"> radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">40</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">15</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">15</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">  </span><span class="pun">],</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">95</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">95</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> group </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Group</span><span class="pun">([</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'yellow'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'blue'</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">})</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  </span><span class="pun">]);</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  group</span><span class="pun">.</span><span class="pln">clipPath </span><span class="pun">=</span><span class="pln"> clipPath</span><span class="pun">;</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">group</span><span class="pun">);</span></code></li><li
  class="L5"
><code class="language-js"><span class="pun">})()</span></code></li></ol></pre>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="w7wp" id="更多高级用法">更多高级用法</h2>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="nr0k" id="嵌套clippaths">嵌套clipPaths</h3>
      <p data-anchor-id="x7p2">
        clipTo的一个问题和canvas.clip()的用法是你不能有多个clipPath。
        <br>通过这种实现，clippaths可以有自己的clippaths。虽然手动编程不太直观，但它允许将clipPaths交叉到一起。
      </p>
      <p data-anchor-id="gn1i">
        <a href="http://fabricjs.com/clippath-part2#ex4pre" target="_blank">查看demo</a>
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="qvet" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pun">(</span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'ex4'</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> clipPath </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span><span class="pln"> radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">70</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">50</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">50</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> innerClipPath </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span><span class="pln"> radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">70</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">90</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">90</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  clipPath</span><span class="pun">.</span><span class="pln">clipPath </span><span class="pun">=</span><span class="pln"> innerClipPath</span><span class="pun">;</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> group </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Group</span><span class="pun">([</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'yellow'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'blue'</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">})</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">  </span><span class="pun">]);</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  group</span><span class="pun">.</span><span class="pln">clipPath </span><span class="pun">=</span><span class="pln"> clipPath</span><span class="pun">;</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">group</span><span class="pun">);</span></code></li><li
  class="L3"
><code class="language-js"><span class="pun">})()</span></code></li></ol></pre>
      <p data-anchor-id="1uhd">组合内对象中的ClipPath应与组本身的clipPath隔离：</p>
      <p data-anchor-id="tuvh">
        <a href="http://fabricjs.com/clippath-part2#ex5pre" target="_blank">查看demo</a>
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="vdy5" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pun">(</span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'ex5'</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> clipPath </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span><span class="pln"> radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">100</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">100</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> small </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span><span class="pln"> radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">50</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">50</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> group </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Group</span><span class="pun">([</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span><span class="pun">,</span><span class="pln"> clipPath</span><span class="pun">:</span><span class="pln"> small </span><span class="pun">}),</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'yellow'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'blue'</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">})</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">  </span><span class="pun">]);</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">  group</span><span class="pun">.</span><span class="pln">clipPath </span><span class="pun">=</span><span class="pln"> clipPath</span><span class="pun">;</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">group</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pun">})()</span></code></li></ol></pre>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="003p" id="文字剪裁">文字剪裁</h3>
      <p data-anchor-id="f3d9">用文本进行剪裁也是不可能的，开发人员通常不得不依靠模式来实现这一点：</p>
      <p data-anchor-id="sdvc">
        <a href="http://fabricjs.com/clippath-part2#ex6" target="_blank">查看demo</a>
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="eg3t" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pun">(</span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'ex6'</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> clipPath </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Text</span><span class="pun">(</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">    </span><span
  class="str"
>'Hi I\'m the \nnew ClipPath!\nI hope we\'ll\nbe friends'</span><span
  class="pun"
>,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">    </span><span class="pun">{</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">100</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="pun">-</span><span class="lit">100</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> group </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Group</span><span class="pun">([</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'yellow'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'blue'</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">})</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">  </span><span class="pun">]);</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  group</span><span class="pun">.</span><span class="pln">clipPath </span><span class="pun">=</span><span class="pln"> clipPath</span><span class="pun">;</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">group</span><span class="pun">);</span></code></li><li
  class="L3"
><code class="language-js"><span class="pun">})()</span></code></li></ol></pre>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="akly" id="剪裁canvas">剪裁canvas</h2>
      <p
        data-anchor-id="4hzl"
      >我们可以对静态画布应用clipPath，就像对对象一样。在这种情况下，clipPath受到缩放和平移的影响，与物体相反。clipPath被放置在左上角。</p>
      <p data-anchor-id="o2nh">
        <a href="http://fabricjs.com/clippath-part3#ex7pre" target="_blank">查看demo</a>
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="byt2" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pun">(</span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'ex7'</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> clipPath </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span><span class="pln"> radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> group </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Group</span><span class="pun">([</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'yellow'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'blue'</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">})</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">  </span><span class="pun">]);</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">clipPath </span><span class="pun">=</span><span class="pln"> clipPath</span><span class="pun">;</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">group</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"><span class="pun">})()</span></code></li></ol></pre>
      <p data-anchor-id="e0ra">
        作为旧的clipTo函数，clipPath也是剪切控件，除非你使用
        <code>canvas.controlsAboveOverlay</code>设置为true
      </p>
      <p data-anchor-id="d1cv">
        <a href="http://fabricjs.com/clippath-part3#ex8" target="_blank">查看demo</a>
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="2hi7" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pun">(</span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'ex8'</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">controlsAboveOverlay </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> clipPath </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Circle</span><span class="pun">({</span><span class="pln"> radius</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">50</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> group </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Group</span><span class="pun">([</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'yellow'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'blue'</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">})</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">  </span><span class="pun">]);</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">clipPath </span><span class="pun">=</span><span class="pln"> clipPath</span><span class="pun">;</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">group</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pun">})()</span></code></li></ol></pre>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="s2xf" id="动画clippaths">动画clipPaths</h3>
      <p data-anchor-id="raa7">剪贴簿可以像任何其他物体一样进行动画。Canvas clipPath动画非常有效，当动画对象的动画时，每次都会使对象缓存失效。</p>
      <p data-anchor-id="u3di">
        <a href="http://fabricjs.com/clippath-part3#ex6" target="_blank">查看demo</a>
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="u41y" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pun">(</span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'ex9'</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">controlsAboveOverlay </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">;</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> clipPath </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  </span><span class="kwd">function</span><span class="pln"> animateLeft</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">    clipPath</span><span class="pun">.</span><span class="pln">animate</span><span class="pun">({</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">      left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">200</span><span class="pun">,</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">    </span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">      duration</span><span class="pun">:</span><span class="pln"> </span><span class="lit">900</span><span class="pun">,</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">      onChange</span><span class="pun">:</span><span class="pln"> canvas</span><span class="pun">.</span><span class="pln">requestRenderAll</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="pln">canvas</span><span class="pun">),</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">      onComplete</span><span class="pun">:</span><span class="pln"> animateRight</span><span class="pun">,</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">    </span><span class="pun">});</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  </span><span class="pun">}</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  </span><span class="kwd">function</span><span class="pln"> animateRight</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">    clipPath</span><span class="pun">.</span><span class="pln">animate</span><span class="pun">({</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">      left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">    </span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">      duration</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1200</span><span class="pun">,</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">      onChange</span><span class="pun">:</span><span class="pln"> canvas</span><span class="pun">.</span><span class="pln">requestRenderAll</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="pln">canvas</span><span class="pun">),</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">      onComplete</span><span class="pun">:</span><span class="pln"> animateLeft</span><span class="pun">,</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">    </span><span class="pun">});</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="pun">}</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  </span><span class="kwd">function</span><span class="pln"> animateDown</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">    clipPath</span><span class="pun">.</span><span class="pln">animate</span><span class="pun">({</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">      top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">    </span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">      duration</span><span class="pun">:</span><span class="pln"> </span><span class="lit">500</span><span class="pun">,</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">      onChange</span><span class="pun">:</span><span class="pln"> canvas</span><span class="pun">.</span><span class="pln">requestRenderAll</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="pln">canvas</span><span class="pun">),</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">      onComplete</span><span class="pun">:</span><span class="pln"> animateUp</span><span class="pun">,</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">    </span><span class="pun">});</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">  </span><span class="pun">}</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  </span><span class="kwd">function</span><span class="pln"> animateUp</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">    clipPath</span><span class="pun">.</span><span class="pln">animate</span><span class="pun">({</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">      top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">    </span><span class="pun">},</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">      duration</span><span class="pun">:</span><span class="pln"> </span><span class="lit">400</span><span class="pun">,</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">      onChange</span><span class="pun">:</span><span class="pln"> canvas</span><span class="pun">.</span><span class="pln">requestRenderAll</span><span class="pun">.</span><span class="pln">bind</span><span class="pun">(</span><span class="pln">canvas</span><span class="pun">),</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">      onComplete</span><span class="pun">:</span><span class="pln"> animateDown</span><span class="pun">,</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    </span><span class="pun">});</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">  </span><span class="pun">}</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> group </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Group</span><span class="pun">([</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'yellow'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'blue'</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">}),</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">    </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">({</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span><span class="pun">,</span><span class="pln"> left</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> top</span><span class="pun">:</span><span class="pln"> </span><span class="lit">100</span><span class="pln"> </span><span class="pun">})</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  </span><span class="pun">],</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">    scaleX</span><span class="pun">:</span><span class="pln"> </span><span class="lit">1.5</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  </span><span class="pun">});</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">  animateLeft</span><span class="pun">();</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">  animateDown</span><span class="pun">();</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">clipPath </span><span class="pun">=</span><span class="pln"> clipPath</span><span class="pun">;</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">  canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">group</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pun">})()</span></code></li></ol></pre>
    </div>
  </div>
</template>
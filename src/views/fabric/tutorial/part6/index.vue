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
      <h1 data-anchor-id="u776" id="fabricjs介绍-第六部分">Fabric.js介绍 第六部分</h1>
      <p data-anchor-id="ynfj">了解转换如何在fabricJS上工作是尽可能顺利地编写应用程序的关键方面。</p>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="jor0" id="与转换相关的方法和属性">与转换相关的方法和属性</h2>
      <p data-anchor-id="h23t">
        如果您计划理解和使用与自定义代码一起使用的fabricJS转换，那么这些方法应该是您最应该学习使用的方法。
        <br>
        一般来说，在本页面中，我们将矩阵称为6个数字的数组，表示平面上的转换，并将其作为一个类似{x: number, y: number}简单的JS对象或者是fabric.Point类的实例。(通常没有区别)
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="zqjt" style><ol class="linenums"><li class="L0"><code><span class="typ">Canvas</span><span class="pun">:</span></code></li><li
  class="L1"
><code><span class="pun">-</span><span class="pln"> vieportTransform </span><span class="pun">=</span><span class="pln"> matrix</span><span class="pun">;</span></code></li><li
  class="L2"
><code><span class="typ">Objects</span><span class="pun">:</span></code></li><li
  class="L3"
><code><span class="pun">-</span><span class="pln"> matrix </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Object</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">calcTransformMatrix</span><span class="pun">();</span></code></li><li
  class="L4"
><code><span class="pun">-</span><span class="pln"> matrix </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Object</span><span class="pun">.</span><span class="pln">prototype</span><span class="pun">.</span><span class="pln">calcOwnMatrix</span><span class="pun">();</span></code></li><li
  class="L5"
><code><span class="typ">Utils</span><span class="pun">:</span></code></li><li
  class="L6"
><code><span class="pun">-</span><span class="pln"> point </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">transformPoint</span><span class="pun">(</span><span class="pln">point</span><span class="pun">,</span><span class="pln"> matrix</span><span class="pun">);</span></code></li><li
  class="L7"
><code><span class="pun">-</span><span class="pln"> matrix </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">multiplyTransformMatrices</span><span class="pun">(</span><span class="pln">matrix</span><span class="pun">,</span><span class="pln"> matrix</span><span class="pun">);</span></code></li><li
  class="L8"
><code><span class="pun">-</span><span class="pln"> matrix </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">invertTransform</span><span class="pun">(</span><span class="pln">matrix</span><span class="pun">);</span></code></li><li
  class="L9"
><code><span class="pun">-</span><span class="pln"> options </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">qrDecompose</span><span class="pun">(</span><span class="pln">matrix</span><span class="pun">);</span></code></li></ol></pre>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="248k" id="从一个空间移动到另一个空间空间变换">从一个空间移动到另一个空间（空间变换）</h2>
      <p data-anchor-id="duvv">
        使用fabricJS常常需要与坐标和位置交互，但如果没有正确的背景，理解这些坐标的位置可能会很麻烦。
        <br>我将列出变换及其用法，然后我将尝试制作两个例子来更好地阐明发生了什么，以及如何做到这一点。
      </p>
      <p data-anchor-id="c2k3">
        Canvas.viewportTransform，将虚拟画布的一点移动到缩放和平移空间。
        <br>在cooridantes可以找到一个点，当画布不缩放和不平移时，在viewportTransfrom M中应用缩放和平移后，在位置P处的位置可以找到：
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="i8zb" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">newP </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">transformPoint</span><span class="pun">(</span><span class="pln">P</span><span class="pun">,</span><span class="pln"> canvas</span><span class="pun">.</span><span class="pln">viewportTransform</span><span class="pun">);</span></code></li></ol></pre>
      <p
        data-anchor-id="3zsn"
      >Object.calcTransformMatrix，将表示特定时刻的通用对象转换(受顶部、左侧、缩放和许多其他属性的影响)的矩阵还原，并将点从对象空间移动到画布空间，而不是缩放。因此，给定物体空间坐标中的一个点在坐标P处，这个点将在画布上的坐标为：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="u6uf" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pln">newP </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">transformPoint</span><span class="pun">(</span><span class="pln">P</span><span class="pun">,</span><span class="pln"> object</span><span class="pun">.</span><span class="pln">calcTransformMatrix</span><span class="pun">());</span></code></li></ol></pre>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="3809" id="变形顺序">变形顺序</h2>
      <p data-anchor-id="t5hx">渲染期间的Fabric按此顺序应用转换：</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="1pkm" style><ol class="linenums"><li class="L0"><code><span class="pln">zoom </span><span class="kwd">and</span><span class="pln"> pan </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="kwd">object</span><span class="pln"> transformation </span><span class="pun">=&gt;</span><span class="pln"> nested </span><span class="kwd">object</span><span class="pln"> </span><span class="pun">(</span><span class="pln"> </span><span class="kwd">group</span><span class="pln"> </span><span class="pun">)</span><span class="pln"> </span><span class="pun">=&gt;</span><span class="pln"> nested </span><span class="kwd">object</span><span class="pln"> deeper </span><span class="pun">(</span><span class="pln"> nested groups </span><span class="pun">)</span></code></li></ol></pre>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="fmz5" id="恢复顺序">恢复顺序</h2>
      <p data-anchor-id="2rw9">
        invertTransform实用程序用于在转换逻辑中移回以进行一些反向计算：
        <br>假设您想要在画布上标记一个对象，单击鼠标，单击点。点击点P，例如元素上的10,10像素。对象被缩放和旋转，画布被缩放和平移。
        <br>要反转渲染计算，您可以遵循以下逻辑：
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="nrkv" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="com">// 计算应用于对象像素的总转换：</span></code></li><li
  class="L1"
><code class="language-js"><span class="kwd">var</span><span class="pln"> mCanvas </span><span class="pun">=</span><span class="pln"> canvas</span><span class="pun">.</span><span class="pln">viewportTransform</span><span class="pun">;</span></code></li><li
  class="L2"
><code class="language-js"><span class="kwd">var</span><span class="pln"> mObject </span><span class="pun">=</span><span class="pln"> object</span><span class="pun">.</span><span class="pln">calcTransformMatrix</span><span class="pun">();</span></code></li><li
  class="L3"
><code class="language-js"><span class="kwd">var</span><span class="pln"> mTotal </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">multiplyTransformMatrices</span><span class="pun">(</span><span class="pln">mCanvas</span><span class="pun">,</span><span class="pln"> mObject</span><span class="pun">);</span><span class="pln"> </span><span class="com">// 反转顺序会产生错误的结果</span></code></li><li
  class="L4"
><code class="language-js"><span class="kwd">var</span><span class="pln"> mInverse </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">invertTransform</span><span class="pun">(</span><span class="pln">mTotal</span><span class="pun">);</span></code></li><li
  class="L5"
><code class="language-js"><span class="kwd">var</span><span class="pln"> pointInObjectPixels </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">transformPoint</span><span class="pun">(</span><span class="pln">pointClicked</span><span class="pun">,</span><span class="pln"> mInverse</span><span class="pun">);</span></code></li></ol></pre>
      <p data-anchor-id="77tz">
        现在，
        <code>pointInObjectPixels</code>是一个位于坐标空间中的点，其中
        <code>0,0</code>位于对象的中心。
      </p>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="avxh" id="了解矩阵的效果">了解矩阵的效果</h2>
      <p data-anchor-id="hmrk">
        给定top，left，angle，scaleX，scaleY，skewX，skewY，flipX，flipY相对简单，可以创建表示该转换的矩阵。 不直接的是如何回去。矩阵有6个维度，有6个数字，而属性是7，因为我们可以按比例缩放。确实存在无数个矩阵，但是可能的属性组合的数量是一个无限大的。
        <br>现在开始使用
        <code>fabric.util.qrDecompose(matrix)</code>可以为我们解码矩阵。给定函数的通用可逆矩阵，它返回包含这些信息的选项对象：
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="u7x4" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="pun">{</span></code></li><li class="L1"><code class="language-js"><span class="pln">  angle</span><span class="pun">:</span><span class="pln"> number</span><span class="pun">,</span><span class="pln"> </span><span class="com">// 度</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  scaleX</span><span class="pun">:</span><span class="pln"> number</span><span class="pun">,</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  scaleY</span><span class="pun">:</span><span class="pln"> number</span><span class="pun">,</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  skewX</span><span class="pun">:</span><span class="pln"> number</span><span class="pun">,</span><span class="pln"> </span><span class="com">// 度</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  skewY</span><span class="pun">:</span><span class="pln"> </span><span class="lit">0</span><span class="pun">,</span><span class="pln"> </span><span class="com">// 总是0度</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">  translateX</span><span class="pun">:</span><span class="pln"> number</span><span class="pun">,</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  translateY</span><span class="pun">:</span><span class="pln"> number</span><span class="pun">,</span></code></li><li
  class="L8"
><code class="language-js"><span class="pun">}</span></code></li></ol></pre>
      <p data-anchor-id="egok">这个函数给出了这个矩阵的一个可能解，将skewY约束为0。</p>
      <div class="md-section-divider"></div>
      <h2 data-anchor-id="ituu" id="一个真实的用例">一个真实的用例</h2>
      <p data-anchor-id="fwyn">
        一个开发人员想要将对象分组，但同时让它们自由。理想情况下，当主要对象移动时，他希望其他一些对象跟随它。
        <br>为了解释这个例子，我将调用主要对象BOSS和其他MINIONS
      </p>
      <p
        data-anchor-id="kjps"
      >假设画布周围有一些物体我们可以自由移动它们。在某一点上，我们要锁定它们的相对位置和比例尺，并移动一个。当我们设置我们想要的位置时，BOSS位置由矩阵描述，正如我们到目前为止所学到的，以及每个MINIONS。</p>
      <p data-anchor-id="nt7n">我确信它存在一个矩阵，它定义了从BOSS移动到MINIONS的必要转换，我必须找到它。</p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="jizo" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="com">// 我在寻找未知关系矩阵，其中:</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">BOSS </span><span class="pun">*</span><span class="pln"> UNKNOW </span><span class="pun">=</span><span class="pln"> MINION</span></code></li><li
  class="L2"
><code class="language-js"><span class="com">// 我向左乘以BOSS-INV</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">BOSS</span><span class="pun">-</span><span class="pln">INV </span><span class="pun">*</span><span class="pln"> BOSS </span><span class="pun">*</span><span class="pln"> UNKNOW </span><span class="pun">=</span><span class="pln"> BOSS</span><span class="pun">-</span><span class="pln">INV </span><span class="pun">*</span><span class="pln"> MINION</span></code></li><li
  class="L4"
><code class="language-js"><span class="com">// BOSS-INV * BOSS = IDENTIY, 一个中立的矩阵。</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">IDENTITY </span><span class="pun">*</span><span class="pln"> UNKNOW </span><span class="pun">=</span><span class="pln"> BOSS</span><span class="pun">-</span><span class="pln">INV </span><span class="pun">*</span><span class="pln"> MINION</span></code></li><li
  class="L6"
><code class="language-js"><span class="com">// so...</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">UNKNOW </span><span class="pun">=</span><span class="pln"> BOSS</span><span class="pun">-</span><span class="pln">INV </span><span class="pun">*</span><span class="pln"> MINION</span></code></li><li
  class="L8"
><code class="language-js"><span class="com">// 在fabricJS代码中等于:</span></code></li><li
  class="L9"
><code class="language-js"><span class="kwd">var</span><span class="pln"> minions </span><span class="pun">=</span><span class="pln"> canvas</span><span class="pun">.</span><span class="pln">getObjects</span><span class="pun">().</span><span class="pln">filter</span><span class="pun">(</span><span class="pln">o </span><span class="pun">=&gt;</span><span class="pln"> o </span><span class="pun">!==</span><span class="pln"> boss</span><span class="pun">);</span></code></li><li
  class="L0"
><code class="language-js"><span class="kwd">var</span><span class="pln"> bossTransform </span><span class="pun">=</span><span class="pln"> boss</span><span class="pun">.</span><span class="pln">calcTransformMatrix</span><span class="pun">();</span></code></li><li
  class="L1"
><code class="language-js"><span class="kwd">var</span><span class="pln"> invertedBossTransform </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">invertTransform</span><span class="pun">(</span><span class="pln">bossTransform</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">minions</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">(</span><span class="pln">o </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> desiredTransform </span><span class="pun">=</span><span class="pln"> multiply</span><span class="pun">(</span><span class="pln">invertedBossTransform</span><span class="pun">,</span><span class="pln"> o</span><span class="pun">.</span><span class="pln">calcTransformMatrix</span><span class="pun">());</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  </span><span class="com">// 在这里保存所需的关系。</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  o</span><span class="pun">.</span><span class="pln">relationship </span><span class="pun">=</span><span class="pln"> desiredTransform</span><span class="pun">;</span></code></li><li
  class="L6"
><code class="language-js"><span class="pun">});</span></code></li></ol></pre>
      <p data-anchor-id="41c9">
        好的，现在我知道如何找到关系，我可以编写一些事件处理程序来在每个BOSS操作上应用这种关系。
        <br>
        <a href="http://fabricjs.com/using-transformations#bind" target="_blank">查看demo</a>
      </p>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="ym41" style><ol class="linenums"><li class="L0"><code class="language-js"><span class="kwd">var</span><span class="pln"> canvas </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Canvas</span><span class="pun">(</span><span class="str">'c'</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"><span class="kwd">var</span><span class="pln"> boss </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">(</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">  </span><span class="pun">{</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">150</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">200</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'red'</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L3"
><code class="language-js"><span class="kwd">var</span><span class="pln"> minion1 </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">(</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  </span><span class="pun">{</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">40</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">40</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'blue'</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L5"
><code class="language-js"><span class="kwd">var</span><span class="pln"> minion2 </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Rect</span><span class="pun">(</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">  </span><span class="pun">{</span><span class="pln"> width</span><span class="pun">:</span><span class="pln"> </span><span class="lit">40</span><span class="pun">,</span><span class="pln"> height</span><span class="pun">:</span><span class="pln"> </span><span class="lit">40</span><span class="pun">,</span><span class="pln"> fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'blue'</span><span class="pln"> </span><span class="pun">});</span></code></li><li
  class="L7"
><code class="language-js"></code></li><li class="L8"><code class="language-js"><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">boss</span><span class="pun">,</span><span class="pln"> minion1</span><span class="pun">,</span><span class="pln"> minion2</span><span class="pun">);</span></code></li><li
  class="L9"
><code class="language-js"></code></li><li class="L0"><code class="language-js"><span class="pln">boss</span><span class="pun">.</span><span class="pln">on</span><span class="pun">(</span><span class="str">'moving'</span><span class="pun">,</span><span class="pln"> updateMinions</span><span class="pun">);</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">boss</span><span class="pun">.</span><span class="pln">on</span><span class="pun">(</span><span class="str">'rotating'</span><span class="pun">,</span><span class="pln"> updateMinions</span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">boss</span><span class="pun">.</span><span class="pln">on</span><span class="pun">(</span><span class="str">'scaling'</span><span class="pun">,</span><span class="pln"> updateMinions</span><span class="pun">);</span></code></li><li
  class="L3"
><code class="language-js"></code></li><li class="L4"><code class="language-js"><span class="kwd">var</span><span class="pln"> multiply </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">multiplyTransformMatrices</span><span class="pun">;</span></code></li><li
  class="L5"
><code class="language-js"><span class="kwd">var</span><span class="pln"> invert </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">invertTransform</span><span class="pun">;</span></code></li><li
  class="L6"
><code class="language-js"></code></li><li class="L7"><code class="language-js"><span class="kwd">function</span><span class="pln"> updateMinions</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> minions </span><span class="pun">=</span><span class="pln"> canvas</span><span class="pun">.</span><span class="pln">getObjects</span><span class="pun">().</span><span class="pln">filter</span><span class="pun">(</span><span class="pln">o </span><span class="pun">=&gt;</span><span class="pln"> o </span><span class="pun">!==</span><span class="pln"> boss</span><span class="pun">);</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">  minions</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">(</span><span class="pln">o </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">    </span><span class="kwd">if</span><span class="pln"> </span><span class="pun">(!</span><span class="pln">o</span><span class="pun">.</span><span class="pln">relationship</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">      </span><span class="kwd">return</span><span class="pun">;</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">    </span><span class="pun">}</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">    </span><span class="kwd">var</span><span class="pln"> relationship </span><span class="pun">=</span><span class="pln"> o</span><span class="pun">.</span><span class="pln">relationship</span><span class="pun">;</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">    </span><span class="kwd">var</span><span class="pln"> newTransform </span><span class="pun">=</span><span class="pln"> multiply</span><span class="pun">(</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">      boss</span><span class="pun">.</span><span class="pln">calcTransformMatrix</span><span class="pun">(),</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">      relationship</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">    </span><span class="pun">);</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    opt </span><span class="pun">=</span><span class="pln"> fabric</span><span class="pun">.</span><span class="pln">util</span><span class="pun">.</span><span class="pln">qrDecompose</span><span class="pun">(</span><span class="pln">newTransform</span><span class="pun">);</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">    o</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">({</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">      flipX</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">,</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">      flipY</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">,</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">    </span><span class="pun">});</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">    o</span><span class="pun">.</span><span class="pln">setPositionByOrigin</span><span class="pun">(</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">      </span><span class="pun">{</span><span class="pln"> x</span><span class="pun">:</span><span class="pln"> opt</span><span class="pun">.</span><span class="pln">translateX</span><span class="pun">,</span><span class="pln"> y</span><span class="pun">:</span><span class="pln"> opt</span><span class="pun">.</span><span class="pln">translateY </span><span class="pun">},</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">      </span><span class="str">'center'</span><span class="pun">,</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">      </span><span class="str">'center'</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">    </span><span class="pun">);</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    o</span><span class="pun">.</span><span class="kwd">set</span><span class="pun">(</span><span class="pln">opt</span><span class="pun">);</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">    o</span><span class="pun">.</span><span class="pln">setCoords</span><span class="pun">();</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">  </span><span class="pun">});</span></code></li><li
  class="L1"
><code class="language-js"><span class="pun">}</span></code></li><li class="L2"><code class="language-js"></code></li><li class="L3"><code class="language-js"><span class="pln">document</span><span class="pun">.</span><span class="pln">getElementById</span><span class="pun">(</span><span class="str">'bind'</span><span class="pun">).</span><span class="pln">onclick </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">function</span><span class="pun">()</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L4"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> minions </span><span class="pun">=</span><span class="pln"> canvas</span><span class="pun">.</span><span class="pln">getObjects</span><span class="pun">().</span><span class="pln">filter</span><span class="pun">(</span><span class="pln">o </span><span class="pun">=&gt;</span><span class="pln"> o </span><span class="pun">!==</span><span class="pln"> boss</span><span class="pun">);</span></code></li><li
  class="L5"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> bossTransform </span><span class="pun">=</span><span class="pln"> boss</span><span class="pun">.</span><span class="pln">calcTransformMatrix</span><span class="pun">();</span></code></li><li
  class="L6"
><code class="language-js"><span class="pln">  </span><span class="kwd">var</span><span class="pln"> invertedBossTransform </span><span class="pun">=</span><span class="pln"> invert</span><span class="pun">(</span><span class="pln">bossTransform</span><span class="pun">);</span></code></li><li
  class="L7"
><code class="language-js"><span class="pln">  minions</span><span class="pun">.</span><span class="pln">forEach</span><span class="pun">(</span><span class="pln">o </span><span class="pun">=&gt;</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L8"
><code class="language-js"><span class="pln">    </span><span class="kwd">var</span><span class="pln"> desiredTransform </span><span class="pun">=</span><span class="pln"> multiply</span><span class="pun">(</span></code></li><li
  class="L9"
><code class="language-js"><span class="pln">      invertedBossTransform</span><span class="pun">,</span></code></li><li
  class="L0"
><code class="language-js"><span class="pln">      o</span><span class="pun">.</span><span class="pln">calcTransformMatrix</span><span class="pun">()</span></code></li><li
  class="L1"
><code class="language-js"><span class="pln">    </span><span class="pun">);</span></code></li><li
  class="L2"
><code class="language-js"><span class="pln">    o</span><span class="pun">.</span><span class="pln">relationship </span><span class="pun">=</span><span class="pln"> desiredTransform</span><span class="pun">;</span></code></li><li
  class="L3"
><code class="language-js"><span class="pln">  </span><span class="pun">});</span></code></li><li
  class="L4"
><code class="language-js"><span class="pun">}</span></code></li></ol></pre>
    </div>
  </div>
</template>
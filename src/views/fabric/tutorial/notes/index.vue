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
      <h1 data-anchor-id="rbtr" id="fabricjs使用笔记">fabric.js使用笔记</h1>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="oquq" id="对象">对象</h3>
      <pre data-anchor-id="bmsk"><code>
fabric.Circle 圆
fabric.Ellipse  椭圆
fabric.Line 直线
fabric.Polygon 多边形
fabric.Polyline 折线
fabric.Rect 矩形
fabric.Triangle 三角形
fabric.iText 可编辑文字
fabric.Text 文字
fabric.Image 图像
fabric.Path 路径
</code></pre>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="zxlm" id="方法">方法</h3>
      <pre data-anchor-id="b86o"><code>add(object) 添加
insertAt(object,index) 添加
remove(object) 移除
forEachObject 循环遍历 
getObjects() 获取所有对象
item(int) 获取子项
isEmpty() 判断是否空画板
size() 画板元素个数
contains(object) 查询是否包含某个元素
fabric.util.cos
fabric.util.sin
fabric.util.drawDashedLine 绘制虚线
getWidth() setWidth()
getHeight()
clear() 清空
renderAll() 重绘
requestRenderAll() 请求重新渲染
rendercanvas() 重绘画板
getCenter().top/left 获取中心坐标
toDatalessJSON() 画板信息序列化成最小的json
toJSON() 画板信息序列化成json
moveTo(object,index) 移动
canvas.sendBackwards(canvas.getActiveObject()) 下移
canvas.bringForward(canvas.getActiveObject()) 上移
canvas.bringToFront(canvas.getActiveObject()) 置顶
canvas.sendToBack(canvas.getActiveObject()) 置底
dispose() 释放
setCursor() 设置手势图标
getSelectionContext()获取选中的context
getSelectionElement()获取选中的元素
getActiveObject() 获取选中的对象
getActiveObjects() 获取选中的多个对象
discardActiveObject()取消当前选中对象 
isType() 图片的类型
setColor(color) = canvas.set("full","");
rotate() 设置旋转角度
setCoords() 设置坐标
canvas.calcViewportBoundaries() 计算画布4角的位置
canvas.discardActiveObject() 取消选中状态
canvas.setActiveObject(clonedObj) 设置选中状态
</code></pre>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="tdiz" id="事件">事件</h3>
      <div class="md-section-divider"></div>
      <h4 data-anchor-id="zpf9" id="events-handled-by-canvas">Events handled by canvas</h4>
      <pre data-anchor-id="ias7"><code># General

after:render — fired continuously after each frame is rendered
before:render — fired before each frame is rendered
canvas:cleared — fired after a call to canvas.clear()

# Mouse related

mouse:over
mouse:out
mouse:down — fired when mousedown event occurred on canvas
mouse:up — fired when mouseup event occurred on canvas
mouse:move — fired when the mouse is moving over the canvas
mouse:wheel - fired when using the scroll wheel

# Object related

object:added — fired after object has been added
object:modified — fired after object is modified (moved, scaled, rotated)
object:moving — fired continuously during object movement
object:over — fired when mouse is over object (see example below)
object:out — fired when mouse is moved away from object (see example below)
object:removed — fired when object has been removed
object:rotating — fired continuously during object rotating
object:scaling — fired continuously during object scaling
object:selected — fired when object is selected

# Path related

path:created — fired when (free-drawn) path is created

#Selection related

before:selection:cleared — fired before selection is cleared (before active group is destroyed)
selection:cleared — fired after selection is cleared (after active group is destroyed)
selection:created — fired after selection is created (after active group is created)

# Text related

text:editing:entered
text:editing:exited
text:selection:changed
text:changed
</code></pre>
      <div class="md-section-divider"></div>
      <h4 data-anchor-id="05ut" id="events-handled-by-objects">Events handled by objects</h4>
      <pre data-anchor-id="qa57"><code># General

added
removed

# Mouse related

mousedown
mouseup
mouseover
mouseout

# Modification related

modified
rotating
scaling
moving
skewing

# Selection related

deselected
selected

# Text related

editing:entered
editing:exited
selection:changed — cursor selection in iText has changed
changed
dblclick
tripleclick
</code></pre>
      <div class="md-section-divider"></div>
      <h4 data-anchor-id="eujr" id="demos-and-examples">Demos and Examples</h4>
      <pre data-anchor-id="mnnt"><code>http://fabricjs.com/events
http://fabricjs.com/hovering
</code></pre>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="8rtz" id="常用属性">常用属性</h3>
      <pre data-anchor-id="pdho"><code>canvas.isDrawingMode = true; 可以自由绘制
canvas.selectable = false; 控件不能被选择，不会被操作
canvas.selection = true; 画板显示选中
canvas.skipTargetFind = true; 整个画板元素不能被选中
canvas.freeDrawingBrush.color = "#E34F51" 设置自由绘画笔的颜色
freeDrawingBrush.width 自由绘笔触宽度
canvas.preserveObjectStacking = true 在选中对象的时候，不会提高层级而遮挡其他对象
</code></pre>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="9z4f" id="itext的方法">IText的方法</h3>
      <pre data-anchor-id="qfy1"><code>selectAll() 选择全部
getSelectedText() 获取选中的文本
exitEditing() 退出编辑模式
</code></pre>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="avhe" id="绘制直线">绘制直线</h3>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="u9ed" style><ol class="linenums"><li class="L0"><code><span class="kwd">var</span><span class="pln"> line </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Line</span><span class="pun">([</span><span class="lit">10</span><span class="pun">,</span><span class="pln"> </span><span class="lit">10</span><span class="pun">,</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> </span><span class="lit">100</span><span class="pun">],</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code><span class="pln">　　fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span><span class="pun">,</span></code></li><li
  class="L2"
><code><span class="pln">　　stroke</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span><span class="pun">,</span><span class="pln">    </span><span class="com">//笔触颜色</span></code></li><li
  class="L3"
><code><span class="pln">　　strokeWidth</span><span class="pun">:</span><span class="pln"> </span><span class="lit">2</span><span class="pun">,</span><span class="com">//笔触宽度</span></code></li><li
  class="L4"
><code><span class="pun">});</span></code></li><li class="L5"><code><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">line</span><span class="pun">);</span></code></li></ol></pre>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="dy36" id="绘制虚线">绘制虚线</h3>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="v1dv" style><ol class="linenums"><li class="L0"><code><span class="com"># 在绘制直线的基础上添加属性strokeDashArray:Array</span></code></li><li
  class="L1"
><code><span class="com"># strokeDashArray[a,b] =》 每隔a个像素空b个像素。</span></code></li><li
  class="L2"
><code><span class="kwd">var</span><span class="pln"> line </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">new</span><span class="pln"> fabric</span><span class="pun">.</span><span class="typ">Line</span><span class="pun">([</span><span class="lit">10</span><span class="pun">,</span><span class="pln"> </span><span class="lit">10</span><span class="pun">,</span><span class="pln"> </span><span class="lit">100</span><span class="pun">,</span><span class="pln"> </span><span class="lit">100</span><span class="pun">],</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L3"
><code><span class="pln">    fill</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span><span class="pun">,</span></code></li><li
  class="L4"
><code><span class="pln">    stroke</span><span class="pun">:</span><span class="pln"> </span><span class="str">'green'</span><span class="pun">,</span></code></li><li
  class="L5"
><code><span class="pln">    strokeDashArray</span><span class="pun">:[</span><span class="lit">3</span><span class="pun">,</span><span class="lit">1</span><span class="pun">]</span><span class="pln"> </span></code></li><li
  class="L6"
><code><span class="pun">});</span></code></li><li class="L7"><code><span class="pln">canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">line</span><span class="pun">);</span></code></li></ol></pre>
      <div class="md-section-divider"></div>
      <h3 data-anchor-id="0row" id="图片去掉选中边框和旋转且只能移动不可操作">图片去掉选中边框和旋转，且只能移动，不可操作</h3>
      <pre data-anchor-id="h0c1"><code>oImg.hasControls = false; 只能移动不能（编辑）操作
oImg.hasBorders = false; 去掉边框，可以正常操作
hasRotatingPoint = false; 不能被旋转
hasRotatingPoint 控制旋转点不可见
</code></pre>
      <div class="md-section-divider"></div>
      <pre class="prettyprint linenums prettyprinted" data-anchor-id="p8d9" style><ol class="linenums"><li class="L0"><code><span class="pln">fabric</span><span class="pun">.</span><span class="typ">Image</span><span class="pun">.</span><span class="pln">fromURL</span><span class="pun">(</span><span class="str">"300.jpg"</span><span class="pun">,</span><span class="pln"> </span><span class="kwd">function</span><span class="pln"> </span><span class="pun">(</span><span class="pln">oImg</span><span class="pun">)</span><span class="pln"> </span><span class="pun">{</span></code></li><li
  class="L1"
><code><span class="pln">　　canvas</span><span class="pun">.</span><span class="pln">add</span><span class="pun">(</span><span class="pln">oImg</span><span class="pun">);</span></code></li><li
  class="L2"
><code><span class="pln">　　oImg</span><span class="pun">.</span><span class="pln">hasControls </span><span class="pun">=</span><span class="pln"> oImg</span><span class="pun">.</span><span class="pln">hasBorders </span><span class="pun">=</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">;</span></code></li><li
  class="L3"
><code><span class="pun">});</span></code></li></ol></pre>
    </div>
  </div>
</template>

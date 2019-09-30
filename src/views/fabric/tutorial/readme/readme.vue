<template>
  <div class="app-container">
    <h3>一、关于canvas容器的理解</h3>
    <p>canvas对象可以看成是一个容器盒子，里面包含backgroundImage（背景图对象）和objects（各种物件的集合），物件类型包含Circle 圆形、Ellipse 椭圆、Line 线条、Polygon 多边形等，各物件也可进行组合（group）,组合更加利于统一管理。</p>
    <p>在实际项目中，经常利用群组（group）来设计canvas的结构，合理的数据结构，能更加有效的管理canvas对象，特别是层级管理。</p>

    <h3>二、层级问题</h3>
    <p>
      <b>1、改变层级的基本方法：</b>
      <pre> bringForward  向上一层</pre>
      <pre> bringToFront  顶层</pre>
      <pre> sendBackwards  向下一层</pre>
      <pre> sendToBack  底层</pre>
      <pre> moveTo  移动到对应层级，例：
        canvas.moveTo(target, 1)
        或
        canvas.add(target)
        target.moveTo(1)   // 注：一定是在add之后调用
      </pre>
    </p>
    <p>
    2、层级与canvas.objects数组中对象的索引其实是一一对应的（先渲染0，然后渲染1，以此类推），也可通过直接修改索引来改变层级
    </p>
    <p>3、自定义方法：
      <pre>
        fabric.Object.prototype.getZIndex = function() {
            return this.canvas.getObjects().indexOf(this);
        }

        fabric.Canvas.prototype.addToPosition = function(object,position) {
            this.add(object);
            while(object.getZIndex() > position) {
                this.sendBackwards(object);
            }
        }
      </pre>
    </p>
    <h3>三、自定义属性和继承</h3>
    <p>
      1、自定义属性的方法
      <pre>
        // 所有canvas对象都具备name属性
        fabric.Object.prototype.set({
          originX: 'center',
          originY: 'center',
          id: '',
          used: '0',
          modelType: '',
          name: ''
        })
        fabric.Object.prototype.toObject = (function(toObject) {
          return function() {
            return fabric.util.object.extend(toObject.call(this), {
              id: this.id,    // 自定义属性及自带属性
              used: this.used,
              modelType: this.modelType,
              name: this.name,
              fontSize: this.fontSize （当Text类型是保存会丢失该属性）
            })
          }
        })(fabric.Object.prototype.toObject)
      </pre>
    </p>
    <p>
      2、不保存默认属性
      <pre>
        includeDefaultValues: false
      </pre>
    </p>
    <p><b>Bug：通过上述方法修改属性后，当将Circle类型的物件序列化时，反序列化不显示该物件图像，原因是重写toObject方法后，该物件部分关键属性丢失！解决办法：将丢失属性手动加到toObject方法中，例如Text类型的fontSize属性。</b></p>
  </div>
</template>
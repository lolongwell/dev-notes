<template>
  <div>
    <h4>一、懒加载</h4>
    <pre>
      <b>什么是懒加载</b>
      只加载可视区的内容，当页面向下滚动时，再继续加载后面的内容。
      图片懒加载的原理其实非常简单，我们先不设置图片的 src 属性，将图片的真实路径放到一个浏览器不认识的属性中（比如 data-src），
      然后我们去监听 scroll 事件。当页面的 scrollTop 与浏览器的高度之和大于图片距页面顶端的 Y (注意是整个页面不是浏览器窗口)时，说明图片已经进入可视区域，
      这是把 data-src 的值放到 src 中即可。
    </pre>
    <h4>二、雪碧图</h4>
    <pre>
      雪碧图，CSS Sprites，国内也叫 CSS 精灵，是一种 CSS 图像合成技术，主要用于小图片显示。

      在网页中，为了更好的展现效果，经常会采用一些小图标来替代文字。常用的方式包括 Icon Fonts、SVG Icons、小图片，其中 Icon Fonts 只支持单色，SVG Icons 需 IE9+。

      <b>原理</b>
      将小图标合并成一张图片，利用 backround-position 属性值来确定图片呈现的位置即可。如下图所示不同尺寸、位置：
      通过 CSS 定位，可以展现对应的图标。

      <img alt="图片" class="lazyload inited loaded" data-src="https://user-gold-cdn.xitu.io/2019/11/10/16e552e810166dd6?imageView2/0/w/1280/h/960/format/webp/ignore-error/1" data-width="291" data-height="204" src="https://user-gold-cdn.xitu.io/2019/11/10/16e552e810166dd6?imageView2/0/w/1280/h/960/format/webp/ignore-error/1">

      .icon-alipay {
        background-image: url(sprite.png);
        background-position: 0px -131px;
        width: 81px;
        height: 73px;
      }
      .icon-taobao {
        background-image: url(sprite.png);
        background-position: -177px 0px;
        width: 114px;
        height: 114px;
      }
      .icon-wechat {
        background-image: url(sprite.png);
        background-position: 0px 0px;
        width: 177px;
        height: 131px;
      }
      .icon-xinlang {
        background-image: url(sprite.png);
        background-position: -81px -131px;
        width: 72px;
        height: 72px;
      }

      <b>自动生成</b>
      每次修改或者新增图片时，都需要对雪碧图进行修改，如果依靠人工维护，成本太高，
      能否自动生成雪碧图和样式呢？可以使用 spritesmith，
      该工具可自动合并图片，并得到图片在合并之后的相对位置。简单使用示例代码如下：

      <pre>
        const fs = require('fs')
        const path = require('path');
        const Spritesmith = require('spritesmith');

        const baseDir = './images';
        const files = fs.readdirSync(baseDir)
        const sprites = files.map(file => path.join(baseDir, file))

        Spritesmith.run({src: sprites}, (err, result) => {
          if (err) {
            console.error(err)
          } else {
            console.info(result);
          }
        })

        运行的输出结果如下：

        {
          coordinates: {
            'images/alipay.png': { x: 0, y: 131, width: 81, height: 73 },
            'images/taobao.png': { x: 177, y: 0, width: 114, height: 114 },
            'images/wechat.png': { x: 0, y: 0, width: 177, height: 131 },
            'images/xinlang.png': { x: 81, y: 131, width: 72, height: 72 }
          },
          properties: { width: 291, height: 204 },
          image: &lt;Buffer 89 50 4e 47 0d 0a 1a 0a 00 00 00 0d 
          49 48 44 52 00 00 01 23 00 00 00 cc 08 06 00 00 00 38 
          45 c5 ce 00 00 40 06 49 44 41 54 78 01 ec c1 0b 98 e6 
          05 61 ... 22705 more bytes&gt;
        }

        对于现有的常用的构建工具，已有现成的插件可直接使用：
        1、webpack-spritesmith
        2、gulp.spritesmith
        3、grunt-spritesmith
      </pre>
      <b>注意事项</b>
      1、如果要适配高清屏，需要配置高清屏的图片，并且通过设置background-size属性来使得最终显示正常，可参考以上插件的retina相关配置参数；
      2、由于 HTTP/2 的支持多路复用特性，使得单个图片的请求的开销很小，不推荐使用雪碧图了，但为了兼容 HTTP1.1，现阶段多版本HTTP 协议并存期间还是建议保留；
      3、雪碧图好用，可不要滥用。
    </pre>
    <h4>三、使用iconfont</h4>
    <pre>
      iconfont 译为字体图标，即通过字体的方式展示图标，多用于渲染图标、简单图形、特殊字体等。
        使用 iconfont 时，由于只需要引入对应的字体文件，针对加载图片张数较多的情况，可有效减少 HTTP 请求次数，
        而且一般字体体积较小，所以请求传输数据量较少。与直接引入图片不同，iconfont 可以像使用字体一样，设置大小和颜色，还可以通过 CSS 设置特殊样式，
        且因为其是矢量图，不存在失真的情况

        在平时开发工作中，可使用以下常用图标字体库：

        IconFont 阿里巴巴矢量图标库   使用方法详见 IconFont 图标库官方文档。
        IcoMoon   使用方法详见 IcoMoon官方文档。
        fontello  使用方法：选中并下载字体文件，引入项目使用即可。
        Font Awesome  多与 bootstrap 结合使用，使用方法详见 Font Awesome 官方文档。
    </pre>
    <h4>四、使用base64</h4>
    <pre>
      Base64 是网络上最常见的用于传输 8Bit 字节码的编码方式之一，可将图片编码为特定的字符串，由 52 个大小字母和 10 个数字，以及 +、/、= 三个字符组成

      使用 Base64 编码渲染图片有以下优点：

        有效减少 HTTP 请求次数
        可对数据进行简单加密，无法肉眼获取信息
        没有跨域问题，无需考虑图片缓存

      凡事皆有利弊，使用 Base64 编码同时也会带来一些问题：

        编码后文件体积增大，仅适用于小体积图片编码
        增加了编码和解码的工作量
        不支持 IE 8.0 以下版本

      如需将图片转换为 Base64 编码，可以使用 JavaScript API FileReader.readAsDataURL ，详细可参考文档。
    </pre>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        
      }
    }
  }
</script>

<style scoped>
  
</style>
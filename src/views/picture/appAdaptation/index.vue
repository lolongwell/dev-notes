<template>
  <div>
    <pre>
      <b>多倍图</b>
        在 Retina 视网膜屏幕面世之前人们很少关注像素密度与设备像素比，随着 Retina 屏在移动设备中越来越广泛地应用，为了保证图片在不同 DPR（设备像素比）的设备上显示足够清晰，开发者需要针对不同设备适配不同倍数的图片。
        像素相关概念

        DP 设备像素，又名物理像素，即设备屏幕上真实的物理像素，以矩阵的形式排列，如 iphone X 屏幕分辨率为 2436*1125，即屏幕每行包含 1125 个物理像素，每列包含 2436 个物理像素。
        DIP 设备无关像素，是一种基于屏幕坐标的抽象像素，应用程序以抽象像素为单位，如我们 CSS 中使用的 px，实际渲染时通过底层程序转换为物理像素。
        DPR 设备像素比，设备像素 / 设备无关像素的值即为设备像素比，在 Javascript 中可以通过 window.devicePixelRatio 来获取。

      <b>多倍图概念</b>
        了解以上的概念，我们不难理解：


        在 DPR 为 1 的设备（一倍屏）上，使用 1 * 1 个物理像素展示一个 CSS 像素。


        在 DPR 为 2 的设备（二倍屏）上，使用 2 * 2 个物理像素展示一个 CSS 像素。


        在 DPR 为 3 的设备（三倍屏）上，使用 3 * 3 个物理像素展示一个 CSS 像素。

        针对一张 30px * 30px 的图片，在 1 倍屏上，按照 1 : 1 平铺，图片质量并不损失。但是在 2 倍屏、3 倍屏上，分别通过 60 * 60 与 90 * 90 个物理像素渲染这张图片就会出现模糊、失真的现象，从而影响用户体验。所以，我们需要根据不同 DPR 去加载不同倍数的图片：

        一倍屏上加载 30px * 30px 的图片，我们称之为一倍图。
        二倍屏上加载 60px * 60px 的图片，图片名一般加上 @2x 标识，我们称之为二倍图。
        三倍屏上加载 30px * 30px 的图片，图片名一般加上 @3x 标识，我们称之为三倍图。

      <b>自适应 DPR 加载图片</b>
        在高分辨率显示屏如 2x 上，在页面中使用二倍图可以保证清晰度，但是当此页面在低 DPR 设备打开时，我们只需要 50% 长宽的图片就能保证显示效果，而此时带宽开销却是一样的。所以为了节约传输流量，我们需要告诉浏览器，根于不同的 DPR 加载不同尺寸的图片，通常有以下三种方法：
        
        1、使用 picture 标签，除了 IE，现有主浏览器均已支持该标签，兼容性参考[文档]([caniuse.com/#search=Pic…](caniuse.com/#search=Pic… element))。

        &lt;picture&gt;
           &lt;source srcset="photo@3x.jpg" media="(min-width: 800px)"&gt;
           &lt;source srcset="photo@2x.jpg" media="(min-width: 600px)"&gt;
           &lt;img srcset="photo.jpg"&gt;
         &lt;/picture>&gt;

        2、使用 img srcset 属性，除了 IE，现有主浏览器均已支持该属性，兼容性参考文档。

         &lt;img src="photo.png" srcset="photo@2x.png 2x, photo@3x.png 3x" alt="photo" /&gt;

        3、使用 CSS3 img-set 函数，兼容性相较于前两者较差，参考文档。

        background-image: image-set("photo.png" 1x,
                                    "photo@2x.png" 2x,
                                    "photo@3x.png" 3x);
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
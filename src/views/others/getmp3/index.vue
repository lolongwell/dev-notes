<template>
    <div class="app-container">
        <pre>
            在我进行开发的时候，还没有搭建自己的服务器，在线音源很难找，后面找到两篇帖子讲的是如何获取酷我音乐的音乐真实路径；我根据那两篇帖子，写了一个简单的nodeJs的demo；（以下为nodejs代码）

            首先进入酷我音乐，打开歌曲详情播放页面，找到地址栏中的神秘数字,如：http://www.kuwo.cn/yinyue/54436859?catalog=yueku2016?中就是 ??54436859

            使用node或者webstorm等运行下方js，在地址栏输入 localhost:8080?id=神秘数字

            单击回车，页面就会显示歌曲的真实路径，然后就可以在自己想引用的地方使用了；
        </pre>
    </div>
</template>

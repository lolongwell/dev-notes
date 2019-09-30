<template>
  <div class="app-container">
    <h3>一、HTTP通道下免密pull、push</h3>
    <pre class="code">
      // cd 项目
      // 打开git，生成git配置文件
      git config --global credential.helper store
    </pre>
    <p>找到.gitconfig文件，默认在C:\Users\asus下，如下</p>
    <pre class="code">
      [user]
          name = guwenjie
          email = guguwenjie@163.com
      [gui]
          recentrepo = D:/phpStudy/PHPTutorial/WWW/XXXX(项目所在目录，注意斜杠方向)
          //有多个项目照例配置
          //recentrepo = D:/phpStudy/PHPTutorial/WWW/项目A
          //recentrepo = D:/phpStudy/PHPTutorial/WWW/项目B
      [credential]
          helper = store
    </pre>
    <p>这个时候你再执行一次更新或者提交操作，需要你输入一次账号密码，以后的就不需要了，如上面代码所示，如果你有新的项目，可以添加，即可达到免账密效果。</p>
    <h3>二、SSH通道下免密pull、push</h3>
    <p>设置公钥私钥，详情见git初始化设置</p>
  </div>
</template>

<script>
export default {
}
</script>
<style scoped>
.code {
  display: inline-block;
  padding: 10px;
  background: #cccccc;
}
</style>

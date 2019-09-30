<template>
  <div class="app-container">
    <pre>
      Win10操作系统

      初次安装git时配置了一个用户信息，如下：

      git config --global user.name "your name"
      git config --global user.email "your email"
      后来注册了一个新的git账号，重新配置了一下本地的用户信息，然后就悲剧了，在上传时一直报错：

    </pre>
    <p><img src="images/git-delete.png" alt=""></p>
    <pre>
      尝试查看配置.gitconfig文件，也没问题
      试过重装git和SourceTree客户端，依然无济于事

      无奈之中准备放弃，不行就只有重装系统了，无意间看到一个评论，很轻松就把问题解决了。

      Win10 的用户凭据里保存了git的本地用户信息，找到它，删掉就好了!

      具体的：
      控制面板 > 用户帐户 > 管理你的凭据 > 选择 [Windows 凭据]
      git 保存的用户信息在[普通凭据]列表里

    </pre>
    <p><img src="images/git-delete.png" alt=""></p>
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

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
  .el-popper,.el-message {
    z-index: 2147483647 !important;
  }
</style>

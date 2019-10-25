<template>
  <div>
    <a href="javascript:;" class="file">
      选择文件
      <input type="file" @change="changeFile($event)">
    </a>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        
      }
    },
    methods: {
      changeFile(e) {
        console.log(e)
        let file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsText(file)
        reader.onload = e => {
          console.log(e.target.result)
        }
      }
    }
  }
</script>

<style scoped>
  .file {
    position: relative;
    display: inline-block;
    background: #1890ff;
    border-radius: 4px;
    padding: 8px 15px;
    overflow: hidden;
    color: #fff;
    text-decoration: none;
    text-indent: 0;
    line-height: 20px;
    vertical-align: middle;
    font-size: 16px;
  }
  .file input {
    position: absolute;
    font-size: 100px;
    right: 0;
    top: 0;
    opacity: 0;
  }
</style>
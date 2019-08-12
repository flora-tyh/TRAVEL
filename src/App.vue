//.vue叫做一个单文件组件

//template里面是组件的模板
<template>
  <div id="app">
    <!--router-view显示的是当前路由地址所对应的的内容-->
    <router-view/>
  </div>
</template>

//script里面是组件的逻辑
<script>
export default {
  name: 'App'
}
</script>

//css样式放在style里
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

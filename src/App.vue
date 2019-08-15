//.vue叫做一个单文件组件

//template里面是组件的模板
<template>
  <div id="app">
    <!--keep-alive的作用：当路由router加载过一次之后，把里面的东西放到内存里，再次加载时不用重新渲染-->
    <keep-alive>
      <!--router-view显示的是当前路由地址所对应的的内容-->
      <router-view/>
    </keep-alive>
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
}
</style>

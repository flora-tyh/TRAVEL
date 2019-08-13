<template>
  <div class="header">
      <div class="header-left">
        <span class="iconfont back-icon">&#xe624;</span>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe632;</span>
        输入城市景点游玩主题
      </div>
      <div class="header-right">
        {{this.city}}
       <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'homeHeader',
  props: {
    city: String
  }
}
</script>
<style scoped lang="stylus">
/*1rem = html font-size = 50px*/
//在style中引用style不能用import 要用@import
//引入存储变量的文件 ..代表上级文件
//下面这两句是等效的
/*@import '../../../assets/styles/varibles.styl'*/
/*@import '~@/assets/styles/varibles.styl'*/
//因为styles这个文件经常用，可以在build.webpack.base.conf.js里面给styles文件夹添加一个别名styles，直接指向这个文件夹

@import '~styles/varibles.styl'
 .header
   display:flex
   line-height: .86rem
   color:#fff
   background-color: $bgColor
  .header-left
    width: .64rem
    float:left
    .back-icon
      font-size: .4rem
      text-align :center
  .header-input
    flex:1
    height:.64rem
    color:#ccc
    text-align left
    line-height: .64rem
    margin-top: .11rem
    margin-left:.2rem
    background-color: #fff
    border-radius :.1rem
    padding-left:0.2rem
  .header-right
    width: 1.24rem
    float:right
    text-align center
    .arrow-icon
      font-size : .3rem

</style>

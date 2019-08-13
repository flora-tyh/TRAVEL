<template>
    <div class="header">
     <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
     </router-link>
      城市选择
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
 .header
   position :relative
   overflow: hidden
   height: $headerHeight
   line-height: $headerHeight
   text-align :center
   color: #fff
   background-color: $bgColor
   font-size: .32rem
   .header-back
    position:absolute
    left:0
    width: .64rem
    font-size: .4rem
    color:#fff
</style>

<template>
<div>
  <div class="title">热销推荐</div>
  <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
          <img  class='item-img' :src="item.imgUrl">
        <div class="item-info">
          <h1 class="item-title">{{item.title}}</h1><br>
          <p class="item-desc">{{item.desc}}</p>
          <button class='item-button'>查看详情</button>
        </div>
      </router-link>
  </ul>
</div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/mixins.styl'
 .title
   margin-top .2rem
   line-height :.7rem
   background-color: #eee
   text-indent :.2rem
 .item
   overflow :hidden
   display:flex
   height:1.9rem
   .item-img
    width:1.7rem
    height:1.7rem
    padding:.1rem
   .item-info
    position:relative
    flex:1
    padding-top:.1rem
    padding-left:.3rem
    min-width : 0
    .item-title
     width :100%
     ellipsis()
     text-align :left
     line-height:.50rem
     font-size:.31rem
     font-weight: bold
    .item-desc
     line-height:.4rem
     color:#ccc
     text-align :left
     margin-top:-.18rem
     ellipsis()
    .item-button
     line-height :.36rem
     position:absolute
     background-color: #ff9300
     padding:.1rem
     border-radius:.4rem
     float:left
     bottom :.13rem
     left:.3rem
</style>

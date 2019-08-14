<template>
    <div class="list" ref="wrapper">
      <div>
        <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">四川</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">四川</div>
            </div>
          </div>
        </div>
        <div class="area ">
          <div class="title border-topbottom">A</div>
            <div class="item-list">
              <div class="item border-bottom">aaaa</div>
              <div class="item">aaaa</div>
              <div class="item">aaaa</div>
              <div class="item">aaaa</div>
              <div class="item">aaaa</div>
              <div class="item">aaaa</div>
            </div>
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">aaaa</div>
            <div class="item">aaaa</div>
            <div class="item">aaaa</div>
            <div class="item">aaaa</div>
            <div class="item">aaaa</div>
            <div class="item">aaaa</div>
          </div>
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">aaaa</div>
            <div class="item">aaaa</div>
            <div class="item">aaaa</div>
            <div class="item">aaaa</div>
            <div class="item">aaaa</div>
            <div class="item">aaaa</div>
          </div>
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">aaaa</div>
            <div class="item">aaaa</div>
            <div class="item">aaaa</div>
            <div class="item">aaaa</div>
            <div class="item">aaaa</div>
            <div class="item">aaaa</div>
          </div>
          <div class="title border-topbottom">A</div>
          <div class="item-list">
            <div class="item border-bottom">aaaa</div>
            <div class="item">aaaa</div>
            <div class="item">aaaa</div>
            <div class="item">aaaa</div>
            <div class="item">aaaa</div>
            <div class="item">aaaa</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  //border-topbottom前面后面的border-color都是#777，控制了一个像素边框的颜色
  .border-topbottom
   &:before
     border-color: #777
   &:after
     border-color: #777
  .border-bottom
  &:before
    border-color: #777
  .list
    overflow hidden
    position :absolute
    top:2.9rem
    left:0
    right:0
    bottom:0
    .title
     text-align :left
     line-height :.44rem
     background: #eee
     padding-left:.2rem
     color:#666
     font-size:.26rem
    .button-list
     overflow :hidden
     padding:.1rem  .6rem .1rem .1rem
     .button-wrapper
      float:left
      width: 33.33%
      .button
        margin:.1rem
        padding:.1rem 0
        text-align :center
        border: .02rem solid #ccc
        border-radius: .06rem
    .item-list
     .item
       text-align :left
       line-height :.76rem
       padding-left:.2rem
</style>

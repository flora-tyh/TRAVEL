<template>
  <div>
   <div class="banner" @click="handleBannerClick">
     <img class='banner-img'
          src="//img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_600x330_0f80adad.jpg"  alt="">
     <div class="banner-info">
       <div class="banner-title">熊猫基地</div>
       <div class="banner-number"><span class="iconfont banner-icon">&#xe621;</span>39</div>
     </div>
   </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close='handleGallaryClose'
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary:false,
      imgs: ['//img1.qunarzz.com/sight/p0/201301/08/74b6290e6bf5cd1e93835fbb.jpg', '//img1.qunarzz.com/sight/p0/201301/08/74b6290e6bf5cd1e93835fbb.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style scoped lang="stylus">
.banner
  position :relative
  overflow: hidden
  height:0
  padding-bottom:55%
  .banner-img
   width:100%
  .banner-info
    display :flex
    position: absolute
    left:.2rem
    right:0
    bottom:0
    line-height :.6rem
    color:#fff
    background-image :linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
    .banner-title
     text-align :left
     flex:1
     font-size :.32rem
    .banner-number
     margin-top:.1rem
     margin-right:.1rem
     padding:0 .4rem
     height: .4rem
     line-height : .4rem
     border-radius :.15rem
     background-color: rgba(0,0,0,.8)
     font-size :.24rem
     .banner-icon
      font-size :.24rem
</style>

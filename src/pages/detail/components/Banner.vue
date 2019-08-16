<template>
  <div>
   <div class="banner" @click="handleBannerClick">
     <img class='banner-img'
          :src="bannerImg">
     <div class="banner-info">
       <div class="banner-title">this.sightName</div>
       <div class="banner-number"><span class="iconfont banner-icon">&#xe621;</span>{{this.bannerImg.length}}</div>
     </div>
   </div>
    <common-gallary
      :imgs="bannerImgs"
      v-show="showGallary"
      @close='handleGallaryClose'
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showGallary: false
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

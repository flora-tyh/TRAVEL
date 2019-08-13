<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id">
        <img class='swiper-img' :src='item.imgUrl' alt="">
      </swiper-slide>
      <!--<swiper-slide>I'm Slide 3</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 4</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 5</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 6</swiper-slide>-->
      <!--<swiper-slide>I'm Slide 7</swiper-slide>-->
      <!-- Optional controls -->
      <!--下面可以放轮播的小圆点-->
      <div class="swiper-pagination"  slot="pagination"></div>
      <!--左右箭头，不需要-->
      <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
      <!--<div class="swiper-button-next" slot="button-next"></div>-->
      <!--滚动条不需要-->
      <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>
<!--scoped里面的样式只能作用在这个子组件里-->
<!--如果想作用到外面，就需要用‘>>>’穿透-->
<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background-color: #fff !important
  .wrapper
    background-color: #ccc .2
    overflow: hidden
    width:100%
    height:0
    padding-bottom:31.2%
   .swiper-pagination-bullet-active
     background-color: red !important
    //在一开始打开界面图片片还没渲染出来的时候，因为图片不存在，所以图片后面的内容会在上面，等图片出来才会下去，有明显抖动
    //如何解决：给轮播图加一个div，div的宽度是100%，高度是宽度的31.25%（根据实际图片看），不能直接给图片定义height31.25%，这样就是相对于父盒子高度31.25，要用padding-bottom
  .swiper-img
    width:100%
</style>

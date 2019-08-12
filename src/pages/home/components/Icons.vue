<template>
<div class="icons">
  <swiper class="swiper-container">
    <swiper-slide v-for="(page,index) of pages" :key="index">
      <div class="icon" v-for="item of page" :key="item.id">
        <div class="icon-img">
        <img  class='icon-img-content' :src="item.imgUrl"  alt="">
        </div>
        <p class="icon-des">{{item.des}}</p>
      </div>
    </swiper-slide>
  </swiper>
</div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        des: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/4d/a1eda1a2b8414302.png',
        des: '暑期夜场'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        des: '成都必游'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
        des: '川剧变脸'
      }, {
        id: '0005',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        des: '一日游'
      }, {
        id: '0006',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
        des: '碧峰峡'
      }, {
        id: '0007',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
        des: '游乐场'
      }, {
        id: '0008',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
        des: '熊猫基地'
      }, {
        id: '0009',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
        des: '熊猫基地'
      }]
    }
  },
  computed: {
    pages () {
      const pages= []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '~styles/varibles.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
   height:0
   padding-bottom:50%
  .icon
   position relative
   overflow hidden
   float:left
   width:25%
   height:0
   padding-bottom:25%
   .icon-img
    position :absolute
    top:0
    left:0
    right:0
    bottom:.44rem
    padding:.1rem
    .icon-img-content
     height:100%
  .icon-des
    position :absolute
    left:0
    right:0
    bottom:.1rem
    line-height .44rem
    color:$darkTextColor
    ellipsis()
</style>

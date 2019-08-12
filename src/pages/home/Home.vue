<template>
  <div>
  <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script>
// 搭建首页Home
// 根组件是Home
// 引入其他的子组件
import HomeHeader from './components/Header.vue'
import HomeSwiper from './components/Swiper.vue'

export default {
  name: 'home',
  components: {
    HomeHeader: HomeHeader,
    HomeSwiper: HomeSwiper
  }
}
</script>

<style scoped>

</style>


// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import store from './store'
import './assets/styles/reset.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper /* { default global options } */)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router:router的缩写
  router,
  store,
  components: { App },
  // 上面这句话是components: { App：App }省略的写法，在es6中如果键和值是一样的，可以省略
  template: '<App/>'
})
// 路由就是根据网址的不同，返回不同的内容给用户

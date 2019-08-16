import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 当访问根路径‘/‘时，展示的组件（component）就是下面的helloworld，helloworld这个组件在src文件下的component里
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }],
  scrollBehavior (to, from, savadPosition) {
    return {x: 0, y: 0}
  }
})

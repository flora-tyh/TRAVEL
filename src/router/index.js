import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'

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
    }
  ]
})

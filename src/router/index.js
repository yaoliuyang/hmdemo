import Vue from 'vue'
import Router from 'vue-router'
import home from '@/page/home'
import cart from '@/page/cart'
import member from '@/page/member'
import search from '@/page/search'
import newslist from '@/page/newslist'
import newsdetail from '@/page/newsdetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      meta:{
        deep:1
      }
    },
    {
      path: '/home/newslist',
      name: 'newslist',
      component: newslist,
      meta:{
        deep:2
      }
    },
    {
      path: '/home/newslist/newsdetail/:id',
      name: 'newsdetail',
      component: newsdetail,
      meta:{
        deep:3
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      meta:{
        deep:3
      }
    },
    {
      path: '/member',
      name: 'member',
      component: member,
      meta:{
        deep:2
      }
    },
    {
      path: '/search',
      name: 'search',
      component: search,
      meta:{
        deep:4
      }
    }
  ]
})

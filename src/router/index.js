import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('@/components/home/index')
const NavList = () => import('@/components/navList/navList')


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path: '/index',
      component: Index
      // children: [
      //   {
      //     path: ':id',
      //     component: Disc
      //   }
      // ]
    },
    {
      path: '/navList',
      component: NavList
      // children: [
      //   {
      //     path: ':id',
      //     component: Disc
      //   }
      // ]
    }
  ]
})

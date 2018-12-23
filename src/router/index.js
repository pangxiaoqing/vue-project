import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = () => import('@/components/home/index')
const NavList = () => import('@/components/navList/navList')
const NavListDetail = () => import('@/components/navListDetail/navListDetail')
const NavListDetailTicket = () => import('@/components/navListDetail/navListDetailTicket/navListDetailTicket.vue')


export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path: '/index',
      component: Index
    },
    {
      path: '/navList',
      component: NavList
    },
    {
      path:'/navListDetail',
      component:NavListDetail,
      children: [
        {
          path: '/navListDetailTicket',
          component: NavListDetailTicket
        }
      ]
    }
  ]
})

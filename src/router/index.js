import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Index from '@/components/index'

Vue.use(Router)

const Recommend = () => import('@/components/recommend/recommend')
const Singer = () => import('@/components/singer/singer')
const Rank = () => import('@/components/rank/rank')
const Search = () => import('@/components/search/search')

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/recommend',
      component: Recommend
      // children: [
      //   {
      //     path: ':id',
      //     component: Disc
      //   }
      // ]
    },
    {
      path: '/singer',
      component: Singer
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/search',
      component: Search
    }
  ]
})

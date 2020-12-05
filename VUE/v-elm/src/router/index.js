import Vue from 'vue'
import VueRouter from 'vue-router'
import Goods from '@/views/goods/goods'
// import Comment from '@/views/comment/comment'
// import Seller from '@/views/seller/seller'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Goods',
    component: Goods
  },
  {
    path: '/comment',
    name: 'Comment',
    // 小小的优化，只有跳去那才加载，为首次渲染减轻负担
    component: () => import('@/views/comment/comment')
  },
  {
    path: '/seller',
    name: 'Seller',
    component: () => import('@/views/seller/seller')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

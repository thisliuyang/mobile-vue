import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '@/views/layout/AppIndex.vue'
import AppSearch from '@/views/Search'
import AppShop from '@/views/Shop'
import AppVip from '@/views/Vip'
import AppHome from '@/views/Home'
import HomeNewList from '@/views/Home/HomeNewList'
import HomeNewInfo from '@/views/Home/HomeNewInfo'
import PhotoList from '@/views/Home/PhotoList'
import PhotoInfo from '@/views/Home/PhotoInfo'
import GoodsList from '@/views/Home/GoodsList'
import GoodsInfo from '@/views/Home/GoodsInfo'
import GoodsComment from '@/views/Home/GoodsComment'
import GoodsDesc from '@/views/Home/GoodsDesc'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: AppIndex,
      children: [
        {
          path: '',
          component: AppHome
        },
        {
          path: '/shop',
          component: AppShop
        },
        {
          path: '/search',
          component: AppSearch
        },
        {
          path: '/vip',
          component: AppVip
        },
        {
          path: '/newlist',
          component: HomeNewList
        },
        {
          path: '/newinfo:id',
          component: HomeNewInfo
        },
        {
          path: '/photolist',
          component: PhotoList
        },
        {
          path: '/photoinfo:id',
          component: PhotoInfo
        },
        {
          path: '/goodslist',
          component: GoodsList
        },
        {
          path: '/goodsinfo:id',
          component: GoodsInfo
        },
        {
          path: '/goodsdesc',
          name: 'goodsdesc',
          component: GoodsDesc
        },
        {
          path: '/goodscomment/:id',
          name: 'goodscomment',
          component: GoodsComment,
          props: true
        }
      ]
    }
  ],
  linkExactActiveClass: 'mui-active'
})

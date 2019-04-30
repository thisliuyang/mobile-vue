import Vue from 'vue'
import Vuex from 'vuex'

import { getComments } from '@/api'

Vue.use(Vuex)

let car = JSON.parse(window.localStorage.getItem('car') || '[]')
export default new Vuex.Store({
  state: {
    comment: [],
    car: car // 购物车相关数据
  },
  mutations: {
    setComments (state, comment) {
      state.comment = comment
    },
    // 添加购物车信息
    addToCar (state, goodsinfo) {
      let flag = state.car.findIndex(item => {
        return item.id === goodsinfo.id
      })
      if (flag === -1) {
        state.car.push(goodsinfo)
      } else {
        state.car[flag].count += goodsinfo.count
      }
      // 添加购物车到本地存储
      window.localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    getAllCount (state) {
      let counts = 0
      state.car.forEach(item => {
        counts += item.count
      })
      return counts
    }
  },
  actions: {
    async loadComments ({ commit }, id, pageIndex) {
      let { message } = await getComments(id, pageIndex)
      commit('setComments', message)
    }
  }
})

import Vue from 'vue'
import Vuex from 'vuex'

import { getComments } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    comment: []
  },
  mutations: {
    setComments (state, comment) {
      state.comment = comment
    }
  },
  actions: {
    async loadComments ({ commit }, id, pageIndex) {
      let { message } = await getComments(id, pageIndex)
      commit('setComments', message)
    }
  }
})

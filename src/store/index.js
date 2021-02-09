import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userinfo: {
      name: 'leuvi',
      phone: '18512344321'
    }
  },
  mutations: {
    UPDATE_TOKEN(state, token) {
      state.token = token
    },
    UPDATE_USERINFO(state, userinfo = {}) {
      state.userinfo = userinfo
    }
  },
  actions: {
    init({ commit, dispatch }) {
      dispatch('todo')
    },
    todo({ commit }) {

    }
  }
}) 
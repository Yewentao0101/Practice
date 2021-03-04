import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  getters: {
    countType(state) {
      return (state.count & 1) === 1 ? '奇数' : '偶数'
    }
  },
  actions: {
    increment(store) {
      //触发mutation函数 传递参数
      store.commit('INCREMENT', 1)
    },
    decrement(store) {
      store.commit('DECREMENT', 1)
    },
    oddnum({
      commit,
      state
    }) {
      if (state.count % 2 === 0) return
      commit('INCREMENT', 1)
    },
    asyncnum({
      commit
    }) {
      setTimeout(() => {
        commit('INCREMENT', 1)
      }, 2000)
    }
  },
  mutations: {
    INCREMENT(state, num) {
      state.count += num
    },
    DECREMENT(state, num) {
      state.count -= num
    },
  },
})

export default store
import Vue from 'vue'
import  Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}

const mutations = {
  add (state, num) {
    setTimeout(() => {
      state.count += num
    }, 3000);
    console.log('我后出现');
  },
  reduce (state) {
    state.count--
  }
}

const getters = {
  newCount: (state) => {
    return state.count ** 2
  }
}

const actions = {
  // context 就是相当于 vuex
  addAction (context, n) {
    setTimeout(() => {
      context.commit('add', n)
    }, 3000);
    console.log('我先出现');
  }
}

const moduleA = {
  state,
  mutations,
  getters,
  actions
}

const state2 = {

}

const moduleB = {
  state2
}

export default new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
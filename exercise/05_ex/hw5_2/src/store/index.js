import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter : 0
  },
  getters: {
    counterDouble(state) {
      return state.counter * 2
    }
    
  },
  mutations: {
    CHANGE_COUNTER(state, newCounter) {
      state.counter = newCounter
    }
  },
  actions: {
    increaseCounter(context){
      const newCounter = context.state.counter + 1
      context.commit('CHANGE_COUNTER', newCounter)
    },
    decreaseCounter(context){
      const newCounter = context.state.counter - 1
      context.commit('CHANGE_COUNTER', newCounter)
    }
  },
  modules: {
  }
})

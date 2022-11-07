import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [
      {
        title: '아메리카노',
        price: 3000,
        selected: true,
        image: 'https://source.unsplash.com/featured/?americano'
      },
      {
        title: '라떼',
        price: 3500,
        selected: true,
        image: 'https://source.unsplash.com/featured/?latte'
      },
      {
        title: 'juice',
        price: 4000,
        selected: true,
        image: 'https://source.unsplash.com/featured/?juice'
      }

    ],
    sizeList: [],
  },
  getters: {
  },
  mutations: {
    addOrder: function () {},
    updateMenuList: function (state, menu) {
      const index = state.menuList.indexOf(menu)
      state.menuList[index].selected =! state.menuList[index].selected
      console.log(state.menuList[index])
    },
    updateSizeList: function () {},
  },
  actions: {
  },
  modules: {
  }
})
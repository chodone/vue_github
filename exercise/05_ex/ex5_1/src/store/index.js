import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    optionList: [
      {
        type: '샷',
        price: 500,
        count: 0
      },
      {
        type: '바닐라 시럽',
        price: 500,
        count: 0
      },
      {
        type: '카라멜 시럽',
        price: 500,
        count: 0
      },

    ],
    menuList: [
      {
        title: '아메리카노',
        price: 3000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?americano'
      },
      {
        title: '라떼',
        price: 3500,
        selected: false,
        image: 'https://source.unsplash.com/featured/?latte'
      },
      {
        title: 'juice',
        price: 4000,
        selected: false,
        image: 'https://source.unsplash.com/featured/?juice'
      }

    ],
    sizeList: [
      {
        name : 'small',
        price : 0,
        selected: false
      },
      {
        name : 'medium',
        price : 500,
        selected: false
      },
      {
        name : 'large',
        price : 1000,
        selected: false
      }
    ],
  },
  getters: {
    totalOrderCount(state){
      return state.orderList.length
    },
    totalOrderPrice(state){
      const totalPrice = state.orderList.reduce((acc, elem) => {
        return acc + elem.menu.price + elem.size.price
      }, 0)
      return totalPrice
    }


  },
  mutations: {
    addOrder: function (state, order) {
      state.orderList.push(order)
    },
    updateMenuList: function (state, menu) {
      // const index = state.menuList.indexOf(menu)
      // state.menuList[index].selected =! state.menuList[index].selected
      // console.log(state.menuList[index])
      state.menuList.map((elem) => {
        if (elem === menu) {
          elem.selected = true
        } else {
          elem.selected = false
        }
      })
    },
    updateSizeList: function (state, size) {
      // const index = state.sizeList.indexOf(size)
      // state.sizeList[index].selected =! state.sizeList[index].selected
      // console.log(state.sizeList[index])
      state.sizeList.map((elem) => {
        if (elem === size) {
          elem.selected = true
        } else {
          elem.selected = false
        }
      })
    },
    increaseOptionCount(state, option){
      state.optionList.forEach((elem) => {
        if(elem.type === option.type){
          elem.count += 1
        }
      })
    },
    decreaseOptionCount(state, option){
      state.optionList.forEach((elem) => {
        if(elem.type === option.type && elem.count !== 0){
          elem.count -= 1
        }
      })
    },
  },
  actions: {
    createOrder(context, selected){  
      context.commit('addOrder', selected)
    },
    

  },
  modules: {
  }
})
<template>
  <div id="app">
    <h1 style="text-align: center">Coffee Order App</h1>
    <div id="list">
      <MenuList />
      <SizeList />
      <OptionList />
    </div>
  
    <button id="btn" @click="createOrder">장바구니 담기</button>
    <OrderList />
  </div>
</template>

<script>
import MenuList from '@/components/MenuList'
import SizeList from '@/components/SizeList'
import OrderList from '@/components/OrderList'
import OptionList from '@/components/OptionList'

export default {
  name: 'App',
  components: {
    MenuList,
    SizeList,
    OptionList,
    OrderList,
  },
  methods: {
    createOrder() {
      const menuList = this.$store.state.menuList
      const sizeList = this.$store.state.sizeList
      const optionList = this.$store.state.optionList
      
      const selectedMenu = menuList.filter((elem) => {
        return elem.selected
      })

      const selectedSize = sizeList.filter((elem) => {
        return elem.selected
      })
      
      const selectedOption = []
      
      optionList.forEach((elem) => {
        
        const option ={
          type: elem.type,
          price: elem.price,
          count: elem.count,
        }
        selectedOption.push(option)
        
      })
      
      console.log(selectedOption)

      if (selectedMenu.length !== 0  && selectedSize.length !== 0){
        this.$store.dispatch('createOrder', {menu:selectedMenu[0], size:selectedSize[0], option:selectedOption})
        selectedSize[0].selected = false
        selectedMenu[0].selected = false
        optionList.forEach((elem) =>{
          elem.count = 0
        }) 
        
      }
      else if(selectedMenu.length !== 0) {
        selectedMenu[0].selected = false
        optionList.forEach((elem) =>{
          elem.count = 0
        }) 
        window.alert('메뉴와 사이즈 모두 선택해주세요')
        
      }

      else if(selectedSize.length !== 0) {
        selectedSize[0].selected = false
        optionList.forEach((elem) =>{
          elem.count = 0
        })
        window.alert('메뉴와 사이즈 모두 선택해주세요')
      }

      else{
        optionList.forEach((elem) =>{
          elem.count = 0
        })
        window.alert('메뉴와 사이즈 모두 선택해주세요')
      }
      

      console.log(this.$store.state.orderList)



    
    }

  }
}
</script>

<style>
* {
  
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}
#btn {
  width: 1000px;
  height: 40px;
  margin: auto;
  display: block;
  background-color: darkkhaki;
  border-radius: 10px;
  border: 1px darkkhaki;
}
#app {
  
  justify-content: center;
}


#list {
  margin: 20px;
  display: flex;
  justify-content: center;
  background-color: beige;
  border-radius: 10px;
}
</style>

<template>
  <div id="order-list">
    <h3 style="margin:10px">주문내역</h3>
    <p>총 {{totalOrderCount}}건: {{totalOrderPrice}}원</p>
    
    <OrderListItem v-for="(order, index) in orderList" :key="index" :order="order"/>
  </div>
</template>

<script>
import OrderListItem from '@/components/OrderListItem'
export default {
  name: 'OrderList',
  components: {
    OrderListItem
  },
  computed: {
    orderList: function () {
      return this.$store.state.orderList
    },
    totalOrderCount: function () {
      return this.$store.getters.totalOrderCount
    },
    totalOrderPrice: function () {
      return this.$store.getters.totalOrderPrice
    },
    

  },
}
</script>

<style>
  #order-list{
    margin: 20px;
    background-color:  beige;
    border-radius: 10px;

  }
</style>
<template>
  <div id="container">

    <div id="wrap">
      <div id=box1>
        <img id="order-img" :src=order.menu.image alt="img">
        <div>
          <p id="font">{{order.menu.title}}</p>
          <p id="font">size: {{order.size.name}}</p>
        </div>
      </div>
      <div>
        <p id="font">{{order.menu.price + order.size.price +(order.option[0].price*order.option[0].count)+ (order.option[1].price*order.option[1].count) +(order.option[2].price*order.option[2].count)}}원</p>
        <p id="font">샷 {{order.option[0].count}}회 | 바닐라 시럽 {{order.option[1].count}}회 | 카라멜 시럽 {{order.option[2].count}}회 </p>
      </div>      
    </div>
    <hr>
  </div>
  
</template>

<script>
export default {
  name: 'OrderListItem',
  props: {
    order: Object,
  },
  computed: {
    // totalPrice: function () {
    // },
  },
}
</script>

<style>
#container {
  margin: 20px;
}
#order-img {
  
  width: 30px;
  height: 30px;
  border-radius: 10px;
  
}

#wrap {
  justify-content: space-between;
  display: flex;
  
}

#box1{
  display: flex;
  align-items: center;
}

#font {
  font-size: 10px;
}


</style>
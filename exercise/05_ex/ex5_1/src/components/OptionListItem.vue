<template>
  <div id="option">
    <p>{{option.type}}</p>
    <div id="count-box">
      <button @click="increase" id="count-btn">+</button>
      <p>{{option.count}}</p>
      <button @click="decrease" id="count-btn">-</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'OptionListItem',
  props: {
    option: Object,
  },
  methods: {
    increase() {
      this.$store.commit('increaseOptionCount', this.option)
    },
    decrease() {
      this.$store.commit('decreaseOptionCount', this.option)
    },
  },
}
</script>

<style>
#option {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  border: solid 2px;
  border-radius: 10px;  
}

#count-box {
  display: flex;
  margin: 5px;
  align-items: center;
}

#count-btn{
  border-radius: 16px;
  height: 20px;
  width: 20px;
  text-align: center;
}
</style>
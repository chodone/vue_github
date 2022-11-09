<template>
  <div>
    <h1>로또</h1>
    <br>
    <button @click="getLuckyNumber">Get Lucky Numbers</button>
    <p>{{luckyNum}}</p>
  </div>
</template>

<script>
export default {
  name: "TheLotto",
  data() {
    return{
      number: this.$route.params.number,
      luckyNum: null


    }
  },
  
  methods: {
    getLuckyNumber() {
      const numLst = []
      for (let i = 0; i < this.number; i++) {
        numLst.push(Math.floor(Math.random()* 45 + 1))
      }
      this.luckyNum = numLst 

    }
  }

}
</script>

<style>

</style>
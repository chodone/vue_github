<template>
  <div>
    <h2>시작</h2>
    <div id="box1">
      <button @click="toHome" id="btn">-</button>
      <img id="char-img" src="../assets/happeed.png" alt="">
      <button @click="generate" id="btn">+</button>
    </div>
    <h2>해피드</h2>
  </div>
  
</template>

<script>
export default {
  name: 'NoColor',
  methods: {
    generate() {
      this.$router.push({name: 'Happling'})
    },
    toHome() {
      this.$router.push({name: 'home'})
    }  
  }
}
</script>

<style>

  #char-img{
    width: 300px;
    height: 300px;
  }

</style>
<template>
  <div>
     <h2>3단계</h2>
    <div id="box1">
      <button @click="degenerate" id="btn">-</button>
      <img id="char-img" src="../assets/happlower.png" alt="">
      <button @click="generate" id="btn">+</button>
    </div>
    <h2>해플라워</h2>
  </div>
</template>

<script>
export default {
  name:'HappLower',
  methods: {
  generate() {
    this.$router.push({name: 'home'})
  },
  degenerate() {
    this.$router.push({name: 'HapploSsome'})
  }  
}

}
</script>

<style>

</style>
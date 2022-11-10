<template>
  <div>
    <h2>1단계</h2>
    <div id="box1">
      <button @click="degenerate" id="btn">-</button>
      <img id="char-img" src="../assets/happling.png" alt="">
      <button @click="generate" id="btn">+</button>
    </div>
    <h2>해플링</h2>
  </div>
</template>

<script>
export default {
  name: 'HappLing',
  methods: {
    generate() {
      this.$router.push({name: 'HapploSsome'})
    },
    degenerate() {
      this.$router.push({name: 'NoColor'})
    }  
  }

}
</script>

<style>

</style>
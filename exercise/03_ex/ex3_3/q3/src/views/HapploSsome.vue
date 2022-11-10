<template>
  <div>
    <h2>2단계</h2>
    <div id="box1">
      <button @click="degenerate" id="btn">-</button>
      <img id="char-img" src="../assets/happlossome.png" alt="">
      <button @click="generate" id="btn">+</button>
    </div>
    <h2>해플라썸</h2>

  </div>
  
</template>

<script>
export default {
  name:'HapploSsome',
   methods: {
    generate() {
      this.$router.push({name: 'HappLower'})
    },
    degenerate() {
      this.$router.push({name: 'Happling'})
    }  
  }

}
</script>

<style>

</style>
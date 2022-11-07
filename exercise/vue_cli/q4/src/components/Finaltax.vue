<template>
  <div>
    <h2>산출세액: {{calTax}} 만원</h2>
    <h2>세액감면: (-) {{taxReduction}} 만원</h2>
    <hr>
    <h2>결정세액 : {{calTax - taxReduction}} 만원</h2>
  </div>
</template>
  
<script>
export default {
  name: 'Finaltax',
  props: {
    taxBase: Number,
    taxReduction: Number
  },
  computed:{
    calTax: function () {
      
      if(this.taxBase <= 1200){
        return Math.round(this.taxBase * 0.06)
      }
      else if(this.taxBase <= 4600){
        return Math.round(this.taxBase * 0.15 - 108)
      }
      else if(this.taxBase <= 8000){
        return Math.round(this.taxBase * 0.24 - 522)
      }
      else if(this.taxBase <= 15000){
        return Math.round(this.taxBase * 0.35 - 1490)
      }
      else if(this.taxBase <= 30000){
        return Math.round(this.taxBase * 0.38 - 1940)
      }
      else if(this.taxBase <= 50000){
        return Math.round(this.taxBase * 0.40 - 2540)
      }
      else if(this.taxBase <= 100000){
        return Math.round(this.taxBase * 0.42 - 3540)
      }
      else{
        return Math.round(this.taxBase * 0.45)
      }
    }
  }


}
</script>

<style>

</style>
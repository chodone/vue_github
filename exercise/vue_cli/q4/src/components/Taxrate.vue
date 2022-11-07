<template>
  <div>
    <h2>종합소득금액: {{ageIncome}} 만원</h2>
    <h2> 종합소득공제: (-) 150 만원 </h2>
    <h2> 과세표준: {{taxBase}} 만원</h2>
    <hr>
    <Finaltax :taxBase="taxBase" :taxReduction="taxReduction"/>

  </div>
  
</template>

<script>
import Finaltax from '@/components/Finaltax'
export default {
  name: 'Taxrate',
  components: {
    Finaltax
  },
  props:{
    ageIncome: Number,
    taxReduction: Number,
  },
  data: function () {
    return {
      taxReduction : this.taxReduction
    }

  },
  computed: {
    taxBase: function () {
      return this.ageIncome - 150 > 0 ? this.ageIncome - 150 : 0
    }
  }
}



</script>


<style>

</style>
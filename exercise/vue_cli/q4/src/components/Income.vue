<template>
  <div>
    <h1>소득세 계산기</h1>
    <p>연봉 입력 (만원) : <input v-model.number = "ageIncome" type="number"></p>
    <p>세액감면액 (만원) : <input v-model.number = "taxReduction" type="number"></p>
    <hr>
    <Taxrate :ageIncome="ageIncome" :taxReduction="taxReduction"/>
  </div>
  
</template>

<script>
import Taxrate from '@/components/Taxrate'

export default {
  name: 'Income',
  components: {
    Taxrate,
  },

  data: function () {
    return{
      ageIncome: null,
      taxReduction: null,

    }
  },
  methods : {
   
  }

}
</script>

<style>

</style>
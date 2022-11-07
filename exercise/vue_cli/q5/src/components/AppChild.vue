<template>
  <div>
    <h2>AppChild</h2>
    <input type="text" v-model="childData" @input='postChildData'>
    <p>appData : {{appData}}</p>
    <p>parentData : {{parentData}}</p>
    <p>childData: {{childData}} </p>

  </div>  
</template>

<script>
export default {
  name:'AppChild',
  props:{
    appData: String,
    parentData: String,

  },
  data: function () {
    return {
      childData: null
    }
  },
  methods: {
    postChildData: function () {
      this.$emit('child-data', this.childData)
    }
  } 
}
</script>

<style>

</style>
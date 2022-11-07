<template>
  <div>
    <h2>AppParent</h2>
    <input type="text" v-model="parentData" @input="postParentData">
    <p>appData : {{appData}}</p>
    <p>childData : {{childData}}</p>
    <AppChild :appData="appData" :parentData="parentData" @child-data="inputChildData"/>
  </div>
</template>

<script>
import AppChild from '@/components/AppChild'
export default {
  name:'AppParent',
  components : {
    AppChild,
  },
  props:{
    appData: String,
  },
  data: function() {
    return {
      parentData:null,
      childData:null
    }
  },
  methods: {
    inputChildData: function (cd) {
      this.childData = cd
      this.$emit('child-data', this.childData)
    },
    postParentData: function () {
      this.$emit('parent-data', this.parentData)
    },
   


  }
}
</script>

<style>

</style>
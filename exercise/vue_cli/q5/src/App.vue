<template>
  <div id="app">
    <h2>App</h2>
    <input type="text" v-model="appData">
    <p>parentData: {{parentData}}</p>
    <p>childData: {{childData}}</p>
    <AppParent 
    :appData="appData" 
    @child-data="inputChildData"
    @parent-data="inputParentData"
    />
  </div>
</template>

<script>
import AppParent from './components/AppParent.vue'


export default {
  name: 'App',
  components: {
    AppParent
   
  },
  data: function () {
    return {
      appData: null,
      parentData:null,
      childData:null,
    }
  },
  methods: {

    inputChildData: function (cd) {
      this.childData = cd
    },
    inputParentData: function (pd) {
      this.parentData = pd
    }

  }
}
</script>

<style>

</style>

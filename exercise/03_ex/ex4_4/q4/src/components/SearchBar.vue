<template>
  <div>
    <input
      id="search-bar" 
      type="text" 
      class="border rounded-3 border-2 border-primary p-1 mb-2"
      v-model="searchInput"
      @keyup.enter="enterPush"
    >
    <button @click="buttonPush" class="btn btn-primary">검색</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data () {
    return {
      searchInput: null
    }
  },
  methods: {
    enterPush: function() {
      this.$emit('search-input', this.searchInput)
    },
    buttonPush: function() {
      this.$emit('search-input', this.searchInput)
    }
  }
}
</script>

<style>
#search-bar {
  width: 600px;
  margin: 20px;
}

</style>
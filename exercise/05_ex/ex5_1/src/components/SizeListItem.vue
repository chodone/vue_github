<template>
  <div
    id="size" 
    @click="selectSize"
    :class="{'selected' : size.selected }"
  >
    <p>{{size.name}}</p>
    <p>{{size.price}}</p>
  </div>
</template>

<script>
export default {
  name: 'SizeListItem',
  props: {
    size: Object,
  },
  methods:{
    selectSize() {
      this.$store.commit('updateSizeList' , this.size)
    }
  }
}
</script>


<style>
.selected {
  background-color: darkkhaki;
}
#size {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  border: solid 2px;
  border-radius: 10px;  
}

p {
  margin: 5px;
}
</style>
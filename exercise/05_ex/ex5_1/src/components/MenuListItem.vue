<template>
  <div 
    id="menu" 
    @click="selectMenu"
    :class="{'selected' : menu.selected }" 
  >
    <img id="img" :src=menu.image alt="image"> 
    <p>{{menu.title}}</p>
    <p>{{menu.price}}</p>
  </div>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },
  methods: {
    selectMenu() {
      this.$store.commit('updateMenuList', this.menu)
    }
  }
}
</script>

<style>
.selected {
  background-color: darkkhaki;
}
#img {
  width: 25px;
  height: 25px;
  margin: 5px;
  border-radius: 5px;
}

#menu {
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
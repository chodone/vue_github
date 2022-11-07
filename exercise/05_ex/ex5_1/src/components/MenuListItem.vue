<template>
  <div @click="selectMenu">
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
</style>
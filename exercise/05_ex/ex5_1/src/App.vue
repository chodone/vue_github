<template>
  <div id="app">
    <h1>Coffee Order App</h1>
    <menuList />
  </div>
</template>

<script>
import menuList from '@/components/MenuList'
export default {
  name: 'App',
  components: {
    menuList
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Noto Sans KR', sans-serif;
  padding: 0;
  margin: 0;
}

ul {
  list-style: none;
}
</style>

<template>
  <div>
    <h1>점심메뉴</h1>
    <button @click="pickLunch">Pick Lunch</button>
    <p>{{menu}}</p>
    <br>
    <br>
    <br>
    <h2>로또를 뽑아보자</h2>
    <button @click="toLotto">pick Lotto</button>
  </div>
</template>

<script>
export default {
  name: 'TheLunch',
  data() {
    return {
      menu : null
    }
  },
  methods: {
    pickLunch() {
      const lunchMenus = ['국밥', '돈까스', '김밥', '라면', '김치찌개']
      this.menu = lunchMenus[Math.floor(Math.random() * lunchMenus.length)]
    },
    toLotto() {
      this.$router.push( {name: 'lotto', params: {number: Math.floor(Math.random()* 10 + 1) }})
    }

  }

}
</script>

<style>

</style>
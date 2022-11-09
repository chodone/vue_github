<template>
  <div id="app">
    <nav>
      <h1>캐릭터 진화 단계 가이드</h1>
      <div id="btn-box">
        <div id="home-btn">Home</div>
        <div id="start-btn">Start</div>
      </div>
    </nav>
    <h2>Start 버튼으로 시작해 보세요!</h2>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#btn-box {
  display: flex;
  justify-content: center;
}

#home-btn{
  margin: 20px;
  padding: 30px;
  border: solid orange;
}
#start-btn{
  margin: 20px;
  padding: 20px;
  border: solid orange;
}
</style>

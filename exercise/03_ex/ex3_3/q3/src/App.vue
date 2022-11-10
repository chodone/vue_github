<template>
  <div id="app">
    <nav>
      <h1>캐릭터 진화 단계 가이드</h1>
      <br>
      <br>
      <router-link id='btn-box' :to="{ name: 'home'}">Home</router-link>
      <router-link id='btn-box' :to="{ name: 'NoColor'}">start</router-link>
      
    </nav>
    <router-view/>
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
  border: solid  #F1A324 2px;
  margin: 0px 20px ;
  padding: 20px 35px;
}

#box1 {
  margin: 0px 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px;
    
}

#btn{
  border: solid #F1A324;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 16px;

}

#char-img{
  width: 300px;
  height: 300px;
}


 
</style>

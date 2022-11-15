<template>
  <div>
    <form @submit.prevent="login">
      <label for="username">username : </label>
      <input type="text" id="username" v-model="username"><br>

      <label for="password"> password : </label>
      <input type="password" id="password" v-model="password"><br>

      <input type="submit" value="login">
    </form>
  </div>
</template>

<script>
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'Login',
  data: function () {
    return {
      username:null,
      password:null
    }
  },
  methods: {
    login: function () {
      axios({
        method:'post',
        url: `${API_URL}/accounts/login/`,
        data: {
          username: this.username,
          password: this.password
        }

      })
        .then((res) => {
          localStorage.setItem('user-pk', res.data.user.pk)
          localStorage.setItem('jwt_accessToken' , res.data.access_token)
          localStorage.setItem('jwt_refreshToken' , res.data.refresh_token)
          this.$router.push({name: 'TodoList'})

        })
        .catch((error) =>{
          console.log(error)
        })
      
    }
  }
}
</script>

<template>
  <div>
    <label for="id">ID</label>
    <input type="text" name="id" v-model="username"> <br>
    <label for="password1">비밀번호</label>
    <input type="password" name="password1" v-model="password1"> <br>
    <label for="password2">비밀번호 확인</label>
    <input type="password" name="password2" v-model="password2"> <br>
    <button @click="signup">제출</button>

  </div>
</template>

<script>
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'Singup',
  data: function () {
    return {
      username:null,
      password1:null,
      password2:null
    }
  },
  methods: {
    signup: function () {
      axios({
        method: 'post',
        url: `${API_URL}/accounts/signup/`,
        data: {
          username: this.username,
          password1: this.password1,
          password2: this.password2,
        }

      })
        .then((res) => {
          console.log(res)
          this.$router.push({name: 'Login'})
        })
        .catch((error) => {
          console.log(error)
        })
      
    }
  }
}
</script>

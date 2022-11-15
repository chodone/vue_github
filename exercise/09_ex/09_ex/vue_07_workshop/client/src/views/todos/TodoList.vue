<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span 
          @click="updateTodoStatus(todo)" 
          :class="{ 'is-completed': todo.is_completed }"
        >
        {{ todo.title }}
        </span>
        <button @click="deleteTodo(todo)" class="todo-btn">X</button>
      </li>
    </ul>
    <button @click="getTodos">Get Todos</button>
  </div>
</template>

<script>
import axios from 'axios'

const API_URL = 'http://127.0.0.1:8000/todos/'
const token = localStorage.getItem('jwt_accessToken')

export default {
  name: 'TodoList',
  data: function () {
    return {
      todos: null,
    }
  },
  methods: {
    getTodos: function () {
      console.log(token)
      axios({
        method: 'get',
        url: 'http://127.0.0.1:8000/todos/',
         headers:{
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => {
          console.log(res)
          this.todos = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteTodo: function (todo) {
      axios({
        method: 'DELETE',
        url: `${API_URL}${todo.id}/`,
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
        .then(() => {
          this.getTodos()
        })

    },
    updateTodoStatus: function (todo) {
      const is_completed =! todo.is_completed
      axios({
        method: 'PUT',
        url: `${API_URL}${todo.id}/`,
        data:{
          id: todo.id,
          title: todo.title,
          is_completed: is_completed,
          user: todo.user
        },
        headers:{
          Authorization: `Bearer ${token}`
        }
      })
        .then(() => {
          this.getTodos()

        })
        .catch((error) => {
          console.log(error)
        })
      
    },
  },
  created() {
    this.getTodos()
  }
}
</script>

<style scoped>
  .todo-btn {
    margin-left: 10px;
  }

  .is-completed {
    text-decoration: line-through;
    color: rgb(112, 112, 112);
  }
</style>

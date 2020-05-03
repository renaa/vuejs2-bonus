<template>
  <div id="dashboard">
    <h1>That's the dashboard!</h1>
    <p>You should only get here if you're authenticated!</p>
    <p>Your email: {{email}}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import axios from 'axios'

@Component
export default class Dashboard extends Vue {
  // data
  email = ''
  // computed
  // get reverseMessage () {
  //   return this.message.split('').reverse().join('')
  // }
  // // method
  // changeMessage () {
  //   this.message = 'Good bye'
  // }
  // Lifecycle hooks
  created () { 
    axios.get('https://vue-auth---axios---more.firebaseio.com/users.json')
      .then(res => {
        console.log(res)
        const data = res.data
        const users = []
        for (const key in data){
          const user = data[key]
          user.id = key
          users.push(user)
        }
        console.log(users)
        this.email = users[0].email
      })
      .catch(res => console.log(res))
  }


}
</script>
<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>
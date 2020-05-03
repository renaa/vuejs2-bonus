// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'



//axios
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://vue-auth---axios---more.firebaseio.com/',
})

instance.defaults.headers.common['SOMETHING'] = 'something'
export default instance


import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'



//axios
import axios from 'axios'

axios.defaults.baseURL = 'https://vue-auth---axios---more.firebaseio.com/'
axios.defaults.headers.common['Authorization'] = 'fds'
axios.defaults.headers.get['Accepts'] = 'application/json'

function log(input: string,  object: any, color: any = 'white') {
  return console.log(`%c ${input} `, `color: ${color}; border: 2px solid ${color};`, object)
}
const requestInterceptor = axios.interceptors.request.use(config => {
  console.time()
  log('config', config)
  return config
})
const responseInterceptor = axios.interceptors.response.use(res => {
  log('res', res)
  return res
})

axios.interceptors.request.eject(requestInterceptor)
axios.interceptors.response.eject(responseInterceptor)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

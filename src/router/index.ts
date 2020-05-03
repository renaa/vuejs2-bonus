import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import About from '../views/About.vue'

import WelcomePage from '../components/Welcome.vue'
import DashboardPage from '../components/Dashboard.vue'
import SignupPage from '../components/Signup.vue'
import SigninPage from '../components/Signin.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/about',
    name: 'About',
    component: About
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  { path: '/', component: WelcomePage },
  { path: '/signup', component: SignupPage },
  { path: '/signin', component: SigninPage },
  { path: '/dashboard', component: DashboardPage }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

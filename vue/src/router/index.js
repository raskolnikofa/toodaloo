import Vue from 'vue'
import VueRouter from 'vue-router'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

import Home from '../views/Home.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/*',
    name: 'NotFound',
    component: NotFound
  }
  ]

const router = new VueRouter({
  mode: 'history',
  base: '/',
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

import Alta from "../views/Alta"
import Home from "../views/Home"

Vue.use(VueRouter)

const routes = [
  
  {path: '/alta', name:'alta', component:Alta},
  {path: '/', name:"home", component:Home},
 
 


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})


export default router
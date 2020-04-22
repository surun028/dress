import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Main from './components/Main.vue'
import Mine from './components/Mine.vue'
import Catgory from './components/Catgory.vue'
import Cart from './components/Cart.vue'
import Detail from './components/Detail.vue'
import Login from './components/Login'
import Register from './components/Register'
var routes=[
  {
    path:'/',component:Main
  },
  {
    path:"/mine",component:Mine
  },
  {
    path:"/catgory",component:Catgory
  },
  {
    path:"/cart",component:Cart
  },
  {
    path:'/detail/:id',name:'detail',component:Detail
  },
  {
    path:'/login',component:Login
  },
  {
    path:'/register',component:Register
  }
]

var router=new VueRouter({routes,mode:'history'})

export default router;
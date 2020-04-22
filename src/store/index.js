import Vue from 'vue'
import Vuex from 'vuex'

import moudleA from '../moudlea.js'
Vue.use(Vuex)


const store=new Vuex.Store({
   modules:{
      cart:moudleA
  }
    
})
store.subscribe((mutations,state)=>{
   localStorage.setItem('cartArr',JSON.stringify(state.cart.cartArr));
})
export default store;
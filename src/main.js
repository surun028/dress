import Vue from 'vue'    //引入vue.js
import App from './App.vue'   //引入根组件
import './eventbus.js'
import './remscale.js'
import './assets/font/iconfont.css'
import './assets/css/animate.css'
import store from './store/index'

import Mint from 'mint-ui';
import 'mint-ui/lib/style.min.css'
Vue.use(Mint)

import router from './router.js'
import axios from 'axios'
Vue.prototype.$axios=axios;
Vue.config.productionTip = false   //配置


// vue实例
new Vue({
  //渲染  把App组件渲染到页面上
  render: h => h(App),
  router,
  store,

}).$mount('#app')


// el和$mount等同的  作用一样的
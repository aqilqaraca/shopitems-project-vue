import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './Store/Store'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.filter("currency",(value)=>{
  return parseFloat(value).toLocaleString(undefined,{minimumFractionDigits : 0})
})
 
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})

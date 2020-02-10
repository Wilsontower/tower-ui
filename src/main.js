// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import * as req from '../src/assets/config/api'
import VueResource from 'vue-resource'
import store from './store/store' // 简单store模式
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueResource)

Vue.prototype.$req = req
Vue.prototype.$store = store
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/apis'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

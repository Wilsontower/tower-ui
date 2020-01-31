import Vue from 'vue'
import Router from 'vue-router'

import Main from '../pages/main/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/tower',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})

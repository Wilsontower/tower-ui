import Vue from 'vue'
import Router from 'vue-router'

import Main from '../pages/main/Main'
import Message from '../pages/message/Message'
import About from '../pages/about/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/tower',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

import Main from '../pages/main/Main'
import Message from '../pages/message/Message'
import About from '../pages/about/About'
import SiteDetails from '../pages/site/SiteDetails'

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
    },
    {
      path: '/site',
      name: 'SiteDetails',
      component: SiteDetails
    }
  ]
})

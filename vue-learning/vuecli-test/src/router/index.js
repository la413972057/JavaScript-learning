import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'

import index from '@/pages/index'
import pageQuiButton from '@/pages/pageQuiButton'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/btn',
      name: 'btn',
      component: pageQuiButton
    }
  ]
})

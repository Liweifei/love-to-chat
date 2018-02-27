import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/index'
import LeftPane from '@/components/leftpane'
import HeadModel from '@/components/headModel'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/LeftPane',
      name: 'LeftPane',
      component: LeftPane
    },
    {
      path: '/HeadModel',
      name: 'HeadModel',
      component: HeadModel
    }
  ]
})

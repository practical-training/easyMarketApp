import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import( './views/home/index.vue')
    },
    {
      path: '/special',
      name: 'special',
      component: () => import( './views/special/index.vue')
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import( './views/classify/index.vue')
    },
    {
      path: '/car',
      name: 'car',
      component: () => import( './views/car/index.vue')
    },
    
    {
      path: '/mine',
      name: 'mine',
      component: () => import( './views/mine/index.vue')
    }
  ]
})

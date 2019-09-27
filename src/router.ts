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
      component: () => import('./views/home/index.vue')
    },
    {
      path: '/brandDetail/:id',
      name: 'brandDetail',
      component: () => import('./views/brandDetail/index.vue')
    },
    {
      path: '/special',
      name: 'special',
      component: () => import('./views/special/index.vue')
    },
    {
      path: '/topic/:id',
      name: 'topic',
      component: () => import('./views/special/topic.vue')
    },
    {
      path: '/noTabPage',
      name: 'noTabPage',
      component: () => import('./views/special/noTabPage.vue')
    },
    {
      path: '/classify',
      name: 'classify',
      component: () => import('./views/classify/index.vue')
    },
    {
      path: '/car',
      name: 'car',
      component: () => import('./views/car/index.vue')
    },
    
    {
      path: '/mine',
      name: 'mine',
      component: () => import('./views/mine/index.vue')
    },
    {
      path: '/mine/auth/:id',
      name: 'auth',
      component: () => import('./views/mine/auth.vue')
    },
    // {
    //   path: '/collectlist',
    //   name: 'collectlist',
    //   component: () => import('./views/mine/collectlist.vue')
    // },
    {
      path: '/addresslist',
      name: 'addresslist',
      component: () => import('./views/mine/addresslist.vue')
    },
    
    {
      path:"/funny",
      name:"funny",
      component:()=>import("./views/funny/index.vue")
    },
    {
      path:"/details",
      name:"details",
      component:()=>import("./views/details/index.vue")
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

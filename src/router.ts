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
      path: '/comment/:topicxq',
      name: 'comment',
      component: () => import('./views/special/comment.vue')
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
      path:"/funny",
      name:"funny",
      component:()=>import("./views/funny/index.vue")
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

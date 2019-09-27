import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import VueLazyload from "vue-lazyload"
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueLazyload, {
  preLoad: 1,
  loading: 'https://ss0.bdstatic.com/-0U0bnSm1A5BphGlnYG/tam-ogel/8bc5c8ca3da4043fc6c9dbfb32d5dc89_121_121.jpg',
  attempt: 1
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

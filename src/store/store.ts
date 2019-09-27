import Vue from 'vue'
import Vuex from 'vuex'
import home from "./modules/home"
import special from './modules/special'
import classify from "./modules/classify"
import mine from './modules/mine'
import shopcar from './modules/shopcar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    home,
    special,
    classify,
    mine,
    shopcar
  }
})

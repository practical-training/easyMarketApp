import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[]
  },
  mutations: {
    setSpecial(state,data:any){
      if(data.lenght!==0){
        data.forEach((item:never)=>{
          state.list.push(item)
         })
      }
    }
  },
  actions: {
    getSpecial({commit},item){
      axios.get('http://202.96.155.121:8888/topic/list',{params:item}).then((res)=>{
       let data =res.data.data.data;
       console.log(data)
        commit("setSpecial",data)
      })
    }
  }
})

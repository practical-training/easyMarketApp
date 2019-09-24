import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[],
    topicxq:{}
  },
  mutations: {
    setSpecial(state,data:any){
      if(data.lenght!==0){
        data.forEach((item:never)=>{
          state.list.push(item)
         })
      }
    },
    setTopic(state,data:any){
     state.topicxq=data;
     console.log(state.topicxq)
    }
  },
  actions: {
    getSpecial({commit},item){
      axios.get('http://202.96.155.121:8888/topic/list',{params:item}).then((res)=>{
       let data =res.data.data.data;
      //  console.log(data)
        commit("setSpecial",data)
      })
    },
    getTopic({commit},id){
      
      axios.get('http://202.96.155.121:8888/topic/detail',{params:id}).then((res)=>{
        // console.log(res.data)
        let list = res.data.data;
        commit("setTopic",list)
      })
    }
  },
  // modules:{
  //   home,
  //   special
  // }
})

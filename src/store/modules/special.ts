// import Vue from "vue";
// import Vuex from "vuex";
// import { homeproduct } from "../../service";
// Vue.use(Vuex);
// export default ({
//   namespaced: true,
//   state: {
//     list:[]
//   },
//   mutations: {
//     setSpecial(state,data:any){
//         state.list = data;
//         console.log(state.list,data)
//       }
//   },
//   actions: {
//     getSpecial({commit}){
//       axios.get('http://202.96.155.121:8888/topic/list',{params:{page:1,size:5}}).then((res)=>{
//         let data = res.data.data.data;
//         commit("setSpecial",data)
//       })
//     }
//   }
// });

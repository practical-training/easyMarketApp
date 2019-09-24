import Vue from "vue";
import Vuex from "vuex";
import { initClassify,getItemClassify,funnyClassify} from "../../service";
Vue.use(Vuex);
export default ({
  namespaced: true,
  state: {
    data:{},
    itemClassify:{},
    funnydata:[]
  },
  mutations: {
    setdata(state:any, payload:any) {
      state.data = payload.data.data
      state.itemClassify=payload.data.data.currentCategory
    },
    setItemClassify(state:any, payload:any){
      state.itemClassify = payload.data.data.currentCategory
    },
    setFunnyClassify(state:any, payload:any){
      state.funnydata=payload.data.data.data
      console.log(state.funnydata,"ddd")
    }
  },
  actions: {
    async getinitdata({commit}:any, payload:any) {
      let data = await initClassify();
      console.log(data)
      commit("setdata", { data });
    },
    async getItemClassify({commit}:any, payload:any){
      let data = await getItemClassify(payload);
      commit("setItemClassify", { data });
    },
    async funnyClassify({commit}:any, payload:any){
      let data = await funnyClassify(payload);
      console.log(data,"isis ")
      commit("setFunnyClassify", { data });
    }
  }
});
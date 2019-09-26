import Vue from "vue";
import Vuex from "vuex";
import { initClassify,getItemClassify,funnyClassify,getNavlist} from "../../service";
Vue.use(Vuex);
export default ({
  namespaced: true,
  state: {
    data:{},
    itemClassify:{},
    funnydata:[],
    ismore:false,
    navlist:"",
    count:""
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
    },
    setupClassify(state:any, payload:any){
      payload.data.data.data.map((item:any)=>{
        state.funnydata.push(item)
      })
    },
    setNavlist(state:any,payload:any){
      state.navlist=payload.data.data.brotherCategory
      state.navlist.map((item:any,index:any)=>{
        if(payload.id==item.id){
          state.count= index
        }
      })
    },
    setcount(state:any,payload:any){
      state.count=payload
    }
  },
  actions: {
    async getinitdata({commit}:any, payload:any) {
      let data = await initClassify();
      commit("setdata", { data });
    },
    async getItemClassify({commit}:any, payload:any){
      let data = await getItemClassify(payload);
      commit("setItemClassify", { data });
    },
    async funnyClassify({commit}:any, payload:any){
      let data = await funnyClassify(payload);
      commit("setFunnyClassify", { data });
    },
    async upclassify({commit}:any,payload:any){
      let data = await funnyClassify(payload);
      commit("setupClassify", { data });
    },
    async getNavlist({commit}:any,payload:any){
      let data=await getNavlist(payload)
      commit("setNavlist",{data,id:payload.id})
    }
  }
});
import Vue from "vue";
import Vuex from "vuex";
// import { productDetil} from "../../service";
Vue.use(Vuex);
export default ({
  namespaced: true,
  state: {
    data:{}
  },
  mutations: {
    setDetaildata(state:any, payload:any) {
      state.data = payload.data.data
      console.log(payload.data.data,"4444")
    }
  },
  actions: {
    // async productDetil({commit}:any, payload:any) {
    //   let data = await productDetil(payload);
    //   commit("setDetaildata", { data });
    // }
  }
});
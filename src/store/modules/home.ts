import Vue from "vue";
import Vuex from "vuex";
import { homeproduct } from "../../service";
Vue.use(Vuex);
export default ({
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    sethomedata(state:any, payload:any) {
      state.data = payload.data.data
    }
  },
  actions: {
    async updateValue({commit}:any, payload:any) {
      let data = await homeproduct();
      commit("sethomedata", { data });
    }
  }
});

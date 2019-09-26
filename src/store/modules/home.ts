import { homeproduct } from "../../service";

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

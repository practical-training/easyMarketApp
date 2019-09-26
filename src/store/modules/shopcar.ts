import axios from "axios";
import { GetCart ,GetChecked } from "../../service";
export default {
  namespaced: true,
  state: {
    cartlist: [],
    // ischecked:0
 
  },
  mutations: {
    // setCart(state: any, data: any) {
    //     state.collectlist = data
    //   },
    // setChecked(state: any, data: any) {
    //       state.collectlist = data
    //   },

    
  },
  actions: {
    async getCart({ commit }: any, typeId: any) {
      let data = await GetCart(typeId).then((res: any) => {
          console.log(res)
        // let data = res.data.data;
        // commit("setCart", data);
      });
    },
    async getChecked({ commit }: any, items: any) {
      let data = await GetChecked(items).then((res: any) => {
          console.log(res)
        // let data = res.data.data;
        // commit("setChecked", data);
      });
    },

  }
};

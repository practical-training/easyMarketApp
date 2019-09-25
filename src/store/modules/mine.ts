import axios from "axios";
import { GetCollect} from "../../service";
export default {
  namespaced: true,
  state: {
    collectlist: [],
 
  },
  mutations: {
    setCollect(state: any, data: any) {
        state.collectlist = data
      }
    
  },
  actions: {
    async getCollect({ commit }: any, typeId: any) {
      let data = await GetCollect(typeId).then((res: any) => {
          console.log(res)
        // let data = res.data.data;
        // commit("setCollect", data);
      });
    },
   
  
  }
};

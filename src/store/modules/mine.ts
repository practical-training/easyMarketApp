import axios from "axios";
import { GetCollect,Getaddordelete,Getaddress} from "../../service";
export default {
  namespaced: true,
  state: {
    collectlist: [],
    addresslist:[]
  },
  mutations: {
    setCollect(state: any, data: any) {
        state.collectlist = data
        console.log(state.collectlist)
      }
    
  },
  actions: {
    async getCollect({ commit }: any, typeId: any) {
      let data = await GetCollect(typeId).then((res: any) => {
         
        let data = res.data;
        commit("setCollect", data);
      });
    },
    async getaddordelete({ commit }: any, item: any) {
      let data = await Getaddordelete(item).then((res: any) => {
          console.log(res)
      });
    },
    async getaddress({ commit }: any, item: any) {
      let data = await Getaddress(item).then((res: any) => {
          console.log(res)
        let data = res.data;
        commit("setaddress", data);
      });
    }
  }
};

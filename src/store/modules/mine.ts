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
      },
      setaddress(state: any, data: any){
        state.addresslist = data
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
    async getaddordelete({ commit }: any, item: any) {
      let data = await Getaddordelete(item).then((res: any) => {
          console.log(res)
        // let data = res.data.data;
        // commit("setCollect", data);
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

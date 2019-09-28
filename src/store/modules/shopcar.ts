import axios from "axios";
import { GetCart ,GetChecked ,GetDelete,GetGoodscount} from "../../service";
export default {
  namespaced: true,
  state: {
    cartlist: {},
    checked:0,
    number:0
 
  },
  mutations: {
    setCart(state: any, data: any) {
        state.cartlist = data;
      },
    // setChecked(state: any, data: any) {
    //       state.collectlist = data
    //   },
    setischecked(state: any, ischecked: any){
      state.checked = ischecked;
      console.log(state.checked)
    },
    addnumber(state: any, data: any){
      
      let {name,number} =data;
      if(name=='add'){
       state.number=number+1
      }else{
        state.number=number-1
      }
      console.log(state.number)
    }
  },
  actions: {
    //获取购物车的数据
    async getCart({ commit }: any, typeId: any) {
      let data = await GetCart(typeId).then((res: any) => {
       
        let data = res.data;
        commit("setCart", data);
      });
    },
    //判断购物车的选中状态
    async getChecked({ commit }: any, items: any) {
      let data = await GetChecked(items).then((res: any) => {
          console.log(res)
        // let data = res.data.data;
        // commit("setChecked", data);
      });
    },
     //删除购物车
    async getDelete({ commit }: any, items: any) {
      let data = await GetDelete(items).then((res: any) => {
          console.log(res)
        // let data = res.data.data;
        // commit("setChecked", data);
      });
    },
    //获取购物车的数量
    async getGoodscount({ commit }: any, items: any) {
      let data = await GetGoodscount(items).then((res: any) => {
          console.log(res)
        // let data = res.data.data;
        // commit("setChecked", data);
      });
    },

  }
};

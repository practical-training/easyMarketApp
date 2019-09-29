import axios from "axios";
import { GetCart ,GetChecked ,GetDelete,GetGoodscount} from "../../service";
export default {
  namespaced: true,
  state: {
    cartlist: {},
    checked:null,
    number:0,
    sum:0
  },
  mutations: {
    setCart(state: any, data: any) {
        state.cartlist = data;
      },
    
    setischecked(state: any, ischecked: any){
      state.checked = ischecked;
    },
    setChecked(state: any, data: any){
      state.cartlist = data;
      console.log( state.cartlist)
    },
    addnumber(state: any, data: any){
      let {name,number,id} =data;
     let ind = state.cartlist.cartList.findIndex((item:any)=>{
        return item.id ==id
      })
        if(name =='add'){
          state.cartlist.cartList[ind].number=number+1;
        }else{
          if( number >1){
          state.cartlist.cartList[ind].number=number-1;
          }
        }
    },
      //获取购物车的数量
    setGoodscount(state: any, data: any) {
      state.sum = data;
      console.log(state.sum)
  }
  },
  actions: {
    //获取购物车的数据
    async getCart({ commit }: any, typeId: any) {
      const result = await GetCart(typeId).then((res: any) => {
        let data = res.data;
        commit("setCart", data);
      });
    },
    //判断购物车的选中状态
    async getChecked({ commit }: any, items: any) {
      console.log(items)
      const result = await GetChecked(items).then((res: any) => {
          console.log(res)
        let data = res.data;
        commit("setChecked", data);
      });
    },
     //删除购物车
    async getDelete({ commit }: any, items: any) {
      const result = await GetDelete(items).then((res: any) => {
          console.log(res)
        // let data = res.data.data;
        // commit("setChecked", data);
      });
    },
    //获取购物车的数量
    async getGoodscount({ commit }: any, items: any) {
      const result = await GetGoodscount(items).then((res: any) => {
        let data = res.data.cartTotal.goodsCount;
        commit("setGoodscount", data);
      });
    },

  }
};

import axios from "axios";
import { GetCart ,GetChecked ,GetDelete,GetGoodscount,GetUpdate} from "../../service";
export default {
  namespaced: true,
  state: {
    cartlist: {},
    flag:true,
    checked:0,
    number:0,
    sum:0,
    checkedGoodsAmount:0
  },
  mutations: {
    setCart(state: any, data: any) {
        state.cartlist = data;
      },
    setflag(state: any, data: any){
    state.flag=!state.cartlist.cartList.every((item:any)=>item.checked)
      let list = state.cartlist.cartList.filter((item:any)=>{
        return item = item.checked ==1
      })
      state.sum = list.reduce((per:any,cur:any)=>{
        return per + cur.number
      },0)
  
    state.checkedGoodsAmount =list.reduce((per:any,cur:any)=>{
      return per + cur.market_price *cur.number
    },0)
    },
    flagset(state: any){
      state.flag=!state.flag;
      for(let i=0;i<state.cartlist.cartList.length;i++){
        state.cartlist.cartList[i].checked=state.flag==0?1:0
      }
      console.log( state.sum )
    },
    setischecked(state: any, ischecked: any){
      state.checked = ischecked;
    },
    setChecked(state: any, data: any){
      state.cartlist = data;
      
      // state.cartlist.cartList.reduce((per:any,cur:any)=>{
      //   return 
      // })

    },
    setUpdate(state: any, data: any){
      
      state.cartlist = data;
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
      // console.log(state.sum,data)
    },
    setDelete(state: any, data: any){
      console.log(data)
      // state.cartlist = data;
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
      const result = await GetChecked(items).then((res: any) => {
         
        let data = res.data;
        commit("setChecked", data);
        
      });
    },
     //删除购物车
    async getDelete({ commit }: any, items: any) {
      const result = await GetDelete(items).then((res: any) => {
          console.log(res)
        let data = res.data;
        commit("setDelete", data);
      });
    },
    //获取购物车的数量
    async getGoodscount({ commit }: any, items: any) {
      const result = await GetGoodscount(items).then((res: any) => {
        let data = res.data.cartTotal.goodsCount;

        commit("setGoodscount", data);
      });
    },
  //获取购物车
  async getUpdate({ commit }: any, items: any) {
    const result = await GetUpdate(items).then((res: any) => {
     console.log(res)
     let data = res.data;
      commit("setUpdate", data);
    });
  },
  }
};

import { home ,funny,getdetailData,getGoodList} from '../../service'

export default {
  namespaced: true,
  state: {
    data: [],
    count:0,
    funnyData:[],
    brandDetailData:[],
    goodList:[]
  },

  mutations: {
    sethomedata(state : any, payload : any) {
      state.data = payload.data.data
    },
    setFunnyData(state : any, payload : any){
      console.log(payload)
      state.funnyData = payload.data.data.brotherCategory
      state.funnyData.map((item:any,index:any)=>{
        if(item.id==payload.id.id){
          state.count=index
        }
      })
    },
    setDetailData(state : any, payload : any){
      state.brandDetailData = payload.data.data
    },
    setGoodList(state : any, payload : any){
      state.goodList = payload.data.data
    },
  },

  actions: {
    async updateValue({ commit }: any) {
      let data = await home()
      commit('sethomedata', { data })
    },
    async FunnyData({ commit }: any,payload:string) {
      let data = await funny(payload)
      commit('setFunnyData', { data ,id:payload})
    },
   //详情
   async getDetailData({ commit }: any,payload:string) {
    let data = await getdetailData(payload)
    commit('setDetailData', { data ,id:payload})
  },
  async getGoodList({ commit }: any,payload:string) {
    let data = await getGoodList(payload)
    commit('setGoodList', { data ,payload})
  }
  }

}

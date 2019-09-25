import axios from "axios";
import { GetSpecial ,GetTopic,GetComment,GetRelated,GetCommentpost} from "../../service";
export default {
  namespaced: true,
  state: {
    list: [],
    topicxq: {},
    commentlist:[],
    relatedlist:[]
  },
  mutations: {
    setSpecial(state: any, data: any) {
      if(!state.list.length){
        state.list=data;
      }else {
        data.forEach((item: never) => {
          state.list.push(item);
        });
      }
    },
    setTopic(state: any, data: any) {
      state.topicxq = data;
      // console.log(state.topicxq)
    },
    setComment(state:any,data:any){
      state.commentlist=data;
      
    },
    setGetRelated(state:any,data:any){
      state.relatedlist=data;
      // console.log(state.relatedlist)
    }
  },
  actions: {
    async getSpecial({ commit }: any, item: any) {
      let data = await GetSpecial(item).then((res: any) => {
        let data = res.data.data;
        commit("setSpecial", data);
      });
    },
    async getTopic({ commit }: any, id: any) {
      let data = await GetTopic(id).then((res: any) => {
  
        let list = res.data;
        commit("setTopic", list);
      });
    },
    async getComment({ commit }: any, item: any) {
      let data = await GetComment(item).then((res:any) => {

        commit("setComment", res.data.data);
      });
    },
    async gGetRelated({ commit }: any, item: any) {
      let data = await GetRelated(item).then((res:any) => {
        
        commit("setGetRelated", res.data);
      });
    },
    async getCommentpost({ commit }: any, item: any) {
      let data = await GetCommentpost(item).then((res:any) => {
        console.log(res)
        // commit("setCommentpost", res.data);
      });
    }
  }
};

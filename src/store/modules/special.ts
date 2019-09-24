import axios from "axios";
import { GetSpecial ,GetTopic,GetComment,GetRelated} from "../../service";
export default {
  namespaced: true,
  state: {
    list: [],
    topicxq: {},
    commentlist:[],
    Relatedlist:[]
  },
  mutations: {
    setSpecial(state: any, data: any) {
      if (data.lenght !== 0) {
        data.forEach((item: never) => {
          state.list.push(item);
        });
      }
    },
    setTopic(state: any, data: any) {
      state.topicxq = data;
      console.log(state.topicxq)
    },
    setComment(state:any,data:any){
      state.commentlist=data;
    },
    setGetRelated(state:any,data:any){
      state.Relatedlist=data;
      console.log(state.Relatedlist)
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
      let data = await GetTopic(id).then(res => {
        console.log(res.data)
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
        console.log(res.data)
        commit("setGetRelated", res.data);
      });
    }
  }
};

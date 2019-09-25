import axios from 'axios';

export default ({
  namespaced: true,
  state: {
    list:[],
    topicxq:{}
  },
  mutations: {
    setSpecial(state:any,data:any){
              if(data.lenght!==0){
                data.forEach((item:never)=>{
                  state.list.push(item)
                 })
              }
    },
    setTopic(state:any,data:any){
        state.topicxq=data;
        console.log(state.topicxq)
       }
  },
  actions: {
    // getSpecial(commit:any,item:any){
    //   getSpecial(item).then((res:any)=>{
    //      let data =res.data.data.data;
    //      console.log(data)
    //       commit("setSpecial",data)
    //     })
    //   },
    // getTopic(commit:any,id:any){
    //     axios.get('http://202.96.155.121:8888/topic/detail',{params:id}).then((res)=>{
    //       // console.log(res.data)
    //       let list = res.data.data;
    //       commit("setTopic",list)
    //     })
    //   }
  }
});
import request from "../utils/request"
//获取首页数据
export let homeproduct=()=>{
    return request.get("/")
}
export let productDetil=(params:any)=>{//详情数据
    return request.get("/goods/detail",{params})
}

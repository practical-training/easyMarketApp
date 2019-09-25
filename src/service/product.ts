import request from "../utils/request"
export let homeproduct=()=>{
    return request.get("/")//首页
}
export let productDetil=(params:any)=>{//详情数据
    return request.get("/goods/detail",{params})
}
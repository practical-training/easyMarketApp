import request from "../utils/request"
//获取首页数据
export let homeproduct=()=>{
    return request.get("/")
}

//获取专题数据
export let getSpecial=(params:any)=>{
    return request.get("/topic/list",params)
}


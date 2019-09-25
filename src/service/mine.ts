import request from "../utils/request"
export let GetCollect=(data:any)=>{
    return request.get("/collect/list",{params:data})
}

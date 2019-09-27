import request from "../utils/request"
export let initClassify=()=>{
    return request.get("/catalog/index")//首页
}
export let getItemClassify=(params:any)=>{
    return request.get("/catalog/current",{params})
}
export let funnyClassify=(params:any)=>{
    return request.get("/goods/list",{params})
}
export let getNavlist=(params:any)=>{
    return request.get("/goods/category",{params})
}
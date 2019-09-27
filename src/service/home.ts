import request from "../utils/request"
//获取首页数据
export let home=()=>{
    return request.get("/")
}
//获取funny数据
export let funny=(params:string)=>{
    return request.get('/goods/category',{params})
}
//获取首页详情数据
export let detailList=(params:any)=>{
    return request.get("/",params)
}
//获取专题数据
export let getSpecial=(params:any)=>{
    return request.get("/topic/list",params)
}

//获取首页品牌详情数据

export let getdetailData=(params:any)=>{
    return request.get("/brand/detail",{params})
}   

//获取goodLIST
export let getGoodList=(params:any)=>{
    return request.get("/goods/list/detail",{params})
}   

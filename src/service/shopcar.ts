import request from "../utils/request"
export let GetCart=(data:any)=>{
    return request.get("/cart/index",{params:data})
}

export let GetChecked=(data:any)=>{
    return request.post("/cart/checked",data)
}

export let GetDelete=(data:any)=>{
    return request.post("/cart/delete",{params:data})
}

export let GetGoodscount=(data:any)=>{
    return request.get("/cart/goodscount",{params:data})
}
export let GetUpdate=(data:any)=>{
    return request.post("/api/cart/update",data)
}
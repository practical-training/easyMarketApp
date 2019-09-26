import request from "../utils/request"
export let GetCart=(data:any)=>{
    return request.get("/cart/index",{params:data})
}

export let GetChecked=(data:any)=>{
    return request.post("/cart/checked",{params:data})
}

// export let GetCart=(data:any)=>{
//     return request.get("/cart/index",{params:data})
// }

// export let GetCart=(data:any)=>{
//     return request.get("/cart/index",{params:data})
// }

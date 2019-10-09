import request from "../utils/request"
export let GetCollect=(data:any)=>{
    return request.get("/collect/list",{params:data})
}
export let Getaddordelete=(data:any)=>{
    return request.post("/collect/addordelete",data)
}
export let loginByMobile=(params:any)=>{
    console.log(params)
    return request.post("/auth/loginByMobile",params)
}

export let Getaddress=(params:any)=>{
    console.log(params)
    return request.post("/address/list",params)
}
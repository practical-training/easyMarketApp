import request from "../utils/request"
export let GetSpecial=(data:any)=>{
  
    return request.get("/topic/list",{params:data})
}
export let GetTopic=(data:any)=>{
 
    return request.get("/topic/detail",{params:data})
}
export let GetComment=(data:any)=>{
   
    return request.get("/comment/list",{params:data})
}
export let GetRelated=(data:any)=>{
    // console.log(data)
    return request.get("/topic/related",{params:data})
}

import request from "../utils/request"
export let homeproduct=()=>{
    return request.get("/")
}
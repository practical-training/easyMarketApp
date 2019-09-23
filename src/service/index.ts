import request from '../utils/request'

export const getData = (params:any) => {
    let url = '/'
    return request.get(url, params)
}
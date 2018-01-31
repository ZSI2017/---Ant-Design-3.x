import {request,config} from "utils"

const {api } = config
const { menuApi } = api

export async function getmenu(){
   return request.get(
     menuApi,
     ''
   )
}

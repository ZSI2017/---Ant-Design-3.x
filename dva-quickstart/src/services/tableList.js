import {request,config} from "utils"

const {api} = config
const {myTableApi} = api

export async function table(data) {
  return request.get(
    myTableApi,
    ''
  )
}

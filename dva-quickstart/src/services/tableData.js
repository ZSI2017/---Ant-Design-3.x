import {request,config} from "utils"

const {api}  = config
const {dataApi} = api


export async function tableData(data) {
    return request.get(
       dataApi,
       ''
    )
}

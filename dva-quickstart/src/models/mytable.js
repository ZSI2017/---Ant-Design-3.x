import {table} from "services/tableList"

export default {
  namespace:"mytable",
  state:{
    list:[],
  },
  subscriptions:{
    setup({dispatch,history}) {
      history.listen(({pathname}) => {
        if(pathname === "/mytable" || pathname === "/") {
          dispatch({type:'query'})
        }
      })
    }
  },
  effects:{
    * query({payload},{put,call,select}){
      const result = yield call(table,payload)
      const {success,list} = result
      if(success) {
        yield put ({
          type:'updateState',
          payload:{list}
        })
      }

    }
  },
  reducers:{
    updateState(state,{payload}){
      return {
        ...state,
        ...payload
      }

    }
  }
}

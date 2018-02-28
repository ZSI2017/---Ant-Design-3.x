import dva from "dva";
import {routerRedux} from 'dva/router'

export default {
  namespace:"login",
  state:{},
  subscripttions:{

  },
  reducers:{
    // 'login'(state,{payload}){
    //   return {
    //
    //   }
    // }

  },
  effects:{
    * login({
      payload,
    },{put,call,select}){
      const data = {success:true}
      if(data.success) {
        yield put(routerRedux.push("/mytable"))

      }
    }

  }
}

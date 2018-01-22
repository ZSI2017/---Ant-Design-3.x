import dva from 'dva';
import {tableData} from "services/tableData"

const delay = timeout =>new Promise(resolve => setTimeout(()=>{resolve("test promise")},timeout));

export default {
  namespace: 'product',
  state: [],
  subscriptions:{
    setup({dispatch,history}) {
      history.listen(({pathname}) => {
        if(pathname === '/products') {
          dispatch({type:'data'})
        }
      })
    }
  },
  reducers: {
    'delete' (state, {
      payload: id
    }) {
      console.log("from products delete: ---- ----- " + id)
      return state.filter(item => item.id !== id);
    },
    'updateState'(state,{payload}){
      return [].concat(payload)
    }
  },
  effects: {
    * data({
      payload,
    }, { put,call, select }) {
      console.log("before  models/products")
      const result = yield call(tableData,payload)
      // const result = yield call(delay,6000)
      console.log(" after models/products");
      console.log(result);
      const {success,list} = result
      if(success) {
        console.log("before put")
        yield put({
          type:'updateState',
          payload:list
        })

      }
    }
  }
};

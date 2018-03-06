import {tableData} from "services/tableData"

// const delay = timeout =>new Promise(resolve => setTimeout(()=>{resolve("test promise")},timeout));

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
      const result = yield call(tableData,payload)
      const {success,list} = result
      if(success) {
        yield put({
          type:'updateState',
          payload:list
        })

      }
    }
  }
};

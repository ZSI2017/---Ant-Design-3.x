import dva from 'dva';
import {tableData} from "services/tableData"

export default {
  namespace: 'product',
  state: [{
      name: 'dva',
      id: 1
    },
    {
      name: 'antd',
      id: 2
    },
  ],
  reducers: {
    'delete' (state, {
      payload: id
    }) {
      console.log("from products delete: ---- ----- " + id)
      return state.filter(item => item.id !== id);
    },
  },
  effects: {
    * data({
      payload,
    }, {
      put,
      call,
      select
    }) {
      const result = yield call(tableData,payload)
      console.log("from models/products")
      console.log(result);
      const {success} = result
      if(success) {
        yield put({
          type:'updateState',
          payload:{
            result
          }
        })

      }
    }
  }
};

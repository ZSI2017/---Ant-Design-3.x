import queryString from 'query-string'
import { getmenu } from "services/menu"

export default {
  namespace:'app',
  state:{
    menu:[
      {
        id:1,
        icon:'laptop',
        name:"myTable",
        router:"/myTable"
      }
    ],
    navOpenKeys:JSON.parse(window.localStorage.getItem("navOpenKeys")) || [],
    locationPathname:"",
    locationQuery:{}
  },
  subscriptions: {
    setupHistory({dispatch,history}) {
      history.listen((location)=>{
        dispatch({
          type:"updateState",
          payload:{
            locationPathname:location.pathname,
            locationQuery:queryString.parse(location.search),
          }
        })
      })
    }
  },
  reducers:{
   'updateState'(state,{payload}) {
     return {
       ...state,
       ...payload
     }
    },
    'handleNavOpenKeys'(state,{payload:navOpenKeys}) {
      return {
        ...state,
        ...navOpenKeys
      }
    },
  },
  effects:{
      * query({payload},{put,call,select}) {
        const result = yield call(getmenu,payload);
        const {success,list} = result
        if(success) {
          yield put({
            type:"updateState",
            payload:{
              menu:list
            }
          })
        }
      }
  }
};

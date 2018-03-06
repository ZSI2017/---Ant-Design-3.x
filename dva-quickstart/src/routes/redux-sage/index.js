import React from "react"
import {Countersages} from "components"
import {createStore,applyMiddleware} from "redux"

import createSagaMiddleware from "redux-saga"
import rootSaga from "./saga.js"

// reducers
function counter(state = 0,action) {
  switch(action.type) {
    case "INCREMENT":
      return state + 1
    case "INCREMENT_IF_ODD":
      return (state % 2 !== 0) ? state +1:state
    case "DECREMENT":
      return state - 1
    default:
       return state
  }
}

const sagaMiddleware = createSagaMiddleware()
// create createStore
const store = createStore(
   counter,
   applyMiddleware(sagaMiddleware)
 )

sagaMiddleware.run(rootSaga)

store.subscribe(() => {
  console.log(store.getState());
})

// action
const action = type => store.dispatch({type})


const Myreduxsage = () => {
   return (
     <Countersages
       value = {store.getState()}
       onIncrement = {() => action("INCREMENT")}
       onDecrement = {() => action("DECREMENT")}
       onIncrementAsync = {()=> action("INCREMENT_ASYNC")}
    />
   )
}



export default Myreduxsage;

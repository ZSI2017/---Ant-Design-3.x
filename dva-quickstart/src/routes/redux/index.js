import React from "react";
import {reactRedux} from "dva"
import {createStore} from "redux";

const   Myredux = ()=>{
  let state = 0;
 const counter = (state = 0,action) => {
    switch(action.type) {
      case "INCREMENT":
         return state + 1;
      case "DECREMENT":
         return state - 1;
       default:
          return state;
    }

  }
  console.log(reactRedux);
  const store = createStore(counter);

   store.subscribe(() => {
     console.log(store.getState());
     // state = store.getState()
  })

  const handleDecrement = ()=>{store.dispatch({type:"DECREMENT"})}
  const handleIncrement = ()=>{store.dispatch({type:"INCREMENT"})}

  return (
    <div>
      <h1>hello,redux</h1>
       <p><a href="https://cn.redux.js.org/"> Redux中文文档</a></p>
       <button onClick = {handleDecrement}>减一</button>
       <button onClick = {handleIncrement}>加一</button>

    </div>
  )
}

export default Myredux

import React from "react";
import {createStore,combineReducers} from "redux"
import {Provider} from "react-redux"
import {Router,Route,browserHistory} from "react-router"
import {syncHistoryWithStore,routerReducer} from "react-router-redux"


// Add the reducer to your store on the `routing` key
// ...reducers,
const store = createStore(
  combineReducers({
    routing: routerReducer
  })
)

const App = () => {
  return (
    <h1>app</h1>
  )
}


// Create an enhanced history that syncs navigation events with the store

const history = syncHistoryWithStore(browserHistory, store)

const ReactRouterRedux = () => {
  return (
    <Provider store={store}>
      <Router history = {history}>
        <Route path = "/" component = {App}>
          <Route path = "foo" component = {App} />
          <Route path = "bar" component = {App} />
        </Route>
      </Router>
    </Provider>
  )
}

export default ReactRouterRedux;

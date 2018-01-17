import React from 'react';
import { Router, Route, Switch,Redirect,routerRedux} from 'dva/router';
import dynamic from "dva/dynamic"
import IndexPage from './routes/IndexPage';
// import Products from './routes/Products';
import Mytable from "./routes/table"
import App from "./routes/main"


// ,{
//   component:Products,
//   path:"/products",
//   models:() => import('./models/products')
// }

const routes =[{
  component:Mytable,
  path:"/mytable"
},{
  component:IndexPage,
  path:"/indexPage"
}]

const  Routers = function({ history,app }) {
  return (
    <App>
      <Router history={history} >
           <Switch>
              <Route
                 exact
                 path="/"
                 render={() => (<Redirect to="/indexPage" />)}
               />
                {routes.map(({ path,component },index)=>(
                  <Route
                    key = {index}
                    path = {path}
                    exact
                    component = {component}
                  />
                ))}
           </Switch>
        </Router>
     </App>
  );
}

export default Routers;

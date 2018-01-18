import React from 'react';
import { Router, Route, Switch,Redirect,routerRedux} from 'dva/router';
import dynamic from "dva/dynamic"
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Mytable from "./routes/table"
import Myformlayout from "./routes/myForm"
import App from "./routes/index"

const {ConnectedRouter} = routerRedux;



const  Routers = function({ history,app }) {
  const routes =[{
        path:"/mytable",
        component:() => import('./routes/table/')
      },{
         path:"/indexPage",
         component:IndexPage
      },{
        path:"/products",
        component:Products,
        models:() => [import('./models/products')]
      },{
        path:"/myformlayout",
        component:Myformlayout
      }]
  return (
      <ConnectedRouter history={history} >
      <App>
           <Switch>
              <Route
                 exact
                 path = "/"
                 render = {() => (<Redirect to="/indexPage" />)}
               />
                {routes.map(({ path,...dynamics},index)=>(
                  <Route
                    key = {index}
                    path = {path}
                    exact
                    component = {dynamic({
                        app,
                        ...dynamics,
                      })}
                  />
                ))}
           </Switch>
           </App>
        </ConnectedRouter>
  );
}

export default Routers;

import React from 'react';
import { Router, Route, Switch,Redirect,routerRedux} from 'dva/router';
import dynamic from "dva/dynamic"
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Mytable from "./routes/table"
import Myformlayout from "./routes/myForm"
import App from "./routes/main"


const routes =[{
      component:Mytable,
      path:"/mytable"
    },{
       component:IndexPage,
       path:"/indexPage"
    },{
      component:Products,
      path:"/products",
      models:() => [import('./models/products')]
    },{
      component:Myformlayout,
      path:"/myformlayout",
    }]

const  Routers = function({ history,app }) {
  return (
    <App>
      <Router history={history} >
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
        </Router>
     </App>
  );
}

export default Routers;

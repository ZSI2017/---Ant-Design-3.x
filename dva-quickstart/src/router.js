import React from 'react';
import { Router, Route, Switch,Redirect,routerRedux} from 'dva/router';
import {BrowserRouter } from 'react-router-dom'
import dynamic from "dva/dynamic"
import IndexPage from './routes/IndexPage';
import Products from './routes/Products';
import Mytable from "./routes/table"
import Myformlayout from "./routes/myForm"
import internalDetailForm from "./routes/detail"
import App from "./routes/index"



const { ConnectedRouter } = routerRedux




const  Routers = function({ history,app }) {
  const error = dynamic({
    app,
    component: ()=> import('./routes/error')
  })


  const routes =[
      {
       path:"/mytable/detail",
       component:() => import("./routes/detail")
      },{
        path:"/mytable",
        models:()=>[import('./models/mytable')],
        component:() => import("./routes/table")
      },{
        path:"/login",
        models:()=>[import('./models/login')],
        component:() => import("./routes/login")
      },{
         path:'/predux',
         component: () => import("./routes/redux")
      },{
         path:'/reactRedux',
         component: () => import("./routes/react-redux")
      },{
         path:"/indexPage/ddd",
         component:()=> import("./routes/IndexPage")
      },{
         path:'/reduxSage',
         component: () => import("./routes/redux-sage")
      },{
         path:"/router",
         component:()=> import("./routes/react-router")
      },{
        path:"/products",
        component:() => import("./routes/Products"),
        models:() => [
          import('./models/products'),
        ]
      },{
        path:"/myformlayout",
        component:() => import("./routes/myForm")
      }]

  return (
    <ConnectedRouter history={history} >
     <Switch>
       <App>
            <Route  exact path = "/"  render = {() => (<Redirect to="/mytable"/>)}/>
                    {
                      routes.map(({ path,...dynamics },index)=>(
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
          </App>
        </Switch>
     </ConnectedRouter>
  );
}

// <Route component={error} />
export default Routers;

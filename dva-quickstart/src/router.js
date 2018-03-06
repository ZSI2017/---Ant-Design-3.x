import React from 'react';
import { Route, Switch,Redirect,routerRedux} from 'dva/router';
import dynamic from "dva/dynamic"
import App from "./routes/index"



const { ConnectedRouter } = routerRedux



// ,{
//   path:"/react-router-redux",
//   component:() => import("./routes/react-router-redux")
// }


const  Routers = function({ history,app }) {
  


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
      },{
        path:"/react-LifeCycle",
        component:() => import("./routes/react-Life-Cycle")
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
                    ))
                  }
          </App>
        </Switch>
     </ConnectedRouter>
  );
}

// <Route component={error} />
export default Routers;

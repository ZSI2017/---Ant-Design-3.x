import React from "react"
import PropTypes from "prop-types"
import {Layout} from "antd"
import { Mylayout} from 'components'
import {connect} from 'dva'

const {Content} = Layout;
const { Header,Sider,Bread} = Mylayout



const Main = ({children,dispatch,app,history,location,loading}) => {
  const {navOpenKeys} = app;
  let  menu = [{
              id:'1',
              bpid:"1",
              route:"/",
              name:"运营位管理",
              icon:"appstore",
              children:[
                {
                  id:"21",
                  bpid:"2",
                  mpid:"1",
                  name:"首页管理",
                  icon:"",
                  route:'/mytable',
                  children:[
                    {
                      bpid:"2",
                      mpid:"21",
                      name:"详情页",
                      icon:"",
                      route:"/mytable/detail",
                    }
                  ]
                },{
                  id:"22",
                  bpid:"2",
                  mpid:"1",
                  name:"选择快递",
                  icon:"",
                  route:'/products'
                },{
                  id:"23",
                  bpid:"3",
                  mpid:"1",
                  name:"选快递下单",
                  icon:"",
                  route:'/router'
                }]
            },{
              id:"2",
              bpid:"2",
              name:"公告管理",
              icon:"calendar",
              route:"/myformlayout"
            },{
              id:"3",
              bpid:"3",
              name:"实践 redu",
              icon:"calendar",
              route:"/predux"
            },{
              id:"4",
              bpid:"4",
              name:"退出登录",
              icon:"user-delete",
              route:"/login"
            },{
              id:"5",
              bpid:"5",
              name:"react-redux",
              icon:"api",
              route:"/reactRedux"
            },{
              id:"6",
              bpid:"6",
              name:"redux-sages",
              icon:"profile",
              route:"/reduxSage"
            },{
              id:"7",
              bpid:"7",
              name:"redux-LiftCycle",
              icon:"shop",
              route:"/react-LifeCycle"
            }]

  const siderProps = {
     navOpenKeys,
     menu,
     location,
     history,
     changeOpenKeys(openKeys) {
      window.localStorage.setItem("navOpenKeys", JSON.stringify(openKeys))
      dispatch({type:'app/handleNavOpenKeys',payload:{navOpenKeys:openKeys}})
     }
   }

   const breadProps = {
     menu,
     location
   }
   if(location.pathname.indexOf("/login")>-1) {
     return (
       <div>
          {children}
       </div>
     )
   }
   return (
     <Layout style={{height:"100%"}}>

        <Header />
        <Layout>
            <Sider {...siderProps}/>
            <Layout style={{ padding: '0 24px 24px' }}>
               <Bread {...breadProps} />
               <Content
                 style= {{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    border:"1px solid rgb(211, 220, 230)" }}>
                 {children}
               </Content>
           </Layout>
        </Layout>
     </Layout>
   )
}

Main.propTypes = {
  children:PropTypes.element.isRequired,
  dispatch:PropTypes.func,
  app:PropTypes.object,
  history:PropTypes.object,
  location:PropTypes.object,
  loading:PropTypes.object
}

export default connect( ({app,loading}) => ({
  app,loading
}))(Main)

import React from "react"
import {Layout,Menu,Icon} from "antd"
import { Mylayout } from 'components'
import {connect} from 'dva'
import { Switch} from 'dva/router';
// import classnames from 'classnames';
import styles from './index.scss';

const {SubMenu} = Menu;
const {Content,Footer} = Layout;
const { Header,Sider,Bread} = Mylayout



const Main = ({children,dispatch,app,history,location}) => {
  // console.log(location)
  // dispatch({
  //   type: 'app/query'
  // });
  const {navOpenKeys} = app;
  let  menu = [
             {
              id:'1',
              bpid:"1",
              route:"subnav 1",
              name:"运营位管理",
              icon:"appstore",
              children:[
                {
                  id:"21",
                  bpid:"2",
                  mpid:"1",
                  name:"首页管理",
                  icon:"",
                  route:'/mytable'
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

            }
      ]

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
   return (
     <Layout style={{height:"100%"}}>
        <Header />
        <Layout>
            <Sider {...siderProps}/>
            <Layout style={{ padding: '0 24px 24px' }}>
               <Bread {...breadProps} />
               <Switch>
               <Content
                 style= {{
                    background: '#fff',
                    padding: 24,
                    margin: 0,
                    border:"1px solid rgb(211, 220, 230)" }}>
                 {children}
               </Content>
               </Switch>
           </Layout>
        </Layout>
     </Layout>
   )
}

export default connect( ({app}) => ({
  app
}))(Main)

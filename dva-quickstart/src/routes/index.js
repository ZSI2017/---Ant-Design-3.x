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



const Main = ({children,dispatch,app,history}) => {
  // console.log(location)
  const {navOpenKeys} = app
  const siderProps = {
     navOpenKeys,
     changeOpenKeys(openKeys) {
      window.localStorage.setItem("navOpenKeys", JSON.stringify(openKeys))
      dispatch({type:'app/handleNavOpenKeys',payload:{navOpenKeys:openKeys}})
     }
   }
   return (
     <Layout style={{height:"100%"}}>
        <Header />
        <Layout>
            <Sider {...siderProps}/>
            <Layout style={{ padding: '0 24px 24px' }}>
               <Bread />
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

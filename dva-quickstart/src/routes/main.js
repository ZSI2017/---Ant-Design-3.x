import React from "react"
import {Layout,Menu,Icon} from "antd"
import { Mylayout } from 'components'
// import classnames from 'classnames';
import styles from './main.scss';

const {SubMenu} = Menu;
const {Content,Footer} = Layout;
const { Header,Sider,Bread} = Mylayout



const Main = ({children}) => {
  console.log(Header)
   return (
     <Layout style={{height:"100%"}}>
        <Header />
        <Layout>
            <Sider />
            <Layout style={{ padding: '0 24px 24px' }}>
               <Bread />
               <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                 {children}
               </Content>
           </Layout>
        </Layout>
     </Layout>
   )
}

export default Main

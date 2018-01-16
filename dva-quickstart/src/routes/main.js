import React from "react"
import {Layout,Menu,Breadcrumb,Icon} from "antd";
// import classnames from 'classnames';
import styles from './main.scss';

const {SubMenu} = Menu;
const {Header,Content,Footer,Sider} = Layout;

const onOpenChange = () => {
  
}

const Main = ({children}) => {
   return (
     <Layout style={{height:"100%"}}>
      <Header className={styles.header}>
       <div className={styles.logo}></div>
       <Menu
          theme = "light"
          mode="horizontal"
          style={{float:"right",lineHeight:'64px'}}
        >
         <SubMenu
            style={{
              lineHeight:'64px',
              borderBottom:0
            }}
            title={<span>
              <Icon type="user"/>
               12345676543
              </span>}>
              <Menu.Item key="logout">
                  Sign out
              </Menu.Item>
         </SubMenu>
         </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{background:"#fff"}}>
           <Menu
            onOpenChange = {onOpenChange}
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={["sub1"]}
            style={{height:"100%",broderRight:0}}
            >
              <SubMenu key="sub1" title ={<span><Icon type="user"/>subnav 1</span>}>
               <Menu.Item key="1">option1</Menu.Item>
               <Menu.Item key="2">option2</Menu.Item>
               <Menu.Item key="3">option3</Menu.Item>
               <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title ={<span><Icon type="laptop"/>subnav 2</span>}>
               <Menu.Item key="6">option6</Menu.Item>
               <Menu.Item key="7">option7</Menu.Item>
               <Menu.Item key="8">option8</Menu.Item>
               <Menu.Item key="9">option9</Menu.Item>
              </SubMenu>
              </Menu>
            </Sider>

            <Layout style={{ padding: '0 24px 24px' }}>
             <Breadcrumb style={{ margin: '16px 0' }}>
               <Breadcrumb.Item>Home</Breadcrumb.Item>
               <Breadcrumb.Item>List</Breadcrumb.Item>
               <Breadcrumb.Item>App</Breadcrumb.Item>
             </Breadcrumb>
             <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
               {children}
             </Content>
           </Layout>
        </Layout>

     </Layout>
   )
}

export default Main

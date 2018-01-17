import React from "react"
import {Layout,Menu,Breadcrumb,Icon} from "antd"
import styles from "./header.scss";

const {SubMenu} = Menu;

const Header = ()=>(
  <Layout.Header className={styles.header}>
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
    </Layout.Header>
)

export default Header;

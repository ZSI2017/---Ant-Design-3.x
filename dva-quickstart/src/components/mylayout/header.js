import React from "react"
import {Layout,Menu,Icon} from "antd"
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
            borderBottom:0,
            backgroundColor:"#108ee9"
         }}
        title={
          <span style={{color:"white"}}>
          <Icon type="user" style={{color:"white"}}/>
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

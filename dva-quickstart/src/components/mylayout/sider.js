import React from "react"
import {Layout,Menu,Breadcrumb,Icon} from "antd"
import {Link} from "dva/router"


const {SubMenu} = Menu;
const onOpenChange = (openKeys) => {
  console.log(openKeys);
}

const Sider = ()=>(
  <Layout.Sider width={200} style={{background:"#fff"}}>
   <Menu
    onOpenChange = {onOpenChange}
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={["sub1"]}
    style={{height:"100%",broderRight:0}}
    >
        <SubMenu key="sub1" title ={<span><Icon type="user"/>subnav 1</span>}>
         <Menu.Item key="1"><a href="#/mytable">mytable</a></Menu.Item>
         <Menu.Item key="2"><a href="#/products">products</a></Menu.Item>
         <Menu.Item key="3"><a href="#/indexPage">products</a>option3</Menu.Item>
         <Menu.Item key="4">option4</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title ={<span><Icon type="laptop"/>subnav 2</span>}>
         <Menu.Item key="6">option6</Menu.Item>
         <Menu.Item key="7">option7</Menu.Item>
         <Menu.Item key="8">option8</Menu.Item>
         <Menu.Item key="9">option9</Menu.Item>
        </SubMenu>
      </Menu>
    </Layout.Sider>
)

export default Sider;

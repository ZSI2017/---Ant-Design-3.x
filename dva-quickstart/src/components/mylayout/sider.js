import React from "react"
import {Layout,Menu,Breadcrumb,Icon} from "antd"
import {Link} from "react-router-dom"


const {SubMenu} = Menu;


const Sider = ({navOpenKeys,changeOpenKeys})=>{
  const onOpenChange = (openKeys) => {
    let nextOpenKeys = [];
    let openKeysLength = openKeys.length;
    nextOpenKeys= openKeys.slice(-1)
    changeOpenKeys(nextOpenKeys)
  }


  return (
  <Layout.Sider width={200} style={{background:"#fff"}}>
   <Menu
    onOpenChange = {onOpenChange}
    openKeys={navOpenKeys}
    mode="inline"
    defaultSelectedKeys={['1']}
    defaultOpenKeys={navOpenKeys}
    style={{height:"100%",broderRight:0}}
    >
        <SubMenu key="sub1" title ={<span><Icon type="user"/>subnav 1</span>}>
           <Menu.Item key="1"><Link to="/mytable">mytable</Link></Menu.Item>
           <Menu.Item key="2"><Link to="/products">products</Link></Menu.Item>
           <Menu.Item key="3"><a href="#/indexPage">indexPage</a>option3</Menu.Item>
           <Menu.Item key="4"><a href="#/myformlayout">form-list</a></Menu.Item>
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
}

export default Sider;

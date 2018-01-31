import React from "react"
import {Layout,Menu,Breadcrumb,Icon} from "antd"
import {Link} from "react-router-dom"


const {SubMenu} = Menu;


const Sider = ({navOpenKeys,changeOpenKeys,menu})=>{
  console.log(menu)
  const menuTree = menu
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
      defaultSelectedKeys={['sub1','1']}
      defaultOpenKeys={navOpenKeys}
      style={{height:"100%",broderRight:0}}
      >
        menuTree.map((item) => {

        })

          <SubMenu key="sub1" title ={<span><Icon type="user"/>subnav 1</span>}>
             <Menu.Item key="1"><Link to="/mytable">mytable</Link></Menu.Item>
             <Menu.Item key="2"><Link to="/products">products</Link></Menu.Item>
             <Menu.Item key="3"><Link to="/indexPage">IndexPage</Link></Menu.Item>
             <Menu.Item key="4"><Link to="/router">react-router</Link></Menu.Item>
             <Menu.Item key="5"><Link to="/myformlayout">form-list</Link></Menu.Item>
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

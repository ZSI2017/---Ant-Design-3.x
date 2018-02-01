import React from "react"
import {Layout,Menu,Breadcrumb,Icon} from "antd"
import {Link} from "react-router-dom"


const {SubMenu} = Menu;


const Sider = ({navOpenKeys,changeOpenKeys,menu})=>{
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
      {
          menuTree.map((item,idx)=> {
            if(item.children){
                return (
                  <SubMenu key={idx} title={<span><Icon type={item.icon}/>{item.name}</span>}>
                    {
                     item.children.map((im,idx) => (
                       <Menu.Item key={im.id}><Link to={im.route}>{im.name}</Link></Menu.Item>
                     ))
                     }
                  </SubMenu>
              )
            }else {
               return (
                 <Menu.Item key={idx} >
                    <Icon type={item.icon} />
                     {item.name}
                 </Menu.Item>
               )
            }
          })
      }
        </Menu>
      </Layout.Sider>
  )
}

export default Sider;

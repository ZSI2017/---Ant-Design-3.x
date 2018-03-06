import React from "react"
import {Layout,Menu,Icon} from "antd"
import {Link} from "react-router-dom"


const {SubMenu} = Menu;


const Sider = ({navOpenKeys,changeOpenKeys,menu,location,history})=>{
  const menuTree = menu
  const onOpenChange = (openKeys) => {
    let nextOpenKeys = [];
    nextOpenKeys= openKeys.slice(-1)
    changeOpenKeys(nextOpenKeys)
  }

  // 寻找默认选中的导航栏
  let currentMenu,defaultSelectedKeys;
  const getCurrentMenu = (menuTree)=> {
      menuTree.forEach((items) => {
          if(items.route.indexOf(location.pathname)>-1){
            currentMenu = items;
          }else{
            if(items.children){
              getCurrentMenu(items.children)
            }
          }
      })
  }
  getCurrentMenu(menuTree);
  if(currentMenu){
    defaultSelectedKeys = [String(currentMenu["id"])]
    if(currentMenu.mpid){
      defaultSelectedKeys.unshift(menuTree[parseFloat(currentMenu.mpid)%10-1]["id"])
    }
  }
  if(!defaultSelectedKeys){
    defaultSelectedKeys = ["1"]
  }
  return (
    <Layout.Sider width={200} style={{background:"#fff"}}>
     <Menu
      onOpenChange = {onOpenChange}
      mode="inline"
      openKeys = {navOpenKeys}
      selectedKeys = {defaultSelectedKeys}
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
                 <Menu.Item key={item.id} >
                  <Link to={item.route}>
                    <Icon type={item.icon} />
                     {item.name}
                  </Link>
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

import React from "react"
import {Breadcrumb} from "antd"

const styles = {
  padding: '16px 0',
  paddingLeft:"24px",
  border:"1px solid rgb(211, 220, 230)",
  borderBottom:0,
  backgroundColor:"white",
  marginTop:"20px",
  borderRadius:"4px"
}


const Bread = ({ menu,location}) => {
  const getTreeToArray = (menu) => {
    let result = []
    let data = JSON.parse(JSON.stringify(menu))
    data.forEach(function(item,idx){
      result.push(item)
    })
    for(let i =0;i<result.length;i++){
      if(result[i].children){
         result = result.concat(result[i].children);
        delete result[i].children
       }
    }
    return result;
  }
  let menuArray = getTreeToArray(menu),
      current,pathArray = [];
  for(let index in menuArray) {
    if(menuArray[index].route && menuArray[index].route.indexOf(location.pathname) > -1){

    }

  }

  return (
    <Breadcrumb style={styles}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>List</Breadcrumb.Item>
    <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default Bread

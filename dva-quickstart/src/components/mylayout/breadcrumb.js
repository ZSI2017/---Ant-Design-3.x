import React from "react"
import {Link} from "react-router-dom"
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
  console.log(menuArray)
  console.log(location.pathname);
  for(let index in menuArray) {
    if(menuArray[index].route && menuArray[index].route.indexOf(location.pathname) > -1){
      current = menuArray[index]
      break
    }
  }

const queryArray = (menu,key,pkey) => {
   return menu.filter(_=>_[pkey] == key )[0] || menu[0]

}

  const getPathArray = (item) => {
    pathArray.unshift(item)
    if(item.mpid){
      getPathArray(queryArray(menuArray,item.mpid,'id'))
    }
  }

  if(!current) {
    pathArray.push(menuArray[0] || {
      id:1,
      icon:"laptop",
      name:"index"
    })

    pathArray.push({
      id:404,
      name:"Not Found"
    })
  }else {
    getPathArray(current)
    // pathArray.push(current)
  }
const breads = pathArray.map((item,key) => {
  return (
      <Breadcrumb.Item>
         <Link to={item.route}>
          {item.name}
        </Link>
      </Breadcrumb.Item>
  )
})


  return (
    <Breadcrumb style={styles}>
      {
        breads
    }
    </Breadcrumb>
  )
}

export default Bread

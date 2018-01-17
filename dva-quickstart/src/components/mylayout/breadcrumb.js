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


const Bread = () => (
  <Breadcrumb style={styles}>
    <Breadcrumb.Item>Home</Breadcrumb.Item>
    <Breadcrumb.Item>List</Breadcrumb.Item>
    <Breadcrumb.Item>App</Breadcrumb.Item>
  </Breadcrumb>
)

export default Bread

import React from "react";
import {Tabs} from "antd";
const TabPane = Tabs.TabPane;

const Tabdom = ()=>{

  return (
      <Tabs tabPosition = "top" type="card">
        {
          ["配置","已上线","待审核"].map((item)=>(
            <TabPane  tab={item} key={item}></TabPane>
          ))
        }
      </Tabs>
  )

}

export default Tabdom;

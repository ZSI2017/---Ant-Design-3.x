import React from "react";
import {Tabs,message} from "antd";
const TabPane = Tabs.TabPane;

const Tabdom = ()=>{

const callback = (key) =>{
      message.info(key);

}
  return (
      <Tabs tabPosition = "top" type="card" onChange={callback}>
        {
          ["配置","已上线","待审核"].map((item)=>(
            <TabPane  tab={item} key={item}></TabPane>
          ))
        }
      </Tabs>
  )

}

export default Tabdom;

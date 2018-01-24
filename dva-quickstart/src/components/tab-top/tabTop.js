import React from "react";
import {Tabs,Select} from "antd";
const TabPane = Tabs.TabPane;
const Option = Select.Optiion;

const Tabdom = ()=>{

  return (
    <div>
      <Tabs tabPosition = "top">
        {
          ["配置","已上线","待审核"].map((item)=>(
            <TabPane  tab={item} key={item}></TabPane>
          ))
        }
      </Tabs>
    </div>
  )

}

export default Tabdom;

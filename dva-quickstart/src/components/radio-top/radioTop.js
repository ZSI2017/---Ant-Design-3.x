import React from "react";
import {Radio} from "antd";
const RadioGroup = Radio.Group;

class Radiotop extends React.Component {
  state = {
    value:1,
  }
  onChange = (e) => {
    console.log("radio checked",e.target.value);
    this.setState({
      value:e.target.value
    });
  }
  render(){
    return (
      <RadioGroup onChange={this.onChange} value={this.state.value}>
       {
         ["审核通过","已驳回","待审核","草稿"].map((item)=>(
           <Radio value={item}>{item}</Radio>

         ))
       }
      </RadioGroup>
    );
  }
}

export default Radiotop

import React from "react";
import {Radio,Button} from "antd";
import { RouteContext } from 'react-router'
import {BrowserRouter } from 'react-router-dom'
import reactMixin from "react-mixin"

const RadioGroup = Radio.Group;

class Radiotop extends React.Component {
  state = {
    value:"审核通过"
  }
  handleBtnClick = () => {
    try{
      BrowserRouter.push('/mytable/number');
    }catch(e) {
      console.log(reactMixin);
    }
  }
  onChange = (e) => {
    console.log("radio checked",e.target.value);
    this.setState({
      value:e.target.value
    });
  }
  render(){
    return (
      <div style = {{marginBottom:"15px"}}>
        <RadioGroup  onChange={this.onChange} value={this.state.value}>
         {
           ["审核通过","已驳回","待审核","草稿"].map((item)=>(
             <Radio value={item} key={item}>{item}</Radio>

           ))
         }
        </RadioGroup>
        <Button onClick={this.handleBtnClick} style={{float:"right"}} type="primary" icon="plus">添加</Button>
    </div>
    );
  }
}

export default Radiotop

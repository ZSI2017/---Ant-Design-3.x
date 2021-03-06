import React from "react"

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color:"red",
      lifeCycle:["constructor"]
    }
    this.changeState = this.changeState.bind(this)
    this.changePushState = this.changePushState.bind(this);
    console.log("constructor: React组件的构造函数会在装配之前被调用")

  }
  changeState(){
    this.setState({
      color:"blue",
      lifeCycle:["constructor"]
    })
  }
  changePushState(args){
      this.setState(Object.assign({},this.state,{lifeCycle:[...this.state.lifeCycle,args]}));
  }

  componentWillUnMount() {
    console.log("componentWillMount:  在装配发生前被立刻调用");
    this.changePushState("componentWillUnMount")
  }
  render(){
    console.log("render: ");
    return (
      <div>
         <div> {this.state.color} </div>
         <input type="button" onClick={this.changeState} value="changeState"/>
         {
           this.state.lifeCycle.map(function(item,key){
             return (
               <h1 key={key}>{item}</h1>
             )
           })
         }
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount: 组件被装配后立即调用，初始化dom 节点，或者远程加载数据")
    // this.changePushState("componentDidMount")
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps: 组件接受到新的属性前调用，")
    // this.changePushState("componentWillReceiveProps")
  }
  shouldComponentUpdate () {
    console.log("shouldComponentUpdate: 接受到新的属相或状态，在渲染前被调用，默认返回 true")
    // this.changePushState("shouldComponentUpdate")
    return true;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate:渲染前被立即调用，不能在这调用 this.setState() ");
    // this.changePushState("componentWillUpdate")
  }
  componentDidUpdate() {
    console.log("componentDidUpdate: 会在更新发生后立即被调用。");
    // this.changePushState("componentDidUpdate")
  }
  componentWillUnmount() {
    console.log("componentWillUnmount: 在组件被卸载和销毁之前立刻调用，进行必要的清理工作，解绑定时器，取消网络请求")
    // this.changePushState("componentWillUnmount")
  }
}

export default LifeCycle

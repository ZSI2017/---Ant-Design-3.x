import React from "react"

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color:"red"
    }
    this.changeState = this.changeState.bind(this)
    console.log("constructor: React组件的构造函数会在装配之前被调用")

  }
  changeState(){
    this.setState({
      color:"blue"
    })

  }
  componentWillUnMount() {
    console.log("componentWillMount:  在装配发生前被立刻调用");
  }
  render(){
    console.log("render: ");
    return (
      <div>
         <div> {this.state.color} </div>
         <input type="button" onClick={this.changeState} value="changeState"/>
      </div>
    )
  }
  componentDidMount(){
    console.log("componentDidMount: 组件被装配后立即调用，初始化dom 节点，或者远程加载数据")
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps: 组件接受到新的属性前调用，")
  }
  shouldComponentUpdate () {
    console.log("shouldComponentUpdate: 接受到新的属相或状态，在渲染前被调用，默认返回 true")
    return true;
  }
  componentWillUpdate() {
    console.log("componentWillUpdate:渲染前被立即调用，不能在这调用 this.setState() ");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate: 会在更新发生后立即被调用。");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount: 在组件被卸载和销毁之前立刻调用，进行必要的清理工作，解绑定时器，取消网络请求")
  }
}

export default LifeCycle

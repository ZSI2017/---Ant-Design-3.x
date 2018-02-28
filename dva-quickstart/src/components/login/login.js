import React from "react";

// const Mylogin = () => {
//   return (
//     <div>
//       dddd
//     </div>
//   );
// };

class Mylogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {arr:["div"]};
  }

  componentDidMount() {
    this.timeID = setInterval(
      ()=> this.tick(),
      1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.timeID)
  }

  tick() {
    if(this.state.arr.length ===5) {
      clearInterval(this.timeID);
      return;
    }
     this.setState((prevState,props) => ({
       arr:[...prevState.arr,props.add]
     }))
  }

  render(){
    return (
      this.state.arr.map((item,idx)=> (
         <div>
            <h1>{item}</h1>
         </div>
      ))
    )
  }
}

// ReactDOM.render(
//   <Mylogin add={"div"}/>,
//   document.getElementById('root')
// );

export default Mylogin;

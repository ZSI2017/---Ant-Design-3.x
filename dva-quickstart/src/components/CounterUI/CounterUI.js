import React from "react"
import PropTypes from "prop-types"

class Counter extends React.Component {
  render(){
    const {value,onIncreaseClick} = this.props
    return (
      <div>
        <span>{value}</span>
        <button onClick = {onIncreaseClick}>Increase</button>
      </div>
    )
  }
}

Counter.propTypes = {
  value:PropTypes.number,
  onIncreaseClick:PropTypes.func
}

export default Counter

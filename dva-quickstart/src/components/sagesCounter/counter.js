import React from "react"
import PropTypes from "prop-types"

const Countersages = ({value,onIncrement,onDecrement,onIncrementAsync}) =>
   (<div>
      <button onClick = {onIncrement}>
         Increment
      </button>
      {' '}
      <button onClick = {onDecrement}>
         Decrement
      </button>
      <button onClick = {onIncrementAsync}>
         Increment after 1 second
      </button>
      <hr />
      <div>
         Clicked： {value} times
      </div>
   </div>)

Countersages.propTypes = {
   value:PropTypes.number.isRequired,
   onIncrement:PropTypes.func.isRequired,
   onDecrement:PropTypes.func.isRequired
}

export default Countersages

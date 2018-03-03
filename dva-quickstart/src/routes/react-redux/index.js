import React from "react"
import PropTypes from "prop-types"
import { CounterUI} from 'components'
import {createStore} from "redux"
import {Provider,connect} from "react-redux"



// Actions
const increaseAction = {type:'increase'}

// Reducer
function counter(state = {count:0},action) {
  const count = state.count
  switch (action.type) {
    case "increase":
      return {count:count + 1}
    default:
      return state
  }
}

// Store
const store = createStore(counter)

// Map Redux state to compuonent props
function mapStateToProps(state) {
  return {
    value:state.count
  }
}

// Map Redux actions to component propTypes
function mapDispatchToProps(dispatch) {
  return {
    onIncreaseClick:() => dispatch(increaseAction)
  }
}



const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterUI)


const Mycounter = () => (
  <Provider store = {store}>
    <App store = {store}/>

  </Provider>
)


export default Mycounter

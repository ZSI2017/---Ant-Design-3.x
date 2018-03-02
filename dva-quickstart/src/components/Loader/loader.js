import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import styles from "./loader.scss"

const Loader = ({spinning}) => {
  if(spining){
   return (
     <div style={styles.main}>
        <h1> show loading</h1>
     </div>
   )
  }else {
    return(
      <div>
         <h1> hide loading</h1>
      </div>
    )
  }
}

Loader.propTypes = {
  spining:PropTypes.bool
}

export default Loader

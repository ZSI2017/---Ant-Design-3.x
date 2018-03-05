import React from "react"
import PropTypes from "prop-types"
import classNames from "classnames"
import {Spin} from "antd";
import styles from "./loader.scss"

const Loader = ({spinning}) => {
  if(spinning){
   return (
     <div className={styles.main}>
        <Spin size="large"/>
     </div>
   )
  }
  return <div></div>
}

Loader.propTypes = {
  spinning:PropTypes.bool
}

export default Loader

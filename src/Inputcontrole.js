
import React from 'react'
import styles from "./Inputcontrole.module.css"
function Inputcontrole(props) {
  return (
    <div className={styles.container}>
        {props.label && <label>{props.label}</label>}
        <input type="text" {...props}/>

    </div>
  )
}

export default Inputcontrole
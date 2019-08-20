import React from 'react';
import styles from './Display.module.css';
const display=(props)=>{
    
return <input type="text" className={styles.Display} value={props.value}  onKeyDown={props.pressed}  onChange={props.changed}></input>
}
export default display;
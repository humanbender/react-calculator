import React from 'react';
import styles from './NumberButton.module.css';
const numberButton =(props)=>(


    
        <div>
            
            <button onClick={props.clicked}
            className={styles.NumberButton}
            >{props.value}</button>

        </div>


    
);


export default numberButton;
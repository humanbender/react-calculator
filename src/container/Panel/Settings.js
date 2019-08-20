import React, { Component } from 'react';

import ColorPicker from '../../components/ColorPicker/ColorPicker';
import {connect} from 'react-redux';
import styles from './Settings.module.css';


class Settings extends Component {
   

onClickHandler=()=>{

localStorage.setItem('myColor',this.props.clr);
console.log(localStorage.getItem('myColor'));
}
    render() {

        return (<div className={styles.myDiv}>
            
            <ColorPicker></ColorPicker>
            
            <button onClick={this.onClickHandler}>Save Changes</button>
        </div>
        );

    }
}

const mapStateToProps=state=>{



    return{
        clr:state.color
    };
};


export default connect(mapStateToProps)(Settings);
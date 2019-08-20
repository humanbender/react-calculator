import React, { Component } from 'react';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom';
import styles from'./Header.module.css';

class Header extends Component {

    render() {
        
     
       
           var style = { "backgroundColor": this.props.clr ,"paddingTop":"20px","paddingBottom":"20px"};
        

        return (

            <header style={style}>
                <NavLink className={styles.Nav} to="/">Home       </NavLink>
                <NavLink className={styles.Nav} to="/settings">Settings</NavLink>

                

            </header>





        )
    }
}

const mapStateToProps = state => {



    return {
        clr: state.color
    };
};

export default connect(mapStateToProps)(Header);
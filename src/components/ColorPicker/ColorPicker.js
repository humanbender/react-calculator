import React, { Component } from 'react';

import { SketchPicker } from 'react-color';
import InputField from './InputField/InputField';
import {connect} from 'react-redux';

class ColorPicker extends Component {
    state = {
        showPalette: false
       
    }
    onClickHandler = () => {
        
        this.setState({ showPalette: !this.state.showPalette });
        
    }
  /*  handleChangeComplete=(color)=>{
        this.setState({color:color.hex})

    }*/
   /* changeHandler=(event)=>{
        this.setState({color:event.target.value});

    }*/

    render() {
        var sketch;
        
        if (this.state.showPalette) {
            sketch= <SketchPicker onChangeComplete={ this.props.onColorChangeHex }
            color={this.props.clr}></SketchPicker>;
         }
         else{
             sketch=null;
         }
        return (
            <div>
                <InputField clicked={this.onClickHandler} changed={this.props.onColorChange} myColor={this.props.clr}></InputField>
                {sketch}

            </div>

        );

    }
}
const mapStateToProps=state=>{



    return{
        clr:state.color
    };
};
const mapDispatchToProps=dispatch=>{


    
    return{
        onColorChange: (event) =>dispatch({type:'COLOR_CHANGE',event:event}),
        onColorChangeHex: (color) =>dispatch({type:'COLOR_CHANGE_HEX', color: color})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ColorPicker);

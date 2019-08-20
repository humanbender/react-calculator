import React, { Component } from 'react';
import NumberButton from '../../components/Button/NumberButton';

import Display from '../../components/Display/Display';
import styles from './Panel.module.css';
import History from '../../components/History/History';


import { Row, Col, Container } from 'react-bootstrap';
class Panel extends Component {

    state = {
        oper: "",
        displayValue: "",
        firstOperand: 0,
        operationState: false,
        operation: "",
        backSpacePressed: false,
        history: [

        ],
        counter: 0

    }

    onButtonClickHandler = (tmp) => {
        if (tmp === "+" || tmp === "-" || tmp === "*" || tmp === "/") {
            tmp = this.state.oper + this.state.displayValue + tmp;
            this.setState({ oper: tmp });
            this.setState({ displayValue: "" });

            /*
                        tmp = this.state.oper + tmp;
            
                        this.setState({ oper: tmp });
                        this.setState({ displayValue: "" });*/
        }
        else if (tmp !== "=") {
            let tmp2 = this.state.displayValue + tmp;



            this.setState({ displayValue: tmp2 });


        }
        else if (tmp === "=") {
            let res;

            if (this.state.oper[this.state.oper.length - 1] === "+" || this.state.oper[this.state.oper.length - 1] === "-" || this.state.oper[this.state.oper.length - 1] === "/" || this.state.oper[this.state.oper.length - 1] === "*") {
                let counter = this.state.counter;
                counter++;
                res = this.state.oper + this.state.displayValue;
                res = eval(res);
                let myObj = {
                    id: counter,
                    text: this.state.oper + this.state.displayValue + " = " + res
                }
                let history = this.state.history.concat(myObj);
                this.setState({ oper: "", displayValue: res, counter: counter, history: history });

            }
            else {

            }
        }


    }

    onReset = () => {
        this.setState({ oper: "", operationState: false, operation: "", displayValue: "" });

    }


    keyPressedHandler = (e) => {

        if (e.keyCode === 8) {
            if (this.state.displayValue.length > 0) {
                this.setState({ backSpacePressed: true });
                let newStr = this.state.displayValue;
                newStr = newStr.substring(0, newStr.length - 1);

                this.setState({ displayValue: newStr });


            }
        }
        else if (e.keyCode === 13) {
            this.onButtonClickHandler("=");
        }
        else {
            this.setState({ backSpacePressed: false });
        }
    }
    onChangeHandler = (e) => {

        let tmp;
        tmp = e.target.value;

        if (!this.state.backSpacePressed) {
            if (tmp.length > 0) {
                if ((tmp[tmp.length - 1].charCodeAt(0) > 39) && (tmp[tmp.length - 1].charCodeAt(0) < 58)) {
                    if (tmp[tmp.length - 1] === "+" || tmp[tmp.length - 1] === "-" || tmp[tmp.length - 1] === "/" || tmp[tmp.length - 1] === "*") {

                        tmp = this.state.oper + tmp;

                        this.setState({ oper: tmp });
                        this.setState({ displayValue: "" });
                    }
                    else {
                        //   tmp = this.state.oper + tmp[tmp.length - 1];
                        //  console.log(e.target.value);

                        this.setState({ displayValue: e.target.value });
                        //  this.setState({ oper: tmp });
                    }
                }
            }
        }

        /*
                else {
                    tmp = this.state.oper + tmp[tmp.length - 1];
                    console.log(tmp);
        
                    this.setState({ oper: tmp });
        
        
                    
          
                }
          */
    }


    render() {

        let history = this.state.history.map(x => {

            return <History key={x.id} text={x.text}></History>
        })

        const styles2 = {
            grid: {
                paddingLeft: 0,
                paddingRight: 0
            },
            row: {
                marginLeft: 0,
                marginRight: 0
            },
            col: {
                paddingLeft: 0,
                paddingRight: 0
            }
        };

        return (

            <div className={styles.Panel}>
                <div className={styles.Calculator}>
                    <p>{this.state.oper}</p>
                    <Container style={styles2.grid}>

                    <Row style={styles2.row}>
                            <Col style={styles2.col} ><Display value={this.state.displayValue} pressed={this.keyPressedHandler} changed={this.onChangeHandler}></Display></Col>
                        </Row>
                        <Row style={styles2.row}>
                            <Col style={styles2.col} ><NumberButton value="C" clicked={this.onReset}></NumberButton></Col>

                            <Col style={styles2.col} ><NumberButton value="(" clicked={() => this.onButtonClickHandler("(")}></NumberButton></Col>
                            <Col style={styles2.col} ><NumberButton value=")" clicked={() => this.onButtonClickHandler(")")}></NumberButton></Col>
                            <Col style={styles2.col}> <NumberButton value="=" clicked={() => this.onButtonClickHandler("=")}></NumberButton></Col>


                        </Row>

                        <Row style={styles2.row}>
                            <Col style={styles2.col}><NumberButton value="7" clicked={() => this.onButtonClickHandler("7")}></NumberButton></Col>
                            <Col style={styles2.col}> <NumberButton value="8" clicked={() => this.onButtonClickHandler("8")}></NumberButton></Col>
                            <Col style={styles2.col}> <NumberButton value="9" clicked={() => this.onButtonClickHandler("9")}></NumberButton></Col>
                        </Row>

                        <Row style={styles2.row}>
                            <Col style={styles2.col}><NumberButton value="4" clicked={() => this.onButtonClickHandler("4")}></NumberButton></Col>
                            <Col style={styles2.col}> <NumberButton value="5" clicked={() => this.onButtonClickHandler("5")}></NumberButton></Col>
                            <Col style={styles2.col}> <NumberButton value="6" clicked={() => this.onButtonClickHandler("6")}></NumberButton></Col>
                        </Row>
                        <Row style={styles2.row}>
                            <Col style={styles2.col}><NumberButton value="1" clicked={() => this.onButtonClickHandler("1")}></NumberButton></Col>
                            <Col style={styles2.col}> <NumberButton value="2" clicked={() => this.onButtonClickHandler("2")}></NumberButton></Col>
                            <Col style={styles2.col}> <NumberButton value="3" clicked={() => this.onButtonClickHandler("3")}></NumberButton></Col>
                        </Row>
                        <Row style={styles2.row}>
                            <Col style={styles2.col}><NumberButton value="+" clicked={() => this.onButtonClickHandler("+")}></NumberButton></Col>
                            <Col style={styles2.col}><NumberButton value="-" clicked={() => this.onButtonClickHandler("-")}></NumberButton></Col>
                            <Col style={styles2.col}><NumberButton value="/" clicked={() => this.onButtonClickHandler("/")}></NumberButton></Col>
                            <Col style={styles2.col}><NumberButton value="*" clicked={() => this.onButtonClickHandler("*")}></NumberButton></Col>

                        </Row>
                    </Container>
                </div>
                <div className={styles.History}>
                    {history}
                </div>







            </div>
        )
    }


}


export default Panel;
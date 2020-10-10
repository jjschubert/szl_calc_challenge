import React, { Component } from 'react';
import './App.css';
import KeyPad from '../KeyPad/KeyPad.jsx'
import CalcDisplay from '../CalcDisplay/CalcDisplay.jsx'
import EqList from '../EqList/EqList.jsx';
import axios from 'axios'

class App extends Component {

  state = {
    eqHistory: [],
    stringToCalculate: '',
    stringToSend: '',
  }

  componentDidMount() {
    //get recent equations from server
    this.getEquations();
  }

  getEquations = () => {
    console.log('in get equations')
    axios.get('/calc')
      .then(response => {
        console.log(response.data);
        this.setState({
          eqHistory: response.data
        })
      })
  }

  handleInput = (num) => {
    console.log(num)
    this.setState({
      ...this.state,
      stringToCalculate: this.state.stringToCalculate.concat(num)
    })
    console.log(this.state.stringToCalculate)
  }

  handleEquals = () => {
    let currentResult = eval(this.state.stringToCalculate)
    let stringToSend = this.state.stringToCalculate.concat('=').concat(currentResult)

    this.setState({
      ...this.state,
      stringToSend: stringToSend,
      stringToCalculate: currentResult
    }, this.handleSubmit)
  }

  handleSubmit = () => {
    console.log(this.state)
    axios.post('/calc', this.state)
      .then(response => {
        this.getEquations();
      }).catch(error => {
        console.log('error in POST', error);
      })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      stringToCalculate: ''
    },
      console.log(this.state.stringToCalculate))
  }



  render() {
    return (
      <div className="App">

        {JSON.stringify(this.state.eqHistory)}
        <CalcDisplay stringToCalculate={this.state.stringToCalculate} />
        <KeyPad handleInput={this.handleInput} handleEquals={this.handleEquals} stringToCalculate={this.state.stringToCalculate} handleClear={this.handleClear} />
        <EqList eqHistory={this.state.eqHistory} />
      </div>
    );
  }
}

export default App;

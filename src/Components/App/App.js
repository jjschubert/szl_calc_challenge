import React, { Component } from 'react';
import './App.css';
import KeyPad from '../KeyPad/KeyPad.jsx'
import CalcDisplay from '../CalcDisplay/CalcDisplay.jsx'
import EqList from '../EqList/EqList.jsx';

class App extends Component {

  state = {
    eqHistory: [],
    stringToCalculate: ''
  }

  handleInput = (num) => {
    console.log(num)
   
  }

handleEquals = () => {
  console.log('clicked equals')
}



  render() {
    return (
      <div className="App">
  
        
        <CalcDisplay stringToCalculate={this.state.stringToCalculate}/>
        <KeyPad handleInput={this.handleInput} handleEquals={this.handleEquals} stringToCalculate={this.state.stringToCalculate}/>
        <EqList history={this.state.eqHistory} />
      </div>
    );
  }
}

export default App;

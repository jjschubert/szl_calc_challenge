import React, { Component } from 'react';
import { Button} from '@material-ui/core'

class KeyPad extends Component {
  render() {
    return (
      <div className="keypad">
        <Button variant='contained' value='7' onClick={() => this.props.handleInput('7')}>7</Button>
        <Button variant='contained' value='8' onClick={() => this.props.handleInput('8')}>8</Button>
        <Button variant='contained' value='9' onClick={() => this.props.handleInput('9')}>9</Button>
        <Button variant='contained' value='+' onClick={() => this.props.handleInput('+')}>+</Button>
        <br />
        <Button variant='contained' value='4' onClick={() => this.props.handleInput('4')}>4</Button>
        <Button variant='contained' value='5' onClick={() => this.props.handleInput('5')}>5</Button>
        <Button variant='contained' value='6' onClick={() => this.props.handleInput('6')}>6</Button>
        <Button variant='contained' value='-' onClick={() => this.props.handleInput('-')}>-</Button>
        <br />
        <Button variant='contained' value='1' onClick={() => this.props.handleInput('1')}>1</Button>
        <Button variant='contained' value='2' onClick={() => this.props.handleInput('2')}>2</Button>
        <Button variant='contained' value='3' onClick={() => this.props.handleInput('3')}>3</Button>
        <Button variant='contained' value='*' onClick={() => this.props.handleInput('*')}>*</Button>
        <br />
        {/* make 0 btn double size */}
        <Button variant='contained' value='0' onClick={() => this.props.handleInput('0')}>0</Button>
        <Button variant='contained' value='.' onClick={() => this.props.handleInput('.')}>.</Button>
        <Button variant='contained' value='/' onClick={() => this.props.handleInput('*')}>/</Button>

        <br />
        {/* make =, clear btn double size */}
        <Button variant='contained' value='=' onClick={() => this.props.handleEquals()}>=</Button>
        <Button variant='contained' onClick={() => this.props.handleClear()}>CLEAR</Button>
      </div>
    );
  }
}

export default KeyPad;
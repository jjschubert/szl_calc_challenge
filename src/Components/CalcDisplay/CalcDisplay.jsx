import React, { Component } from 'react';
import {TextField }from '@material-ui/core'


class CalcDisplay extends Component {
  render() {
    return (
      <div className="display">
        <TextField style={{minWidth: '256px', backgroundColor: 'white'}} variant='outlined' value={this.props.stringToCalculate} />
      </div>
    );
  }
}

export default CalcDisplay;
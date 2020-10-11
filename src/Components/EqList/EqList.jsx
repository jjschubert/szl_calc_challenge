import React, { Component } from 'react';


class EqList extends Component {
  render() {
    return (
      <div className="list">
          <h3>Recent Calculations</h3>
        <ul>
            {this.props.eqHistory.map((eq, i) => {
                return <li key={i}>{eq}</li>
            })
            
            }
        </ul>
      </div>
    );
  }
}

export default EqList;
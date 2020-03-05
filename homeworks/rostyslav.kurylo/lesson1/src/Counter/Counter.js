import React from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

export default class Counter extends React.Component {
  static propTypes = {
    minValue: PropTypes.number,
    maxValue: PropTypes.number
  };

  minValue = 0;
  maxValue = 1000;
  state = {
    counterNumber: 0
  };

  increment = () => {
    this.setState(state => {
      return {
        counterNumber: state.counterNumber < this.maxValue ? ++state.counterNumber : this.maxValue
      }
    });
  };

  decrement = () => {
    this.setState(state => {
      return {
        counterNumber: state.counterNumber > this.minValue ? --state.counterNumber : this.minValue
      }
    });
  };

  render() {
    return <div className="counter-component">
      <button onClick={this.decrement}>-</button>
      <strong className="counter-label">{this.state.counterNumber}</strong>
      <button onClick={this.increment}>+</button>
    </div>
  }
}

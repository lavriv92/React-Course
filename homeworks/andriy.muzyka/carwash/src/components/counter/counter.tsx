import React from 'react';
import './Counter.css';

interface CounterState {
  counter: number
}

export default class Counter extends React.Component <any, CounterState> {
  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  // https://plopjs.com/documentation/
  // High Order Component
  // renderProps

  render() {
    return (
      <section className="App-counter">
        <button onClick={() => this.increaseCounter()}>+</button>
        <span className="number">{this.state.counter}</span>
        <button onClick={() => this.decreaseCounter()}>-</button>
      </section>
    );
  }

  increaseCounter() {
    this.setState((state, props) => ({
      counter: state.counter + 1
    }))
  }

  decreaseCounter() {
    this.setState((state, props) => {
      if (state.counter > 0) {
        return { counter: state.counter - 1 }
      }

      return state;
    })
  }
}

// import React from 'react';
//
// function Counter() {
//   return (
//     <div>aaa - aaa - aaa</div>
//   );
// }
//
// export default Counter;

import React from 'react';
import './Counter.css';

export default class Counter extends React.Component {
    state = {
        count: 0
    };

    inc = () => {
        this.setState({ count: this.state.count + 1});
    };

    dec = () => {
        this.setState({ count: this.state.count - 1});
    };

    render() {
        return (
            <div>
                <button className="counterButton" onClick={this.inc}>inc</button>
                <button className="counterButton" onClick={this.dec}>dec</button>
                <span>Counter: {this.state.count}</span>
            </div>
        );
    }
}

import React from 'react'
import'bootstrap/dist/css/bootstrap.min.css';

export default class Counter extends React.Component {
    state = {counter: 0};

    increase = () => {
        this.setState({counter: this.state.counter + 1});
    };
    decrease = () => {
        this.setState({counter: this.state.counter - 1});
    };
    reset = () => {
        this.setState({counter: 0});
    };

    render() {
        return (
            <div className="col-1"> Count: {this.state.counter}
                <button className="btn-primary" onClick={this.increase}>Increase</button>
                <button className="btn-secondary" onClick={this.decrease}>Descrease</button>
                <button className="btn-success" onClick={this.reset}>Reset</button>
            </div>
        );
    }
}
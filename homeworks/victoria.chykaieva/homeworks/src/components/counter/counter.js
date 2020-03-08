import React from 'react';
import './counter.css';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counterValue: 0
        }
    }

    render() {
        return (
        <div>
            <section className="buttons"> 
            <button type="button" className="btn btn-primary" onClick={this.increment.bind(this)}>+</button> 
            <button type="button" className="btn btn-primary" onClick={this.decrement.bind(this)}>-</button> 
            </section>
            <input type="number" className="form-control" value={this.state.counterValue} onChange={this.onChange.bind(this)}/>
            <div>state changed: counterValue = {this.state.counterValue}</div>
        </div>
        )
    }

    onChange(event) {
        this.setState({counterValue: event.target.value});
    }

    increment() {
        this.setState({counterValue: this.state.counterValue + 1});
    }

    decrement() {
        this.setState({counterValue: this.state.counterValue - 1});
    }

    componentDidUpdate() {
        console.log('update');
    }
}

export default Counter;
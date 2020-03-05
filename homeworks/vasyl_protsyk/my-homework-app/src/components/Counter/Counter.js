import React from 'react';
import NumericInput from 'react-numeric-input';
import './counter.css';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }
    
    increaseCounter = () => {
        this.setState(state => ({
            counter: state.counter + 1
        }));
    };
    
    
    decreaseCounter = () => {
        if (this.state.counter) {
            this.setState(state => ({
                counter: state.counter - 1
            }));
        }
    };
    
    handleChange = event => {
        this.setState({ counter: event });
    };

    render() {
        return (
            <div className="Counter">
                <span>Counter</span><br/>
                <button className={"Buttons Minus " + (!this.state.counter ? "disabled" : '')}
                        onClick={this.decreaseCounter}> - </button>
                <div>
                    <NumericInput className="form-control" min={0} value={this.state.counter} onChange={this.handleChange} noStyle/>
                </div>
                <button className="Buttons Plus" onClick={this.increaseCounter}> + </button>
            </div>
        );
    }
}

export default Counter;

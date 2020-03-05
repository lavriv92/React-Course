import React from "react";
import './counter.css'

export default class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }

    counterPlus() {
        this.setState(item => ({
            counter: item.counter + 1
        }))
    }

    counterMinus() {
        this.setState(item => ({
            counter: item.counter - 1
        }))    }


    render() {
        return (
            <div class="counter-container">
                <input type="button" value="plus" onClick={() => this.counterPlus()}/>
                <h1>{this.state.counter}</h1>
                <input type="button" value="minus" onClick={() => this.counterMinus()}/>
            </div>
        );
    }
}


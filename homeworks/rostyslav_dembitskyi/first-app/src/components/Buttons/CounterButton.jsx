import React, {Component} from "react";
import './buttons.css'

class CounterButton extends Component {
    state = {
        count: 0
    };
    handleClick = () => {
        this.setState(({count}) => ({
            count: count + 1
        }))
    };

    render() {
        return (
            <button className="counter" onClick={() => this.handleClick()} type="button">You've clicked on
                me {this.state.count} times!</button>
        )
    }
};

export default CounterButton;
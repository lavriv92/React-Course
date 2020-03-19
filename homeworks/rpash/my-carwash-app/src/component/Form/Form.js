import React from "react";


export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            message: ""
        };
    }

    handleTextChange = event => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <form onSubmit={e => this.props.addComment(e)}>
                <div>
                    <input type="text" name="author" placeholder="Author" value={this.state.author}
                           onChange={this.handleTextChange}/>
                </div>
                <div>
                    <textarea name="message" value={this.state.message} onChange={this.handleTextChange}/>
                </div>
                <input type="submit" value="Add comment"/>
            </form>
        )
    }
}
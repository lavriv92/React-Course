import React, {Component} from "react";
import Comment from "./Comment";


class CommentList extends Component {

    state = {
        comments: [{name: 'Ross', message: 'Hi there.'}],
        newName: '',
        newMessage: '',
    };

    onSubmit = event => {
        event.preventDefault();
        const comment = {
            name: this.state.newName,
            message: this.state.newMessage
        };
        const comments = [...this.state.comments, comment];
        this.setState({
            comments,
            newName: '',
            newMessage: ''
        });
    };

    handleFieldChange = event => {
        const {value, name} = event.target;
        this.setState({
                [name]: value
        });
    };


    render() {

        return (
            <div>
                <h5>
                    <span>{"You have "}{this.state.comments.length}</span>{" "}
                    Comment{this.state.comments.length > 1 ? "s" : ""}
                </h5>

                {this.state.comments.map((comment, index) => (
                    <Comment key={index} comment={comment}/>
                ))}
                <div>
                    <div>Add comment:</div>
                    <form onSubmit={this.onSubmit}>
                        <label>
                            Enter new comment:
                            <textarea name="newMessage" value={this.state.newMessage} onChange={this.handleFieldChange}/>
                        </label>
                        <label>
                            Name:
                            <textarea  name="newName" value={this.state.newName} onChange={this.handleFieldChange}/>
                        </label><br/>
                    <input className="submit" type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        );
    };
}

export default CommentList;
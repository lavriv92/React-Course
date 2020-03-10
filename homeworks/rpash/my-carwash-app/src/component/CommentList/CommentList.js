import React from 'react'
import'bootstrap/dist/css/bootstrap.min.css';
import Comment from "../Comment/Comment"

export default class CommentList extends React.Component {
    state = {
        comment: {
            author: "",
            message: ""
        }
    };

    addComment = (e) => {
        e.preventDefault();
        this.setState({
            message: this.state.comment.message,
            author: this.state.comment.author
        });
    };

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.addComment}>
                    <div>
                        <input type="text" name="author" placeholder="Author"/>
                    </div>
                    <div>
                        <textarea name="comment" value={this.state.text} onChange={this.handleTextChange}/>
                    </div>
                    <input type="button" value="Add comment"/>
                </form>
                {this.state.counter > 0}
                {this.state.comments.map((comment, i) =>
                <Comment key={i} text={this.state.comment.message} author={this.state.comment.author} delete={() => null}/> }
            </div>
        );
    }
}
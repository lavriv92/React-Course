import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Comment from "../Comment/Comment"

export default class CommentList extends React.Component {
    state = {
        commentList: [],
        count: 0,
        author: "",
        message: ""
    };

    addComment = e => {
        e.preventDefault();
        console.log("sas", e);
        this.setState({
            commentList: [...this.state.commentList,
                {
                    message: this.state.message,
                    author: this.state.author,
                    count: this.state.count + 1
                }]
        });
        this.clearFields();
    };

    clearFields = () => {
        this.setState({
            message: "",
            author: ""
        });
    };

    removeComment= () => {

    };

    handleAuthorChange = e => {
        this.setState({
            author: e.target.value
        });
    };

    handleMessageChange = e => {
        this.setState({
            message: e.target.value
        });
    };

    render() {
        console.log("test", this.state.commentList);
        return (
            <div>
                <form onSubmit={(event) => this.addComment(event)}>
                    <div>
                        <input type="text" name="author" placeholder="Author" value={this.state.author}
                               onChange={this.handleAuthorChange}/>
                    </div>
                    <div>
                        <textarea name="comment" value={this.state.message} onChange={this.handleMessageChange}/>
                    </div>
                    <input type="submit" value="Add comment"/>
                </form>
                {this.state.commentList.map((comment, i) =>
                    <Comment key={i} num={i} author={comment.author} message={comment.message}/>
                )}
            </div>
        );
    }
}
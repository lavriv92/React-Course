import React from 'react';
import Comment from './Comment';
import './CommentsList.css';

export default class CommentsList extends React.Component {
    state = {
        comments: [],
        author: "",
        commentBody: ""
    };

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleCommentDelete(e, delIndex) {
        e.preventDefault();
        this.setState({comments: this.state.comments.filter((_, i) => i !== delIndex)});
    }

    addComment(e) {
        e.preventDefault();
        if(this.state.author && this.state.commentBody) {
            this.setState({
                comments: [...this.state.comments, {author: this.state.author, commentBody: this.state.commentBody}],
                author: "",
                commentBody: ""
            });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={(e)=>this.addComment(e)}>
                    <div><input type="text" name="author" placeholder="Author" value={this.state.author} onChange={(e) => this.handleInputChange(e)}/></div>
                    <div>
                        <textarea name="commentBody" value={this.state.commentBody} onChange={(e) => this.handleInputChange(e)} placeholder="Comment"/>
                    </div>
                    <div><input type="submit" value="Add comment"/></div>
                </form>
                {this.state.comments.length > 0 && <h2>Comments:</h2> }
                {this.state.comments.map((comment, i) => <Comment key={i} author={comment.author} commentBody={comment.commentBody} handleCommentDelete={(e) => this.handleCommentDelete(e, i)}/>)}
            </div>
        );
    }
}

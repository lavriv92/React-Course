import React from 'react';
import CommentEditor from './comment_editor';
import CommentsList from './comments_list';

class CommentsApp extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        var localComments = JSON.parse(localStorage.getItem('comments'));
        if (localComments) {
            this.setState({ comments: localComments });
        }
    }

    componentDidUpdate() {
        this._updateLocalStorage();
    }

    handleCommentDelete (comment) {
        var commentId = comment.id;
        var newComments = this.state.comments.filter(function(comment) {
            return comment.id !== commentId;
        });
        this.setState({ comments: newComments });
    }

    handleCommentAdd (newComment) {
        var newComments = this.state.comments.slice();
        newComments.unshift(newComment);
        this.setState({ comments: newComments });
    }

    render () {
        return (
            <div className="comments-app">
                <CommentEditor onCommentAdd={this.handleCommentAdd.bind(this)} />
                <CommentsList comments={this.state.comments} onCommentDelete={this.handleCommentDelete.bind(this)} />
            </div>
        );
    }

    _updateLocalStorage () {
        var comments = JSON.stringify(this.state.comments);
        localStorage.setItem('comments', comments);
    }
};

export default CommentsApp;
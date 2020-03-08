import React from 'react';
import Comment from './comment';

class CommentsList extends React.Component {

    render() {
        var onCommentDelete = this.props.onCommentDelete;

        return (
            <div className="comments-list">
                {
                    this.props.comments.map(function(comment){
                        return (
                            <Comment
                                key={comment.id}
                                onDelete={onCommentDelete.bind(null, comment)}>
                                    <div className="card">
                                    <div className="card-body">
                                        <p className="card-text">{comment.text}</p>
                                        <h6 className="card-subtitle mb-2 text-muted">{comment.author}</h6>
                                    </div>
                                    </div>
                            </Comment>
                        );
                    })
                }
            </div>
        );
    }
};

export default CommentsList;
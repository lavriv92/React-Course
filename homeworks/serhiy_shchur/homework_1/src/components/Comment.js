import React from 'react';
import './Comment.css';

function Comment(props) {
    return (
        <div className="Comment">
            <div><strong>{props.author}</strong></div>
            <p>{props.commentBody}</p>
            <a href="#" onClick={props.handleCommentDelete}>delete</a>
        </div>
    );
}

export default Comment;

import React from 'react';
import './comment.css';

class Comment extends React.Component {

    render () {
        return (
            <div className="comment">
                <button type="button" className="btn btn-outline-danger" onClick={this.props.onDelete}>×</button>
                {this.props.children}
            </div>
        );
    }
};

export default Comment;
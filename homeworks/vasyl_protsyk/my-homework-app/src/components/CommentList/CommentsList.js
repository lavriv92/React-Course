import React from 'react';
import List from './List';
import './CommentsList.css';

class CommentsList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            comments: [{ id: 1, text: 'First comment', author: 'Protsyk' }],
            newComment: '',
            newAuthor: 'Protsyk'
        };
    }
    
    handleSubmit = event => {
        event.preventDefault();
        const comment = {
            id: Math.floor(Math.random() * Math.floor(10000)),
            text: this.state.newComment,
            author: this.state.newAuthor
        };
        const comments = [...this.state.comments, comment];
        this.setState({
            comments,
            newComment: '',
            newAuthor: 'Protsyk'
        });
    };
    
    handleCommentChange = event => {
        this.setState({ newComment: event.target.value });
    };
    
    handleAuthorChange = event => {
        this.setState({ newAuthor: event.target.value });
    };
    
    handleDeleteComment = id => {
        const comments = this.state.comments.filter(comment => comment.id !== id);
        this.setState({ comments })
    };
    
    render() {
        return (
            <div className="CommentList">
               <List comments={this.state.comments} onCommentDelete={this.handleDeleteComment} />
               
               <div className="addName">Add comment</div>
                <form onSubmit={this.handleSubmit}>
                    <label className="commentBlock">
                        Your comment:
                        <textarea value={this.state.newComment} onChange={this.handleCommentChange} />
                    </label>
                    <label className="authorBlock">
                        Author:
                        <input type="text" name="name" value={this.state.newAuthor} onChange={this.handleAuthorChange} />
                    </label>
                    <input className="submit" type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default CommentsList;

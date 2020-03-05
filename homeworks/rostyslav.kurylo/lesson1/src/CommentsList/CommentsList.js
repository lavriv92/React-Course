import React from 'react';
import Comment from './Comment/Comment';
import CommentModel from './models/CommentModel';
import './CommentsList.css';

export default class CommentsList extends React.Component {
  state = {
    comments: [{
      id: 0,
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      author: 'Admin',
      likes: 5
    }],
    commentForm: new CommentModel()
  };

  removeComment = id => {
    this.setState(state => {
      return {
        comments: state.comments.filter(item => item.id !== id)
      }
    })
  };

  addComment = () => {
    const isMessageEmpty = this.state.commentForm.message === '' || this.state.commentForm.author === '';

    if (!isMessageEmpty) {
      this.setState(state => {
        return {
          comments: [...state.comments, this.state.commentForm],
          commentForm: new CommentModel()
        }
      })
    }
  };

  updateLikesCount = () => {
    // TODO: implement me
  };

  updateMessageInput = event => {
    const updatedCommentForm = { ...this.state.commentForm, message: event.target.value };
    this.setState(state => ({commentForm: updatedCommentForm}));
  };

  updateAuthorInput = event => {
    const updatedCommentForm = { ...this.state.commentForm, author: event.target.value };
    this.setState(state => ({commentForm: updatedCommentForm}));
  };

  render() {
    return <div className="comments-list-component">

      <div className="new-comment-section">
        <div>
          <input id="authorInput"
                 placeholder="Your name..."
                 onChange={this.updateAuthorInput}
                 value={this.state.commentForm.author} />
        </div>

        <div>
          <input id="messageInput"
                 placeholder="Add your comment..."
                 onChange={this.updateMessageInput}
                 value={this.state.commentForm.message} />
        </div>

        <button onClick={this.addComment}>Add new comment</button>
      </div>
      <hr />
      {
        this.state.comments.map(comment => {
          return <div className="comments-section" key={comment.id}>
            <Comment comment={comment} />
            <button onClick={() => {this.removeComment(comment.id)}}>Remove comment</button>
          </div>
        })
      }
    </div>
  };
}

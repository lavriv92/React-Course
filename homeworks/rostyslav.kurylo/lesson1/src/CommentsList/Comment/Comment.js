import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../../Counter/Counter';
import './Comment.css'

export default class Comment extends React.Component {
  static propTypes = {
    comment: PropTypes.object
  };

  render() {
    return <div className="comment-component">
      <p className="message">{this.props.comment.message}</p>
      <p className="author">- by {this.props.comment.author}</p>
      <div className="likes">
        <span className="label">Likes:</span>
        <Counter />
      </div>
    </div>
  }
}

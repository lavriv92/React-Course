import React from "react";
import Comments from './comment/comment';
import CommentsArea from './commentsArea/comments-area';

export default class CommentsContainer extends React.Component {
    constructor(props) {
            super(props);
            this.state = {comments: [{
                text: 'hello',
                author: 'sss'
                }]
            };
            this.addNewComment = this.addNewComment.bind(this);
        }

        addNewComment(newComment) {
            let state = {...this.state};
            state.comments.push(newComment);
            this.setState({state})
        }

    render() {
        return (
            <div>
                <CommentsArea newItem={this.addNewComment} />
                Comments:
                <Comments commentItems={this.state.comments}/>
            </div>
        );
    }
}


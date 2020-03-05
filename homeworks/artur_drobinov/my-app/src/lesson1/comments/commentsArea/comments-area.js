import React from "react";
import "./commentsArea.css"

export default class CommentsArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {comment: {
            text: '',
            author: ''
            }};
        this.changeCommentText = this.changeCommentText.bind(this);
        this.changeAuthorName = this.changeAuthorName.bind(this);
    }

    addNewComment(comment) {
        this.props.newItem(comment);
        this.setState({comment: {
                text: '',
                author: ''
            }})
    }
    changeCommentText(el) {
        let comment = {...this.state.comment};
        comment.text = el.target.value;
        this.setState({comment})
    }
    changeAuthorName(el) {
        let comment = {...this.state.comment};
        comment.author = el.target.value;
        this.setState({comment})
    }

    render() {
        return (
            <div class="comments-area-container">
                <textarea placeholder="add comment" rows="10" cols="45" name="text" value={this.state.comment.text} onChange={(el) => this.changeCommentText(el)}></textarea>
                <input type="text" placeholder="author name" value={this.state.comment.author} onChange={(el) => this.changeAuthorName(el)} />
                <input class="button" type="button" value="click" onClick={() => this.addNewComment(this.state.comment)}/>
            </div>
        );
    }
}


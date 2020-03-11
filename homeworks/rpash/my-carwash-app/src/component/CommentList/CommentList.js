import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import List from "../List/List";
import Form from "../Form/Form";

export default class CommentList extends React.Component {
    state = {
        commentList: [],
        author: "",
        message: "",
        id: 0

    };

    addComment = (e) => {
        e.preventDefault();
        this.setState({
            commentList: [
                {
                    message: e.target.message.value,
                    author: e.target.author.value,
                    id: this.state.id + 1
                },
                ...this.state.commentList]
        });
        console.log("CommentList");
        console.log(this.state.commentList);
    };

    removeComment(e, id) {
        e.preventDefault();
        console.log("remove " + id);
        console.log("CommentList in remove");
        console.log(this.state.commentList);
        this.setState({
            ...this.state,
            commentList: this.state.commentList.filter((_, i) => i !== id)
        });
    };

    render() {
        return (
            <div>
                <Form addComment={this.addComment}/>
                <List comments={this.state.commentList} removeComment={this.removeComment}/>
            </div>
        );
    }
}
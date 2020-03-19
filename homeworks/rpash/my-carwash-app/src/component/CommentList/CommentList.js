import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import List from "../List/List";
import Form from "../Form/Form";

export default class CommentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            message: "",
            id: 0,
            commentList: []
        };
    };

    addComment = (e) => {
        e.preventDefault();
        this.setState({
            commentList: [
                ...this.state.commentList,
                {
                    message: e.target.message.value,
                    author: e.target.author.value,
                    id: this.state.id + 1
                }
            ]
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
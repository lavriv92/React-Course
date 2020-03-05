import React from "react";
import './comment.css'

export default class Comments extends React.Component {


    render() {
        return (
                <div class="comment-container">
                    {this.props.commentItems.map(item => (
                        <div class="comment-block" >
                        <p>Text: {item.text}</p>
                        <p>Author: {item.author}</p>
{/*                         <input type="button" onClick={this.deleteComment()} value="deleteComment" /> */}
                        </div>
                    ))}
                </div>
        );
    }
}


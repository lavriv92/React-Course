import React from 'react'
import Comment from "../Comment/Comment"

export default class List extends React.Component {
    render() {
        return (
            <div>
                {this.props.comments.map((comment, i) =>
                    <Comment key={i} id={i+1} comment={comment} remove={this.props.removeComment}/>
                )}
            </div>
        );
    }

}

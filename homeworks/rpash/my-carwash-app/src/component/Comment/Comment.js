import React from 'react'

function Comment(props) {
        return (
            <div>
                Comment
                <div>{props.author}</div>
                <p>{props.text}</p>
                <a href="#" onClick={props.delete}>delete</a>
            </div>
        )
}

export default Comment;

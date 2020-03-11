import React from 'react'

export default function Comment(props) {
    return (
        <div>
            <br/>
            <div>Comment {props.id}</div>
            <div>ID: {props.id}</div>
            <div>{props.comment.author}</div>
            <p>{props.comment.message}</p>
            <button onClick={(e) => props.remove(e, props.id)}>Remove comment</button>
        </div>
    )
}

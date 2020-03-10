import React from 'react'

export default function Comment(props) {
    return (
        <div>
            <br/>
            <div>Comment {props.num}</div>
            <div>{props.author}</div>
            <p>{props.message}</p>
            <button onClick={props.remove}>Remove comment</button>
        </div>
    )
}

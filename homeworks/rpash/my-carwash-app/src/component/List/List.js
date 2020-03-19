import React from 'react'
import Comment from "../Comment/Comment"

export default function List(props) {
    return (
        <div>
            {props.comments.map((comment, i) =>
                <Comment key={i} id={i + 1} count={i + 1} comment={comment} remove={props.removeComment}/>
            )}
        </div>
    );
}

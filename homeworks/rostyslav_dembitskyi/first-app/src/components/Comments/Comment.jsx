import React from "react";

const Comment = (props) => {
    const { name, message } = props.comment;

    return (
        <div className="comment">
            <label>{name}</label><br/>
            <label>{message}</label>
        </div>
    );
};

export default Comment;
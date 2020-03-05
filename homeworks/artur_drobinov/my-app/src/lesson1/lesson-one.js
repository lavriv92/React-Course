import React from "react";
import CommentsContainer from "./comments/comments.container";
import Counter from "./Counter/counter";

export default class LessonOne extends React.Component {

    render() {
        return (
            <div>
                <CommentsContainer />
                <Counter />
            </div>
        );
    }
}


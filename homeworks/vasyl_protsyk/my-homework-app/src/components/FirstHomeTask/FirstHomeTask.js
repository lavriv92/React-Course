import React from 'react';
import Counter from "../Counter/Counter";
import CommentsList from "../CommentList/CommentsList";

class FirstHomeTask extends React.Component {

    render() {
        return (
            <>
              <Counter />
              <div>Next Components</div>
              <CommentsList />
            </>
        );
    }
}

export default FirstHomeTask;

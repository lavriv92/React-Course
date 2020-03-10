import * as React from 'react';
import { Comment } from '../comment/comment';
import { IComment } from '../../api/models/comment';

type Props = {
  commentsList: IComment[]
};
type State = {};

export class CommentsList extends React.Component<Props, State> {
  render() {
    return (
      <>
        <div>
          Post comments:
        </div>

        { this.props.commentsList.length > 0 && this.props.commentsList.map((comment: IComment, i: number) => {
          return <Comment key={i} comment={comment}></Comment>
        })}
      </>
    );
  };
};

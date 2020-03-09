// @flow
import * as React from 'react';
import { AddComment } from '../addComment/addComment';
import { CommentsList } from '../commentsList/commentsList';
import Alert from 'react-bootstrap/Alert';
import { IComment } from '../../api/models/comment';
import { IPost } from '../../api/models/post';
import { dataService } from '../../api/services/data/data.service';

type Props = {
  post: IPost,
  username: string
};

type State = {
  addingComment: boolean,
  commentsList: IComment[],
};

export class CommentsContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      addingComment: false,
      commentsList: []
    }
  }

  onCommentAdd(data: IComment): void {
    data.author = this.props.username;

    const updatedList = [...this.state.commentsList, data];

    this.setState((state: State) => {
      return {
        ...state,
        commentsList: updatedList,
        addingComment: false
      };
    })
  }

  turnOnAddComment() {
    this.setState((state: State) => {
      return {
        ...state,
        addingComment: true
      };
    })
  }

  componentDidMount(): void {
    dataService.loadComments(this.props.post.id)
      .subscribe((comments: IComment[]) => {
        this.setState((state: State) => {
          return {
            ...state,
            commentsList: comments
          };
        })
      });
  }
  render() {
    return (
      <>
        <Alert variant={'success'} onClick={() => this.turnOnAddComment()}>
          Add comment
        </Alert>

        { this.state.addingComment &&
          <AddComment onCommentAdd={(data: any) => this.onCommentAdd(data)}>
          </AddComment>
        }

        <CommentsList commentsList={this.state.commentsList}>
        </CommentsList>
      </>
    );
  };
}

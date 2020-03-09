// @flow
import * as React from 'react';
import { AddComment } from '../addComment/addComment';
import { CommentsList } from '../commentsList/commentsList';
import Alert from 'react-bootstrap/Alert';

export interface IComment {
  header: string;
  body: string;
  author: string;
}

type Props = {
  post: any,
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
    const initialComment = {
      header: 'First Comment title mock',
      body: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque\n' +
        'ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,\n' +
        'tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.\n' +
        'Donec lacinia congue felis in faucibus.',
      author: 'anonymus'
    };

    this.setState((state: State) => {
      return {
        ...state,
        commentsList: [initialComment]
      };
    })
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
};

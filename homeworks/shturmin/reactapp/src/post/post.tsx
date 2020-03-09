// @flow
import * as React from 'react';
import Card from 'react-bootstrap/Card';
import { IPost } from '../api/models/post';

type Props = {
   post: IPost
};
type State = {};

export class Post extends React.Component<Props, State> {
  render() {
    return (
      <>
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>
              {this.props.post.title}
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {this.props.post.subTitle}
            </Card.Subtitle>
            <Card.Text>
              {this.props.post.text}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  };
};

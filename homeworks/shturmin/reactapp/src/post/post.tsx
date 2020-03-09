// @flow
import * as React from 'react';
import Card from 'react-bootstrap/Card';

type Props = {

};
type State = {

};

export class Post extends React.Component<Props, State> {
  render() {
    return (
      <>
        <Card style={{ width: '100%' }}>
          <Card.Body>
            <Card.Title>Post Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
            <Card.Text>
              Post text, Hi there, lets comment this text
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  };
};

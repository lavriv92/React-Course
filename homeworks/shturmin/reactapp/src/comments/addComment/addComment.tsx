// @flow
import * as React from 'react';
import Media from 'react-bootstrap/Media';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

type Props = {
  onCommentAdd: any
};
type State = {
  comment: {
    header: string;
    body: string;
    author: string;
  }
};

export class AddComment extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      comment: {
        header: '',
        body: '',
        author: 'ME'
      }
    }
  }

  handleChange(event: any) {
    const inputName: 'header' | 'body' = event.currentTarget.id;
    const inputValue: string = event.currentTarget.value;

    this.setState((state: State) => {
       state.comment[inputName] = inputValue;

       return state;
    });
  }

  handleSubmit(e: any) {
    e.preventDefault();

    this.props.onCommentAdd(this.state.comment);
  }

  render() {
    return (
      <Media className="post-comment">
        <Media.Body>
          <Form onSubmit={(e: any) => this.handleSubmit(e)}>
            <Form.Group controlId="header">
              <Form.Label>Comment title</Form.Label>
              <Form.Control type="text" placeholder="Enter title" onChange={(e: any) => this.handleChange(e)}/>
            </Form.Group>

            <Form.Group controlId="body">
              <Form.Label>Comment body</Form.Label>
              <Form.Control as="textarea" rows="3" onChange={(e: any) => this.handleChange(e)}/>
            </Form.Group>

            <Button variant="primary" type="submit">
              Add
            </Button>
          </Form>
        </Media.Body>
      </Media>
    );
  };
};

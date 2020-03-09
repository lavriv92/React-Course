// @flow
import * as React from 'react';
import { LoginMessage } from '../../shared/messages/loginMessage/loginMessage';
import { LoginForm } from '../../shared/forms/loginForm/loginForm';
import { Post } from '../../post/post';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CommentsContainer } from '../../comments/commentsContainer/commentsContainer';
import Button from 'react-bootstrap/Button';

type Props = {
  isLoggedIn: boolean;
  username?: string;
  password?: string;
  onLogin: any;
  onLogOut: any;
};
type State = {
  post: any,
  commentsList: any[];
};

export class HomePageComponent extends React.Component<Props, State> {
  render() {
    return (
      <>
        { this.props.isLoggedIn &&
        <Container>
	        <Row>
		        <Col>
			        <Alert variant={'success'}>
				        Greetings, {this.props.username} , you are Logged In.
			        </Alert>
		        </Col>
		        <Col>
			        <Button className="logout-button" variant="secondary" type="submit" onClick={this.props.onLogOut}>
				        Log Out
			        </Button>
		        </Col>
	        </Row>
	        <Row>
		        <Col>
			        <Post>
			        </Post>
			        <CommentsContainer post={{}} username={this.props.username}>
			        </CommentsContainer>
		        </Col>
	        </Row>
        </Container>
        }
        { !this.props.isLoggedIn &&
          <Container>
            <Row>
              <Col>
                <LoginMessage>
                  <LoginForm onLogin={this.props.onLogin}></LoginForm>
                </LoginMessage>
              </Col>
            </Row>
          </Container>
        }
      </>
    );
  };
};

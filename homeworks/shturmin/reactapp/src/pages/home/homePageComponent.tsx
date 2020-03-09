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
import { IPost } from '../../api/models/post';
import { IComment } from '../../api/models/comment';
import { dataService } from '../../api/services/data/data.service';

type Props = {
  isLoggedIn: boolean;
  username?: string;
  password?: string;
  onLogin(data: any): void;
  onLogOut(): void;
};

type State = {
  posts: IPost[],
  commentsList: IComment[];
};

export class HomePageComponent extends React.Component<Props, State> {
  componentDidMount(): void {
    dataService.loadPost()
      .subscribe((posts: IPost[]) => {
        this.setState((state: State) => {
          return {
            ...state,
            posts: posts
          }
        })
      })
  }

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
          { this.state.posts && this.state.posts.length > 0 && this.state.posts.map((post:IPost, i: number) => {
             return (
                <Row key={post.id}>
                  <Col>
                    <Post post={post}>
                    </Post>
                    <CommentsContainer post={post} username={this.props.username}>
                    </CommentsContainer>
                  </Col>
                </Row>
             )
            })
          }
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

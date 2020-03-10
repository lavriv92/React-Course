import * as React from 'react';
import Button from 'react-bootstrap/Button';

type Props = {};
type State = {
  showLoginForm: boolean
};

export class LoginMessage extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = {
      showLoginForm: false
    }
  }
  showLoginForm(): void {
    this.setState((state: State) => {
      return {
        ...state,
        showLoginForm: !state.showLoginForm
      }
    })
  }

  render() {
    return (
      <>
        <div>You are not logged in</div>
        <div>
          <Button className="logout-button" variant="primary" type="submit" onClick={() => this.showLoginForm()}>
            Log In
          </Button>
        </div>

        { this.state.showLoginForm && this.props.children }
      </>
    );
  };
};

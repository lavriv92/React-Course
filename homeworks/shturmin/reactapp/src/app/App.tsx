import React from 'react';
import './App.css';
import { HomePageComponent } from '../pages/home/homePageComponent';

declare var window: any;

interface Props {}

interface State {
  isLoggedIn: boolean,
  username: string,
  password: string
}

export class App extends React.Component<Props, State>{
  constructor(props: Props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      password: null,
      username: null
    };
  }

  onLogin(data: any): void {
     if (data.username.length > 0 && data.password.length > 0) {
        this.login(data);
     }
  }

  onLogOut(): void {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');
    window.localStorage.removeItem('userToken');

    this.setState((state: State) => {
      return {
        ...state,
        isLoggedIn: false
      }
    });
  }

  login(data: any): void {
    window.localStorage.setItem('username', data.username);
    window.localStorage.setItem('password', data.password);

    window.localStorage.setItem('userToken', data.username+data.password);

    this.setState((state: State) => {
      return {
        ...state,
        username: data.username,
        isLoggedIn: true
      }
    });
  }

  componentDidMount(): void {
    const userToken = window.localStorage.getItem('userToken');

    if (userToken) {
      this.login({
        username: window.localStorage.getItem('username'),
        password: window.localStorage.getItem('password')
      })
    }
  }

  render() {
    return (
      <div className="App">
        <HomePageComponent isLoggedIn={this.state.isLoggedIn}
                           onLogin={(data: any) => this.onLogin(data)}
                           onLogOut={() => this.onLogOut()}
                           username={this.state.username}
                           password={this.state.password}>
        </HomePageComponent>
      </div>
    )
  };
}

export default App;

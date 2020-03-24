import React, { Component } from 'react';
import { userContext } from './userContext';
import AuthContextView from './AuthContextView';
import AuthContextLogin from './AuthContextLogin';

class AuthContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasUser: false,
      user: {}
    };
    this.setUser = this.setUser.bind(this);
    this.setDummyUser = this.setDummyUser.bind(this);
  }

  setUser(usr) {
    this.setState({
      user: usr,
      hasUser: true
    }, () => {
      localStorage.setItem('user', usr);
    })
  }

  setDummyUser() {
    const settingUser = 'Ihor';
    this.setUser(settingUser);
  }

  componentDidMount() {
    var user = localStorage.getItem('user');
    if (user) {
      this.setState({
        hasUser: true
      }, () => {
        this.setUser(user);
      })
    }
  }

  render() {
    const { user, hasUser } = this.state;
    return (
      <userContext.Provider value={user} >
        { hasUser ? 
          <AuthContextView displayUser={user} /> :
          <AuthContextLogin onSuccess={() => this.setDummyUser()} />
        }
      </userContext.Provider>
    );
  }
}

export default AuthContext;
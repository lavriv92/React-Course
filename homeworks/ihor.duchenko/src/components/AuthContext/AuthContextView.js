import React, { Component } from 'react';
import { userContext } from './userContext';

class AuthContextView extends Component {
  

  render() {
    return (
      <userContext.Consumer>
        {(value) => (
          <div className="container py-5 text-center">
            <div className="row justify-content-center">
              <div className="col-md-8 col-xl-6">
                <h1 className="mb-5">Auth Context: Display Context</h1>
                <p className="lead">
                  {JSON.stringify(value)}
                </p>
              </div>
            </div>
          </div>
        )}
      </userContext.Consumer>
    );
  }
}

export default AuthContextView;
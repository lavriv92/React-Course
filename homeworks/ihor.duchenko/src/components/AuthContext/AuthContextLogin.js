import React, { Component } from 'react';

class AuthContextLogin extends Component {

  handleSubmit = (ev) => { 
    ev.preventDefault(); 
    this.props.onSuccess();
  }

  render() {

    return (
      <div className="container py-5 text-center">
        <div className="row justify-content-center">
          <div className="col-md-8 col-xl-6">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="User" />
              </div>
              <div className="form-group">
                <input className="form-control" type="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthContextLogin;
import React, { Component } from 'react';
import Input from './Input';

class Form extends Component {
  state = {
    isValid: true
  }

  validForm = () => {
    const keys = Object.keys(this.state);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === 'isValid') {
        continue;
      }
      if (!this.state[keys[i]]) {
        return false;
      }
    }
    return true;
  }

  notify = (name, isValid) => {
    this.setState(
      { [name]: isValid, },
      () => {
        this.setState({
          isValid: this.validForm(),
        });
     });
  }

  handleSubmit = (ev) => { 
    ev.preventDefault(); 
    if (!this.state.isValid) { 
      console.log('form is NOT valid');
    } else { 
      console.log('valid form') 
    } 
  }

  render() {
    return (
     <form onSubmit={this.handleSubmit} {...this.props}>
        <Input
          pattern="[\w-]+@([\w-]+\.)+[\w-]+"
          className="form-control form-control-lg"
          label="Username"
          name="username"
          id="username"
          errMessage="Must be an email"
          notify={this.notify}
          type="email"
        />
        <Input
          pattern="^[0-9]{2,10}$"
          className="form-control form-control-lg"
          label="Password"
          name="password"
          id="password"
          errMessage="Must contain 4-10 digits"
          notify={this.notify}
          type="password"
        />
        <div className="pt-3">
          <button className="btn btn-primary btn-lg" disabled={!this.state.isValid}>Submit</button>
        </div>
     </form>
    );
  }
}
export default Form;
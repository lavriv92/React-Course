import React, { Component } from 'react';

const validate = (val, errMessage, pattern) => {
  const valid = new RegExp(pattern).test(val);
  return valid ? '' : errMessage;
};

class Input extends Component {
  state = {
    error: '',
    data: '',
  }

  handleChange = (ev) => {
    const {
      errMessage,
      pattern
    } = this.props;
    const error = validate(ev.target.value, errMessage, pattern);
    this.setState({ data: ev.target.value, error, });
  }

  render() {
    const { error, data } = this.state;
    const { label, id, className, name, type } = this.props;

    return ( 
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        value={data}
        onChange={this.handleChange}
        className={className}
        id={id}
        name={name}
        type={type}
      />
      {error && 
        <small className="form-text text-danger">{error}</small>
      } 
    </div> ); 
  } 
} 
export default Input;
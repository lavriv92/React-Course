import React from 'react';
import './form.css';

class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: {
                value: '',
                error: ''
            },
            password: {
                value: '',
                error: ''
            }
        }
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <input className="form-control" name="username" onChange={this.onChange.bind(this)} value={this.state.username.value} placeholder="Name"/>
                    { this.state.username.error ? <div className="error">{this.state.username.error }</div> : '' }
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="password" onChange={this.onChange.bind(this)} value={this.state.password.value} placeholder="Password"/>
                    { this.state.password.error  ? <div className="error">{this.state.password.error}</div> : '' }
                </div>
                <div>
                    <button className="btn btn-primary" type="button" onClick={this.onSubmit.bind(this)}>Submit</button>
                </div>
                <strong>{this.notification}</strong>
            </form>   
          );
    }

    onChange(event) {
        var name = event.currentTarget.name;
        var value = event.currentTarget.value;

        this.setState({[name]: { value, error: '' }});
        this.notification = '';
    }

    onSubmit() {
        this.validate();
    }

    validate() {
        var usernameError = this.state.username.value ? '' : 'Username is required';
        var passwordError = this.state.password.value ? '' : 'Password is required';

        this.setState({username: { error: usernameError, value: this.state.username.value }});
        this.setState({password: { error: passwordError, value: this.state.password.value }});

        if (!usernameError && !passwordError) {
            this.notification = 'Form is valid'
        }
    }
}

export default Form;
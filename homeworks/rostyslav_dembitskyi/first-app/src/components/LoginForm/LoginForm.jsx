import React, {Component} from 'react';

class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            usernameError: '',
            password: '',
            passwordError: '',
        };
        this.notification = '';
    }

    onChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    };

    validateValues = () => {
        let usernameError = this.state.username ? '' : 'Username is required.';
        let passwordError = this.state.password ? '' : 'Username is required.';

        this.setState({usernameError: usernameError});
        this.setState({passwordError: passwordError});

        return (this.state.usernameError.length > 0 && this.state.passwordError.length > 0);

    };

    onSubmit = (event) => {
       event.preventDefault();
       const isCorrect = this.validateValues();
       if (isCorrect) {
           this.notification = 'Congratulations!'
       }
       else {
           this.notification = 'Please check the errors above.'
       }
    };

    render() {
        return (
            <form>
                <div className="form-group">
                    <input className="form-control" name="username" onChange={this.onChange.bind(this)}
                           value={this.state.username.value} placeholder="Name"/>
                    {this.state.usernameError ? <div className="error">{this.state.usernameError}</div> : ''}
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="password" onChange={this.onChange.bind(this)}
                           value={this.state.password.value} placeholder="Password"/>
                    {this.state.passwordError ? <div className="error">{this.state.passwordError}</div> : ''}
                </div>
                <div>
                    <button className="btn btn-primary" type="button" onClick={this.onSubmit.bind(this)}>Submit</button>
                </div>
                <strong>{this.notification}</strong>
            </form>
        );
    };
}

export default Form;

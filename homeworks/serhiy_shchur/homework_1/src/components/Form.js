import React from 'react';

export default class Form extends React.Component {
    state = {
        errors: {
            username: [],
            password: []
        },
        form: {
            username: '',
            password: ''
        }
    };

    onChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    };

    onSubmit = e => {
        e.preventDefault();
        const errors = {
            username: [],
            password: []
        };
        this.setState(
            {
                errors
            }
        );
        if( !this.state.form.username.length ) {
            errors.username.push('Username can\'t be empty');
        }
        if( !this.state.form.password.length ) {
            errors.password.push('Password can\'t be empty');
        }
        if( this.state.form.username.length < 3 ) {
            errors.username.push('Username should be 3 chars at least');
        }
        if( this.state.form.password.length < 8 ) {
            errors.password.push('Password should be 8 chars at least');
        }
        if( !this.state.form.password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]$/).length ) {
            errors.password.push('Password should contain at least one letter and one number');
        }
        this.setState(
            {
                errors
            }
        );
        if(!errors.length) {
            this.props.onSubmit();
        }
    };

    render() {
        return (
            <form onSubmit={ this.onSubmit }>
                {this.props.children(this.state.form, this.props.onSubmit, this.onChange, this.state.errors)}
            </form>
        );
    }
}

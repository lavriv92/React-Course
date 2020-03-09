import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                username: '',
                password: ''
            },
            onSubmit: this.props.onSubmit,
            onChange: this.onChange,
            errors: { username: [], password: [] }
        };
    }
    
    onChange = event => {
        switch (event.target.name) {
            case 'username':
                this.setState({
                    form: {
                        username: event.target.value,
                        password: this.state.form.password
                    }
                });
                break;
            case 'password':
                this.setState({
                    form: {
                        username: this.state.form.username,
                        password: event.target.value
                    }
                });
                break;
            default:
                break;
        }
    };
    
    handleSubmit = event => {
        event.preventDefault();

        if (!this.state.form.username || !this.state.form.password) {
           const errors = {
               username: !this.state.form.username ? ['Enter username please'] : '',
               password: !this.state.form.password ? ['Enter password please'] : ''
           };
           this.setState({ errors });
        }

        if (this.state.form.username && this.state.form.password) {
            this.setState({
                errors: { username: [], password: [] }
            });

            this.props.onSubmit(this.state.form);
        }
    };
    
    render() {
        return (
            <div className="form-class">
                <form onSubmit={this.handleSubmit}>
                    { this.props.children(this.state) }
                </form>
            </div>
        );
    }
}

export default Form;

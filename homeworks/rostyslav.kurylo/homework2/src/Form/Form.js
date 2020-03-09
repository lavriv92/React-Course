import React from 'react';
import PropTypes from 'prop-types';

export default class Form extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func,
        formConfig: PropTypes.object.isRequired,
        children: PropTypes.func.isRequired
    };

    state = {
        form: {},
        errors: {}
    };

    onChange = e => {
        e.preventDefault();

        const {name, value} = e.target;

        console.log(name, value);
        this.setState(state => {
            return {
                form: {
                    ...state.form,
                    [name]: value
                }
            };
        })
    };

    onSubmit = e => {
        e.preventDefault();

        if (this.isValid()) {
            this.props.onSubmit(this.state.form);
            this.resetForm();
        }
    };

    validate = () => {
        // TODO: implement me
        return true;
    };

    isValid = () => {
        // TODO: implement me
        return true;
    };

    resetForm = () => {
        // TODO: implement me
    };

    render() {
        return <form onSubmit={this.onSubmit}>
            {this.props.children({
                    form: this.state.form,
                    onSubmit: this.onSubmit,
                    onChange: this.onChange,
                    errors: this.state.errors
                }
            )}
        </form>

    }
}
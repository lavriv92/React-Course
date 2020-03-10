import React from 'react';
import PropTypes from 'prop-types';
import FormValidator from './FormValidator';

export default class Form extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func,
        formConfig: PropTypes.object.isRequired,
        children: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            form: this.initFormFields(),
            errors: {}
        };
    }

    initFormFields = () => {
        let form = {};
        this.props.formConfig.keys.forEach(fieldName => form[fieldName] = '');

        return form;
    };

    onChange = e => {
        e.preventDefault();

        const {name, value} = e.target;

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

    validate = (fieldName, value) => {
        const rules = this.props.formConfig.validations[fieldName];

        if (!rules) {
            return true;
        }

        let errors = [];

        const validationResult = Object.keys(rules).every(rule => {
            if (FormValidator.hasOwnProperty(rule)) {
                const isValid = FormValidator[rule](value, rules[rule]);

                if (isValid) {
                    errors = [];
                } else {
                    errors.push(this.props.formConfig.errorMessages[rule](fieldName, rules[rule]));
                }

                return isValid;
            }
            return false;
        });

        this.setState(state => {
            return {
                errors: {
                    ...state.errors,
                    [fieldName]: errors
                }
            };
        });

        return validationResult;
    };

    isValid = () => {
        const result = this.props.formConfig.keys.filter(fieldName => {
            return !this.validate(fieldName, this.state.form[fieldName]);
        });
        return !result.length;
    };

    resetForm = () => {
        this.setState(state => {
            return {
                form: this.initFormFields()
            };
        })
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

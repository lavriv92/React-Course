import React from 'react';
import Form from './Form/Form';
import './App.css';

function App() {
    let formData = {};
    const handleSubmit = data => {
        formData = data;
        console.log('Form was successfully submitted!', formData);
    };
    const formConfig = {
        keys: ['username', 'password'],
        validations: {
            username: {
                isRequired: true
            },
            password: {
                isRequired: true,
                minLength: 5
            }
        },
        errorMessages: {
            isRequired: fieldName => `[${fieldName}] is required.`,
            minLength: (fieldName, minLength) => `[${fieldName}] should be at least ${minLength} symbols.`
        }
    };

    return (
        <div className="App">
            <Form onSubmit={handleSubmit} formConfig={formConfig}>{
                ({form, onSubmit, onChange, errors}) => {
                    return <>
                        <div className="form-control">
                            <input name="username"
                                   placeholder="User name"
                                   onChange={onChange}
                                   value={form.username}/>
                            {errors.username && errors.username.map(
                              (err, index) => <div key={index} className="error-message">{err}</div>)}
                        </div>
                        <div className="form-control">
                            <input type="password"
                                   placeholder="Password"
                                   name="password"
                                   onChange={onChange}
                                   value={form.password}/>
                            {errors.username && errors.password.map(
                              (err, index) => <div key={index} className="error-message">{err}</div>)}
                        </div>
                        <div className="form-control">
                            <button type="submit">Submit</button>
                        </div>
                    </>
                }
            }
            </Form>
        </div>
    );
}

export default App;

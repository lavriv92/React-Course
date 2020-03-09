import React from 'react';
import Form from "../Form/Form";

class FormContainer extends React.Component {

    handleSubmit = form => {
        console.log(form);
    };
    
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                {({ form, onSubmit, onChange, errors }) => {
                    return (
                        <div>
                            <div>
                                <input name="username" onChange={onChange} value={form.username} />
                                { errors.username ? (errors.username.map(err => <div key={Math.random()}>{err}</div>)) : '' }
                            </div>
                            <div>
                                <input type="password" name="password" onChange={onChange} value={form.password} />
                                { errors.password ? errors.password.map(err => <div key={Math.random()}>{err}</div>) : '' }
                            </div>
                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    )
                }}
            </Form>
        );
    }
}

export default FormContainer;

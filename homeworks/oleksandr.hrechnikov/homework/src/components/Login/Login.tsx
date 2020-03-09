import React, { Component } from 'react';
import { Form, State as FormState } from '../Form/Form';

export type State = {
  username: string,
  password: string,
}

export default class Login extends Component<any, State> {
  readonly state: Readonly<State> = {
    username: '',
    password: ''
  }

  handleSubmit = (formState: FormState) => {
    if (formState.isValid) {
      alert(`username: ${formState.form['username']}\n`+
            `password: ${formState.form['password']}`)
    } else {
      alert('Form is invalid');
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} data={this.state}>
        {({ form, onSubmit, onChange, errors }) => {
          return (
            <>
              <div>
                <input name="username" onChange={onChange} value={form.username} />
                {errors.username && errors.username.map(err => <div>{err}</div>)}
              </div>
              <div>
                <input type="password" name="password" onChange={onChange} value={form.password} />
                {errors.password && errors.password.map(err => <div>{err}</div>)}
              </div>
              <div>
                <button type="submit" >Submit</button>
              </div>
            </>
          );
        }}
      </Form>
    )
  }
}
import * as React from 'react';
import { CustomForm } from '../form/form';
import Button from 'react-bootstrap/Button';

declare var Object: any;

type Props = {
  onLogin: any
};
type State = {
  form: {
    username: string
    password: string
  },
  errors: any
};

export class LoginForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      form: {
        username: '',
        password: ''
      },
      errors: {}
    };
  }

  isValidInput(inputValue: string): boolean {
    // @ts-ignore
    return inputValue.length >= 3;
  }

  handleSubmit(): void {
    if(Object.keys(this.state.errors).length === 0) {
      this.props.onLogin(this.state.form);
    }
  }

  onChange(e: any): void {
    e.preventDefault();
    const inputName = e.target.name;
    const inputValue =  e.target.value;
    let errors: any = this.state.errors;

    if(!this.isValidInput(inputValue)) {
      errors[inputName] = [`${inputName} not valid, min 3 characters`];
    } else {
      delete errors[inputName];
    }

    this.setState((state: any) => {
      state = {
        ...state,
        errors
      };

      state.form[inputName] = inputValue;

      return state
    });
  }

  render() {
    return <CustomForm onSubmit={() => this.handleSubmit()} form={this.state.form} errors={this.state.errors}>
      {
        ({ form, errors }: {form: any, errors: any}) => {
          return <>
            <div>
              <input name="username" onChange={(e: any) => this.onChange(e)} value={form.username} />
              { errors.username && errors.username.map((err: any) => <div>{err}</div>) }
            </div>
            <div>
              <input type="password" name="password" onChange={(e: any) => this.onChange(e)} value={form.password} />
              {errors.password && errors.password.map((err: any) => <div>{err}</div>)}
            </div>
            <div>
              <Button className="logout-button" variant="success" type="submit">
                Submit
              </Button>
            </div>
          </>
        }
      }
    </CustomForm>
  };
}

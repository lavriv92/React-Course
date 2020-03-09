import React, { Component, ChangeEvent, FormEvent } from 'react';

export interface IFormProps extends State {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

type Props = {
  data: { [key: string]: string },
  onSubmit: (form: State) => void,
  children: (formProps: IFormProps) => React.ReactNode
}

export type State = {
  form: { [key: string]: string },
  errors: { [key: string]: string[] },
  isValid: boolean
}

export class Form extends Component<Props, State> implements Omit<IFormProps, keyof State> {
  static defaultProps: Partial<Props> = {
    data: {}
  }
  readonly state: Readonly<State> = {
    form: this.props.data,
    errors: {},
    isValid: false
  }

  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.name as keyof State;
    const fieldValue = event.target.value;

    this.setState((prevState: Readonly<State>, prevProps: Readonly<Props>)=>{
      let form: { [key: string]: string } = {};
      let errors: { [key: string]: string[] } = {};

      form[fieldName] = fieldValue
      if (fieldValue) {
        errors[fieldName] = []
      }
      return { form: { ...prevState.form, ...form }, errors: { ...prevState.errors, ...errors} }
    });
  }

  onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let errors: { [key: string]: string[] } = {};
    let isValid = true;

    for (let field in this.state.form) {
      if (!this.state.form[field]) {
        errors[field] = [`${field} is required filed`];
        isValid = false
      };
    }

    this.setState((prevState: State, prevProps: Props) => ({
      errors: { ...prevState.errors, ...errors },
      isValid
    }), () => {
      this.props.onSubmit(this.state);
    });

  }

  render() {
    const formProps: IFormProps = {
      ...this.state,
      onChange: this.onChange,
      onSubmit: this.onSubmit
    };

    return (
      <form onSubmit={this.onSubmit} >
        {this.props.children(formProps)}
      </form>
    );
  }
}
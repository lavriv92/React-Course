import React, { Component, ChangeEvent, FormEvent } from 'react';

export interface IFormProps<T> extends State<T> {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

type Props<T> = {
  data: { [key in keyof T]: T[key] },
  onSubmit: (form: State<T>) => void,
  children: (formProps: IFormProps<T>) => React.ReactNode
}

export type State<T> = {
  form: { [key in keyof T]: T[key] },
  errors: { [key in keyof T]: string[] },
  isValid: boolean
}

export class Form<T> extends Component<Props<T>, State<T>> implements Omit<IFormProps<T>, keyof State<T>> {
  static defaultProps = {
    data: {}
  }
  readonly state: Readonly<State<T>> = {
    form: this.props.data,
    errors: {} as { [key in keyof T]: string[] },
    isValid: false
  }

  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.name as keyof State<T>;
    const fieldValue = event.target.value;

    this.setState((prevState: Readonly<State<T>>, prevProps: Readonly<Props<T>>)=>{
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

    this.setState((prevState: State<T>, prevProps: Props<T>) => ({
      errors: { ...prevState.errors, ...errors },
      isValid
    }), () => {
      this.props.onSubmit(this.state);
    });

  }

  render() {
    const formProps: IFormProps<T> = {
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
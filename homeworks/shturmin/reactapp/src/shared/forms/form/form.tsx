// @flow
import * as React from 'react';

type Props = {
  onSubmit: any;
  children: any;
  form: any;
  errors: any;
  onChange?: any;
};
type State = {

};

export class CustomForm extends React.Component<Props, State> {
  private fromElement: any;

  static defaultProps = {};

  componentDidMount(): void {
    this.fromElement.addEventListener('submit', (event: any) => {
      event.preventDefault();

      this.props.onSubmit(event);
    })
  }

  render() {
    return (
      <form ref={(el: any) => this.fromElement = el}>
        {this.props.children({
          ...this.props
        })}
      </form>
    );
  };
};

import React, { Component, ChangeEvent, FormEvent } from 'react';
import IPosition from '../position.model'

type Props = {
  onPositionsAdded: (positions: IPosition) => void
}

type State = {
  [key in keyof IPosition]: IPosition[key]
}

export default class PositionAdd extends Component<Props, State> {
  static defaultProps: Partial<Props> = {};

  readonly state: Readonly<State> = {
    id: this.makeid(10),
    value: Math.floor(Math.random() * 721) - 360
  };

  addPosition = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.props.onPositionsAdded(this.state)

    this.setState({ id: this.makeid(10), value: Math.floor(Math.random() * 721) - 360 });
  }

  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.name as keyof State;
    const state: Partial<State> = {
      [fieldName]: event.target.value
    };
    this.setState(state as State);
  }

  private makeid(length: number): string {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }


  render() {
    return (
      <form onSubmit={this.addPosition}>
        <p>
          <label >
            ID:
            <input type="text" name="id" value={this.state.id} onChange={this.onChange} />
          </label>
        </p>
        <p>
          <label >
            Position:
            <input type="number" name="value" value={this.state.value} onChange={this.onChange} />
          </label>
        </p>
        <button type="submit" value="Submit">Add Positions</button>
      </form>
    );
  }
}

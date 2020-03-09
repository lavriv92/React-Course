import React, { Component, MouseEvent } from 'react';

type Props = {
  positionId: string;
  onPositionRemoved: (positionKey: string) => void
}

export default class PositionRemove extends Component<Props> {
  static defaultProps: Partial<Props> = {};

  onClick = (event: MouseEvent<HTMLButtonElement>) => {
    this.props.onPositionRemoved(this.props.positionId)
  }

  render() {
    return (
      <button onClick={this.onClick}>x</button>
    );
  }
}

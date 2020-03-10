import React, { Component, ChangeEvent } from 'react';
import * as Position from '../Positions';
import { CounterSlider } from '../CounterSlider/CounterSlider';
import IPosition from '../Positions/position.model';

type Props = {
  position: number,
  min: number,
  max: number,
  animationTimeout: number
  children: (counter: State) => void
}
type State = {
  currentPositionValue: number,
  prevPositionValue: number,
  positionList: IPosition[],
  replayPositions: boolean
}

export default class CounterManager extends Component<Props, State> {
  static defaultProps: Partial<Props> = {
    position: 50,
    animationTimeout: 1000
  };

  readonly state: Readonly<State> = {
    currentPositionValue: this.props.position,
    prevPositionValue: 0,
    positionList: [],
    replayPositions: false
  };

  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>) {
    if (this.state.replayPositions && this.state.positionList.length) {
      const positionList = [...this.state.positionList];
      const position = positionList.shift();
      setTimeout(() => {
        this.setState((prevState: Readonly<State>, props: Readonly<Props>) => {
          const state: Partial<State> = {
            prevPositionValue: prevState.currentPositionValue,
            currentPositionValue: position?.value,
            positionList,
            replayPositions: positionList.length > 0 ? true : false
          }

          return state as State;
        });
      }, this.props.animationTimeout);
    }
  }

  onChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();

    this.setState((prevState: Readonly<State>, props: Props) => {
      const state: Partial<State> = {
        prevPositionValue: prevState.currentPositionValue,
        currentPositionValue: Number(event.target.value),
      };

      return state as State;
    });
  }

  addPositions = (position: IPosition) => {
    this.setState((prevState: Readonly<State>, props: Props) => {
      const state: Partial<State> = {
        positionList: [...prevState.positionList, position]
      };

      return state as State;
    });
  }

  removePosition = (positionKey: string) => {
    let { positionList } = this.state;
    positionList = positionList.filter(position => position.id !== positionKey);

    this.setState({
      positionList: positionList
    });
  }

  private replayPositions = () => {
    this.setState({
      replayPositions: true
    });
  }

  render() {
    return (
      <div>
        {this.props.children(this.state)}
        <CounterSlider id="counter" name="counter" type="range" step="2"
          min={this.props.min} max={this.props.max}
          value={this.state.currentPositionValue}
          onChange={this.onChange} />
        <Position.List
          positions={this.state.positionList}
          add={
            <Position.Add onPositionsAdded={this.addPositions} />
          }
          remove={(key: string) =>
            <Position.Remove positionId={key} onPositionRemoved={this.removePosition} />
          } />
        <button onClick={this.replayPositions}>Replay positions</button>
      </div>
    );
  }
}

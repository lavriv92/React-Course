import React, { Component } from 'react';
import './RotateImage.css'
import styled, { keyframes, Keyframes, StyledComponent } from 'styled-components'

type Props = {
  src: string,
  currentPositionValue: number,
  prevPositionValue: number,
  maxPosition: number,
  children: never[] | ((direction: string) => any);
}

export default class RotateImage extends Component<Props> {
  static defaultProps: Partial<Props> = {
    currentPositionValue: 0,
    prevPositionValue: 0,
    children: ()=>{}
  }

  animateImage(): StyledComponent<'img', any, {}, never> {
    const { currentPositionValue, prevPositionValue, maxPosition } = this.props;
    const direction = currentPositionValue > prevPositionValue ? 'normal' : 'reverse';
    const speed = (maxPosition - Math.abs(currentPositionValue)) / 100;
    
    return styled.img`animation: ${this.rotateKeyframes(currentPositionValue)} infinite ${speed}s linear ${direction}};`;
  }

  private rotateKeyframes(position: number): Keyframes {
    return keyframes`
      from {
        transform: rotate(${Number(position)}deg);
      }
      to {
        transform: rotate(${Number(position) + 360}deg);
      }
    `;
  }

  render() {
    const AnimatedImage = this.animateImage();
    return (
      <div>
        <AnimatedImage src={this.props.src} className="App-logo" alt="logo" />
        {(this.props.children as Function)(this.props.currentPositionValue > this.props.prevPositionValue ? 'normal' : 'reverse')}
      </div>);
  }
}

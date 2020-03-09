import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
const defaultProps: Partial<Props> = {
  value: 50
};
export const CounterSlider = (props: Props) => {
  return (
    <div>
      <input {...props} />
      <p><label htmlFor={props.name}>{props.children}Counter: {props.value}</label></p>
    </div>
  );
}

CounterSlider.defaultProps = defaultProps;

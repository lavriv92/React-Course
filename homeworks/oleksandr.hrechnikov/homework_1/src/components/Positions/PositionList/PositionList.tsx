import React from 'react';
import IPosition from '../position.model';

type Props = {
  positions: IPosition[];
  add: JSX.Element;
  remove: (key: string) => JSX.Element;
}

export default (props: Props) => {
  return (
    <div>
      {props.positions.map(position =>
        <p key={position.id}> <span>{position.id}:</span> {position.value} {props.remove(position.id)}</p>
      )}
      <div>
        {props.add}
      </div>
    </div>
  )
};

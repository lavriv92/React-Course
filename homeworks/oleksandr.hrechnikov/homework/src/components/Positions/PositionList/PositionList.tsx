import React from 'react';
import IPosition from '../position.model';

type Props = {
  positions: IPosition[];
  add: React.ReactNode;
  remove: (key: string) => React.ReactNode;
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

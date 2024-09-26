import React from 'react';

// Styled Component Common Import
import {
  QuadriShape,
} from './styled';



export interface IProps {
  dimension?: any;
  distance?: any;
  color?: any;
}



const Quadrilateral: React.FC<IProps> = (props: IProps) => {
  return (

    <QuadriShape
      style={{
        right: (props.dimension || 200) - (props.distance || 20),
        top: -10,
        left: -4,
        borderBottomWidth: props.dimension + 12 || 200,
        borderBottomColor: props.color || 'black',
      }}
    />

  );
};



export default Quadrilateral;

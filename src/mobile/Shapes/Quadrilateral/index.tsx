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



const Quadrilateral: React.FC<IProps> = (props) => {
  return (

    <QuadriShape
      style={{
        right: (props.dimension || 200) - (props.distance || 20),
        borderBottomWidth: props.dimension || 200,
        borderBottomColor: props.color || 'black',
      }}
    />

  );
};



export default Quadrilateral;

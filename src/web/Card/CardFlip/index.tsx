import React from 'react';

// import { Container } from './styles';



export interface IProps {
  style?: any;
  children?: any;
}



const FlipCard: React.FC<IProps> = (props) => {
  return (

    <div style={{
      position: 'relative',
    }}>
      {props.children.map((item: any, index: number) => {
        if (index === 0) {
          return item;
        }
      })}
    </div>

  );
};



export default FlipCard;

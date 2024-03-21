import React from 'react';

import {
  CardButton,
  CardView,
} from './styled';



export interface IProps {
  shadow?: boolean;
  backgroundColor?: string;

  borderLeftColor?: string;
  borderLeftStyle?: string;
  borderLeftWidth?: number;
  borderRadius?: number;

  style?: any;

  onMouseEnter?: any;
  onMouseLeave?: any;
  onMouseOut?: any;

  onPress?: any;
  children?: any;
}



const Card: React.FC<IProps> = (props) => {
  function renderCardButton() {
    return (

      <CardButton
        {...props}
        shadow={props.shadow}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        backgroundColor={props.backgroundColor}
        borderLeftColor={props.borderLeftColor}
        borderLeftStyle={props.borderLeftStyle}
        borderLeftWidth={props.borderLeftWidth}
        borderRadius={props.borderRadius}
        style={props.style}
        onClick={props.onPress}>
        {props.children}
      </CardButton>

    );
  };


  function renderCardView() {
    return (

      <CardView
        {...props}
        shadow={props.shadow}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        backgroundColor={props.backgroundColor}
        borderLeftColor={props.borderLeftColor}
        borderLeftStyle={props.borderLeftStyle}
        borderLeftWidth={props.borderLeftWidth}
        borderRadius={props.borderRadius}
        style={props.style}>
        {props.children}
      </CardView>

    );
  };



  return props.onPress && props.onPress !== null ? renderCardButton() : renderCardView();
};



Card.defaultProps = {
  shadow: true,
  borderRadius: 0,
  backgroundColor: '#000000',
};



export default Card;

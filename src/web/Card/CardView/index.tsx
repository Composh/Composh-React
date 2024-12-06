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



const Card: React.FC<IProps> = (props: IProps) => {
  const backgroundColorReceived = props.backgroundColor || '#000000';
  const shadowReceived = props.shadow === false ? false : true;



  function renderCardButton() {
    return (

      <CardButton
        {...props}
        shadow={shadowReceived}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        backgroundColor={backgroundColorReceived}
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
        shadow={shadowReceived}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        backgroundColor={backgroundColorReceived}
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



export default Card;

import React from 'react';

import {
  DefaultContentTitle,
} from './styled';



export interface IProps {
  color?: any;
  backgroundColor?: any;
  content?: any;
  contentStyle?: any;
};



const DefaultContent: React.FC<IProps> = (props) => {
  const {
    content,
    contentStyle,
  } = props;


  return (
    <DefaultContentTitle
      backgroundColor={props.backgroundColor || '#ffffff'}
      color={props.backgroundColor || '#000000'}
      style={contentStyle}>

      {content}

    </DefaultContentTitle>
  );
};



export default DefaultContent;

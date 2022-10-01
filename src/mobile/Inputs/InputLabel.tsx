import React from 'react';

import {
  LabelStyle,
} from './styled';



interface IProps {
  labelText?: string;
  labelColor?: string;
  labelStyle?: any;
}



const InputLabel: React.FC<IProps> = (props: any) => {
  return (

    <LabelStyle
      style={[
        {
          color: props.labelColor,
        },
        props.labelStyle,
      ]}>
      {props.labelText}
    </LabelStyle>

  );
};



export default InputLabel;

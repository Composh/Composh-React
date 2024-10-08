import React from 'react';

import {
  LabelViewStyle,
  LabelStyle,
  LabelRequiredStyle,
} from './styled';



export interface IProps {
  required?: boolean;
  requiredText?: string;
  requiredColor?: string;
  labelText: string;
  labelColor?: string;
  labelStyle?: any;
}



const InputLabel: React.FC<IProps> = (props: IProps) => {
  const className = { ...props } as any;


  return (

    <LabelViewStyle
      className={className?.className}>

      <LabelStyle
        color={props.labelColor}
        style={props.labelStyle}>
        {props.labelText}
      </LabelStyle>


      {props.required && (
        <LabelRequiredStyle
          color={props.requiredColor}>
          {props.requiredText || 'Required'}
        </LabelRequiredStyle>
      )}

    </LabelViewStyle>

  );
};



export default InputLabel;

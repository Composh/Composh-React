import React from 'react';

import InputHelp from '../InputHelp';
import InputLabel from '../InputLabel';

import {
  InputsContainer,
  InputViewStyle,
} from './styled';



export interface IProps {
  style?: any;

  className?: any;

  disabled?: boolean;
  noShadow?: boolean;

  required?: boolean;
  requiredText?: string;
  requiredColor?: string;

  noWrap?: boolean;
  backgroundColor?: string;
  borderColor?: string | null;
  borderWidth?: number;

  labelText?: string;
  labelColor?: string;

  // Props Text
  countTextValue?: string;

  // Props Help
  noHelp?: boolean;
  helpText?: any;
  helpColor?: string;

  // Props Count Letter
  noCount?: boolean;
  countLimit?: any; // string | number;
  countColor?: string;

  children?: any;
}



const InputView: React.FC<IProps> = (props: IProps) => {
  const className = { ...props } as any;
  const opacityValue = props.disabled ? 0.5 : 1;



  return (

    <InputsContainer
      className={className?.className}
      style={props.style}>

      {props.labelText && (
        <InputLabel
          required={props.required}
          requiredText={props.requiredText}
          requiredColor={props.requiredColor}
          requiredStyle={{
            opacity: opacityValue,
          }}

          labelText={props.labelText}
          labelColor={props.labelColor}
          labelStyle={{
            opacity: opacityValue,
          }}
        />
      )}



      <InputViewStyle
        noShadow={props.noShadow}
        wrapView={props.children ? !props.noWrap : undefined}
        // multiline={props.multiline}
        backgroundColor={props.backgroundColor || '#ffffff'}
        borderColor={props.borderColor ? props.borderColor : undefined}
        borderWidth={props.borderWidth || 1}
        opacity={opacityValue}>


        {props.children}

      </InputViewStyle>



      {(props.helpText || props.countLimit) && (!props.noHelp || !props.noCount) && (
        <InputHelp
          helpTextValue={props.countTextValue}
          noHelp={props.noHelp}

          helpText={props.helpText}
          helpTextStyle={{
            color: props.helpColor,
            opacity: opacityValue,
          }}

          noCount={props.noCount}
          countLimit={props.countLimit}
          helpCountStyle={{
            color: props.countColor,
            opacity: opacityValue,
          }}
        />
      )}

    </InputsContainer>

  );
};



export default InputView;

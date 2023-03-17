import React from 'react';

import InputHelp from './InputHelp';
import InputLabel from './InputLabel';

import {
  InputsContainer,
  InputViewStyle,
} from './styled';



export interface IProps {
  disabled?: boolean;
  noShadow?: boolean;

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
  const opacityValue = props.disabled ? 0.5 : 1;



  return (

    <InputsContainer>

      {props.labelText && (
        <InputLabel
          labelText={props.labelText}
          labelStyle={{
            color: props.labelColor,
            opacity: opacityValue,
          }}
        />
      )}



      <InputViewStyle
        noShadow={props.noShadow}
        wrap={props.children ? !props.noWrap : undefined}
        // multiline={props.multiline}
        backgroundColor={props.backgroundColor}
        borderColor={props.borderColor ? props.borderColor : undefined}
        borderWidth={props.borderWidth}
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



InputView.defaultProps = {
  noShadow: false,

  backgroundColor: 'white',
  borderWidth: 1,
};



export default InputView;

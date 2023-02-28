import React,
{
  useEffect,
  useState,
} from 'react';


import InputHelp from './InputHelp';
import InputLabel from './InputLabel';
import InputText from './InputText';

import {
  InputsContainer,
} from './styled';



export interface IProps {
  // Props Input State
  password?: boolean;

  disabled?: boolean;

  multiline?: boolean;
  autoCorrect?: boolean;
  autoCapitalize?: any;

  type:
  'NONE' |
  'CNPJ' |
  'CPF' |
  'CREDITCARD' |
  'CUSTOM' |
  'DATETIME' |
  'MONEY' |
  'NUMBER' |
  'PHONE' |
  'TEXT' |
  'ZIPCODE' |
  'EMAIL' |
  'PASSWORD' |
  'URL';

  noShadow?: boolean;
  backgroundColor?: string;
  borderColor?: string | null;
  borderWidth?: number;

  inputTextCenter?: boolean;
  inputTextColor?: string;


  // Placeholder
  placeholderText?: string;
  placeholderColor?: string;
  placeholderTextColor?: string;


  // Props Icon
  iconLeft?: object;
  iconRight?: object;

  iconPasswordOn?: object;
  iconPasswordOff?: object;


  // Props Help
  noHelp?: boolean;
  helpText?: any;
  helpColor?: string;


  // Props Count Letter
  noCount?: boolean;
  countLimit?: any; // string || number;
  countColor?: string;


  // Props Label
  value?: string;
  labelText?: string;
  labelColor?: string;


  noWrap?: boolean;
  children?: any;
  // style?: any;


  // onChange?(event: any): any;
  // onBlur?(event: any): any;

  onChange?: any;
  onBlur?: any;


  // mask?(event: any): any;
  mask?: any;
  options?: any;

  lowercase?: boolean;
}



const Input: React.FC<IProps> = (props: any) => {
  const opacityValue = props.disabled ? 0.5 : 1;

  const [text, setText] = useState(props.value ? props.value : '');



  const textInputComponent = (
    <InputText
      password={props.password}
      disabled={props.disabled}
      multiline={props.multiline}
      autoCorrect={props.autoCorrect}
      autoCapitalize={props.autoCapitalize}
      type={props.type}
      options={props.options}
      noShadow={props.noShadow}
      backgroundColor={props.backgroundColor}
      borderColor={props.borderColor}
      borderWidth={props.borderWidth}
      inputTextCenter={props.inputTextCenter}
      inputTextColor={props.inputTextColor}
      placeholderText={props.placeholderText}
      placeholderColor={props.placeholderColor}
      placeholderTextColor={props.placeholderTextColor}
      iconLeft={props.iconLeft}
      iconRight={props.iconRight}
      iconPasswordOn={props.iconPasswordOn}
      iconPasswordOff={props.iconPasswordOff}
      countLimit={props.countLimit}
      value={text}
      noWrap={props.noWrap}
      onChange={props.onChange}
      returnChange={(textReturned: string) => {
        setText(textReturned);
      }}
      onBlur={props.onBlur}>

      {props.children}

    </InputText>
  );



  useEffect(() => {
    setText(props.value);
  }, [props.value]);



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


      {textInputComponent}


      {(props.helpText || props.countLimit) && (!props.noHelp || !props.noCount) && (
        <InputHelp
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

          text={text}
        />
      )}

    </InputsContainer>

  );
};



Input.defaultProps = {
  autoCorrect: false,
  noShadow: false,

  autoCapitalize: 'none',
  helpColor: 'gray',
  countColor: 'gray',
  backgroundColor: 'white',
  placeholderColor: 'black',
  inputTextColor: 'black',
  borderWidth: 1,
};



export default Input;

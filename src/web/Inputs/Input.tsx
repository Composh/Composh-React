import React,
{
  useState,
  useEffect,
} from 'react';

import EyeOffImage from './eye_off_black.png';
import EyeOnImage from './eye_on_black.png';

import InputHelp from './InputHelp';
import InputLabel from './InputLabel';

import {
  InputsContainer,
  IconContent,
  InputViewStyle,
  TextInputStyle,
  ShowPasswordStyle,
  IconEye,
} from './styled';



export interface IProps {
  // Props Input State
  editable?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  keyboardType?: any;
  autoCorrect?: boolean;
  autoCapitalize?: any;

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

  password?: boolean;
  viewPass?: boolean;


  noWrap?: boolean;
  children?: any;
  // style?: any;


  onChange?(event: any): any;
  onBlur?(event: any): any;
  mask?(event: any): any;

  lowercase?: boolean;
}



const Input: React.FC<IProps> = (props: any) => {
  const opacityValue = props.disabled ? 0.5 : 1;

  const [isPassword, setIsPassword] = useState(false);

  const [text, setText] = useState(props.value ? props.value : '');
  const [height, setHeight] = useState(0);



  useEffect(() => {
    setIsPassword(props.password);
  }, [props.password]);



  const viewPassElement = props.password && props.viewPass && (
    <ShowPasswordStyle
      onClick={() => !props.disabled && setIsPassword(!isPassword)}>
      {isPassword
        ? props.iconPasswordOn || (
          <IconEye
            alt={'eye'}
            src={EyeOnImage}
          />
        )
        : props.iconPasswordOff || (
          <IconEye
            alt={'eye'}
            src={EyeOffImage}
          />
        )}
    </ShowPasswordStyle>
  );



  // function returnEditable() {
  //   let booleanDisabled: boolean;

  //   if (props.disabled) {
  //     booleanDisabled = !props.disabled;
  //   }
  //   else if (!props.disabled && (props.editable || !props.editable)) {
  //     booleanDisabled = props.editable;
  //   }
  //   else {
  //     booleanDisabled = true;
  //   }

  //   return booleanDisabled;
  // }


  const textInputContent = (
    <TextInputStyle
      // {...props}
      // returnKeyType={'next'}
      inputTextCenter={props.inputTextCenter}

      disabled={props.disabled}
      // editable={returnEditable()}
      autoCorrect={props.autoCorrect}
      autoCapitalize={props.autoCapitalize}

      style={{
        height: Math.max(28, height),
        color: props.inputTextColor,
        opacity: opacityValue,
        // borderRadius: 5,
      }}

      maxLength={isNaN(props.countLimit)
        ? null
        : props.countLimit
      }

      multiline={props.password ? false : props.multiline}

      onChange={(changeText) => {
        const newText = changeText.target.value;

        if (props?.onChange) {
          props.onChange(newText);
        }

        setText(newText);
      }}

      onBlur={props.onBlur}

      // onContentSizeChange={(event) => {
      //   setHeight(event.nativeEvent.contentSize.height);
      // }}
      // eslint-disable-next-line no-extra-boolean-cast
      value={text} // value={!!props.mask ? props.mask(text) : text}

      placeholder={props.placeholderText}
      // keyboardType={props.password ? 'default' : props.keyboardType}
      type={isPassword ? 'password' : 'text'} // secureTextEntry={isPassword}
    // placeholderTextColor={props.placeholderColor}
    // underlineColorAndroid={'transparent'}
    />
  );



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
        wrap={props.children && !props.noWrap}
        multiline={props.multiline}
        backgroundColor={props.backgroundColor}
        borderColor={props.borderColor}
        borderWidth={props.borderWidth}
        opacity={opacityValue}>


        {props.iconLeft && (
          <IconContent>
            {props.iconLeft}
          </IconContent>
        )}


        {props.children
          ? props.children
          : textInputContent
        }


        {props.iconRight && !props.viewPass && (
          <IconContent>
            {props.iconRight}
          </IconContent>
        )}


        {viewPassElement}

      </InputViewStyle>



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
  editable: true,
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

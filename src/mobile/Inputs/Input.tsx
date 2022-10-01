import React,
{
  useState,
  useEffect,
} from 'react';

import {
  IconViewPassword,
} from '../Icons';

import InputHelp from './InputHelp';
import InputLabel from './InputLabel';

import {
  InputsContainer,
  IconContent,
  InputViewStyle,
  TextInputStyle,
  ShowPasswordStyle,
  TextInputMaskStyle,
} from './styled';



interface IProps {

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


  onChange?(e): any;
  onBlur?(e): any;
  mask?(e): any;
  onlyDisplay?: boolean
  maskDisplay?: string;

  lowercase?: boolean;
}



const Input: React.FC<IProps> = (props: any) => {
  const opacityValue = !props.disabled ? 1 : 0.5;

  const [isPassword, setIsPassword] = useState(false);

  const [text, setText] = useState(props.value ? props.value : '');
  const [displayWithMask, setDisplayWithMask] = useState(!!props.mask);
  const [height, setHeight] = useState(0);



  useEffect(() => {
    setIsPassword(props.password);
  }, [props.password]);



  const viewPassElement = props.password && props.viewPass && (
    <ShowPasswordStyle
      disabled={props.disabled}
      onPress={() => setIsPassword(!isPassword)}>
      <IconViewPassword
        isPassword={isPassword}
        color={props.placeholderColor}
      />
    </ShowPasswordStyle>
  );



  function returnEditable() {
    let booleanDisabled: boolean;

    if (props.disabled) {
      booleanDisabled = !props.disabled;
    }
    else if (!props.disabled && (props.editable || !props.editable)) {
      booleanDisabled = props.editable;
    }
    else {
      booleanDisabled = true;
    }

    return booleanDisabled;
  }

  const textInputContent = (
    <TextInputStyle
      // {...props}
      // returnKeyType={'next'}
      editable={returnEditable()}
      autoCorrect={props.autoCorrect}
      autoCapitalize={props.autoCapitalize}

      style={[
        {
          height: Math.max(28, height),
          color: props.inputTextColor,
          opacity: opacityValue,
          borderRadius: 5,
        },
        props.inputTextCenter && {
          textAlign: 'center',
        },
      ]}

      maxLength={isNaN(props.countLimit)
        ? null
        : props.countLimit
      }

      multiline={props.password ? false : props.multiline}

      onChangeText={(changeText) => {
        const newText = changeText;

        if (props?.onChange)
          props.onChange(changeText);

        setText(newText);
      }}

      onBlur={props.onBlur}

      onContentSizeChange={(event) => {
        setHeight(event.nativeEvent.contentSize.height);
      }}
      // value={displayWithMask ? props.mask(text) : text}
      value={text}
      placeholder={props.placeholderText}
      keyboardType={props.password ? 'default' : props.keyboardType}
      secureTextEntry={isPassword}
      placeholderTextColor={props.placeholderColor}
      underlineColorAndroid={'transparent'}
    />
  );


  const textInputMaskContent = (
    <TextInputMaskStyle
      // {...props}
      // returnKeyType={'next'}
      editable={returnEditable()}
      autoCorrect={props.autoCorrect}
      autoCapitalize={props.autoCapitalize}

      style={[
        {
          height: Math.max(28, height),
          color: props.inputTextColor,
          opacity: opacityValue,
          borderRadius: 5,
        },
        props.inputTextCenter && {
          textAlign: 'center',
        },
      ]}

      maxLength={isNaN(props.countLimit)
        ? null
        : props.countLimit
      }

      multiline={props.password ? false : props.multiline}

      onChangeText={(changeText, extracted) => {
        const newText = changeText;

        if (props?.onChange && props.onlyDisplay)
          props.onChange(extracted);
        else if (props?.onChange)
          props.onChange(changeText);

        setText(newText);
      }}

      onBlur={props.onBlur}

      onContentSizeChange={(event) => {
        setHeight(event.nativeEvent.contentSize.height);
      }}
      // value={displayWithMask ? props.mask(text) : text}
      value={text}
      mask={props.maskDisplay}
      placeholder={props.placeholderText}
      keyboardType={props.password ? 'default' : props.keyboardType}
      secureTextEntry={isPassword}
      placeholderTextColor={props.placeholderColor}
      underlineColorAndroid={'transparent'}
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
        style={[
          props.multiline && {
            paddingTop: 4,
            paddingBottom: 4,
          },
          {
            backgroundColor: props.backgroundColor,
            opacity: opacityValue,
          },
          props.children && !props.noWrap && {
            flexWrap: 'wrap',
          },
          props.borderColor && {
            borderColor: props.borderColor,
            borderWidth: props.borderWidth,
          },
          !props.noShadow && {
            elevation: 2,

            shadowOffset: { width: 2, height: 2 },
            shadowColor: 'gray',
            shadowRadius: 2,
            shadowOpacity: 0.3,
          },
        ]}>


        {props.iconLeft && (
          <IconContent
            style={{
              marginLeft: 6,
              marginRight: 6,
            }}>
            {props.iconLeft}
          </IconContent>
        )}


        {props.children
          ? props.children
          : (props.maskDisplay ? textInputMaskContent : textInputContent)
        }


        {props.iconRight && !props.viewPass && (
          <IconContent
            style={{
              marginLeft: 6,
              marginRight: 6,
            }}>
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

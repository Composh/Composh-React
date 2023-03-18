import React,
{
  useEffect,
  useState,
} from 'react';

import EyeOffImage from './eye_off_black.png';
import EyeOnImage from './eye_on_black.png';

import {
  returnTypeMaskEnum,
  returnTypeInput,
  returnIfHasMask,
  inputUpdateValue,
} from './functions.config';

import InputView from './InputView';

import {
  IconContent,
  TextInputStyle,
  ShowPasswordStyle,
  IconEye,
} from './styled';

import {
  EEnumType,
  ETypesInput,
} from './types.enum';



export interface IProps {
  disabled?: boolean;
  noShadow?: boolean;
  password?: boolean;

  type:
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

  options?: any;

  autoCapitalize?: any;
  autoCorrect?: boolean;
  noWrap?: boolean;
  backgroundColor?: string;
  borderColor?: string | null;
  borderWidth?: number;

  // Props Icon
  iconLeft?: any;
  iconRight?: any;

  iconPasswordOn?: any;
  iconPasswordOff?: any;

  // Placeholder
  placeholderText?: string;
  placeholderColor?: string;
  placeholderTextColor?: string;

  inputTextCenter?: boolean;
  inputTextColor?: string;

  labelText?: string;
  labelColor?: string;

  value?: any;

  noHelp?: boolean;
  helpText?: any;
  helpColor?: string;

  // Props Count Letter
  noCount?: boolean;
  countLimit?: any; // string | number;
  countColor?: string;

  onChange?: any; // onChange?(event: any): any;
  onBlur?: any; // onBlur?(event: any): any;



  lowercase?: boolean;
  children?: any;
  multiline?: boolean;
}



const InputTextText: React.FC<IProps> = (props: IProps) => {
  const opacityValue = props.disabled ? 0.5 : 1;
  const enumPasswordInput = ETypesInput().PASSWORD;

  const correctAutoProps = props.autoCorrect ? 'on' : 'off'; // Web
  // const correctAutoProps = props.autoCorrect ? true' : false; // Mobile


  const [textValue, setTextValue] = useState<string>('');
  const [rawValue, setRawValue] = useState<string>('');

  const [isPassword, setIsPassword] = useState<boolean>(false);

  const [typeKeyboard, setTypeKeyboard] = useState<string>('');

  const [hasMask, setHasMask] = useState<boolean>(false);
  const [typeMaskInput, setTypeMaskInput] = useState<any>(null);



  function _onChangeText(newText: string) {
    if (hasMask) {
      const masketToRawText = newText?.replace(/[\u0300-\u036f]/g, '').replaceAll(/\s/g, '').replace(/[^\w\s]/gi, '').trim();
      setRawValue(masketToRawText);

      const { maskedText, rawText } = inputUpdateValue(hasMask, typeMaskInput, props.options, masketToRawText);

      if (props.onChange) {
        if (props.type === EEnumType.CREDITCARD) {
          const rawNumberJoin = rawText.join('');
          setRawValue(rawNumberJoin);
          setTextValue(maskedText);
          props.onChange(rawNumberJoin, maskedText);
        }

        else if (props.type === EEnumType.DATETIME) {
          const dateReturn = maskedText.replace(/[^\w\s]/gi, '');
          setRawValue(dateReturn);
          setTextValue(maskedText);
          props.onChange(dateReturn, maskedText);
        }

        // else if (props.type === EEnumType.MONEY) {
        //   const textWithoutSpecialChars = rawText.replace(/[^\w\s]/gi, '');
        //   props.onChange(rawText, maskedText);
        //   props.returnChange(textWithoutSpecialChars);
        // }

        else {
          const textWithoutSpecialChars = String(rawText).replace(/[^\w\s]/gi, '');
          setRawValue(textWithoutSpecialChars);
          setTextValue(maskedText);
          props.onChange(textWithoutSpecialChars, maskedText);
        }
      }
    }
    else {
      const itemToReturn = String(newText);

      if (props.onChange) {
        setRawValue(itemToReturn);
        setTextValue(itemToReturn);
        props.onChange(itemToReturn);
      }
    }
  }


  function defineInputMask() {
    const hasMaskReturn = returnIfHasMask(props.type);
    setHasMask(hasMaskReturn);

    const valueMask = returnTypeMaskEnum(props.type);
    setTypeMaskInput(valueMask);
  }


  function defineInputKeyboardType() {
    const varTypeInput = returnTypeInput(props.type);
    setTypeKeyboard(varTypeInput);
  }


  function viewPassElement() {
    return (

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
          )
        }
      </ShowPasswordStyle>

    );
  }



  useEffect(() => {
    setIsPassword(props.password || false);
  }, [props.password]);


  useEffect(() => {
    defineInputMask();
    defineInputKeyboardType();
  }, [props.type]);


  useEffect(() => {
    if (hasMask || props.value) {
      _onChangeText(props.value || textValue);
    }
    else {
      _onChangeText('');
    }
  }, [props.value, rawValue]);



  return (

    <InputView
      disabled={props.disabled}
      noShadow={props.noShadow}

      noWrap={props.noWrap}
      backgroundColor={props.backgroundColor}
      borderColor={props.borderColor}
      borderWidth={props.borderWidth}

      labelText={props.labelText}
      labelColor={props.labelColor}

      // Props Text
      countTextValue={rawValue}

      // Props Help
      noHelp={props.noHelp}
      helpText={props.helpText}
      helpColor={props.helpColor}

      // Props Count Letter
      noCount={props.noCount}
      countLimit={props.countLimit}
      countColor={props.countColor}>


      {props.iconLeft && (
        <IconContent>
          {props.iconLeft}
        </IconContent>
      )}



      <TextInputStyle
        // {...props}
        // returnKeyType={'next'}
        inputTextCenter={props.inputTextCenter}

        disabled={props.disabled}
        // editable={returnEditable()}
        autoCorrect={correctAutoProps}
        autoCapitalize={props.autoCapitalize}

        style={{
          // height: Math.max(28, height),
          color: props.inputTextColor,
          opacity: opacityValue,
          // borderRadius: 5,
        }}

        maxLength={typeof props.countLimit !== 'number' || hasMask
          ? undefined
          : props.countLimit
        }

        multiline={props.password ? false : props.multiline}

        onChange={(event) => {
          _onChangeText(event.target.value);
        }}

        onBlur={props.onBlur}

        // onContentSizeChange={(event) => {
        //   setHeight(event.nativeEvent.contentSize.height);
        // }}
        // eslint-disable-next-line no-extra-boolean-cast

        value={textValue}

        placeholder={props.placeholderText}

        // keyboardType={props.password ? 'default' : typeKeyboard}
        type={isPassword ? enumPasswordInput : typeKeyboard} // secureTextEntry={isPassword}

      // placeholderTextColor={props.placeholderTextColor}
      // underlineColorAndroid={'transparent'}
      />



      {props.iconRight && !props.password && (
        <IconContent>
          {props.iconRight}
        </IconContent>
      )}



      {props.password && viewPassElement()}

    </InputView>

  );
};



InputTextText.defaultProps = {
  autoCorrect: false,
  noShadow: false,

  autoCapitalize: 'none',
  backgroundColor: 'white',
  placeholderColor: 'black',
  inputTextColor: 'black',
  borderWidth: 1,
};



export default InputTextText;

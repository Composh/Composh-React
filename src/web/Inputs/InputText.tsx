import React,
{
  useEffect,
  useState,
} from 'react';

import MaskResolver from '../../plugins/Mask/mask-resolver';

import EyeOffImage from './eye_off_black.png';
import EyeOnImage from './eye_on_black.png';

import {
  IconContent,
  InputViewStyle,
  TextInputStyle,
  ShowPasswordStyle,
  IconEye,
} from './styled';

import {
  EEnumType,
  ETypesInput,
  ETypesMasks,
} from './types.enum';



export interface IProps {
  password: boolean;

  disabled?: boolean;

  multiline?: boolean;
  autoCorrect?: boolean;
  autoCapitalize?: any;

  type: EEnumType;

  noShadow?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  borderWidth?: number;

  inputTextCenter?: boolean;
  inputTextColor?: string;


  // Placeholder
  placeholderText?: string;
  placeholderColor?: string;
  placeholderTextColor?: string;


  // Props Icon
  iconLeft?: any;
  iconRight?: any;

  iconPasswordOn?: any;
  iconPasswordOff?: any;


  // Props Count Letter
  countLimit?: any; // string || number;


  // Props Label
  value: string;


  noWrap?: boolean;
  children?: any;


  // onChange?(event: any): any;
  // onBlur?(event: any): any;

  onChange?: any;
  onBlur?: any;


  // mask?(event: any): any;
  options?: any;


  returnChange?: any;
}



const InputText: React.FC<IProps> = (props) => {
  const [isPassword, setIsPassword] = useState(false);
  const opacityValue = props.disabled ? 0.5 : 1;

  const correctAutoProps = props.autoCorrect ? 'on' : 'off'; // Web: 'on' or 'off', mobile 'true' or 'false


  const [hasMask, setHasMask] = useState(false);

  const [text, setText] = useState(props.value ? props.value : '');
  const [typeKeyboard, setTypeKeyboard] = useState('');

  // const [height, setHeight] = useState(0);

  const [_maskHandler, _setmaskHandler] = useState<any>(null);

  const enumTypesInput = ETypesInput();
  const itemsTypeMas = ETypesMasks();



  function _getDefaultValue(value: any) {
    if (value === '' || value === null || value === undefined) {
      return '';
    }

    return value;
  }

  function _getOptions() {
    return props.options;
  }


  function getRawValueFor(value: any) {
    const rawValue = _maskHandler.getRawValue(
      _getDefaultValue(value),
      _getOptions(),
    );
    return rawValue;
  }


  function _getMaskedValue(value: any) {
    if (hasMask) {
      const defaultValue = _getDefaultValue(value);
      if (defaultValue === '') {
        return '';
      }

      const maskValue = _maskHandler.getValue(
        defaultValue,
        _getOptions());
      return maskValue;
    }
    else {
      return value;
    }
  }


  function inputUpdateValue(text: any) {
    if (hasMask) {
      const maskedText = _getMaskedValue(text);
      const rawText = getRawValueFor(maskedText);

      const objectUpdateValue = {
        maskedText,
        rawText,
      };
      return objectUpdateValue;
    }
    else {
      return text;
    }
  }


  function _onChangeText(newText: string) {
    // const newText = newText.target.value;

    if (hasMask) {
      const { maskedText, rawText } = inputUpdateValue(newText);

      if (props?.onChange) {
        if (props.type === EEnumType.CREDITCARD) {
          const rawNumberJoin = rawText.join('');
          props.onChange(rawNumberJoin, maskedText);
          props.returnChange(rawNumberJoin);
        }

        else if (props.type === EEnumType.DATETIME) {
          const dateReturn = maskedText.replace(/[^\w\s]/gi, '');
          props.onChange(dateReturn, maskedText);
          props.returnChange(dateReturn);
        }

        // else if (props.type === EEnumType.MONEY) {
        //   const textWithoutSpecialChars = rawText.replace(/[^\w\s]/gi, '');
        //   props.onChange(rawText, maskedText);
        //   props.returnChange(textWithoutSpecialChars);
        // }

        else {
          const textWithoutSpecialChars = String(rawText).replace(/[^\w\s]/gi, '');
          props.onChange(textWithoutSpecialChars, maskedText);
          props.returnChange(textWithoutSpecialChars);
        }
      }
    }
    else {
      const itemToReturn = inputUpdateValue(newText);
      if (props?.onChange) {
        props.onChange(itemToReturn);
        props.returnChange(itemToReturn);
      }
    }

    setText(newText);
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


  function defineIfHasMask() {
    if ([
      EEnumType.CNPJ,
      EEnumType.CPF,
      EEnumType.CREDITCARD,
      EEnumType.CUSTOM,
      EEnumType.DATETIME,
      EEnumType.MONEY,
      EEnumType.PHONE,
      EEnumType.ZIPCODE,
    ].includes(props.type)) {
      let varTypeEnum = '';
      setHasMask(true);

      switch (props.type) {
        case EEnumType.CNPJ:
          varTypeEnum = itemsTypeMas.CNPJ;
          break;

        case EEnumType.CPF:
          varTypeEnum = itemsTypeMas.CPF;
          break;

        case EEnumType.CREDITCARD:
          varTypeEnum = itemsTypeMas.CREDIT_CARD;
          break;

        case EEnumType.CUSTOM:
          varTypeEnum = itemsTypeMas.CUSTOM;
          break;

        case EEnumType.DATETIME:
          varTypeEnum = itemsTypeMas.DATE_TIME;
          break;

        case EEnumType.MONEY:
          varTypeEnum = itemsTypeMas.MONEY;
          break;

        case EEnumType.PHONE:
          varTypeEnum = itemsTypeMas.PHONE;
          break;

        case EEnumType.ZIPCODE:
          varTypeEnum = itemsTypeMas.ZIP_CODE;
          break;

        default:
          varTypeEnum = 'none';
          break;
      }

      _setmaskHandler(MaskResolver.resolve(varTypeEnum));
    }
    else {
      setHasMask(false);
    }
  }


  function defineInputKeyboardType() {
    let varTypeInput = '';

    switch (props.type) {
      case EEnumType.CNPJ:
      case EEnumType.CPF:
      case EEnumType.CREDITCARD:
      case EEnumType.CUSTOM:
      case EEnumType.DATETIME:
      case EEnumType.MONEY:
      case EEnumType.NUMBER:
        varTypeInput = enumTypesInput.NUMBER;
        break;

      case EEnumType.PHONE:
        varTypeInput = enumTypesInput.TEL_PHONE;
        break;

      case EEnumType.TEXT:
      case EEnumType.ZIPCODE:
        varTypeInput = enumTypesInput.TEXT;
        break;

      case EEnumType.EMAIL:
        varTypeInput = enumTypesInput.EMAIL;
        break;

      case EEnumType.PASSWORD:
        varTypeInput = enumTypesInput.TEXT;
        break;

      case EEnumType.URL:
        varTypeInput = enumTypesInput.URL;
        break;

      default:
        varTypeInput = 'default';
        break;
    }

    setTypeKeyboard(varTypeInput);
  }



  useEffect(() => {
    setIsPassword(props.password);
  }, [props.password]);


  useEffect(() => {
    defineIfHasMask();
    defineInputKeyboardType();
  }, [props.type]);


  useEffect(() => {
    // if (!([
    //   EEnumType.DATETIME,
    //   EEnumType.CREDITCARD,
    // ].includes(props.type))) {
    setText(props.value);
    _onChangeText(props.value);
    // }
  }, [props.value]);



  return (

    <InputViewStyle
      noShadow={props.noShadow}
      wrap={props.children ? !props.noWrap : undefined}
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
        : (
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

            maxLength={isNaN(props.countLimit) || hasMask
              ? null
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

            value={_getMaskedValue(text)}

            placeholder={props.placeholderText}

            // keyboardType={props.password ? 'default' : typeKeyboard}
            type={isPassword ? enumTypesInput.PASSWORD : typeKeyboard} // secureTextEntry={isPassword}

          // placeholderTextColor={props.placeholderTextColor}
          // underlineColorAndroid={'transparent'}
          />
        )
      }


      {props.iconRight && !props.password && (
        <IconContent>
          {props.iconRight}
        </IconContent>
      )}


      {props.password && viewPassElement()}

    </InputViewStyle>

  );
};



InputText.defaultProps = {
  autoCorrect: false,
  noShadow: false,

  autoCapitalize: 'none',
  backgroundColor: 'white',
  placeholderColor: 'black',
  inputTextColor: 'black',
  borderWidth: 1,
};



export default InputText;

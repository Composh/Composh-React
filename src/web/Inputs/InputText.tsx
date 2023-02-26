import React,
{
  useEffect,
  useState,
} from 'react';

import MaskResolver from '../Mask/mask-resolver';

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
  autoCorrect?: string; // boolean
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
  value?: string;


  noWrap?: boolean;
  children?: any;


  // onChange?(event: any): any;
  // onBlur?(event: any): any;

  // FIXME onChange, não está resetando ao usar a função de reset do formik
  onChange?: any;
  onBlur?: any;


  // mask?(event: any): any;
  mask?: any;
  options?: any;


  returnChange?: any;
}



const InputText: React.FC<IProps> = (props) => {
  const [isPassword, setIsPassword] = useState(false);
  const opacityValue = props.disabled ? 0.5 : 1;


  const [hasMask, setHasMask] = useState(false);

  const [text, setText] = useState(props.value ? props.value : '');
  const [typeMask, setTypeMask] = useState('');
  const [typeKeyboard, setTypeKeyboard] = useState('');

  const [height, setHeight] = useState(0);

  const [_maskHandler, _setmaskHandler] = useState<any>(null);



  function _getDefaultValue(value: any) {
    if (value === undefined || value === null) {
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


  function _onChangeText(text: any) {
    const newText = text.target.value;

    if (hasMask) {
      const { maskedText, rawText } = inputUpdateValue(newText);
      if (props?.onChange) {
        props.onChange(rawText, maskedText);
        props.returnChange(rawText);
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
      const itemsTypeMas = ETypesMasks();

      let asfasfsa = '';
      setHasMask(true);

      switch (props.type) {
        case EEnumType.CNPJ:
          asfasfsa = itemsTypeMas.CNPJ;
          break;

        case EEnumType.CPF:
          asfasfsa = itemsTypeMas.CPF;
          break;

        case EEnumType.CREDITCARD:
          asfasfsa = itemsTypeMas.CREDIT_CARD;
          break;

        case EEnumType.CUSTOM:
          asfasfsa = itemsTypeMas.CUSTOM;
          break;

        case EEnumType.DATETIME:
          asfasfsa = itemsTypeMas.DATE_TIME;
          break;

        case EEnumType.MONEY:
          asfasfsa = itemsTypeMas.MONEY;
          break;

        case EEnumType.PHONE:
          asfasfsa = itemsTypeMas.PHONE;
          break;

        case EEnumType.ZIPCODE:
          asfasfsa = itemsTypeMas.ZIP_CODE;
          break;

        default:
          asfasfsa = 'none';
          break;
      }

      _setmaskHandler(MaskResolver.resolve(asfasfsa));
    }
    else {
      setHasMask(false);
      setTypeMask('none');
    }
  }


  function defineInputKeyboardType() {
    const enumTypesInput = ETypesInput();

    let bbbbbbb = '';

    switch (props.type) {
      case EEnumType.CNPJ:
      case EEnumType.CPF:
      case EEnumType.CREDITCARD:
      case EEnumType.CUSTOM:
      case EEnumType.DATETIME:
      case EEnumType.MONEY:
      case EEnumType.NUMBER:
        bbbbbbb = enumTypesInput.NUMBER;
        break;

      case EEnumType.PHONE:
        bbbbbbb = enumTypesInput.TEL_PHONE;
        break;

      case EEnumType.TEXT:
      case EEnumType.ZIPCODE:
        bbbbbbb = enumTypesInput.TEXT;
        break;

      case EEnumType.EMAIL:
        bbbbbbb = enumTypesInput.EMAIL;
        break;

      case EEnumType.PASSWORD:
        bbbbbbb = enumTypesInput.PASSWORD;
        break;

      case EEnumType.URL:
        bbbbbbb = enumTypesInput.URL;
        break;

      default:
        bbbbbbb = 'default';
        break;
    }

    setTypeKeyboard(bbbbbbb);
  }



  useEffect(() => {
    setIsPassword(props.password);
  }, [props.password]);


  useEffect(() => {
    defineIfHasMask();
    defineInputKeyboardType();
  }, [props.type]);



  return (

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
        : (
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
              _onChangeText(changeText);
            }}

            onBlur={props.onBlur}

            // onContentSizeChange={(event) => {
            //   setHeight(event.nativeEvent.contentSize.height);
            // }}
            // eslint-disable-next-line no-extra-boolean-cast

            value={_getMaskedValue(text)}

            placeholder={props.placeholderText}

            // keyboardType={props.password ? 'default' : typeKeyboard}
            type={isPassword ? 'password' : typeKeyboard} // secureTextEntry={isPassword}

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
  autoCorrect: '', // false,
  noShadow: false,

  autoCapitalize: 'none',
  backgroundColor: 'white',
  placeholderColor: 'black',
  inputTextColor: 'black',
  borderWidth: 1,
};



export default InputText;

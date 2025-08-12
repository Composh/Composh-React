import React,
{
  useEffect,
  useState,
} from 'react';

import {
  returnTypeMaskEnum,
  returnTypeInput,
  returnIfHasMask,
  inputUpdateValue,
} from '../functions.config';

import InputView from '../InputView';

import {
  EMaskEnumType,
  ETypesInput,
} from '../types.enum';

import EyeOffImage from './eye_off_black.png';
import EyeOnImage from './eye_on_black.png';

import {
  IconContent,
  TextInputStyle,
  ShowPasswordStyle,
  IconEye,
} from './styled';



export interface IProps {
  className?: any;
  style?: any;

  disabled?: boolean;
  noShadow?: boolean;
  password?: boolean;

  required?: boolean;
  requiredText?: string;
  requiredColor?: string;

  type: EMaskEnumType | string;

  options?: any;

  autoCapitalize?: any;
  autoCorrect?: boolean;
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

  onChange?: (raw: any, masked?: any) => void;
  onBlur?: any; // onBlur?(event: any): any;

  multiline?: boolean;
}



const InputText: React.FC<IProps> = (props: IProps) => {
  const className = { ...props } as any;

  const opacityValue = props.disabled ? 0.5 : 1;
  const enumPasswordInput = ETypesInput().PASSWORD;

  const correctAutoProps = props.autoCorrect ? 'on' : 'off'; // Web
  // const correctAutoProps = props.autoCorrect ? true : false; // Mobile


  const [isPassword, setIsPassword] = useState<boolean>(props.password || false);
  const [typeKeyboard, setTypeKeyboard] = useState<any | string>('');

  const [hasMask, setHasMask] = useState<boolean>(returnIfHasMask(props.type));
  const [typeMaskInput, setTypeMaskInput] = useState<any>(returnTypeMaskEnum(props.type));



  function _onChangeText(newText: string) {
    if (!props.onChange) {
      return;
    };

    if (!hasMask) {
      if (props.type === EMaskEnumType.NUMBER) {
        // Permite apenas números inteiros ou decimais (com um ponto opcional)
        if (!/^\d*\.?\d*$/.test(newText)) {
          return;
        };
      }

      props.onChange(newText);
      return;
    }

    // O operador de coalescência nula (?? '') garante que, se newText for null ou undefined, ele será substituído por uma string vazia ('').
    // O método toString() converte qualquer valor de newText para string antes de aplicar os métodos replace.
    const masketToRawText = (newText ?? '').toString()
      .replace(/[\u0300-\u036f]/g, '')  // Remove acentos
      .replace(/\s/g, '')               // Remove espaços
      .replace(/[^\w\s]/gi, '')         // Remove caracteres não alfanuméricos
      .trim();

    const { maskedText, rawText } = inputUpdateValue(hasMask, typeMaskInput, props.options, masketToRawText);

    if (props.type === EMaskEnumType.CREDITCARD) {
      const rawNumberJoin = rawText.join('');
      props.onChange(rawNumberJoin, maskedText);
      return;
    }

    if (props.type === EMaskEnumType.DATETIME) {
      const dateReturn = maskedText.replace(/[^\w\s]/gi, '');
      props.onChange(dateReturn, maskedText);
      return;
    }

    if (props.type === EMaskEnumType.MONEY) {
      const textWithoutSpecialChars = String(maskedText).replace(/\D/g, '');

      if (props.countLimit && typeof props.countLimit === 'number' && textWithoutSpecialChars.length > props.countLimit) {
        return;
      }

      props.onChange(textWithoutSpecialChars, maskedText);
      return;
    }

    const textWithoutSpecialChars = String(rawText).replace(/[^\w\s]/gi, '');
    props.onChange(textWithoutSpecialChars, maskedText);
  }


  function defineInputKeyboardType() {
    const varTypeInput = returnTypeInput(props.type);
    setTypeKeyboard(varTypeInput);
  }


  function viewPassElement() {
    return (

      <ShowPasswordStyle
        onClick={() => !props.disabled && setIsPassword(!isPassword)}>
        {/* {isPassword
          ? props.iconPasswordOn || <IconEye alt="eye" src={EyeOnImage} />
          : props.iconPasswordOff || <IconEye alt="eye" src={EyeOffImage} />
        } */}
        {isPassword
          ? props.iconPasswordOn
          : props.iconPasswordOff
        }
      </ShowPasswordStyle>

    );
  }



  useEffect(() => {
    setIsPassword(props.password || false);
  }, [props.password]);


  useEffect(() => {
    setHasMask(returnIfHasMask(props.type));
    setTypeMaskInput(returnTypeMaskEnum(props.type));

    defineInputKeyboardType();
  }, [props.type]);



  return (

    <InputView
      className={className?.className}
      style={props.style}

      disabled={props.disabled}
      noShadow={props.noShadow}

      // Required Text
      required={props.required}
      requiredText={props.requiredText}
      requiredColor={props.requiredColor}

      noWrap={false}
      backgroundColor={props.backgroundColor || '#ffffff'}
      borderColor={props.borderColor}
      borderWidth={props.borderWidth || 1}

      labelText={props.labelText}
      labelColor={props.labelColor}

      // Props Text
      countTextValue={props.value}

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
        paddingLeft={props.iconRight}
        paddingRight={props.iconLeft}

        inputTextCenter={props.inputTextCenter}

        disabled={props.disabled} // Web
        // editable={!props.disabled} // Mobile
        // selectTextOnFocus={!props.disabled} // Mobile

        autoCorrect={correctAutoProps}
        autoCapitalize={props.autoCapitalize || 'none'}

        style={{
          // height: Math.max(28, height),
          color: props.inputTextColor || '#000000',
          opacity: opacityValue,
          // borderRadius: 5,
        }}

        maxLength={typeof props.countLimit !== 'number' || hasMask
          ? undefined
          : props.countLimit
        }

        multiline={props.password ? false : props.multiline}

        onChange={(event: any) => { // Web
          _onChangeText(event.target.value);
        }}
        // onChangeText={(eventText) => { // Mobile
        //   _onChangeText(eventText);
        // }}

        onBlur={props.onBlur}

        // onContentSizeChange={(event) => {
        //   setHeight(event.nativeEvent.contentSize.height);
        // }}


        value={props.value || ''}

        placeholder={props.placeholderText}
        placeholderTextColor={props.placeholderTextColor}

        type={isPassword ? enumPasswordInput : typeKeyboard} // Web
      // keyboardType={props.password ? 'default' : typeKeyboard} // Mobile
      // secureTextEntry={isPassword} // Mobile

      // underlineColorAndroid={'transparent'} // Mobile
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



export default InputText;

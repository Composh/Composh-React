import {
  TextInputMaskTypeProp,
} from './input.types';

import MaskResolver from './mask-resolver';



// Option prop of TextInputMask.
export interface ITextInputMaskOptionProp {
  // Money type.
  precision?: number
  separator?: string
  delimiter?: string
  unit?: string
  suffixUnit?: string
  zeroCents?: boolean

  // Phone type.
  withDDD?: boolean
  dddMask?: string
  maskType?: 'BRL' | 'INTERNATIONAL'

  // Datetime type.
  format?: string

  // Credit card type.
  obfuscated?: boolean
  issuer?: 'visa-or-mastercard' | 'diners' | 'amex'

  // Custom type.
  mask?: string
  validator?: (value: string, settings: ITextInputMaskOptionProp) => boolean
  getRawValue?: (value: string, settings: ITextInputMaskOptionProp) => any
  translation?: { [s: string]: (val: string) => string | null | undefined }
}



class Mask {
  static toMask(
    type: TextInputMaskTypeProp,
    value: string,
    options?: ITextInputMaskOptionProp,
  ): string {
    return MaskResolver.resolve(type).getValue(value, options);
  }


  static toRawValue(
    type: TextInputMaskTypeProp,
    maskedValue: string,
    options?: ITextInputMaskOptionProp,
  ): string {
    return MaskResolver.resolve(type).getRawValue(maskedValue, options);
  }


  static isValid(
    type: TextInputMaskTypeProp,
    value: string,
    options?: ITextInputMaskOptionProp,
  ): boolean {
    return MaskResolver.resolve(type).validate(value, options);
  }


  // getMask(type, value, options) {
  //   return MaskResolver.resolve(type).getMask(value, options);
  // }
}



export default Mask;

// Type prop of TextInputMask.
export type TextInputMaskTypeProp =
  | 'credit-card'
  | 'cpf'
  | 'cnpj'
  | 'zip-code'
  | 'only-numbers'
  | 'money'
  | 'cel-phone'
  | 'datetime'
  | 'custom';



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



// MaskService
export namespace Mask {
  function toMask(
    type: string,
    value: string,
    options?: ITextInputMaskOptionProp
  ): string;
  function toRawValue(
    type: string,
    maskedValue: string,
    options?: ITextInputMaskOptionProp
  ): string;
  function isValid(
    type: string,
    value: string,
    options?: ITextInputMaskOptionProp
  ): boolean;
}

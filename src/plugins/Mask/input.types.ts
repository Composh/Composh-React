export type TextInputMaskTypeProp =
  | 'cnpj'
  | 'cpf'
  | 'credit-card'
  | 'custom'
  | 'datetime'
  | 'phone'
  | 'money'
  // | 'only-numbers'
  | 'zip-code';


export type TextIssuerCrediCard =
  | 'visa'
  | 'mastercard'
  | 'dinersclub'
  | 'amex';



export enum EIssuerCrediCard {
  OTHER = 'other',
  VISA = 'visa',
  MASTERCARD = 'mastercard',
  DINERSCLUB = 'dinersclub',
  AMEX = 'amex',
};

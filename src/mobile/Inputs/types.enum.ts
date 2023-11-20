export enum EEnumType {
  NONE = 'NONE',
  CNPJ = 'CNPJ',
  CPF = 'CPF',
  CREDITCARD = 'CREDITCARD',
  CUSTOM = 'CUSTOM',
  DATETIME = 'DATETIME',
  MONEY = 'MONEY',
  NUMBER = 'NUMBER',
  PHONE = 'PHONE',
  TEXT = 'TEXT',
  ZIPCODE = 'ZIPCODE',
  EMAIL = 'EMAIL',
  PASSWORD = 'PASSWORD',
  URL = 'URL',
}

class ETypesMasksClass {
  CNPJ!: string;
  CPF!: string;
  CREDIT_CARD!: string;
  CUSTOM!: string;
  DATE_TIME!: string;
  MONEY!: string;
  PHONE!: string;
  ZIP_CODE!: string;
}

class ETypesInputClass {
  EMAIL!: string;
  NUMBER!: string;
  PASSWORD!: string;
  TEL_PHONE!: string;
  TEXT!: string;
  URL!: string;
}



export function ETypesMasks() {
  const objectReturn: ETypesMasksClass = {
    CNPJ: 'cnpj',
    CPF: 'cpf',
    CREDIT_CARD: 'credit-card',
    CUSTOM: 'custom',
    DATE_TIME: 'datetime',
    MONEY: 'money',
    PHONE: 'phone',
    ZIP_CODE: 'zip-code',
  };

  return objectReturn;
}


export function ETypesInput() {
  // // Web
  // const objectJS: ETypesInputClass = {
  //   EMAIL: 'email',
  //   NUMBER: 'text', // number
  //   PASSWORD: 'password',
  //   TEL_PHONE: 'tel',
  //   TEXT: 'text',
  //   URL: 'url',
  // };

  // Mobile
  const objectNative: ETypesInputClass = {
    EMAIL: 'email-address',
    NUMBER: 'numeric',
    PASSWORD: 'password', // FIXME
    TEL_PHONE: 'phone-pad',
    TEXT: 'default',
    URL: 'url',
  };

  return objectNative;
}

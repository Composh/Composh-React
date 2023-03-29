import {
  EIssuerCrediCard,
} from '../input.types';

import BaseMask from './_base.mask';
import CustomMask from './custom.mask';


const CREDIT_CARD_MASKS = [
  {
    name: EIssuerCrediCard.OTHER,
    regular: '9999 9999 9999 9999',
    obfuscated: '9999 **** **** 9999',
  },
  {
    name: EIssuerCrediCard.VISA,
    regular: '9999 9999 9999 9999',
    obfuscated: '9999 **** **** 9999',
  },
  {
    name: EIssuerCrediCard.MASTERCARD,
    regular: '9999 9999 9999 9999',
    obfuscated: '9999 **** **** 9999',
  },
  {
    name: EIssuerCrediCard.DINERSCLUB,
    regular: '9999 999999 9999',
    obfuscated: '9999 ****** 9999',
  },
  {
    name: EIssuerCrediCard.AMEX,
    regular: '9999 999999 99999',
    obfuscated: '9999 ****** 99999',
  },
];

const CREDIT_CARD_SETTINGS = {
  obfuscated: false,
  issuer: 'other',
};

const MASK_TRANSLATION = {
  '*': (val: any) => null,
};



export default class CreditCardMask extends BaseMask {
  static getType() {
    return 'credit-card';
  }



  getValue(value: any, settings: any) {
    const selectedMask = this.getMask(value, settings);
    return CustomMask.shared.getValue(value, {
      mask: selectedMask,
      translation: MASK_TRANSLATION,
    });
  }



  validate(value: string | any[], settings: any) {
    if (value) {
      const selectedMask = this.getMask(value, settings) as string;
      return value.length === selectedMask?.length;
    }

    return true;
  }



  getRawValue(maskedValue: string, settings: any) {
    if (!maskedValue) return [];

    return maskedValue.split(' ').map((val: string) => {
      if (!val) return '';

      return val.trim();
    });
  }



  getMask(value: any, settings: {}) {
    const mergedSettings = super.mergeSettings(CREDIT_CARD_SETTINGS, settings) as typeof CREDIT_CARD_SETTINGS;
    const selectedMask = this._selectMask(mergedSettings.issuer, mergedSettings.obfuscated);

    return selectedMask;
  }



  _selectMask(issuer: any, obfuscated: any) {
    const mask = CREDIT_CARD_MASKS.find((item) => item.name === issuer);

    if (!mask) {
      const noMask: any = CREDIT_CARD_MASKS.find((item) => item.name === EIssuerCrediCard.OTHER);
      return obfuscated ? noMask.obfuscated : noMask.regular;
    }

    return obfuscated ? mask.obfuscated : mask.regular;
  }
}

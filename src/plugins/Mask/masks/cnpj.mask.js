/* eslint-disable no-eval */
/* eslint-disable no-new-wrappers */
/* eslint-disable no-var */
import BaseMask from './_base.mask';
import CustomMask from './custom.mask';

export const CNPJ_MASK = '99.999.999/9999-99';
// export const CNPJ_MASK = {
//   regular: '99.999.999/9999-99',
//   obfuscated: '**.***.***/9999-99',
// };

// const CNPJ_SETTINGS = {
//   obfuscated: false,
// };

// const MASK_TRANSLATION = {
//   '*': (val) => null,
// };

const MASK_OPTIONS = { mask: CNPJ_MASK };



export const validateCnpj = (cnpj) => {
  var valida = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  var dig1 = Number();
  var dig2 = Number();
  var i = 0;

  var exp = /\.|\-|\//g;
  cnpj = cnpj.toString().replace(exp, '');
  var digito = Number(eval(cnpj.charAt(12) + cnpj.charAt(13)));

  for (i = 0; i < valida.length; i++) {
    dig1 += i > 0 ? cnpj.charAt(i - 1) * valida[i] : 0;
    dig2 += cnpj.charAt(i) * valida[i];
  }
  dig1 = dig1 % 11 < 2 ? 0 : 11 - (dig1 % 11);
  dig2 = dig2 % 11 < 2 ? 0 : 11 - (dig2 % 11);

  return dig1 * 10 + dig2 === digito;
};



export default class CnpjMask extends BaseMask {
  static getType() {
    return 'cnpj';
  }



  getValue(value, settings) {
    return CustomMask.shared.getValue(value, MASK_OPTIONS);
  }
  // getValue(value, settings) {
  //   let selectedMask = this.getMask(value, settings);
  //   return CustomMask.shared.getValue(value, {
  //     mask: selectedMask,
  //     translation: MASK_TRANSLATION,
  //   });
  // }



  validate(value, settings) {
    if (value === '') return false;

    if (value.length !== 14) return false;

    // Eliminates known invalid CNPJs
    if (/^(\d)\1+$/.test(value)) return false;

    return validateCnpj(value);
  }



  getRawValue(maskedValue, settings) {
    return super.removeNotNumbers(maskedValue);
  }



  getMask(value, settings) {
    return CNPJ_MASK;
  }
  // getMask(value, settings) {
  //   let mergedSettings = super.mergeSettings(CNPJ_SETTINGS, settings);
  //   const selectedMask = this._selectMask(mergedSettings.obfuscated);

  //   return selectedMask;
  // }



  // _selectMask(obfuscated) {
  //   const maskType = obfuscated ? 'obfuscated' : 'regular';

  //   return CNPJ_MASK[maskType];
  // }
}

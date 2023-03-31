import BaseMask from './_base.mask';
import CustomMask from './custom.mask';

const ZIP_CODE_MASK = '99999-999';

const MASK_OPTIONS = {
  mask: ZIP_CODE_MASK,
};



export const validateZipCode = (cep) => {
  // Remove any non-numeric character from zip code
  cep = cep.replace(/[^\d]/g, '');

  // Verify that the zip code has the correct number of digits
  if (cep.length !== 8) {
    return false;
  }

  // Validate format with special characters (optional)
  if (/^\d{5}-?\d{3}$/.test(cep)) {
    return true;
  }

  return false;
};



export default class ZipCodeMask extends BaseMask {
  static getType() {
    return 'zip-code';
  }

  getValue(value, settings) {
    return CustomMask.shared.getValue(value, MASK_OPTIONS);
  }

  getRawValue(maskedValue, settings) {
    return super.removeNotNumbers(maskedValue);
  }

  validate(value, settings) {
    return validateZipCode(value);
  }

  getMask(value, settings) {
    return ZIP_CODE_MASK;
  }
}

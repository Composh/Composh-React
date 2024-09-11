import MaskResolver from '../../plugins/Mask/mask-resolver';

import {
  EMaskEnumType,
  ETypesInput,
  ETypesMasks,
} from './types.enum';



export function returnTypeMaskEnum(maskType: string) {
  const itemsTypeMask = ETypesMasks();

  switch (maskType) {
    case EMaskEnumType.CNPJ:
      return itemsTypeMask.CNPJ;

    case EMaskEnumType.CPF:
      return itemsTypeMask.CPF;

    case EMaskEnumType.CREDITCARD:
      return itemsTypeMask.CREDIT_CARD;

    case EMaskEnumType.CUSTOM:
      return itemsTypeMask.CUSTOM;

    case EMaskEnumType.DATETIME:
      return itemsTypeMask.DATE_TIME;

    case EMaskEnumType.MONEY:
      return itemsTypeMask.MONEY;

    case EMaskEnumType.PHONE:
      return itemsTypeMask.PHONE;

    case EMaskEnumType.ZIPCODE:
      return itemsTypeMask.ZIP_CODE;

    default:
      return 'none';
  }
}



export function returnTypeInput(maskType: string) {
  const enumTypesInput = ETypesInput();

  switch (maskType) {
    case EMaskEnumType.CNPJ:
    case EMaskEnumType.CPF:
    case EMaskEnumType.CREDITCARD:
    case EMaskEnumType.CUSTOM:
    case EMaskEnumType.DATETIME:
    case EMaskEnumType.MONEY:
    case EMaskEnumType.NUMBER:
      return enumTypesInput.NUMBER;

    case EMaskEnumType.PHONE:
      return enumTypesInput.TEL_PHONE;

    case EMaskEnumType.TEXT:
    case EMaskEnumType.ZIPCODE:
      return enumTypesInput.TEXT;

    case EMaskEnumType.EMAIL:
      return enumTypesInput.EMAIL;

    case EMaskEnumType.PASSWORD:
      return enumTypesInput.TEXT;

    case EMaskEnumType.URL:
      return enumTypesInput.URL;

    default:
      return 'default';
  }
}



export function returnIfHasMask(maskType: string) {
  if ([
    EMaskEnumType.CNPJ.valueOf(),
    EMaskEnumType.CPF.valueOf(),
    EMaskEnumType.CREDITCARD.valueOf(),
    EMaskEnumType.CUSTOM.valueOf(),
    EMaskEnumType.DATETIME.valueOf(),
    EMaskEnumType.MONEY.valueOf(),
    EMaskEnumType.PHONE.valueOf(),
    EMaskEnumType.ZIPCODE.valueOf(),
  ].includes(maskType)) {
    return true;
  }
  else {
    return false;
  }
}



export function resolverMasFunction(maskType: string) {
  return MaskResolver.resolve(maskType);
}



export function _getDefaultValue(value: any) {
  if (value === '' || value === null || value === undefined) {
    return '';
  }

  return value;
}



// export function _getOptions() {
//   return props.options;
// }



export function getRawValueFor(maskType: string, optionsValue: any, value: any) {
  const rawValue = resolverMasFunction(maskType).getRawValue(
    _getDefaultValue(value),
    optionsValue,
  );
  return rawValue;
}



export function _getMaskedValue(hasMask: boolean, maskType: string, optionsValue: any, value: any) {
  if (hasMask) {
    const defaultValue = _getDefaultValue(value);
    if (defaultValue === '') {
      return '';
    }

    const maskValue = resolverMasFunction(maskType).getValue(
      defaultValue,
      optionsValue,
    );
    return maskValue;
  }
  else {
    return value;
  }
}



export function inputUpdateValue(hasMask: boolean, maskType: string, optionsValue: any, text: any) {
  // if (hasMask) {
  const maskedText = _getMaskedValue(hasMask, maskType, optionsValue, text);
  const rawText = getRawValueFor(maskType, optionsValue, maskedText);

  const objectUpdateValue = {
    maskedText,
    rawText,
  };

  return objectUpdateValue;
  // }
  // else {
  //   return text;
  // }
}

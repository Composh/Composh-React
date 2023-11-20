import MaskResolver from '../../plugins/Mask/mask-resolver';

import {
  EEnumType,
  ETypesInput,
  ETypesMasks,
} from './types.enum';



export function returnTypeMaskEnum(maskType: string) {
  const itemsTypeMask = ETypesMasks();

  switch (maskType) {
    case EEnumType.CNPJ:
      return itemsTypeMask.CNPJ;

    case EEnumType.CPF:
      return itemsTypeMask.CPF;

    case EEnumType.CREDITCARD:
      return itemsTypeMask.CREDIT_CARD;

    case EEnumType.CUSTOM:
      return itemsTypeMask.CUSTOM;

    case EEnumType.DATETIME:
      return itemsTypeMask.DATE_TIME;

    case EEnumType.MONEY:
      return itemsTypeMask.MONEY;

    case EEnumType.PHONE:
      return itemsTypeMask.PHONE;

    case EEnumType.ZIPCODE:
      return itemsTypeMask.ZIP_CODE;

    default:
      return 'none';
  }
}



export function returnTypeInput(maskType: string) {
  const enumTypesInput = ETypesInput();

  switch (maskType) {
    case EEnumType.CNPJ:
    case EEnumType.CPF:
    case EEnumType.CREDITCARD:
    case EEnumType.CUSTOM:
    case EEnumType.DATETIME:
    case EEnumType.MONEY:
    case EEnumType.NUMBER:
      return enumTypesInput.NUMBER;

    case EEnumType.PHONE:
      return enumTypesInput.TEL_PHONE;

    case EEnumType.TEXT:
    case EEnumType.ZIPCODE:
      return enumTypesInput.TEXT;

    case EEnumType.EMAIL:
      return enumTypesInput.EMAIL;

    case EEnumType.PASSWORD:
      return enumTypesInput.TEXT;

    case EEnumType.URL:
      return enumTypesInput.URL;

    default:
      return 'default';
  }
}



export function returnIfHasMask(maskType: string) {
  if ([
    EEnumType.CNPJ.valueOf(),
    EEnumType.CPF.valueOf(),
    EEnumType.CREDITCARD.valueOf(),
    EEnumType.CUSTOM.valueOf(),
    EEnumType.DATETIME.valueOf(),
    EEnumType.MONEY.valueOf(),
    EEnumType.PHONE.valueOf(),
    EEnumType.ZIPCODE.valueOf(),
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

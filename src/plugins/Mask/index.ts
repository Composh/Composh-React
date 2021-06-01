import MaskResolver from './mask-resolver';



export default class Mask {
  static toMask(type: any, value: any, settings?: any) {
    return MaskResolver.resolve(type).getValue(value, settings);
  }

  static toRawValue(type: any, maskedValue: any, settings?: any) {
    return MaskResolver.resolve(type).getRawValue(maskedValue, settings);
  }

  static isValid(type: any, value: any, settings?: any) {
    return MaskResolver.resolve(type).validate(value, settings);
  }

  static getMask(type: any, value: any, settings?: any) {
    return MaskResolver.resolve(type).getMask(value, settings);
  }
}

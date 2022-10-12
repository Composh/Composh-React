import * as Masks from './masks';

const maskKeys = Object.keys(Masks);



export default class MaskResolver {
  static resolve(type) {
    // console.log('maskKeys', maskKeys);

    const maskKey = maskKeys.find((mask) => {
      const handler = Masks[mask];

      // console.log('handler', handler);
      // console.log('handler.getType()', handler.getType());
      // console.log('handler.getType status', handler.getType() === type);

      return handler && handler.getType && handler.getType() === type;
    });

    const Handler = Masks[maskKey];
    // console.log('AHandler', Handler);

    if (!Handler) {
      throw new Error('Mask type not supported.');
    }

    return new Handler();
  }
}

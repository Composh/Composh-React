export function hexToRGB(
  hex: any,
  type?: string,
  opacity?: number,
) {
  let c: any;
  const colorType: string = type || 'color';
  const colorOpacity: number = opacity || 1;


  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length === 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');


    if (colorType === 'color') {
      return [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',');
    }
    else if (colorType === 'rgb') {
      return 'rgb(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ')';
    }
    else if (colorType === 'rgba') {
      return 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ', ' + colorOpacity + ')';
    }
  }


  throw new Error('Bad Hex');
}

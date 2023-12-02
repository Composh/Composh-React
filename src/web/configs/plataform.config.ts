export function GetPlatform(): 'ANDROID' | 'IOS' | 'WEB' | null {
  const testAgent = navigator.userAgent;

  const isMobileAndroid = /Android/i.test(testAgent);
  const isMobileIos = /iPhone|iPad|iPod/i.test(testAgent);

  if (isMobileAndroid) {
    return 'ANDROID';
  }

  if (isMobileIos) {
    return 'IOS';
  }

  if (!isMobileAndroid && !isMobileIos) {
    return 'WEB';
  }

  return 'WEB'; // null;
}



export function GetDeviceType(): 'MOBILE' | 'DESKTOP' | null {
  const testAgent = navigator.userAgent;

  const isTabletMobile = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(testAgent);
  const isPhoneMobile = /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(testAgent);

  if (isTabletMobile) {
    return 'MOBILE';
  }

  if (isPhoneMobile) {
    return 'MOBILE';
  }

  if (!isTabletMobile && !isPhoneMobile) {
    return 'DESKTOP';
  }

  return 'DESKTOP'; // null;
};

import {
  Dimensions,
  Platform,
} from "react-native";



export function isIphoneX() {

  const X_WIDTH = 375;
  const X_HEIGHT = 812;

  const XSMAX_WIDTH = 414;
  const XSMAX_HEIGHT = 896;

  const { height, width } = Dimensions.get('window');



  return (
    Platform.OS === 'ios' &&
      !Platform.isPad &&
      !Platform.isTVOS
      ? width === X_WIDTH && height === X_HEIGHT || width === XSMAX_WIDTH && height === XSMAX_HEIGHT
      : false
  );
}
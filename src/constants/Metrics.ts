import {
  Platform,
  StatusBar,
} from 'react-native';

import {
  isIphoneX,
} from '../config/PlatformsConfig';

import Sizes from './Sizes';



const StatusBarValue = Platform.select({
  android: StatusBar.currentHeight,
  ios: isIphoneX() ? Sizes.STATUSBAR_IOS_IPHONE_X : Sizes.STATUSBAR_IOS,
});



const ToolbarValue = Platform.select({
  android: Sizes.TOOLBAR_ANDROID,
  ios: Sizes.TOOLBAR_IOS,
});



const SubToolbarValue = Platform.select({
  android: Sizes.SUBTOOLBAR_ANDROID,
  ios: Sizes.SUBTOOLBAR_IOS,
});



const BottomBarValue = Platform.select({
  android: 0,
  ios: isIphoneX() ? Sizes.BOTTOM_BAR_IOS : 0,
});



export default {
  StatusBar: StatusBarValue,
  Toolbar: ToolbarValue,
  SubToolbar: SubToolbarValue,
  BottomBar: BottomBarValue,
};

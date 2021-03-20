import {
  Platform,
  StatusBar,
} from 'react-native';

// Application Configs Import
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



export default {
  StatusBar: StatusBarValue,
  Toolbar: ToolbarValue,
  SubToolbar: SubToolbarValue,
};

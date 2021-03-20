// https://github.com/galio-org/galio/tree/master/src/theme
/* eslint-disable prettier/prettier */
/* eslint-disable key-spacing */

import {
  StatusBar,
} from 'react-native';



export const BADGE = {

  BADGE_CIRCLE_SIZE:                18,
  BADGE_MINI_CIRCLE_SIZE:           8,

};


export const BUTTON = {

  BUTTON_WIDTH:                     16 * 9,
  BUTTON_HEIGHT:                    16 * 2.75,
  BUTTON_SHADOW_RADIUS:             10,

};


export const CONFIGS = {

  ANDROID_ELEVATION:                4,
  ZINDEX_SECURITY:                  -5,

};


export const INPUT = {

  INPUT_BORDER_RADIUS:              5,  // 16 * 0.5,
  INPUT_BORDER_ANDROID_WIDTH:       2,  // 16 * 0.05
  INPUT_BORDER_IOS_WIDTH:           16 * 0.05,
  INPUT_HEIGHT:                     37, // 16 * 2.75,
  INPUT_HORIZONTAL:                 10,
  INPUT_TEXT:                       14, // 16 * 0.875,
  INPUT_LABEL_TEXT:                 12, // 16 * 0.9,
  INPUT_LABEL_BOTTOM:               4,  // 16 / 4,
  INPUT_HELP_TEXT:                  11, // 16 * 0.8,
  INPUT_ROUNDED:                    16 * 1.7,

};


export const FAB = {

  FAB_WIDTH:                        56,

};


export const FOOTER = {

  FOOTER_HEIGHT_IOS:                 50,
  FOOTER_HEIGHT_ANDROID:             54,
  FOOTER_IPHONEX_PADDING_BOTTOM:     34,

};


export const STATUSBAR = {

  STATUSBAR_ANDROID:                StatusBar.currentHeight,
  STATUSBAR_IOS:                    20,
  STATUSBAR_IOS_IPHONE_X:           44,

};


export const TITLES = {

  TITLE_ANDROID:                    17,
  TITLE_IOS:                        16,

  SUBTITLE_ANDROID:                 12,
  SUBTITLE_IOS:                     11,

};


export const TOOLBARS = {
  
  TOOLBAR_ANDROID:                  56,
  TOOLBAR_IOS:                      44,

  SUBTOOLBAR_ANDROID:               46, // 42,
  SUBTOOLBAR_IOS:                   34, // 32,

};


const Sizes = {
  BASE:                             16,
  FONT:                             16,
  ICON:                             16,
  OPACITY:                          0.8,
  BORDER_RADIUS:                    6,
  BORDER_WIDTH:                     0.8,

  ...BADGE,
  ...BUTTON,
  ...CONFIGS,
  ...INPUT,
  ...FAB,
  ...FOOTER,
  ...STATUSBAR,
  ...TITLES,
  ...TOOLBARS,

};



export default Sizes;

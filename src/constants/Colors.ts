// https://github.com/galio-org/galio/tree/master/src/theme
/* eslint-disable prettier/prettier */
/* eslint-disable key-spacing */

export const THEME = {

  THEME:                            '#B23AFC',
  PRIMARY:                          '#007aff',
  PRIMARY_DARK:                     '#3F51B5',
  SECONDARY:                        '#5E72E4',
  INFO:                             '#1232FF',
  ERROR:                            '#F5365C',
  SUCCESS:                          '#45DF31',
  WARNING:                          '#FF9C09',

};


export const COMPONENTS = {

  NAVBAR:                           '#F9F9F9',
  BLOCK:                            '#808080',
  ICON:                             '#000000',

};


export const HEADER = {

  HERDER_BACKGROUND:                '#EAD5FB',
  HERDER_BORDER:                    '#808080',

};


export const INPUT = {

  INPUT:                            '#CAD1D7', // '#808080',
  PLACEHOLDER:                      '#9FA5AA',
  INPUT_ERROR:                      '#FCB3A4',
  INPUT_SUCCESS:                    '#7BDEB2',

};


export const OVERLAY = {

  OVERLAY_BACKGROUND:               'rgba(0, 0, 0, 0.5)',

};


export const SOCIAL = {

  DRIBBBLE:                         '#EA4C89',
  FACEBOOK:                         '#3B5998',
  INSTAGRAM:                        '#DD2A7B',
  TWITTER:                          '#08A0E9',
  YOUTUBE:                          '#C4302B',
  WHATSAPP:                         '#4FCE5D',

};



// argon: {
//   DEFAULT: '#172B4D',
//   PRIMARY: '#5E72E4',
//   SECONDARY: '#F7FAFC',
//   LABEL: '#FE2472',
//   INFO: '#11CDEF',
//   SUCCESS: '#2DCE89',
//   WARNING: '#FB6340',

//   /*not yet changed */
//   MUTED: '#ADB5BD',
//   INPUT: '#DCDCDC',
//   ACTIVE: '#5E72E4', //same as primary
//   BUTTON_COLOR: '#9C26B0', //wtf
//   SWITCH_ON: '#5E72E4',
//   SWITCH_OFF: '#D4D9DD',
//   GRADIENT_START: '#6B24AA',
//   GRADIENT_END: '#AC2688',
//   PRICE_COLOR: '#EAD5FB',
//   BORDER_COLOR: '#E7E7E7',
//   BLOCK: '#E7E7E7',
//   ICON: '#172B4D',
//   HEADER: '#525F7F',
//   BORDER: '#CAD1D7',
// }



const Colors = {
  calendarColorLight:               'rgba(23, 214, 204, 0.14)',
  calendarColor:                    'rgba(23, 214, 204, 0.35)',
  accent: '#FE2472',


  BLACK:                            '#000000',
  WHITE:                            '#FFFFFF',
  GREY:                             '#898989',
  MUTED:                            '#9FA5AA',
  TRANSPARENT:                      'transparent',
  NEUTRAL:                          'rgba(255,255,255, 0.65)',

  ...THEME,
  ...COMPONENTS,
  ...HEADER,
  ...INPUT,
  ...OVERLAY,
  ...SOCIAL,

};



export default Colors;

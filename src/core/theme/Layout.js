// React Components Import
import {
  StyleSheet,
} from 'react-native';

// Application Configs Import
import {
  Colors,
  Sizes,
} from '../../constants';



const inputLayout = StyleSheet.create({

  inputMasterViewContent: {
    marginVertical: 3,
    alignContent: 'center',
  },

  // Input Container Style
  inputComponentContainer: {
    // borderRadius: Sizes.INPUT_BORDER_RADIUS,
    borderTopStartRadius: Sizes.INPUT_BORDER_RADIUS,
    borderTopEndRadius: Sizes.INPUT_BORDER_RADIUS,
    borderBottomStartRadius: Sizes.INPUT_BORDER_RADIUS,
    borderBottomEndRadius: Sizes.INPUT_BORDER_RADIUS,
    width: '100%',
  },



  // Input Content Style
  inputContentViewStyle: {
    paddingHorizontal: Sizes.INPUT_HORIZONTAL,
  },

  inputHeight: {
    height: Sizes.INPUT_HEIGHT,
  },


  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  rounded: {
    borderRadius: Sizes.INPUT_ROUNDED,
  },

  noBorderInputView: {
    borderColor: Colors.TRANSPARENT,
    borderWidth: 0,
  },


  shadowInputView: {
    elevation: 2,

    shadowColor: Colors.BLACK,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.05,
  },



  // Input Component Style
  textInputView: {
    flex: 1,
    // backgroundColor: 'yellow',
  },

  inputText: {
    fontSize: Sizes.INPUT_TEXT,

    paddingHorizontal: 0,
    textDecorationColor: 'transparent',
    textShadowColor: 'transparent',
  },

  // ** If Input Component Has Icon
  inputLeftIcon: {
    marginLeft: 2,
    marginRight: 8,
  },

  inputRightIcon: {
    marginLeft: 8,
  },



  // Icon View Style
  iconViewStyle: {
    // backgroundColor: 'purple',
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },



  // Label Component Style
  labelText: {
    fontWeight: '500',
    fontSize: Sizes.INPUT_LABEL_TEXT,
    marginBottom: Sizes.INPUT_LABEL_BOTTOM,
  },

  labelInsideContainer: {
    marginTop: 6,
    marginBottom: 1,
  },

  labelOutsideContainer: {
    marginTop: 1,
    marginBottom: 5,

  },

  labelSquered: {
    marginLeft: 9,
  },

  labelRounded: {
    marginLeft: 16,
  },



  // Help Component Style
  helpContainerStyle: {
    flexDirection: 'row',
    paddingHorizontal: 5,
  },

  topHelpStyle: {
    // marginLeft: 5,
    marginBottom: 4,
  },

  bottomHelpStyle: {
    marginTop: 4,
    // marginLeft: 5,
  },

  helpText: {
    fontSize: Sizes.INPUT_HELP_TEXT,
  },

  helpFlexText: {
    flex: 1,
    fontStyle: 'italic',
  },

  helpCount: {
    marginLeft: 5,
    // backgroundColor: 'red',
  },



  // Show Password Component Style
  showPasswordStyle: {
    height: 25,
    width: 25,
    marginLeft: 6,
    marginRight: -2,
    // backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },



  // success: {
  //   borderColor: argonTheme.COLORS.INPUT_SUCCESS,
  // },

  // error: {
  //   borderColor: argonTheme.COLORS.INPUT_ERROR,
  // },

});



const shadowStyles = StyleSheet.create({

  threeShadow: {
    elevation: 3,

    shadowColor: Colors.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },

  fiveShadow: {
    elevation: 5,

    shadowColor: Colors.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },

  noShadow: {
    elevation: 0,

    shadowColor: Colors.TRANSPARENT,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0,
    shadowRadius: 0,
  },

});



export {
  inputLayout,
  shadowStyles,
};

/* eslint-disable prettier/prettier */
import React from 'react';

import PropTypes from 'prop-types';

import {
  Dimensions,
  PixelRatio,
  Platform,
  SafeAreaView,
  StyleSheet,
  View,
  // ViewPropTypes,
} from 'react-native';

// Lib Configs Import
import {
  Colors,
  Sizes,
} from '../../constants';

// import { isIphoneX } from "../../utils/PlatformsConfig";



const Footer = (props) => {
  const {
    children,
    style,
  } = props;



  return (

    <SafeAreaView
      style={[
        styles.containerFooterStyles,
        style,
      ]}>

      <View
        // ref={c => (_root = c)}
        {...props}
        style={[
          styles.viewFooterStyle,
        ]}>
        {children}
      </View>

    </SafeAreaView>


    // <View style={[
    //   styles.containerFooterStyles,
    //   style,
    // ]} {...props}>
    //   {children}
    // </View>


    // <View
    //   style={[
    //     styles.paddingIphoneX,
    //   ]}>

    //   <View
    //     {...props}
    //     style={[
    //       styles.containerFooterStyles,
    //       style,
    //     ]}>

    //     <View style={[
    //       styles.viewFooterStyle,
    //     ]}>
    //       {children}
    //     </View>

    //   </View>

    // </View>

  );
};



// Footer.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array,
//   ]),
// };



const styles = StyleSheet.create({

  containerFooterStyles: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',

    // flexDirection: 'row',
    // alignSelf: 'center',

    left: 0,
    right: 0,

    height: Platform.OS === 'ios'
      ? Sizes.FOOTER_HEIGHT_IOS
      : Sizes.FOOTER_HEIGHT_ANDROID,

    // paddingBottom: isIphoneX()
    //   ? Sizes.FOOTER_IPHONEX_PADDING_BOTTOM
    //   : 0,
    paddingBottom: 0,

    backgroundColor: Platform.select({ android: '#3F51B5', ios: '#F8F8F8' }),

    borderTopWidth: Platform.OS === 'ios'
      ? 1 / PixelRatio.getPixelSizeForLayoutSize(1)
      : 0,

    borderColor: Platform.OS === 'ios'
      ? '#cbcbcb'
      : Colors.TRANSPARENT,

    // elevation: 3,
  },


  viewFooterStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  // paddingIphoneX: {
  //   paddingBottom: isIphoneX() ? 34 : 0,

  //   paddingBottom: isIphoneX()
  //     ? Sizes.FOOTER_IPHONEX_PADDING_BOTTOM
  //     : 0,
  // },

});



export default Footer;

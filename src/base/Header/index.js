/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';

import PropTypes from 'prop-types';

import {
  // PixelRatio,
  // Platform,
  StyleSheet,
  View,
  // ViewPropTypes,
} from 'react-native';

// Lib Configs Import
import {
  shadowStyles
} from '../../theme/Layout';

import {
  Colors,
  Sizes,
} from '../../constants';

// Components Inport
// import Shadow from '../../plugins/Shadow'



const Header = (props) => {
  const {

    // Background Props
    backgroundColor,

    // Border Props
    borderBottomWidth,
    borderBottomColor,

    // Shadow Props
    shadow,

    // Children Component
    children,

  } = props;



  return (

    <View
      style={[
        {
          // Header Style
          backgroundColor: backgroundColor || Colors.HERDER_BACKGROUND,
          borderBottomColor: borderBottomColor || Colors.HERDER_BORDER,
          borderBottomWidth: borderBottomWidth
            ? borderBottomWidth
            : 0,
          // : Platform.OS === 'ios'
          //   ? 1 / PixelRatio.getPixelSizeForLayoutSize(1)
          //   : 0,
        },

        styles.headerContainer,

        // Shadow Styles
        shadow
          ? shadowStyles.fiveShadow
          : shadowStyles.noShadow,
      ]}>

      {children}

    </View>

  );
};



Header.propTypes = {
  // ...ViewPropTypes,
  backgroundColor: PropTypes.string,

  borderBottomWidth: PropTypes.number,
  borderBottomColor: PropTypes.string,

  shadow: PropTypes.bool,

  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),

  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
};



const styles = StyleSheet.create({

  headerContainer: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,

    // paddingBottom: 7,
    // marginBottom: -7,
    // backgroundColor: 'rgba(255, 0, 0, 0.1)',
    backgroundColor: Colors.TRANSPARENT,
    zIndex: 0,
  },

});



export default Header;

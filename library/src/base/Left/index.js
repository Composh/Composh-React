/* eslint-disable prettier/prettier */
import React from 'react';

import PropTypes from 'prop-types';

import {
  Platform,
  StyleSheet,
  View,
  ViewPropTypes,
} from 'react-native';

// import Sizes from '../../theme/Sizes';

// import Colors from '../../theme/Colors';



const Left = (props) => {
  // const {
  //   shadow,
  //   backgroundColor,
  //   borderBottomWidth,
  //   borderBottomColor,
  // } = props;

  return (
    <View style={styles.leftStyles} {...props} />
  );
};



Left.propTypes = {
  ...ViewPropTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
};



const styles = StyleSheet.create({

  leftStyles: {
    // flexDirection: 'row',
    flex: 0,
    flexBasis: 46,
    paddingHorizontal: 10,
    // paddingLeft: Platform.select({ android: 0, ios: 10 }),
    // paddingRight: 10,
    alignSelf: 'center',
    alignItems: 'flex-start',
  },

});



export default Left;

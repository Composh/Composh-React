/* eslint-disable prettier/prettier */
import React from 'react';

import PropTypes from 'prop-types';

import {
  Dimensions,
  Platform,
  StyleSheet,
  View,
  ViewPropTypes,
} from 'react-native';

// Lib Configs Import
import {
  Colors,
  Sizes,
} from '../../constants';

const deviceHeight = Dimensions.get('window').height;



const Container = (props) => {
  const {
    children,
  } = props;

  return (
    <View style={styles.leftStyles} {...props}>
      {children}
    </View>
  );
};



// Container.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array,
//   ]),
// };



const styles = StyleSheet.create({

  leftStyles: {
    flex: 1,
    height: deviceHeight,
    backgroundColor: Colors.WHITE,
  },

});



export default Container;

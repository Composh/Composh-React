import React from 'react';

import PropTypes from 'prop-types';

import {
  // Platform,
  StyleSheet,
  View,
  ViewPropTypes,
} from 'react-native';

// import Sizes from '../../theme/Sizes';

// import Colors from '../../theme/Colors';



const Body = (props) => {
  // const {
  //   shadow,
  //   backgroundColor,
  //   borderBottomWidth,
  //   borderBottomColor,
  // } = props;

  return (
    <View style={styles.bodyStyles} {...props} />
  );
};



// Body.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array,
//   ]),
// };



const styles = StyleSheet.create({

  bodyStyles: {
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: 'center',
  },

});



export default Body;

/* eslint-disable prettier/prettier */
import React from 'react';

import PropTypes from 'prop-types';

import {
  // Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

// import Sizes from '../../theme/Sizes';

// import Colors from '../../theme/Colors';



const ButtonControl = (props) => {
  const {
    children,
  } = props;

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.65}
      style={styles.controlContainer}>

      {children}

    </TouchableOpacity>
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

  controlContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
  },

});



export default ButtonControl;

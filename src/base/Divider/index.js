//https://react-native-elements.github.io/react-native-elements/docs/header.html

import React from 'react';

// import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
} from 'react-native';

import {
  Colors,
  Sizes,
} from '../../constants';


const Divider = (props) => {
  const {
    height,
    width,
    color,
    style,
    ...attributes
  } = props;

  return (
    <View
      style={([
        {
          height: height || StyleSheet.hairlineWidth,
          width: width || '50%',
          backgroundColor: color || Colors.HERDER_BORDER,
        },
        style,
      ])}
    />
  );
}


// Divider.propTypes = {
//   height: PropTypes.number,
//   width: PropTypes.number, // Fazer para string também
//   color: PropTypes.string,
//   style: PropTypes.object,
// };


export default Divider; 

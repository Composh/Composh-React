/* eslint-disable prettier/prettier */
import React from 'react';

import {
  Platform,
  StyleSheet,
  Text,
} from 'react-native';

// import PropTypes from 'prop-types';

import {
  Colors,
  Metrics,
} from '../../constants';



const Subtitle = (props) => {
  const {
    color,
  } = props;

  return (
    <Text
      style={[
        { color: color ? color : Colors.BLACK },
        styles.titleStyles,
      ]}
      numberOfLines={1}
      ellipsizeMode="tail"
      {...props} />
  );
};



// Subtitle.propTypes = {
//   ...Text.propTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array,
//   ]),
// };



const styles = StyleSheet.create({

  titleStyles: {
    marginTop: Platform.OS === 'ios' ? 1 : -1, // It Was Just 1
    fontSize: Platform.OS === 'ios' ? Metrics.SUBTITLE_IOS : Metrics.SUBTITLE_ANDROID,
    fontWeight: Platform.OS === 'ios' ? '300' : undefined,

    // fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto_medium', //Don't Work
    // textAlign: Platform.OS === 'ios' ? 'center' : 'left',
    // paddingLeft: Platform.OS === 'ios' ? 4 : 0,
    // marginLeft: Platform.OS === 'ios' ? undefined : -3,
  },

});



export default Subtitle;

/* eslint-disable prettier/prettier */
import React from 'react';

import PropTypes from 'prop-types';

import {
  Platform,
  StyleSheet,
  Text,
} from 'react-native';

import {
  Colors,
  Sizes,
} from '../../constants';



const Title = (props) => {
  const {
    color,
  } = props;

  return (
    <Text
      {...props}
      style={[
        { color: color ? color : Colors.BLACK },
        styles.titleStyles,
      ]}
      numberOfLines={1}
      ellipsizeMode="tail"
    />
  );
};



Title.propTypes = {
  ...Text.propTypes,
  style: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
};



const styles = StyleSheet.create({

  titleStyles: {
    marginTop: Platform.OS === 'ios' ? 1 : -2, // It Was Just 1
    fontSize: Platform.OS === 'ios' ? Sizes.TITLE_IOS : Sizes.TITLE_ANDROID,
    fontWeight: Platform.OS === 'ios' ? '700' : undefined,

    // fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto_medium', //Don't Work
    // textAlign: Platform.OS === 'ios' ? 'center' : 'left',
    // paddingLeft: Platform.OS === 'ios' ? 4 : 0,
    // marginLeft: Platform.OS === 'ios' ? undefined : -3,
  },

});



export default Title;

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';

import PropTypes from 'prop-types';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  ViewPropTypes,
} from 'react-native';

// Lib Configs Import
import {
  Colors,
  Sizes,
} from '../../constants';



const ListTitle = (props) => {
  const {
    text,
    textColor,
    borderBottomColor,

    styleText,

    styleContainer
  } = props;

  return (
    <View style={[
      {
        borderBottomColor: borderBottomColor,
        borderBottomWidth: borderBottomColor ? 2 : 0,
        zIndex: Sizes.ZINDEX_SECURITY,
      },
      styles.containerHeader,
      styleContainer,
    ]}>
      <Text style={[
        { color: textColor },
        styles.header,
        styleText,
      ]}>
        {text.toUpperCase()}
      </Text>
    </View>
  );
};



// ListTitle.propTypes = {
//   ...ViewPropTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array,
//   ]),
// };



const styles = StyleSheet.create({

  containerHeader: {
    marginTop: 5,
    marginBottom: 7,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 6,
  },

  header: {
    fontSize: 15,
    fontWeight: '200',
    letterSpacing: 0.5,
  },

});



export default ListTitle;

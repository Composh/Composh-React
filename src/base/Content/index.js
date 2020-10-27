/* eslint-disable prettier/prettier */
import React from 'react';

import PropTypes from 'prop-types';

import {
  Dimensions,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  ViewPropTypes,
} from 'react-native';

// Lib Configs Import
import {
  Colors,
  Sizes,
} from '../../constants';



const Content = (props) => {
  const {

    withScroll,

    style,

    children,

  } = props;



  return (

    <View style={styles.contentStyle}>

      {withScroll
        ? (
          <ScrollView
            {...props}
            contentContainerStyle={styles.contentGrowFlex}
            style={[
              styles.contentFlex,
              style,
            ]}>

            {children}

          </ScrollView>
        )
        : (
          <View style={[
            styles.contentFlex,
            style,
          ]}>

            {children}

          </View>
        )
      }

    </View>

  );
};



const styles = StyleSheet.create({

  contentStyle: {
    // marginTop: -7,
    flex: 1,
    zIndex: -1,
  },

  contentFlex: {
    flex: 1,
  },

  contentGrowFlex: {
    flexGrow: 1,
  },

});



export default Content;

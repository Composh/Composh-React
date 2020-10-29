/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  Dimensions,
  FlatList,
  Animated,
  View,
} from 'react-native';
// import { Block, theme } from 'galio-framework';

const { width } = Dimensions.get('screen');
// import argonTheme from '../constants/Theme';

// Lib Configs Import
import {
  Colors,
  Sizes,
} from '../../constants';



const TabPager = (props) => {
  const {
    type,
    backgroundColor,
  } = props;


  return (
    <View style={styles.container}/>
  );
};



const styles = StyleSheet.create({

  container: {
    width: width,
    backgroundColor: Colors.WHITE,
    zIndex: 2,
  },

});



export default TabPager;


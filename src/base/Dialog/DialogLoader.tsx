import React from 'react';

import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Overlay from '../Overlay';

// Lib Configs Import
// import {
//   Colors,
//   Sizes,
// } from '../../constants';



const DialogLoader = (props: any) => {
  const {
    visible,
    // heightLoader,
    // widthLoader,
    overlayBackground,
    backgroundLoader,
    borderRadiusLoader,
    indicatorColor,
    textLoader,
    textColorLoader,
    // ...attributes,
  } = props;


  return (

    <Overlay
      noPress
      visible={visible}
      showBackground={true}
      overlayColor={overlayBackground || 'rgba(0, 0, 0, 0.5)'}>

      <StatusBar
        translucent
        barStyle="light-content"
      />


      <View style={[
        {
          height: 95,
          width: 95,
          backgroundColor: backgroundLoader || 'white',
          borderRadius: borderRadiusLoader || 0,
        },
        styles.activityIndicatorWrapper,
      ]}>


        <ActivityIndicator
          animating={visible}
          size="large"
          color={indicatorColor || 'blue'}
        />


        {textLoader && (
          <Text style={[
            { color: textColorLoader || 'black' },
            styles.textWait,
          ]}>
            {textLoader}
          </Text>
        )}

      </View>

    </Overlay>

  );
};



const styles = StyleSheet.create({

  activityIndicatorWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: { width: 5, height: 5 },
    shadowColor: 'gray',
    shadowOpacity: 0.7,
    shadowRadius: 10,
    elevation: 5,
  },

  textWait: {
    marginTop: 8,
    fontSize: 12.5,
    textAlign: 'center',
  },

});



export default DialogLoader;

// React Components Import
import React from 'react';

import {
  ActivityIndicator,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';



const DialogLoading = (props: any) => {
  const {
    visible,
    heightLoader,
    widthLoader,
    overlayBackground,
    backgroundLoader,
    borderRadiusLoader,
    indicatorColor,
    textLoader,
    textColorLoader,
  } = props;


  return (

    <>
      {visible && (
        <View style={[
          { backgroundColor: overlayBackground || 'rgba(0, 0, 0, 0.5)' },
          styles.modalBackground,
        ]}>

          <StatusBar
            translucent
            barStyle="light-content"
          />

          <View style={[
            {
              height: heightLoader || 95,
              width: widthLoader || 95,
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

        </View>
      )}
    </>

  );
};



const styles = StyleSheet.create({

  modalBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },

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



export default DialogLoading;

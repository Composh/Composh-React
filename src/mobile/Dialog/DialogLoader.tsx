import React from 'react';

import {
  ActivityIndicator,
  StatusBar,
} from 'react-native';

import Overlay from '../Overlay';

import {
  ActivityIndicatorWrapper,
  TextWait,
} from './styled';

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

  const sizeLoad = 'large';



  return (

    <Overlay
      noPress
      showBackground
      visible={visible}
      overlayColor={overlayBackground || 'rgba(0, 0, 0, 0.5)'}>

      <StatusBar
        translucent
        barStyle={'light-content'}
      />


      <ActivityIndicatorWrapper style={{
        height: 95,
        width: 95,
        backgroundColor: backgroundLoader || 'white',
        borderRadius: borderRadiusLoader || 0,
      }}>


        <ActivityIndicator
          animating={visible}
          size={sizeLoad}
          color={indicatorColor || 'blue'}
        />


        {textLoader && (
          <TextWait style={{
            color: textColorLoader || 'black',
          }}>
            {textLoader}
          </TextWait>
        )}

      </ActivityIndicatorWrapper>

    </Overlay>

  );
};



export default DialogLoader;

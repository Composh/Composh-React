import React from 'react';

import {
  ActivityIndicator,
  StatusBar,
} from 'react-native';

import {
  ActivityIndicatorWrapper,
  TextWait,
  ModalBackground,
} from './styled';



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

  const sizeLoad = 'large';



  return (

    <>
      {visible && (

        <ModalBackground style={{
          backgroundColor: overlayBackground || 'rgba(0, 0, 0, 0.5)',
        }}>

          <StatusBar
            translucent
            barStyle={'light-content'}
          />

          <ActivityIndicatorWrapper style={{
            height: heightLoader || 95,
            width: widthLoader || 95,
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

        </ModalBackground>

      )}
    </>

  );
};



export default DialogLoading;

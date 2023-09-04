import React from 'react';

import {
  CircularProgress,
} from '@material-ui/core';

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

  const sizeLoad = 40;



  return (

    <>
      {visible && (

        <ModalBackground
          color={indicatorColor}
          style={{
            backgroundColor: overlayBackground || 'rgba(0, 0, 0, 0.5)',
          }}>

          <CircularProgress
            // color={indicatorColor}
            size={sizeLoad}
          />

          <ActivityIndicatorWrapper style={{
            height: heightLoader || 95,
            width: widthLoader || 95,
            backgroundColor: backgroundLoader || 'white',
            borderRadius: borderRadiusLoader || 0,
          }}>

            <CircularProgress
              // color={indicatorColor}
              size={sizeLoad}
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

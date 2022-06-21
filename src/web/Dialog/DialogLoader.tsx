import React from 'react';

import {
  CircularProgress,
} from '@material-ui/core';

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

  const sizeLoad = 40;



  return (

    <Overlay
      noPress
      visible={visible}
      showBackground={true}
      overlayColor={overlayBackground || 'rgba(0, 0, 0, 0.5)'}>

      <ActivityIndicatorWrapper style={{
        height: 95,
        width: 95,
        backgroundColor: backgroundLoader || 'white',
        borderRadius: borderRadiusLoader || 0,
      }}>


        <CircularProgress
          color={indicatorColor}
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

    </Overlay>

  );
};



export default DialogLoader;

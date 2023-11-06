import React from 'react';

import {
  CircularProgress,
} from '@material-ui/core';

import Overlay from '../Overlay';

import {
  ActivityIndicatorWrapper,
  LoaderContent,
  TextWait,
} from './styled';



export interface IProps {
  visible?: any;

  overlayBackground?: any;

  display?: 'row' | 'column';
  height?: number;
  width?: number;
  backgroundColor?: string;
  borderRadius?: number;
  style?: any;

  indicatorSize?: number;
  indicatorColor?: string;

  text?: string;
  textColor?: string;
  textSize?: number;
  textStyle?: any;

  children?: any
}



const Loader: React.FC<IProps> = (props: IProps) => {
  const display = props.display || 'column';
  const sizeLoad = props.indicatorSize || 40;
  const textLoader = props.text;



  return (

    <Overlay
      noPress
      showBackground
      visible={props.visible}
      overlayColor={props.overlayBackground || 'rgba(0, 0, 0, 0.5)'}>

      {props.children && props.children}


      {!props.children && (
        <ActivityIndicatorWrapper
          width={props.height}
          height={props.width}
          backgroundColor={props.backgroundColor}
          borderRadius={props.borderRadius}
          style={props.style}>

          <LoaderContent
            flexDirection={display}>

            <CircularProgress
              size={sizeLoad}
              style={{ color: props.indicatorColor || '#063970' }}
            />


            {textLoader && (
              <TextWait
                flexDirection={display}
                color={props.textColor}
                style={props.textStyle}>
                {textLoader}
              </TextWait>
            )}

          </LoaderContent>

        </ActivityIndicatorWrapper>
      )}

    </Overlay>

  );
};



export default Loader;

import React from 'react';

import {
  Image as ImageReact,
} from 'react-native';

// import { Container } from './styles';



export interface IImageSourcePropType {
  height: number;
  width: number;
  uri: string;
}

export type ImageResizeMode = 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';



export interface IProps {
  alt?: string;
  source: any; // string | IImageSourcePropType;
  resizeMode?: ImageResizeMode;
  resizePosition?: any;
  style?: any;
}



const Image: React.FC<IProps> = (props: IProps) => {
  return (

    <ImageReact
      source={props.source}
      resizeMode={props.resizeMode}
      // resizePosition={props.resizePosition}
      style={props.style}
    />

  );
};



export default Image;

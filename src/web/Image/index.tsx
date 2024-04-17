import React from 'react';

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

    <img
      // resizePosition={props.resizePosition}
      style={props.style}
    />

  );
};



export default Image;

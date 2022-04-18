import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';



export interface IProps {
  height?: any; // number or string
  width?: any; // number or string
  color?: string;
  style?: object;
}



const Divider: React.FC<IProps> = (props) => {
  return (
    <View
      style={([
        {
          height: props.height || StyleSheet.hairlineWidth,
          width: props.width || '50%',
          backgroundColor: props.color || 'gray',
        },
        props.style,
      ])}
    />
  );
};



export default Divider;

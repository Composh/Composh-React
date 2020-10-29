import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';



interface Props {
  height?: any; // number or string
  width?: any; // number or string
  color?: string;
  style?: object;
}



const Divider: React.FC<Props> = (props: any) => {
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

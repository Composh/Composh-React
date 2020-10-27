import React from 'react';

import {
  StyleSheet,
} from 'react-native';

import GetIconType from '../../utils/IconsType';



export interface Props {
  type?: string;
  name?: string;
  size?: number;
  color?: string;
  reverse?: boolean;
  reverseColor?: string;
  // disabled?: boolean;
  solid?: boolean;
  brand?: boolean;
  style?: object;
};



const Icon: React.FC<Props> = (props: any) => {
  const IconComponent = GetIconType(props.type);



  return (

    <IconComponent
      testID="iconIcon"
      style={StyleSheet.flatten([
        { backgroundColor: 'transparent' },
        props.style && props.style,
      ])}
      size={props.size}
      name={props.name}
      color={props.reverse ? props.reverseColor : props.color}
      solid={props.solid}
      brand={props.brand}
    />

  );
};



// Icon.defaultProps = {
//   underlayColor: 'transparent',
//   reverse: false,
//   raised: false,
//   size: 24,
//   color: 'black',
//   reverseColor: 'white',
//   disabled: false,
//   type: 'material',
//   solid: false,
//   brand: false,
// };



export default Icon;

import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import GetIconType from '../../core/config/IconsType';



interface IProps {
  type?: string;
  name?: string;
  size?: number;
  color?: string;
  reverse?: boolean;
  reverseColor?: string;
  // disabled?: boolean;
  solid?: boolean;
  brand?: boolean;
  style?: any;
}


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
//   backgroundColor: '#D1D5D8',
// };



const Icon: React.FC<IProps> = (props) => {
  const typeIcon = props.type || 'material';

  const IconComponent = GetIconType(typeIcon);



  return (

    <View style={
      props.style && props.style
    }>

      <IconComponent
        testID="iconIcon"
        style={StyleSheet.flatten([
          { backgroundColor: 'transparent' },
        ])}
        size={props.size}
        name={props.name}
        color={props.reverse ? props.reverseColor : props.color}
        solid={props.solid}
        brand={props.brand}
      />
    </View>

  );
};



export default Icon;

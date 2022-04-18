import React from 'react';

import { View } from 'react-native';

import {
  HeaderContainer,
  HeaderTransparent,
} from './styled';



export interface IProps {
  transparent?: boolean;
  absolute?: boolean;

  backgroundColor?: string;
  borderBottomColor?: string;
  style?: any;

  children?: object;
}



const AppBar: React.FC<IProps> = (props: any) => {
  const Component = props.transparent ? HeaderTransparent : HeaderContainer;


  return (

    <View style={{
      backgroundColor: 'transparent',
      zIndex: 40,
    }}>
      <Component
        backgroundColor={props.backgroundColor}
        style={[
          props.style,
          props.absolute && {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 5,
          },
          props.borderBottomColor && {
            borderBottomColor: props.borderBottomColor || 'transparent',
            borderBottomWidth: 1,
          },
        ]}>

        {props.children}

      </Component>
    </View>

  );
};



AppBar.defaultProps = {
  backgroundColor: 'black',
};



export default AppBar;

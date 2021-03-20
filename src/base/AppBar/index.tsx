import React from 'react';

import {
  HeaderContainer,
  HeaderTransparent,
} from './styled';



interface IProps {
  transparent?: boolean;
  absolute?: boolean;

  borderBottomColor?: string;
  style?: any;

  children?: object;
}



const AppBar: React.FC<IProps> = (props: any) => {
  const Component = props.transparent ? HeaderTransparent : HeaderContainer;


  return (

    <Component
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

  );
};



export default AppBar;

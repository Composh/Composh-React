import React from 'react';

import {
  HeaderAppContainer,
  HeaderContainer,
} from './styled';



export interface IProps {
  absolute?: boolean;
  transparent?: boolean;

  backgroundColor?: string;
  borderBottomColor?: string;
  style?: any;

  children?: object;
}



const AppBar: React.FC<IProps> = (props: any) => {
  const className = { ...props } as any;



  return (

    <HeaderAppContainer>
      <HeaderContainer
        className={className?.className}
        absolute={props.absolute}
        transparent={props.transparent}
        backgroundColor={props.backgroundColor || '#000000'}
        borderBottomColor={props.borderBottomColor}
        style={props.style}>

        {props.children}

      </HeaderContainer>
    </HeaderAppContainer>

  );
};



export default AppBar;

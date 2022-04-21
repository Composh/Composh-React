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
  return (

    <HeaderAppContainer>
      <HeaderContainer
        absolute={props.absolute}
        transparent={props.transparent}
        backgroundColor={props.backgroundColor}
        borderBottomColor={props.borderBottomColor}
        style={props.style}>

        {props.children}

      </HeaderContainer>
    </HeaderAppContainer>

  );
};



AppBar.defaultProps = {
  backgroundColor: 'black',
};



export default AppBar;

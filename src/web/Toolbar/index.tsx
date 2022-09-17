import React from 'react';

// import {
//   Sizes,
// } from '../../constants';

import {
  ToolbarContainer,
  CenterContainer,
} from './styled';



export interface IProps {
  height?: number;

  leftIcon?: object;
  rightIcon?: object;
  centerContent?: object;

  backgroundColor?: string;
  // style?: any;

  // children?: object;
}



const Toolbar: React.FC<IProps> = (props: any) => {
  return (

    <ToolbarContainer
      style={{
        height: props.height || 56, // Sizes.Toolbar,
        backgroundColor: props.backgroundColor,
      }}>

      {props.leftIcon && props.leftIcon}

      <CenterContainer>
        {props.centerContent}
      </CenterContainer>

      {props.rightIcon && props.rightIcon}

    </ToolbarContainer>

  );
};



export default Toolbar;

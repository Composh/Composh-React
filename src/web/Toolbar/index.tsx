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

  leftIcon?: any | null;
  rightIcon?: any | null;
  centerContent?: any;

  backgroundColor?: string;
  // style?: any;

  // children?: object;
}



const Toolbar: React.FC<IProps> = (props: IProps) => {
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

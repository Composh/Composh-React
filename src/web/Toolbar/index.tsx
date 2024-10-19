import React from 'react';

// import {
//   Sizes,
// } from '../../constants';

import {
  ToolbarContainer,
  CenterContainer,
} from './styled';



export interface IProps {
  style?: any;

  noPadding?: boolean;
  noLeftPadding?: boolean;
  noRightPadding?: boolean;

  height?: number;

  leftIcon?: any | null;
  rightIcon?: any | null;
  centerContent?: any;

  backgroundColor?: string;
}



const Toolbar: React.FC<IProps> = (props: IProps) => {
  const paddingLeft = props.noPadding || props.noLeftPadding ? 0 : 8;
  const paddingRight = props.noPadding || props.noRightPadding ? 0 : 8;



  return (

    <ToolbarContainer
      style={{
        height: props.height || 56, // Sizes.Toolbar,
        backgroundColor: props.backgroundColor,
        paddingLeft: paddingLeft,
        paddingRight: paddingRight,
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

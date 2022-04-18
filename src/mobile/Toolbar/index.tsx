import React from 'react';

import {
  Metrics,
} from '../../constants';

import {
  ToolbarContainer,
  CenterContainer,
} from './styled';



export interface IProps {
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
      style={[
        {
          height: Metrics.Toolbar,
          backgroundColor: props.backgroundColor,
        },
      ]}>

      {props.leftIcon && props.leftIcon}

      <CenterContainer>
        {props.centerContent}
      </CenterContainer>

      {props.rightIcon && props.rightIcon}

    </ToolbarContainer>

  );
};



export default Toolbar;

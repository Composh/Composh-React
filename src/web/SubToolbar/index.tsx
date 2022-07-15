import React from 'react';

// import {
//   Metrics,
// } from '../../constants';

import {
  ToolbarContainer,
} from './styled';



export interface IProps {
  noSubToolbarPadding?: boolean;

  backgroundColor?: string;
  // style?: any;

  children?: object;
}



const SubToolbar: React.FC<IProps> = (props: any) => {
  return (

    <ToolbarContainer
      style={{
        justifyContent: 'center',
        height: 46, // Metrics.SubToolbar,
        paddingLeft: props.noSubToolbarPadding ? 0 : 8,
        paddingRight: props.noSubToolbarPadding ? 0 : 8,
        backgroundColor: props.backgroundColor,
      }}>
      {props.children}
    </ToolbarContainer>

  );
};



SubToolbar.defaultProps = {
  backgroundColor: 'gray',
};



export default SubToolbar;

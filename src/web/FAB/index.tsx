import React from 'react';

import {
  FABContainer,
} from './styled';



interface IProps {
  deg180?: boolean;
  visible?: boolean;
  position?: string;
  content?: any;
  fabColorBottom?: string;
  fabColorTop?: string;
  gradientLinear?: string;
  overlayColor?: string;
  onPress?: any;
  children?: any;
}



const FAB: React.FC<IProps> = (props) => {
  return (

    <>
      {props.visible && (
        <FABContainer
          backgroundColor={'#fe124f'}
          onClick={props.onPress}>
          {props.content}
        </FABContainer>
      )}
    </>

  );
};



export default FAB;

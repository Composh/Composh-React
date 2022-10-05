import React from 'react';
import Overlay from '../Overlay';

import {
  Container,
  Wrapper,
} from './styled';



export interface IProps {
  // animationType: PropTypes.oneOf(['none', 'slide', 'fade']),

  visible?: boolean;
  // onOverlayPress?: any; // Function

  overlayColor?: string;
  height?: number;
  minClosingHeight?: number;
  openDuration?: number;
  closeDuration?: number;
  closeOnDragDown?: boolean;
  closeOnPressMask?: boolean;
  dragFromTopOnly?: boolean;
  closeOnPressBack?: boolean;
  keyboardAvoidingViewEnabled?: boolean;
  customStyles?: any; // PropTypes.objectOf(PropTypes.object),
  onClose?: any; // PropTypes.func,
  onOpen?: any; // PropTypes.func,
  children?: any; // PropTypes.node,
}



const ActionSheet: React.FC<IProps> = (props: any) => {
  return (


    <>
      {props.visible && (

        <Container
        // onClick={props.onClose}
        >

          <Overlay
            visible={true}
            showBackground={true}
            overlayColor={props.overlayColor}
            onOverlayPress={props.onClose}
          >
          </Overlay>


          <Wrapper style={{
            overflowY: 'auto',
          }}>

            {props.children}

          </Wrapper>


        </Container>

      )}
    </>

  );
};



export default ActionSheet;

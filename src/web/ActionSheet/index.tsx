import React from 'react';

import Overlay from '../Overlay';

import {
  ActionSheetContainer,
  Wrapper,
} from './styled';



export interface IProps {
  // animationType: PropTypes.oneOf(['none', 'slide', 'fade']),

  visible?: boolean;
  // onOverlayPress?: any; // Function

  overlayColor?: string;
  backgroundColor?: string;
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



const ActionSheet: React.FC<IProps> = (props: IProps) => {
  const visibleModal = props.visible;
  if (!visibleModal) {
    return null;
  }



  return (


    <ActionSheetContainer>

      <Overlay
        visible={true}
        showBackground={true}
        overlayColor={props.overlayColor}
        onOverlayPress={props.onClose}
      />


      <Wrapper
        height={props.height}
        backgroundColor={props.backgroundColor}>

        {props.children}

      </Wrapper>


    </ActionSheetContainer>

  );
};



export default ActionSheet;

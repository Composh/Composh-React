import React,
{
  useState,
} from 'react';

import Overlay from '../../Overlay';

import {
  FabAbsoluteContainer,
  FabLinearContainer,
  FabLinearGradient,
  FabSimpleButton,
} from './styled';



interface IProps {
  visible?: boolean;
  disabled?: boolean;
  active?: boolean;
  noShadow?: boolean;

  position?: string;
  activeOpacity?: number;
  color?: string | Array<string>;
  gradientLinear?: string;
  size?: number;

  overlayBackground?: string;
  showOverlayBackground?: any;
  onOverlayPress?: any;

  noPressOverlay?: any;
  onPress?: any;
  onClose?: any;

  content?: any;
  children?: any;

  deg180?: boolean;

  // freeze?: any;
  // dismissKeyboardOnPress?: any;
  // listenKeyboard?: any;
  // actionsPaddingTopBottom?: any;
  // overrideWithAction?: any;
  // distanceToEdge?: any;
  // openOnMount?: any;
  // mainVerticalDistance?: any;
}



const FAB: React.FC<IProps> = (props) => {
  const visibleFab = props.visible;
  if (!visibleFab) {
    return null;
  }

  const [active, setActive] = useState(false);

  const buttonSize = 56; // Metrics.FAB_WIDTH;


  const fabContentObject = props.content;



  const reset = () => {
    setActive(false);

    if (props.onClose) {
      props.onClose();
    }
  };


  const handlePressBackdrop = () => {
    if (props.onOverlayPress) {
      props.onOverlayPress();
    }

    reset();
  };


  function renderMainButton() {
    if (Array.isArray(props.color)) {
      return (

        <FabLinearContainer
          disabled={props.disabled}
          size={buttonSize}
          onClick={() => {
            if (props.onPress) {
              props.onPress();
            }
          }}>

          <FabLinearGradient
            // start={
            //   props.gradientLinear === 'row'
            //     ? { x: 0, y: 1 }
            //     : props.gradientLinear === 'linear'
            //       ? { x: 1, y: 1 }
            //       : { x: 0, y: 0 }
            // }
            // end={
            //   props.gradientLinear === 'row'
            //     ? { x: 1, y: 1 }
            //     : props.gradientLinear === 'linear'
            //       ? { x: 0, y: 0 }
            //       : { x: 0, y: 1 }
            // }
            colors={[
              props.color[0] || '#ff0000',
              props.color[1] || '#8a0000',
            ]}>

            {fabContentObject}

          </FabLinearGradient>
        </FabLinearContainer>

      );
    }
    else {
      return (

        <FabSimpleButton
          disabled={props.disabled}
          size={buttonSize}
          backgroundColor={props.color}
          onClick={() => {
            if (props.onPress) {
              props.onPress();
            }
          }}>

          {fabContentObject}

        </FabSimpleButton>

      );
    }
  }


  function renderActions() {
    // TODO
    return null;
  }



  return (

    <FabAbsoluteContainer
      pointerEvents={'box-none'}>

      <Overlay
        visible={props.active}
        showBackground={props.showOverlayBackground}
        overlayColor={props.overlayBackground}
        onOverlayPress={() => {
          if (props.noPressOverlay && handlePressBackdrop) {
            handlePressBackdrop();
          }
        }}
      />

      {renderActions()}
      {renderMainButton()}

    </FabAbsoluteContainer>

  );
};



export default FAB;

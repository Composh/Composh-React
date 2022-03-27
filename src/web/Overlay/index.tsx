import React,
{
  useEffect,
  useState,
} from 'react';

import {
  OverlayTouchable,
  OverlayView,
  OverlayChildren,
} from './styled';



interface IProps {
  visible?: boolean;

  onOverlayPress?: any; // Function;
  noPress?: boolean;
  overlayColor?: string;
  showBackground?: boolean;

  style?: any;

  children?: any;
}



const Overlay: React.FC<IProps> = (props) => {
  const visibleOverlay = props.visible;



  function onPressOverlayFunction() {
    if (props.onOverlayPress && !props.noPress) {
      props.onOverlayPress();
    }
  }



  return (

    <>
      {visibleOverlay && (

        <OverlayView>

          <OverlayTouchable
            // disabled={props.noPress}
            style={{
              backgroundColor: props.showBackground
                ? props.overlayColor
                : 'transparent',
            }}
            onClick={onPressOverlayFunction}
          />

          <OverlayChildren>
            {props.children}
          </OverlayChildren>

        </OverlayView>

      )}
    </>

  );
};



Overlay.defaultProps = {
  visible: true,

  noPress: false,

  overlayColor: 'rgba(0, 0, 0, 0.5)',
  showBackground: true,
};



export default Overlay;

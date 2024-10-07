import React from 'react';

import {
  OverlayTouchable,
  OverlayView,
  OverlayChildren,
} from './styled';



export interface IProps {
  visible?: boolean;

  onOverlayPress?: any; // Function;
  noPress?: boolean;
  overlayColor?: string;
  showBackground?: boolean;

  style?: any;
  containerStyle?: any; // ViewPropTypes.style,

  children?: any;
}



const Overlay: React.FC<IProps> = (props: IProps) => {
  const className = { ...props } as any;


  const visibleOverlay = props.visible;
  if (!visibleOverlay) {
    return null;
  }



  function onPressOverlayFunction() {
    if (props.onOverlayPress && !props.noPress) {
      props.onOverlayPress();
    }
  }



  return (

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

      <OverlayChildren
        className={className?.className}
        style={props.containerStyle}>
        {props.children}
      </OverlayChildren>

    </OverlayView>

  );
};



Overlay.defaultProps = {
  visible: true,

  noPress: false,

  overlayColor: 'rgba(0, 0, 0, 0.5)',
  showBackground: true,
};



export default Overlay;

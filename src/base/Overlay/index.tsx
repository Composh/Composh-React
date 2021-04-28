import React,
{
  useEffect,
  useState,
} from 'react';

import {
  Animated,
} from 'react-native';

import StatusViewBar from '../StatusViewBar';

import {
  OverlayTouchable,
  OverlayView,
  OverlayChildren,
} from './styled';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(OverlayTouchable);
const AnimatedView = Animated.createAnimatedComponent(OverlayView);
const AnimatedChildren = Animated.createAnimatedComponent(OverlayChildren);



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
  const animateTime = 200;

  const [opacity] = useState(new Animated.Value(0));
  const [visibleOverlay, setVisibleOverlay] = useState(false);


  useEffect(() => {
    if (props.visible) {
      setVisibleOverlay(true);

      Animated.timing(opacity, {
        toValue: 1,
        duration: animateTime,
        useNativeDriver: false,
      }).start();
    }
    else if (!props.visible) {
      Animated.timing(opacity, {
        toValue: 0,
        duration: animateTime,
        useNativeDriver: false,
      }).start();

      setTimeout(() => {
        setVisibleOverlay(false);
      }, animateTime);
    }
  }, [props.visible]);



  function onPressOverlayFunction() {
    if (props.onOverlayPress && !props.noPress) {
      props.onOverlayPress();
    }
  }



  return (

    <>
      {visibleOverlay && (

        <AnimatedView>

          {props.showBackground && (
            <StatusViewBar
              noHeight
              barStyle={'light-content'}
            />
          )}

          <AnimatedTouchableOpacity
            activeOpacity={1}
            disabled={props.noPress}
            style={[
              props.style,
              {
                opacity: opacity,
                backgroundColor: props.showBackground
                  ? props.overlayColor
                  : 'transparent',
              },
            ]}
            onPress={onPressOverlayFunction}
          />

          <AnimatedChildren
            style={{
              opacity: opacity,
            }}>
            {props.children}
          </AnimatedChildren>

        </AnimatedView>

      )}
    </>

  );
};



Overlay.defaultProps = {
  visible: false,

  noPress: false,

  overlayColor: 'rgba(0, 0, 0, 0.5)',
  showBackground: true,
};



export default Overlay;

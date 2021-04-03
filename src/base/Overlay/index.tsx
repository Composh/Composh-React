import React,
{
  // useEffect,
  useState,
} from 'react';

import {
  Animated,
} from 'react-native';

import StatusViewBar from '../StatusViewBar';

import {
  OverlayTouchable,
  OverlayView,
} from './styled';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(OverlayTouchable);
const AnimatedView = Animated.createAnimatedComponent(OverlayView);



interface IProps {
  visible?: boolean;

  onOverlayPress?: Function;
  noPress?: boolean;
  overlayColor?: string;
  showBackground?: boolean;

  style?: any;

  children?: any;
}



const Overlay: React.FC<IProps> = (props) => {
  const [opacity] = useState(new Animated.Value(1));

  // const [visible, setVisible] = useState(props.visible)


  // useEffect(() => {
  //   if (props.visible) {
  //     Animated.spring(opacity, {
  //       toValue: 1,
  //       useNativeDriver: false,
  //     }).start();
  //   }
  //   else if (!props.visible) {
  //     Animated.spring(opacity, {
  //       toValue: 0,
  //       useNativeDriver: false,
  //     }).start();
  //   }
  // }, [props.visible]);



  function onPressOverlayFunction() {
    if (props.onOverlayPress && !props.noPress) {
      props.onOverlayPress();
    }
  }



  return (

    <>
      {props.visible && (

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

          {props.children}

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

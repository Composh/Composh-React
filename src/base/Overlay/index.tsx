// React Components Import
import React,
{
  useEffect,
  useState,
} from 'react';

import {
  Animated,
  StyleSheet,
} from 'react-native';

import {
  TouchableOpacityStyle,
} from './styled';

// Lib Configs Import
import StatusViewBar from '../../base/StatusViewBar';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacityStyle);



export interface Props {
  visible?: boolean;
  onOverlayPress?: Function;
  noPress?: boolean;
  overlayColor?: string;
  showBackground?: boolean;
  children?: any;
  style?: any;
}



const Overlay: React.FC<Props> = (props: any) => {
  const [opacity] = useState(new Animated.Value(1));


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

        <AnimatedTouchableOpacity
          activeOpacity={1}
          disabled={props.noPress}
          style={[
            props.style,
            {
              opacity: opacity,
              backgroundColor: props.showBackground
                ? props.overlayColor || 'rgba(0, 0, 0, 0.5)'
                : 'transparent'
            },
          ]}
          onPress={onPressOverlayFunction}>

          {props.showBackground && (
            <StatusViewBar
              noHeight
              barStyle="light-content"
            />
          )}

          {props.children}

        </AnimatedTouchableOpacity>

      )}
    </>

  );
};



Overlay.defaultProps = {
  noPress: false,
  showBackground: true,
};



export default Overlay;

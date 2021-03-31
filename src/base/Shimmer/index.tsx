import React,
{
  useEffect,
  useState,
} from 'react';

import {
  Animated,
  View,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const getOutputRange = (width: number, isReversed: boolean) => isReversed ? [width, -width] : [-width, width]



interface IProps {
  width?: number;
  height?: number;
  shimmerColors?: any; // = ["#ebebeb", "#c5c5c5", "#ebebeb"],
  location?: any; // = [0.3, 0.5, 0.7],
  shimmerWidthPercent?: number;
  opacity?: number;

  visible?: boolean;
  duration?: number;
  delay?: number;
  isReversed?: boolean;
  stopAutoRun?: boolean;
  isInteraction?: boolean;

  //   LinearGradient = global.Expo
  // ? global.Expo.LinearGradient
  // : View,

  contentStyle?: any;
  shimmerStyle?: any;
  containerProps?: any;
  shimmerContainerProps?: any;
  childrenContainerProps?: any;
  style?: any;

  children?: any;
}



const ShimmerPlaceholder: React.FC<IProps> = (props: any) => {
  const [beginShimmerPosition] = useState(new Animated.Value(-1))


  const linearTranslate = beginShimmerPosition.interpolate({
    inputRange: [-1, 1],
    outputRange: getOutputRange(props.width, props.isReversed)
  });

  const getAnimated = () => {
    return Animated.loop(Animated.timing(beginShimmerPosition, {
      toValue: 1,
      delay: props.delay,
      duration: props.duration,
      useNativeDriver: true,
      isInteraction: props.isInteraction
    }))
  };

  const animatedValue = getAnimated();



  useEffect(() => {
    if (!props.stopAutoRun) {
      animatedValue.start()
    }
    return () => {
      animatedValue.stop()
    }
  }, [props.stopAutoRun])


  useEffect(() => {
    if (props.visible) {
      animatedValue.stop()
    }
    if (!props.visible && !props.stopAutoRun) {
      animatedValue.start()
    }
  }, [props.visible, props.stopAutoRun])



  return (
    // <BasedShimmerPlaceholder
    //   {...props}
    //   animatedValue={animatedValue}
    //   beginShimmerPosition={beginShimmerPosition}
    // />



    // <View style={{ backgroundColor: 'red', height: 40, width: 40 }}>

    // </View>


    <View
      {...props.containerProps}
      style={[
        !props.visible && { height: props.height, width: props.width },
        { overflow: "hidden" },
        !props.visible && props.shimmerStyle,
        props.style,
      ]}>

      {/* Force render children to restrict rendering twice */}
      <View
        {...props.childrenContainerProps}
        style={[
          !props.visible && { width: 0, height: 0, opacity: 0 },
          props.visible && props.contentStyle,
        ]}>

        {props.children}

      </View>



      {!props.visible && (
        <View
          {...props.shimmerContainerProps}
          style={{
            opacity: props.opacity,
            flex: 1,
            backgroundColor: props.shimmerColors[0],
          }}>

          <Animated.View
            style={{
              flex: 1,
              transform: [{
                translateX: linearTranslate,
              }],
            }}>
            <LinearGradient
              colors={props.shimmerColors}
              style={{
                flex: 1,
                width: props.width * props.shimmerWidthPercent,
              }}
              start={{
                x: -1,
                y: 0.5
              }}
              end={{
                x: 2,
                y: 0.5
              }}
              locations={props.location}
            />
          </Animated.View>

        </View>
      )}
    </View>
  )
}



ShimmerPlaceholder.defaultProps = {
  width: 200,
  height: 15,
  shimmerColors: ["#ebebeb", "#c5c5c5", "#ebebeb"],
  location: [0.3, 0.5, 0.7],
  shimmerWidthPercent: 1,
  opacity: 1,

  visible: false,
  duration: 1000,
  delay: 0,
  isReversed: false,
  stopAutoRun: false,
  isInteraction: true,

  // LinearGradient = global.Expo
  //   ? global.Expo.LinearGradient
  //   : View,

  // contentStyle,
  // shimmerStyle,
  // containerProps,
  // shimmerContainerProps,
  // childrenContainerProps
  // style,

  // children,
};



/*
* To create ShimmerPlaceholder by Linear Gradient. Only useful when you use 3rd party,
* For example: react-native-linear-gradient
* @param {Linear Gradient Component} LinearGradient - 'expo-linear-gradient' by default
*
* @example
*
* import LinearGradient from 'react-native-linear-gradient';
* import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder'
*
* const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient)
*
* ...
*
* <ShimmerPlaceHolder />
*/



// const createShimmerPlaceholder = (LinearGradient = global.Expo
//   ? global.Expo.LinearGradient
//   : View
// ) => React.forwardRef((props, ref) =>
//   <ShimmerPlaceholder
//     LinearGradient={LinearGradient}
//     ref={ref} {...props}
//   />
// );



export default ShimmerPlaceholder;

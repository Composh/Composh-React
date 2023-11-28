import React,
{
  useEffect,
  useState,
} from 'react';

import LinearGradient from '../LinearGradient';

import {
  ShimmerChildrenContainer,
  ShimmerContainer,
} from './styled';



export interface IProps {
  width?: number;
  height?: number;
  widthFull?: boolean;

  shimmerColors?: any; // = ["#ebebeb", "#c5c5c5", "#ebebeb"],
  location?: any; // = [0.3, 0.5, 0.7],
  shimmerWidthPercent?: number;
  opacity?: number;
  borderRadius?: number;

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



const ShimmerPlaceholder: React.FC<IProps> = (props: IProps) => {
  const className = { ...props } as any;


  const [visible, setVisible] = useState(props.visible);
  // const [beginShimmerPosition] = useState(new Animated.Value(-1));


  const calcWidth = (props.width || 200) * (props.shimmerWidthPercent || 1);


  // const linearTranslate = beginShimmerPosition.interpolate({
  //   inputRange: [-1, 1],
  //   outputRange: getOutputRange(
  //     props.widthFull ? width : props.width,
  //     props.isReversed,
  //   ),
  // });

  // const getAnimated = () => {
  //   return Animated.loop(Animated.timing(beginShimmerPosition, {
  //     toValue: 1,
  //     delay: props.delay,
  //     duration: props.duration,
  //     useNativeDriver: true,
  //     isInteraction: props.isInteraction,
  //   }));
  // };

  // const animatedValue = getAnimated();



  // useEffect(() => {
  //   if (!props.stopAutoRun) {
  //     animatedValue.start();
  //   }
  //   return () => {
  //     animatedValue.stop();
  //   };
  // }, [props.stopAutoRun]);


  // useEffect(() => {
  //   if (props.visible) {
  //     animatedValue.stop();
  //   }
  //   if (!props.visible && !props.stopAutoRun) {
  //     animatedValue.start();
  //   }
  // }, [props.visible, props.stopAutoRun]);



  useEffect(() => {
    setVisible(props.visible);
  }, [props.visible]);



  // <BasedShimmerPlaceholder
  //   {...props}
  //   animatedValue={animatedValue}
  //   beginShimmerPosition={beginShimmerPosition}
  // />



  // <View style={{ backgroundColor: 'red', height: 40, width: 40 }}>

  // </View>
  return (

    <ShimmerContainer
      className={className?.className}

      {...props}
      // {...props.containerProps}
      visible={visible}
      width={props.width}
      widthFull={props.widthFull}
      height={props.height}
      borderRadius={props.borderRadius}
      style={{
        ...(visible ? null : props.shimmerStyle),
        ...props.style,
      }}>

      {/* Force render children to restrict rendering twice */}
      {visible && (
        <ShimmerChildrenContainer
          {...props.childrenContainerProps}
          style={props.contentStyle}>

          {props.children}

        </ShimmerChildrenContainer>
      )}



      {!visible && (
        <div
          {...props.shimmerContainerProps}
          style={{
            display: 'flex',
            opacity: props.opacity,
            flex: 1,
            backgroundColor: props.shimmerColors[0],
          }}>

          <LinearGradient
            colors={props.shimmerColors}
            style={{
              flex: 1,
              // width: props.width * props.shimmerWidthPercent,
              width: props.widthFull ? '100%' : calcWidth,
              // transform: [{
              //   translateX: linearTranslate,
              // }],
            }}
          // start={{
          //   x: -1,
          //   y: 0.5,
          // }}
          // end={{
          //   x: 2,
          //   y: 0.5,
          // }}
          // locations={props.location}
          />

        </div>
      )}

    </ShimmerContainer>

  );
};



ShimmerPlaceholder.defaultProps = {
  width: 200,
  height: 15,
  widthFull: false,

  shimmerColors: ['#ebebeb', '#c5c5c5', '#ebebeb'],
  location: [0.3, 0.5, 0.7],
  shimmerWidthPercent: 1,
  opacity: 1,
  borderRadius: 0,

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

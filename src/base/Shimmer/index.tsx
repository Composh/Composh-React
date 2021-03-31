import React,
{
  useState,
} from 'react';

import {
  Animated,
  StyleSheet,
  View,
} from 'react-native';

const getOutputRange = (width: number, isReversed: boolean) => isReversed ? [width, -width] : [-width, width]



interface IProps {
  delay?: number;
  duration?: number;
  isInteraction?: boolean;
}






const BasedShimmerPlaceholder = (props: any) => {
  const {
    width = 200,
    height = 15,
    duration = 1000,
    delay = 0,
    shimmerColors = ["#ebebeb", "#c5c5c5", "#ebebeb"],
    isReversed = false,
    stopAutoRun = false,
    visible,
    location = [0.3, 0.5, 0.7],
    style,
    contentStyle,
    shimmerStyle,
    isInteraction = true,
    LinearGradient = global.Expo
      ? global.Expo.LinearGradient
      : View,
    children,
    animatedValue,
    beginShimmerPosition,
    shimmerWidthPercent = 1,
    containerProps,
    shimmerContainerProps,
    childrenContainerProps
  } = props

  const linearTranslate = beginShimmerPosition.interpolate({
    inputRange: [-1, 1],
    outputRange: getOutputRange(width, isReversed)
  });

  React.useEffect(() => {
    if (!stopAutoRun) {
      animatedValue.start()
    }
    return () => {
      animatedValue.stop()
    }
  }, [stopAutoRun])

  React.useEffect(() => {
    if (visible) {
      animatedValue.stop()
    }
    if (!visible && !stopAutoRun) {
      animatedValue.start()
    }
  }, [visible, stopAutoRun])

  return (
    <View
      style={[!visible && { height, width }, styles.container, !visible && shimmerStyle, style]}
      {...containerProps}
    >
      {/* Force render children to restrict rendering twice */}
      <View
        style={[!visible && { width: 0, height: 0, opacity: 0 }, visible && contentStyle]}
        {...childrenContainerProps}
      >
        {children}
      </View>
      {
        !visible && (
          <View style={{ flex: 1, backgroundColor: shimmerColors[0] }} {...shimmerContainerProps}>
            <Animated.View
              style={{ flex: 1, transform: [{ translateX: linearTranslate }] }}
            >
              <LinearGradient
                colors={shimmerColors}
                style={{ flex: 1, width: width * shimmerWidthPercent }}
                start={{
                  x: -1,
                  y: 0.5
                }}
                end={{
                  x: 2,
                  y: 0.5
                }}
                locations={location}
              />
            </Animated.View>

          </View>
        )
      }
    </View>
  )
}





const ShimmerPlaceholder: React.FC<IProps> = (props) => {
  // class ShimmerPlaceholder extends PureComponent {

  const [beginShimmerPosition] = useState(new Animated.Value(-1))




  // static const createShimmerPlaceholder = (LinearGradient = global.Expo
  //   ? global.Expo.LinearGradient
  //   : View) => React.forwardRef((props, ref) => <ShimmerPlaceholder LinearGradient={LinearGradient} ref={ref} {...props} />)


  const getAnimated = () => {
    return Animated.loop(Animated.timing(beginShimmerPosition, {
      toValue: 1,
      delay: props.delay,
      duration: props.duration,
      useNativeDriver: true,
      isInteraction: props.isInteraction
    }))
  }
  const animatedValue = getAnimated()



  return (
    <BasedShimmerPlaceholder
      {...props}
      animatedValue={animatedValue}
      beginShimmerPosition={beginShimmerPosition}
    />
  )
}



const styles = StyleSheet.create({
  container: {
    overflow: "hidden"
  },
});



ShimmerPlaceholder.defaultProps = {
  delay: 0,
  duration: 1000,
  isInteraction: true
}



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

const createShimmerPlaceholder = (LinearGradient = global.Expo
  ? global.Expo.LinearGradient
  : View
) => React.forwardRef((props, ref) =>
  <ShimmerPlaceholder
    LinearGradient={LinearGradient}
    ref={ref} {...props}
  />
);



export default {
  ShimmerPlaceholder,
  createShimmer: createShimmerPlaceholder
};
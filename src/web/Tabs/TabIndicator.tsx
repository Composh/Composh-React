import React from 'react';

import {
  TabIndicatorContainer,
} from './styled';

// import {
//   RTLService,
// } from '../../core/services/Rlt.service';



export interface ITabIndicatorProps {
  ref?: any;
  style?: any;
  positions: number;
  selectedPosition?: number;
}

export type TabIndicatorElement = React.ReactElement<ITabIndicatorProps>;



const TabIndicator: React.FC<ITabIndicatorProps> = (props: any) => {
  // const selectedPosition = 0;

  // const indicatorWidth: number;

  // function componentDidMount() {
  //   this.contentOffset.addListener(this.onContentOffsetAnimationStateChanged);
  // }

  // function shouldComponentUpdate(nextProps: ITabIndicatorProps): boolean {
  //   return this.props.selectedPosition !== nextProps.selectedPosition;
  // }

  // function componentDidUpdate() {
  //   const { selectedPosition: index } = this.props;

  //   this.scrollToIndex({
  //     index,
  //     animated: true,
  //   });
  // }

  // function componentWillUnmount() {
  //   this.contentOffset.removeAllListeners();
  // }

  // /**
  //  * scrolls indicator to passed index
  //  *
  //  * @param params (object) - {
  //  *  index: number,
  //  *  animated: boolean | undefined
  //  * }
  //  */
  // function scrollToIndex(params: { index: number, animated?: boolean }) {
  //   const { index, ...rest } = params;
  //   const offset: number = this.indicatorWidth * index;

  //   this.scrollToOffset({ offset, ...rest });
  // }

  // /**
  //  * scrolls indicator to passed offset
  //  *
  //  * @param params (object) - {
  //  *  offset: number,
  //  *  animated: boolean | undefined
  //  * }
  //  */
  // function scrollToOffset(params: { offset: number, animated?: boolean }) {
  //   this.createOffsetAnimation(params).start(this.onContentOffsetAnimationStateEnd);
  // }

  // const onContentOffsetAnimationStateChanged = (state: { value: number }) => {
  //   // no-op
  // };

  // const onContentOffsetAnimationStateEnd = (result: { finished: boolean }) => {
  //   // no-op
  // };

  // const createOffsetAnimation = (params: { offset: number, animated?: boolean }): Animated.CompositeAnimation => {
  //   return Animated.timing(this.contentOffset, {
  //     toValue: RTLService.select(params.offset, -params.offset),
  //     duration: 200,
  //     easing: Easing.linear,
  //     useNativeDriver: Platform.OS !== 'web',
  //   });
  // };

  // const onLayout = (event: LayoutChangeEvent) => {
  //   this.indicatorWidth = event.nativeEvent.layout.width;

  //   this.scrollToOffset({
  //     offset: this.indicatorWidth * this.props.selectedPosition,
  //     animated: false,
  //   });
  // };

  // const getComponentStyle = (): ViewStyle => {
  //   const widthPercent: number = 100 / this.props.positions;

  //   return {
  //     width: `${widthPercent}%`,

  //     // @ts-ignore: RN has no types for `Animated` styles
  //     transform: [{ translateX: this.contentOffset }],
  //   };
  // };

  // const { style, ...viewProps } = this.props;
  // // const evaStyle: ViewStyle = this.getComponentStyle();



  return (
    <TabIndicatorContainer
      {...props}
      style={{
        width: 30,
        height: 5,
        backgroundColor: 'red',
      }}
    // Animated.View
    // {...viewProps}
    // style={[
    //   style,
    //   //  evaStyle,
    // ]}
    // onLayout={this.onLayout}
    />
  );
};



export default TabIndicator;

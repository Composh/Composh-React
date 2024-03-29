/**
 * @license
 * Copyright Composh. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';

import {
  Animated,
  Easing,
  GestureResponderEvent,
  LayoutChangeEvent,
  PanResponder,
  PanResponderCallbacks,
  PanResponderGestureState,
  PanResponderInstance,
  Platform,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

import {
  ChildrenWithProps,
} from '../../core/config/Typings';

import {
  RTLService,
} from '../../core/services/Rlt.service';



export interface IViewPagerProps<ChildrenProps = {}> extends ViewProps {
  children?: ChildrenWithProps<ChildrenProps>;

  selectedIndex?: number;
  swipeEnabled?: boolean;

  onSelect?: (index: number) => void;
  shouldLoadComponent?: (index: number) => boolean;
  onOffsetChange?: (offset: number) => void;
}

export type ViewPagerElement = React.ReactElement<IViewPagerProps>;



class ViewPager<ChildrenProps = {}> extends React.Component<IViewPagerProps<ChildrenProps>>
  implements PanResponderCallbacks {
  static defaultProps: Partial<IViewPagerProps> = {
    selectedIndex: 0,
    swipeEnabled: true,
    shouldLoadComponent: (): boolean => true,
  };

  private containerRef = React.createRef<View>();
  private contentWidth = 0;
  private contentOffsetValue = 0;
  private contentOffset: Animated.Value = new Animated.Value(this.contentOffsetValue);
  private panResponder: PanResponderInstance = PanResponder.create(this);

  public componentDidMount(): void {
    this.contentOffset.addListener(this.onContentOffsetAnimationStateChanged);
  }

  public componentDidUpdate(prevProps: IViewPagerProps): void {
    if (prevProps.selectedIndex !== this.props.selectedIndex) {
      const index: number = this.props.selectedIndex;
      this.scrollToIndex({ index, animated: true });
    }
  }

  public componentWillUnmount(): void {
    this.contentOffset.removeAllListeners();
  }

  public onMoveShouldSetPanResponder = (event: GestureResponderEvent, state: PanResponderGestureState): boolean => {
    const isHorizontalMove: boolean = Math.abs(state.dx) > 0 && Math.abs(state.dx) > Math.abs(state.dy);

    if (isHorizontalMove) {
      const i18nOffset: number = RTLService.select(state.dx, -state.dx);
      const nextSelectedIndex: number = this.props.selectedIndex - Math.sign(i18nOffset);
      return nextSelectedIndex >= 0 && nextSelectedIndex < this.getChildCount();
    }

    return false;
  };

  public onPanResponderMove = (event: GestureResponderEvent, state: PanResponderGestureState): void => {
    const i18nOffset: number = RTLService.select(this.contentWidth, -this.contentWidth);
    const selectedPageOffset: number = this.props.selectedIndex * i18nOffset;

    this.contentOffset.setValue(state.dx - selectedPageOffset);
  };

  public onPanResponderRelease = (event: GestureResponderEvent, state: PanResponderGestureState) => {
    if (Math.abs(state.vx) >= 0.5 || Math.abs(state.dx) >= 0.5 * this.contentWidth) {
      const i18nOffset: number = RTLService.select(state.dx, -state.dx);
      const index: number = i18nOffset > 0 ? this.props.selectedIndex - 1 : this.props.selectedIndex + 1;
      this.scrollToIndex({ index, animated: true });
    }
    else {
      const index: number = this.props.selectedIndex;
      this.scrollToIndex({ index, animated: true });
    }
  };

  public scrollToIndex(params: { index: number, animated?: boolean }): void {
    const { index, ...rest } = params;
    const childCount = this.getChildCount() - 1;
    const offset: number = this.contentWidth * (index < 0 ? 0 : index > childCount ? childCount : index);

    this.scrollToOffset({ offset, ...rest });
  }

  public scrollToOffset = (params: { offset: number, animated?: boolean }): void => {
    this.createOffsetAnimation(params).start(this.onContentOffsetAnimationStateEnd);
  };

  private onLayout = (event: LayoutChangeEvent): void => {
    this.contentWidth = event.nativeEvent.layout.width / this.getChildCount();
    this.scrollToIndex({ index: this.props.selectedIndex });
  };

  private onContentOffsetAnimationStateChanged = (state: { value: number }): void => {
    this.contentOffsetValue = RTLService.select(-state.value, state.value);

    if (this.props.onOffsetChange) {
      this.props.onOffsetChange(this.contentOffsetValue);
    }
  };

  private onContentOffsetAnimationStateEnd = (result: { finished: boolean }): void => {
    const selectedIndex: number = this.contentOffsetValue / this.contentWidth;

    if (selectedIndex !== this.props.selectedIndex && this.props.onSelect) {
      this.props.onSelect(Math.round(selectedIndex));
    }
  };

  private createOffsetAnimation = (params: { offset: number, animated?: boolean }): Animated.CompositeAnimation => {
    const animationDuration: number = params.animated ? 300 : 0;

    return Animated.timing(this.contentOffset, {
      toValue: RTLService.select(-params.offset, params.offset),
      easing: Easing.linear,
      duration: animationDuration,
      useNativeDriver: Platform.OS !== 'web',
    });
  };

  private renderComponentChild = (source: React.ReactElement<ChildrenProps>, index: number): React.ReactElement => {
    const contentView = this.props.shouldLoadComponent(index) ? source : null;

    return (
      <View style={styles.contentContainer}>
        {contentView}
      </View>
    );
  };

  private renderComponentChildren = (source: ChildrenWithProps<ChildrenProps>): React.ReactElement[] => {
    return React.Children.map(source, this.renderComponentChild);
  };

  private getChildCount = (): number => {
    return React.Children.count(this.props.children);
  };

  private getContainerStyle = (): ViewStyle => {
    return {
      width: `${100 * this.getChildCount()}%`,

      // @ts-ignore: RN has no types for `Animated` styles
      transform: [{ translateX: this.contentOffset }],
    };
  };

  public render(): React.ReactElement<ViewProps> {
    const { style, children, swipeEnabled, ...viewProps } = this.props;

    const panResponderConfig = swipeEnabled ? this.panResponder.panHandlers : null;
    const animatedViewProps = { ...viewProps, ...panResponderConfig };

    return (
      <Animated.View
        {...animatedViewProps}
        style={[styles.container, style, this.getContainerStyle()]}
        onLayout={this.onLayout}
        // @ts-ignore
        ref={this.containerRef}>
        {this.renderComponentChildren(children)}
      </Animated.View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  contentContainer: {
    flex: 1,
    width: '100%',
  },
});



export default ViewPager;

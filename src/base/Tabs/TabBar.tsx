import React from 'react';

import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';

import {
  ChildrenWithProps,
} from '../../config/Typings';

import {
  Metrics,
} from '../../constants';


import {
  TabElement,
  ITabProps,
} from './Tab';

import TabIndicator from './TabIndicator';



export interface ITabBarProps extends ViewProps {
  children?: ChildrenWithProps<ITabProps>;

  selectedIndex?: number;
  onSelect?: (index: number) => void;
  indicatorStyle?: StyleProp<ViewStyle>;

  height?: number;
  style?: any;
}

export type TabBarElement = React.ReactElement<ITabBarProps>;



class TabBar extends React.Component<ITabBarProps> {
  static defaultProps: Partial<ITabBarProps> = {
    selectedIndex: 0,
    height: Metrics.SubToolbar,
  };

  private tabIndicatorRef = React.createRef<TabIndicator>();


  // public scrollToIndex(params: { index: number, animated?: boolean }): void {
  //   this.tabIndicatorRef.current?.scrollToIndex(params);
  // }

  // public scrollToOffset(params: { offset: number, animated?: boolean }): void {
  //   this.tabIndicatorRef.current?.scrollToOffset(params);
  // }


  private onTabSelect = (index: number): void => {
    this.props.onSelect && this.props.onSelect(index);
  };


  // private getComponentStyle = (source: StyleType) => {
  //   const {
  //     indicatorHeight,
  //     indicatorBorderRadius,
  //     indicatorBackgroundColor,
  //     ...containerParameters
  //   } = source;

  //   return {
  //     container: containerParameters,
  //     item: {},
  //     indicator: {
  //       height: indicatorHeight,
  //       borderRadius: indicatorBorderRadius,
  //       backgroundColor: indicatorBackgroundColor,
  //     },
  //   };
  // };


  private isTabSelected = (index: number): boolean => {
    return index === this.props.selectedIndex;
  };


  private renderTabElement = (element: TabElement, index: number): TabElement => {
    return React.cloneElement(element, {
      key: index,
      style: [styles.item, element.props.style],
      selected: this.isTabSelected(index),
      onSelect: () => this.onTabSelect(index),
    });
  };


  private renderTabElements = (source: ChildrenWithProps<TabProps>): TabElement[] => {
    return React.Children.map(source, this.renderTabElement);
  };



  public render(): React.ReactElement<ViewProps> {
    const {
      // eva,
      height,
      style, indicatorStyle, selectedIndex, children,
      ...viewProps
    } = this.props;

    // const evaStyle = this.getComponentStyle(eva.style);
    const tabElements: TabElement[] = this.renderTabElements(children);

    return (
      <View style={[
        {
          flex: 1,
          // width: '100%',
          height: height, // '100%',
          backgroundColor: 'white',
        },
        style,
      ]}>

        <View
          {...viewProps}
          style={[
            styles.container,
          ]}>

          {tabElements}

        </View>


        <TabIndicator
          ref={this.tabIndicatorRef}
          style={[
            styles.indicator,
            indicatorStyle,
          ]}
          selectedPosition={selectedIndex}
          positions={tabElements.length}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
  },

  item: {
    flex: 1,
  },

  indicator: {},
});



export default TabBar;



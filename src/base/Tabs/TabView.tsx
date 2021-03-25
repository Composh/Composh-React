/**
 * @license
 * Copyright Composh. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';

import {
  StyleProp,
  StyleSheet,
  View,
  // ViewProps,
  ViewStyle,
} from 'react-native';

import {
  ChildrenWithProps,
} from '../../config/Typings';

import ViewPager, {
  IViewPagerProps,
} from '../ViewPager';

import {
  TabElement,
  ITabProps,
} from './Tab';

import TabBar from './TabBar';



class TabViewChildElement {
  tab: TabElement;
  content: React.ReactElement;
}

class TabViewChildren {
  tabs: TabElement[] = [];
  contents: React.ReactElement[] = [];
}



export interface ITabViewProps extends IViewPagerProps<ITabProps> {
  children?: ChildrenWithProps<ITabProps>;

  selectedIndex?: number;
  onSelect?: (index: number) => void;

  // height?: number;

  tabBarStyle?: StyleProp<ViewStyle>;
  indicatorStyle?: StyleProp<ViewStyle>;
  viewStyle?: any;
  style?: any;
}

export type TabViewElement = React.ReactElement<ITabViewProps>;



const TabView: React.FC<ITabViewProps> = (props) => {
  const viewPagerRef = React.createRef<ViewPager>();
  const tabBarRef = React.createRef<TabBar>();


  const onBarSelect = (index: number): void => {
    props.onSelect && props.onSelect(index);
  };

  const onPagerOffsetChange = (offset: number): void => {
  };

  const onPagerSelect = (index: number): void => {
    props.onSelect && props.onSelect(index);
  };

  const renderComponentChild = (element: TabElement, index: number): TabViewChildElement => {
    return {
      tab: React.cloneElement(element, { key: index }),
      content: element.props.children,
    };
  };

  const renderComponentChildren = (source: ChildrenWithProps<ITabProps>): TabViewChildren => {
    const children = React.Children.toArray(source) as TabElement[];

    return children.reduce((acc: TabViewChildren, element: TabElement, index: number) => {
      const { tab, content } = renderComponentChild(element, index);
      return {
        tabs: [...acc.tabs, tab],
        contents: [...acc.contents, content],
      };
    }, new TabViewChildren());
  };

  // public render(): React.ReactElement < ViewProps > {
  // const { style, selectedIndex, children, tabBarStyle, indicatorStyle, ...viewProps } = props;
  const { tabs, contents } = renderComponentChildren(props.children);



  return (

    <View
      // {...viewProps}
      style={[styles.container, props.style]}>

      <TabBar
        style={props.tabBarStyle}
        ref={tabBarRef}
        selectedIndex={props.selectedIndex}
        indicatorStyle={props.indicatorStyle}
        onSelect={onBarSelect}>
        {tabs}
      </TabBar>


      <ViewPager
        // {...viewProps}
        ref={viewPagerRef}
        style={[styles.container, props.viewStyle]}
        selectedIndex={props.selectedIndex}
        shouldLoadComponent={props.shouldLoadComponent}
        onOffsetChange={onPagerOffsetChange}
        onSelect={onPagerSelect}>
        {contents}
      </ViewPager>

    </View>

  );
};



const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});



TabView.defaultProps = {
  selectedIndex: 0,
};



export default TabView;

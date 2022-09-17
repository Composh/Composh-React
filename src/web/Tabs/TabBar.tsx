import React from 'react';

// import {
//   Metrics,
// } from '../../constants';

import {
  ChildrenWithProps,
} from '../../core/config/Typings';

import {
  TabBarContainer,
  TabBarContent,
} from './styled';

import {
  TabElement,
  ITabProps,
} from './Tab';

import TabIndicator from './TabIndicator';



export interface ITabBarProps {
  children?: ChildrenWithProps<ITabProps>;

  selectedIndex?: number;
  onSelect?: (index: number) => void;
  indicatorStyle?: any;

  height?: number;
  backgroundColor?: string;
  style?: any;
}

export type TabBarElement = React.ReactElement<ITabBarProps>;



const TabBar: React.FC<ITabBarProps> = (props: any) => {
  const tabIndicatorRef = React.createRef<any | null>();


  // public scrollToIndex(params: { index: number, animated?: boolean }): void {
  //   this.tabIndicatorRef.current?.scrollToIndex(params);
  // }

  // public scrollToOffset(params: { offset: number, animated?: boolean }): void {
  //   this.tabIndicatorRef.current?.scrollToOffset(params);
  // }


  const onTabSelect = (index: number): void => {
    props.onSelect && props.onSelect(index);
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


  const isTabSelected = (index: number): boolean => {
    return index === props.selectedIndex;
  };


  const renderTabElement = (element: TabElement, index: number): TabElement => {
    const aaaa = {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    };

    const styleTabAssign = element.props.style
      ? Object.assign(element.props.style, aaaa)
      : aaaa;

    return React.cloneElement(element, {
      key: index,
      style: styleTabAssign,
      selected: isTabSelected(index),
      onSelect: () => onTabSelect(index),
    });
  };


  const renderTabElements = (source: ChildrenWithProps<ITabProps>): TabElement[] => {
    return React.Children.map(source, renderTabElement);
  };


  // const evaStyle = this.getComponentStyle(eva.style);
  const tabElements: TabElement[] = renderTabElements(props.children);



  return (

    <TabBarContainer
      // width: '100%',
      height={props.height} // '100%',
      backgroundColor={props.backgroundColor}
      style={props.style}>

      <TabBarContent>

        {tabElements}

      </TabBarContent>


      {/* <TabIndicator
        ref={tabIndicatorRef}
        style={props.indicatorStyle}
        selectedPosition={props.selectedIndex}
        positions={tabElements.length}
      /> */}
    </TabBarContainer>

  );
};



TabBar.defaultProps = {
  selectedIndex: 0,
  height: 46, // Metrics.SubToolbar,
};



export default TabBar;

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

// import TabIndicator from './TabIndicator';



export interface ISelectInfo {
  index: number;
  key: string;
}


export interface ITabBarProps {
  children?: ChildrenWithProps<ITabProps> | any; // FIXME

  selectedIndex?: number;
  onSelect?: (index: {
    index: number;
    key: string;
  }) => void;
  indicatorStyle?: any;

  height?: number;
  backgroundColor?: string;
  style?: any;
}

export type TabBarElement = React.ReactElement<ITabBarProps>;



const TabBar: React.FC<ITabBarProps> = (props: any) => {
  const tabIndicatorRef = React.createRef<any | null>();

  const selectedIndexReceived = props.selectedIndex || 0;


  // public scrollToIndex(params: { index: number, animated?: boolean }): void {
  //   this.tabIndicatorRef.current?.scrollToIndex(params);
  // }

  // public scrollToOffset(params: { offset: number, animated?: boolean }): void {
  //   this.tabIndicatorRef.current?.scrollToOffset(params);
  // }


  const onTabSelect = (index: ISelectInfo): void => {
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
    return index === selectedIndexReceived;
  };


  const renderTabElement = (element: TabElement, indexReceived: number): TabElement | null => {
    if (!element) {
      return null;
    }

    const itemStyle = null;
    // const itemStyle = {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   flex: 1,
    // };

    const styleTabAssign = element.props.style
      ? Object.assign(element.props.style, itemStyle)
      : itemStyle;

    return React.cloneElement(element, {
      key: indexReceived,
      style: styleTabAssign,
      selected: isTabSelected(indexReceived),
      onSelect: () => onTabSelect({ index: indexReceived, key: element?.key ? String(element?.key) : String(indexReceived) }),
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
      height={props.height || 46} // '100%',
      backgroundColor={props.backgroundColor}
      style={props.style}>

      <TabBarContent>

        {tabElements}

      </TabBarContent>


      {/* <TabIndicator
        ref={tabIndicatorRef}
        style={props.indicatorStyle}
        selectedPosition={selectedIndexReceived}
        positions={tabElements.length}
      /> */}
    </TabBarContainer>

  );
};



export default TabBar;

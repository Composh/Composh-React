import React from 'react';

import {
  TabContainer,
  TabIcon,
  TabText,
} from './styled';



// type TabStyledProps = Overwrite<StyledComponentProps, {
//   appearance?: 'default' | string;
// }>;



export interface ITabProps {
  // children?: React.ReactElement;

  right?: boolean;
  left?: boolean;

  title?: any; // string | React.ReactText; // RenderProp<TextProps> | React.ReactText;
  textColor?: any;

  icon?: any; // RenderProp<Partial<ImageProps>>;
  selected?: boolean;
  onSelect?: (selected: boolean) => void;

  titleStyle?: any;
  style?: any;
}

export type TabElement = React.ReactElement<ITabProps>;



const Tab: React.FC<ITabProps> = (props: any) => {
  // const onMouseEnter = (event: NativeSyntheticEvent<TargetedEvent>): void => {
  //   // this.props.eva.dispatch([Interaction.HOVER]);
  //   props.onMouseEnter && props.onMouseEnter(event);
  // };

  // const onMouseLeave = (event: NativeSyntheticEvent<TargetedEvent>): void => {
  //   // this.props.eva.dispatch([]);
  //   props.onMouseLeave && props.onMouseLeave(event);
  // };

  const onPress = (): void => {
    props.onSelect && props.onSelect(!props.selected);
  };

  // const getComponentStyle = (source: StyleType) => {
  //   const {
  //     textMarginVertical,
  //     textFontFamily,
  //     textFontSize,
  //     textFontWeight,
  //     textColor,
  //     iconWidth,
  //     iconHeight,
  //     iconMarginVertical,
  //     iconTintColor,
  //     ...containerParameters
  //   } = source;

  //   return {
  //     container: containerParameters,
  //     icon: {
  //       width: iconWidth,
  //       height: iconHeight,
  //       marginVertical: iconMarginVertical,
  //       tintColor: iconTintColor,
  //     },
  //     title: {
  //       marginVertical: textMarginVertical,
  //       fontFamily: textFontFamily,
  //       fontSize: textFontSize,
  //       fontWeight: textFontWeight,
  //       color: textColor,
  //     },
  //   };
  // };

  // const { eva, style, title, icon, ...touchableProps } = this.props;
  // const evaStyle = this.getComponentStyle(eva.style);



  // {state.routes.map((route, index) => {
  //   const { options } = descriptors[route.key];
  //   const label =
  //     options.tabBarLabel !== undefined
  //       ? options.tabBarLabel
  //       : options.title !== undefined
  //         ? options.title
  //         : route.name;

  //   const isFocused = state.index === index;

  //   const onPress = () => {
  //     const event = navigation.emit({
  //       type: 'tabPress',
  //       target: route.key,
  //       canPreventDefault: true,
  //     });

  //     if (!isFocused && !event.defaultPrevented) {
  //       navigation.navigate(route.name);
  //     }
  //   };

  //   const onLongPress = () => {
  //     navigation.emit({
  //       type: 'tabLongPress',
  //       target: route.key,
  //     });
  //   };

  //   const inputRange = state.routes.map((_, i) => i);
  //   const opacity = Animated.interpolateNode(position, {
  //     inputRange,
  //     outputRange: inputRange.map(i => (i === index ? 1 : 0)),
  //   });

  //   return (
  //     <TouchableOpacity
  //       accessibilityRole="button"
  //       accessibilityState={isFocused ? { selected: true } : {}}
  //       accessibilityLabel={options.tabBarAccessibilityLabel}
  //       testID={options.tabBarTestID}
  //       onPress={onPress}
  //       onLongPress={onLongPress}
  //       style={{ flex: 1 }}
  //     >
  //       <Animated.Text style={{ color: 'white', opacity }}>
  //         {label}
  //       </Animated.Text>
  //     </TouchableOpacity>
  //   );
  // })}


  const iconTabView = props.icon && (
    <TabIcon
      style={{
        marginRight: props.left ? 8 : 0,
        marginLeft: props.right ? 8 : 0,
      }}>

      {props.icon}

    </TabIcon>
  );



  return (

    <TabContainer
      {...props}
      style={props.style}
      // onMouseEnter={this.onMouseEnter}
      // onMouseLeave={this.onMouseLeave}
      onClick={onPress}>

      {props.left && iconTabView}


      <TabText
        color={props.textColor}
        style={props.titleStyle}>
        {props.title}
      </TabText>


      {!props.left && props.right && iconTabView}

    </TabContainer>

  );
};



Tab.defaultProps = {
  selected: false,
  left: false,
  right: true,
};



export default Tab;

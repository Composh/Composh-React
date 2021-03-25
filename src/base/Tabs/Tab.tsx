/**
 * @license
 * Copyright Composh. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';

import {
  // ImageProps,
  // NativeSyntheticEvent,
  StyleSheet,
  // TargetedEvent,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// type TabStyledProps = Overwrite<StyledComponentProps, {
//   appearance?: 'default' | string;
// }>;



export interface ITabProps {
  children?: React.ReactElement;

  right?: boolean;
  left?: boolean;

  // title?: string | React.ReactText; // RenderProp<TextProps> | React.ReactText;
  title?: any;
  icon?: any; // RenderProp<Partial<ImageProps>>;
  selected?: boolean;
  onSelect?: (selected: boolean) => void;

  titleStyle?: any;
  style?: any;
}

export type TabElement = React.ReactElement<ITabProps>;



const Tab: React.FC<ITabProps> = (props) => {
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
    <View style={{
      height: 35,
      width: 35,
      marginRight: props.left ? 8 : 0,
      marginLeft: props.right ? 8 : 0,
    }}>

      {props.icon}

    </View>
  );



  return (

    <TouchableOpacity
      // {...touchableProps}
      style={[
        styles.container,
        props.style,
      ]}
      // onMouseEnter={this.onMouseEnter}
      // onMouseLeave={this.onMouseLeave}
      onPress={onPress}>

      {props.left && iconTabView}


      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[
          {
            fontSize: 14,
            color: 'black',
          },
          props.titleStyle,
        ]}>

        {props.title}

      </Text>


      {props.right && iconTabView}

    </TouchableOpacity>

  );
};



Tab.defaultProps = {
  selected: false,
  left: false,
  right: true,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
});



export default Tab;

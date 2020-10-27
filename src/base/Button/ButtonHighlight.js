/* eslint-disable prettier/prettier */

// https://galio.io/docs/#/components/button


// React Components Import
import React from 'react';

import PropTypes from 'prop-types';

import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';

// Lib Configs Import
import {
  Colors,
  Sizes,
} from '../../constants';

// Components Lib Import
import Icon from '../Icon';

// Plugins Import
import LinearGradient from 'react-native-linear-gradient';

// Constants Declared
const { width } = Dimensions.get('window');



function ButtonHighlight({
  color,
  backgroundColorTop,
  backgroundColorMiddle,
  backgroundColorBottom,
  gradientLinear,

  disabled,
  opacity,

  round,
  borderTopEndRadius,
  borderTopStartRadius,
  borderBottomEndRadius,
  borderBottomStartRadius,

  radius,
  size,
  style,

  styles,

  capitalize,
  lowercase,
  uppercase,

  isObject,

  iconName,
  iconFamily,
  iconSize,
  iconColor,
  onlyIcon,
  withIcon,

  loading,
  loadingSize,

  textColor,
  textStyle,

  shadowless,
  shadowColor,
  children,
  theme,

  ...rest
}) {

  const colorStyle = styles[color];

  const buttonStyles = [

    // Style Button
    stylesBTHL.defaultButton,

    // Apply Style
    color && colorStyle,

    // color set & no styles for that color
    color && !colorStyle && { backgroundColor: color },

    // Transparent Button
    color === 'transparent' && stylesBTHL.androidShadow,
    color === 'transparent' && !shadowless && { borderWidth: 1, borderColor: 'white' },

    // Set Button Size
    size === 'large' ? { width: width * 0.9 } : { width: width * 0.5 },

    // Set Config By Only Icon
    onlyIcon && {
      width: iconSize * 1.25,
      height: iconSize * 2,
      borderWidth: 0,
      borderRadius: iconSize,
    },

    // Apply Radius
    radius
    && !round
    && !borderTopStartRadius
    && !borderTopEndRadius
    && !borderBottomStartRadius
    && !borderBottomEndRadius
    && { borderRadius: radius },

    // Apply Radius Constant
    round
    && !radius
    && !borderTopStartRadius
    && !borderTopEndRadius
    && !borderBottomStartRadius
    && !borderBottomEndRadius
    && { borderRadius: Sizes.BASE * 2 },

    // Apply Radius By Position
    !radius && !round && borderTopStartRadius && { borderTopStartRadius: borderTopStartRadius },
    !radius && !round && borderTopEndRadius && { borderTopEndRadius: borderTopEndRadius },
    !radius && !round && borderBottomStartRadius && { borderBottomStartRadius: borderBottomStartRadius },
    !radius && !round && borderBottomEndRadius && { borderBottomEndRadius: borderBottomEndRadius },

    // Shadow Android Style
    !shadowless && stylesBTHL.androidShadow,

    // Shadow IOS Style
    !shadowless && stylesBTHL.shadow,
    { shadowColor: shadowColor || color },

    // Style User
    style,
    { zIndex: 2 },
  ];



  function renderContent() {
    const textStyles = [
      stylesBTHL.customText,
      { color: textColor || Colors.WHITE },
      textStyle,
    ];

    // workaround for textTransform not supported on Expo SDK 29.0.0 or 30.0.0
    // More info: https://docs.expo.io/versions/latest/sdk/index.html#sdk-version
    // waiting for Expo SDK to support react-native 56.0.0

    let content = children;
    const isString = children && typeof children === 'string';

    if (uppercase && isString) {
      content = children.toUpperCase();
    }
    if (lowercase && isString) {
      content = children.toLowerCase();
    }
    if (capitalize && isString) {
      content = `${children.charAt(0).toUpperCase()}${children.slice(1)}`;
    }


    if (onlyIcon) {
      content = (
        <Icon
          name={iconName}
          type={iconFamily}
          size={iconSize}
          color={iconColor || Colors.BLACK}
        />
      );
    } else if (!withIcon && isString) {
      content = (
        <Text style={textStyles}>
          {content}
        </Text>
      );
    } else if (withIcon && iconName && iconFamily) {
      content = (
        <View style={stylesBTHL.iconTextContent}>
          <Icon
            name={iconName}
            type={iconFamily}
            size={iconSize}
            color={iconColor || Colors.BLACK}
          />

          <Text style={[
            stylesBTHL.iconTextStyle,
            textStyles,
          ]}>
            {content}
          </Text>

          {/* TODO: MAKE RIGHT ICON */}
          {false && (
            <Icon
              name={iconName}
              type={iconFamily}
              size={iconSize}
              color={iconColor || Colors.BLACK}
            />
          )}
        </View>
      );
    }

    if (isObject) {
      content = children;
    }

    if (loading) {
      content = (
        <ActivityIndicator
          size={loadingSize}
          color={Colors.WHITE}
        />
      );
    }

    return content;
  }



  function renderButtonHL() {
    let buttonHL = children;

    if (backgroundColorTop && backgroundColorBottom) {
      buttonHL = (
        <TouchableOpacity
          disabled={disabled}
          activeOpacity={opacity}
          {...rest}>
          <LinearGradient
            colors={[
              backgroundColorTop,
              // backgroundColorMiddle,
              backgroundColorBottom,
            ]}
            start={
              gradientLinear === 'row'
                ? { x: 0, y: 1 }
                : gradientLinear === 'linear'
                  ? { x: 1, y: 1 }
                  : { x: 0, y: 0 }
            }
            end={
              gradientLinear === 'row'
                ? { x: 1, y: 1 }
                : gradientLinear === 'linear'
                  ? { x: 0, y: 0 }
                  : { x: 0, y: 1 }
            }
            style={[
              { overflow: 'hidden' },
              buttonStyles,
            ]}>
            {renderContent()}
          </LinearGradient>
        </TouchableOpacity>
      );
    } else {
      buttonHL = (
        <TouchableOpacity
          disabled={disabled}
          activeOpacity={opacity}
          style={buttonStyles}
          {...rest}>
          {renderContent()}
        </TouchableOpacity>
      );
    }

    return buttonHL;
  }



  return (
    renderButtonHL()
  );

}



ButtonHighlight.defaultProps = {
  color: Colors.PRIMARY,
  size: 'large',
  disabled: false,
  radius: 0,
  uppercase: false,
  lowercase: false,
  capitalize: false,
  shadowless: false,
  shadowColor: false,
  onlyIcon: false,
  loading: false,
  loadingSize: 'small',
  opacity: 0.8,
  icon: false,
  iconFamily: false,
  iconSize: 14,
  iconColor: null,
  styles: {},
};



ButtonHighlight.propTypes = {
  ...TouchableOpacity.propTypes,
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['large', 'small']),
    PropTypes.number,
  ]),
  iconColor: PropTypes.string,
  disabled: PropTypes.bool,
  radius: PropTypes.number,
  uppercase: PropTypes.bool,
  lowercase: PropTypes.bool,
  capitalize: PropTypes.bool,
  loading: PropTypes.bool,
  loadingSize: PropTypes.oneOf(['small', 'large']),
  opacity: PropTypes.number,
  shadowless: PropTypes.bool,
  shadowColor: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  onlyIcon: PropTypes.bool,
  icon: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  iconFamily: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  iconSize: PropTypes.number,
  styles: PropTypes.any,
};



const stylesBTHL = StyleSheet.create({

  defaultButton: {
    borderRadius: 3,
    width: Sizes.BUTTON_WIDTH,
    height: Sizes.BUTTON_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },

  androidShadow: {
    elevation: Sizes.ANDROID_ELEVATION,
  },

  shadow: {
    shadowColor: Colors.BLOCK,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: Sizes.OPACITY,
    shadowRadius: Sizes.BUTTON_SHADOW_RADIUS,
  },

  iconTextContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  iconTextStyle: {
    flex: 1,
    textAlign: 'center',
  },

  customText: {
    fontSize: Sizes.FONT,
    color: Colors.WHITE,
  },

});



export default ButtonHighlight;

import React from 'react';

// import PropTypes from 'prop-types';

import {
  // Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Application Configs Import
import {
  Colors,
} from '../../constants';

import CheckBoxIcon from './CheckBoxIcon';



const CheckBox = props => {
  const { ...rest } = props;

  const {
    // Component,
    activeOpacity,

    checked,
    iconRight,
    title,
    titleProps,
    center,
    right,
    containerStyle,
    textStyle,
    wrapperStyle,
    onPress,
    onLongPress,
    checkedTitle,
    fontFamily,
    checkedColor = Colors.PRIMARY,

    iconContent,
    size,

    ...attributes
  } = rest;

  const accessibilityState = {
    checked: !!checked,
  };



  const iconContainerStyle = [
    {
      alignItems: 'center',
      justifyContent: 'center',
      width: size + 5 || 24,
      height: size + 5 || 24,
      // backgroundColor: 'red',
    },
    !right && {
      marginLeft: 2,
      marginRight: 8,
    },
    right && {
      marginLeft: 8,
    },
  ];


  const iconInstance = !iconContent ? (
    <View style={iconContainerStyle}>
      <CheckBoxIcon
        {...props}
        size={size || 24}
        checkedColor={checkedColor}
      />
    </View>
  ) : (
      <View style={iconContainerStyle}>
        {iconContent}
      </View>
    );



  return (

    <TouchableOpacity
      activeOpacity={activeOpacity || 0.7}

      accessibilityRole="checkbox"
      accessibilityState={accessibilityState}
      testID="checkbox"
      {...attributes}
      onLongPress={onLongPress}
      onPress={onPress}

      style={StyleSheet.flatten([
        styles.container,
        // title && styles.containerHasTitle,
        containerStyle && containerStyle,
      ])}>

      <View
        style={StyleSheet.flatten([
          styles.wrapper,
          right && { justifyContent: 'flex-end' },
          center && { justifyContent: 'center' },
          wrapperStyle && wrapperStyle,
        ])}>

        {!iconRight && iconInstance}

        {React.isValidElement(title) ? (
          title
        ) : (
            <Text
              testID="checkboxTitle"
              style={StyleSheet.flatten([
                styles.textCheckBoxStyle,
                textStyle && textStyle,
                fontFamily && { fontFamily },
              ])}
              {...props}>
              {checked ? checkedTitle || title : title}
            </Text>
          )}

        {iconRight && iconInstance}

      </View>

    </TouchableOpacity>

  );
};



// CheckBox.propTypes = {
//   ...CheckBoxIcon.propTypes,
//   // Component: PropTypes.elementType,
//   iconRight: PropTypes.bool,
//   title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
//   titleProps: PropTypes.object,
//   center: PropTypes.bool,
//   right: PropTypes.bool,
//   containerStyle: PropTypes.object,
//   wrapperStyle: PropTypes.object,
//   textStyle: PropTypes.object,
//   onPress: PropTypes.func,
//   onLongPress: PropTypes.func,
//   checkedTitle: PropTypes.string,
//   fontFamily: PropTypes.string,
// };



CheckBox.defaultProps = {
  checked: false,
  iconRight: false,
  right: false,
  center: false,
  uncheckedColor: '#bfbfbf',
  checkedIcon: 'check-square-o',
  uncheckedIcon: 'square-o',
  size: 24,
  // Component: TouchableOpacity,
  titleProps: {},
};



const styles = {

  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  container: {
    marginTop: 5,
    marginBottom: 5,
    // marginLeft: 10,
    // marginRight: 10,
    // padding: 10,
    paddingTop: 2,
    paddingBottom: 2,
  },

  // containerHasTitle: {
  //   borderWidth: 1,
  //   borderRadius: 3,
  //   backgroundColor: '#fafafa',
  //   borderColor: '#ededed',
  // },

  textCheckBoxStyle: {
    // marginLeft: 10,
    // marginRight: 10,
    color: 'gray',
    fontWeight: 'bold',
  },

};



export default CheckBox;

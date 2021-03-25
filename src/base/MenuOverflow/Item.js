import React from 'react';

import {
  Platform,
  StyleSheet,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from 'react-native';

const Touchable = Platform.select({
  android: TouchableNativeFeedback,
  default: TouchableHighlight,
});



function MenuItem({
  children,
  disabled,
  disabledTextColor,
  ellipsizeMode,
  onPress,
  style,
  textStyle,
  ...props
}) {
  const touchableProps =
    Platform.OS === 'android'
      ? { background: TouchableNativeFeedback.SelectableBackground() }
      : {};

  return (

    <Touchable
      disabled={disabled}
      onPress={onPress}
      {...touchableProps}
      {...props}>

      <View style={[styles.container, style]}>
        {children}
      </View>

    </Touchable>

  );
}



MenuItem.defaultProps = {
  disabled: false,
  disabledTextColor: '#bdbdbd',
  ellipsizeMode: Platform.OS === 'ios' ? 'clip' : 'tail',
  underlayColor: '#e0e0e0',
};



const styles = StyleSheet.create({
  
  container: {
    overflow: 'hidden', // Verify iOS
    height: 48,
    justifyContent: 'center',
    maxWidth: 248,
    minWidth: 124,
  },

});



export default MenuItem;

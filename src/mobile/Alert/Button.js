import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';


const COLOR = Platform.OS === 'ios' ? '#007ff9' : '#32CD32';



export default class DialogButton extends React.PureComponent {
  static propTypes = {
    ...Text.propTypes,
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    bold: PropTypes.bool,
    activeOpacityDialog: PropTypes.number,
    bold: PropTypes.bool,
  };

  static defaultProps = {
    color: COLOR,
    disabled: false,
  };

  static displayName = 'DialogButton';


  render() {
    const {
      label,
      color,
      disabled,
      bold,
      onPress,
      activeOpacityDialog,
      style,
      ...otherProps
    } = this.props;
    const fontWeight = bold ? '600' : 'normal';

    return (

      <TouchableOpacity
        activeOpacity={activeOpacityDialog || 0.2}
        style={styles.button}
        onPress={onPress}
        disabled={disabled}>

        <Text
          style={[styles.text, { color, fontWeight }, style]}
          {...otherProps}>
          {Platform.OS === 'ios' ? label : label.toUpperCase()}
        </Text>

      </TouchableOpacity>

    );
  }
}



const styles = StyleSheet.create({

  button: Platform.select({
    ios: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },

    android: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    web: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  }),


  text: Platform.select({
    ios: {
      textAlign: 'center',
      fontSize: 17,
      backgroundColor: 'transparent',
    },

    android: {
      textAlign: 'center',
      backgroundColor: 'transparent',
      padding: 8,
      fontSize: 14,
    },

    web: {
      textAlign: 'center',
      backgroundColor: 'transparent',
      padding: 8,
      fontSize: 14,
    },
  }),

});

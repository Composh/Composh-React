import React from 'react';
import PropTypes from 'prop-types';

import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';



export default class DialogCheckBox extends React.PureComponent {
  static propTypes = {
    ...View.propTypes,
    style: PropTypes.any,
    children: PropTypes.string.isRequired,
  };

  static displayName = 'DialogContent';


  render() {
    const { style, children, ...otherProps } = this.props;

    return (

      <View style={[style]} {...otherProps}>
        {children}
      </View>

    );
  }
}



const styles = StyleSheet.create({

});

import React from 'react';

import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  // ViewPropTypes,
} from 'react-native';

// import PropTypes from 'prop-types';

import {
  IS_ANDROID,
  IS_LT_LOLLIPOP,
  noop,
} from './utils';



export interface IProps {
  onPress: any; // PropTypes.func,
  style?: any; // ViewPropTypes.style,
  children: any; // PropTypes.node.isRequired,
}



const Touchable: React.FC<IProps> = (props) => {
  // const Touchable = ({ onPress, style, children }) => {
  if (IS_ANDROID && !IS_LT_LOLLIPOP) {
    return (

      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        onPress={props.onPress}>

        <View
          style={props.style}>

          {props.children}

        </View>

      </TouchableNativeFeedback>

    );
  }



  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={props.style}>

      {props.children}

    </TouchableOpacity>
  );
};



Touchable.defaultProps = {
  onPress: noop,
  style: {},
};



export default Touchable;

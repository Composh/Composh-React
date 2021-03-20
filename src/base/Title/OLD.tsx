/* eslint-disable prettier/prettier */
import React from 'react';

// import PropTypes from 'prop-types';

import {
  Platform,
  StyleSheet,
  Text,
} from 'react-native';

import {
  Colors,
  Metrics,
} from '../../constants';



interface IProps {
  color?: string;
  style?: any;
}

// Title.propTypes = {
//   ...Text.propTypes,
//   style: PropTypes.oneOfType([
//     PropTypes.object,
//     PropTypes.number,
//     PropTypes.array,
//   ]),
// };



const Title: React.FC<IProps> = (props: any) => {
  return (
    <Text
      {...props}
      style={[
        { color: props.color ? props.color : Colors.BLACK },
        // styles.titleStyles,
        props.style,
      ]}
      numberOfLines={1}
      ellipsizeMode="tail"
    />
  );
};



const styles = StyleSheet.create({

  titleStyles: {
    marginTop: Platform.OS === 'ios' ? 1 : -2, // It Was Just 1
    fontSize: Platform.OS === 'ios' ? Metrics.TITLE_IOS : Metrics.TITLE_ANDROID,
    fontWeight: Platform.OS === 'ios' ? '700' : '500',

    // fontFamily: Platform.OS === 'ios' ? 'System' : 'Roboto_medium', //Don't Work
    // textAlign: Platform.OS === 'ios' ? 'center' : 'left',
    // paddingLeft: Platform.OS === 'ios' ? 4 : 0,
    // marginLeft: Platform.OS === 'ios' ? undefined : -3,
  },

});



export default Title;

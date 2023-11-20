import React from 'react';

// import PropTypes from 'prop-types';

import {
  StyleSheet,
  View,
} from 'react-native';

// Lib Configs Import
import LinearGradient from 'react-native-linear-gradient';
import {
  Colors,
} from '../../constants';
import {
  shadowStyles,
} from '../../core/theme/Layout';


// Plugins Import



const Card = (props) => {
  const {
    backgroundColor,
    backgroundColorTop,
    // backgroundColorMiddle,
    backgroundColorBottom,
    gradientLinear,
    borderRadius,
    style,
  } = props;



  function renderButtonHL() {
    if (backgroundColorTop && backgroundColorBottom) {
      return (
        <LinearGradient
          colors={[
            backgroundColorTop || Colors.PRIMARY,
            // backgroundColorMiddle,
            backgroundColorBottom || Colors.SECONDARY,
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
            styles.cardStyles,
            shadowStyles.threeShadow,
            {
              borderRadius: borderRadius ? borderRadius : 10,
              // backgroundColor: backgroundColor || Colors.WHITE,
            },
            style,
          ]}>
          {props.children}
        </LinearGradient>
      );
    }
    else {
      return (
        <View style={[
          styles.cardStyles,
          shadowStyles.threeShadow,
          {
            borderRadius: borderRadius ? borderRadius : 10,
            backgroundColor: backgroundColor,
          },
          style,
        ]}>
          {props.children}
        </View>
      );
    }
  }



  return (
    renderButtonHL()
  );
};



// Card.propTypes = {
//   backgroundColor: PropTypes.string,
// };



Card.defaultProps = {
  backgroundColor: Colors.WHITE,
};



const styles = StyleSheet.create({

  cardStyles: {
    // minHeight: 114,
  },

});



export default Card;

import React from 'react';

import PropTypes from 'prop-types';

import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  Colors,
  Sizes,
} from '../../constants';



const BadgeCircle = (props) => {

  const {

    value,

    color,
    containerStyle,

    block,
    round,
    badgeStyle,

    textStyle,

    onPress,
    Component = onPress ? TouchableOpacity : View,

    ...attributes

  } = props;



  const isString = value && typeof value === 'string';

  return (
    <View
      style={[
        styles.noContainerStyle,
        containerStyle && containerStyle,
      ]}>

      <Component
        {...attributes}
        style={[
          { backgroundColor: color },
          styles.badge,
          !isString && styles.miniBadge,
          badgeStyle && badgeStyle,
          block && !round && styles.badgeBlock,
          !block && round && styles.badgeRound,
          !block && !round && Platform.select({ android: styles.badgeBlock, ios: styles.badgeRound }),
        ]}
        onPress={onPress}>

        {isString
          ? (
            <Text
              style={[
                styles.text,
                textStyle && textStyle,
              ]}>
              {value}
            </Text>
          )
          : value
            ? value
            : <View />
        }

      </Component>

    </View >
  );
};



BadgeCircle.propTypes = {
  color: PropTypes.string,
  onPress: PropTypes.func,
  //   badgeStyle: ViewPropTypes.style,
  //   containerStyle: ViewPropTypes.style,
  //   textStyle: Text.propTypes.style,
  //   value: PropTypes.node,
  //   Component: PropTypes.func,
};



BadgeCircle.defaultProps = {
  color: Colors.PRIMARY,
};



const styles = StyleSheet.create({

  noContainerStyle: {
    alignSelf: 'flex-start',
  },

  badge: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: Sizes.BADGE_CIRCLE_SIZE,
    height: Sizes.BADGE_CIRCLE_SIZE + 1,
    paddingBottom: 2,
    paddingHorizontal: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.WHITE,
  },

  badgeRound: {
    borderRadius: Sizes.BADGE_CIRCLE_SIZE / 2,
  },

  badgeBlock: {
    borderRadius: Sizes.BADGE_CIRCLE_SIZE / 4,
  },

  miniBadge: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    minWidth: Sizes.BADGE_MINI_CIRCLE_SIZE,
    height: Sizes.BADGE_MINI_CIRCLE_SIZE,
    borderRadius: Sizes.BADGE_MINI_CIRCLE_SIZE / 2,
  },

  text: {
    fontSize: 12,
    color: 'white',
    paddingHorizontal: 4,
  },

});



export default BadgeCircle;

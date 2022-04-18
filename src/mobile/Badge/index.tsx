import React from 'react';

import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import {
  Colors,
  Sizes,
} from '../../constants';

import {
  BadgeButtonContainer,
  BadgeViewContainer,
  TextBadge,
} from './styled';



export interface IProps {
  value?: any;

  backgroundColor?: string;
  borderColor?: string;
  containerStyle?: any;
  badgeStyle?: any;
  textStyle?: any;

  block?: any;
  round?: any;
  onPress?: any;

  style?: any;
}



const BadgeCircle: React.FC<IProps> = (props: any) => {
  const Component = props.onPress ? BadgeButtonContainer : BadgeViewContainer;
  const isString = props.value && typeof props.value === 'string';



  return (

    <Component
      style={[
        props.style,
        { backgroundColor: props.backgroundColor },
        isString && { alignSelf: 'flex-start' },
        !isString && !props.value && styles.miniBadge,
        props.badgeStyle && props.badgeStyle,
        props.block && !props.round && styles.badgeBlock,
        !props.block && props.round && styles.badgeRound,
        !props.block && !props.round && Platform.select({ android: styles.badgeBlock, ios: styles.badgeRound }),
        props.borderColor && {
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: props.borderColor,
        },
      ]}
      onPress={props.onPress}>

      {isString
        ? (
          <TextBadge
            style={[
              props.textStyle && props.textStyle,
            ]}>
            {props.value}
          </TextBadge>
        )
        : props.value
          ? props.value
          : <View />
      }

    </Component>

  );
};



BadgeCircle.defaultProps = {
  backgroundColor: Colors.PRIMARY,
};



const styles = StyleSheet.create({

  badgeRound: {
    borderRadius: Sizes.BADGE_CIRCLE_SIZE * 2,
  },

  badgeBlock: {
    borderRadius: Sizes.BADGE_CIRCLE_SIZE / 4,
  },

  miniBadge: {
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    paddingBottom: 0,
    width: Sizes.BADGE_MINI_CIRCLE_SIZE + 3,
    height: Sizes.BADGE_MINI_CIRCLE_SIZE + 3,
    borderRadius: Sizes.BADGE_MINI_CIRCLE_SIZE * 2,
  },

});



export default BadgeCircle;

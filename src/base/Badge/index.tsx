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
  BadgeContainer,
  BadgeButtonContainer,
  BadgeViewContainer,
  TextBadge,
} from './styled';



interface IProps {
  value?: any;

  backgroundColor?: string;
  containerStyle?: any;
  badgeStyle?: any;
  textStyle?: any;

  block?: any;
  round?: any;
  onPress?: any;
}



const BadgeCircle: React.FC<IProps> = (props: any) => {
  const Component = props.onPress ? BadgeButtonContainer : BadgeViewContainer;
  const isString = props.value && typeof props.value === 'string';



  return (

    <BadgeContainer
      style={[
        props.containerStyle && props.containerStyle,
      ]}>

      <Component
        style={[
          { backgroundColor: props.backgroundColor },
          !isString && styles.miniBadge,
          props.badgeStyle && props.badgeStyle,
          props.block && !props.round && styles.badgeBlock,
          !props.block && props.round && styles.badgeRound,
          !props.block && !props.round && Platform.select({ android: styles.badgeBlock, ios: styles.badgeRound }),
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

    </BadgeContainer>

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
    paddingHorizontal: 0,
    paddingVertical: 0,
    minWidth: Sizes.BADGE_MINI_CIRCLE_SIZE,
    height: Sizes.BADGE_MINI_CIRCLE_SIZE,
    borderRadius: Sizes.BADGE_MINI_CIRCLE_SIZE / 2,
  },

});



export default BadgeCircle;

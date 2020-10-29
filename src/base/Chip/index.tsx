import React from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import color from 'color';

import Icon from '../Icon';



interface Props {
  // Button Props,
  activeOpacity?: number;
  disabled?: boolean;

  // Chip Mode
  mode?: string;
  selected?: boolean;

  // Container Chip
  style?: object;
  backgroundColor?: string;
  selectedColor?: string;
  unselectedColor?: string;

  // Button Press Props
  onPress?: any;
  onLongPress?: any;
  onClose?: any;

  // Visual Label
  thumb?: any;

  // Text Props
  title?: string;
  textStyle?: any;
}



const Chip: React.FC<Props> = (props: any) => {
  // const [elevation, setElevation] = useState(new Animated.Value(0));

  // const scale = 2;

  // class Chip extends React.Component {
  // static defaultProps: Partial<Props> = {
  //   mode: 'flat',
  //   disabled: false,
  //   selected: false,
  // };


  // function handlePressIn() {
  //   Animated.timing(elevation, {
  //     toValue: 4,
  //     duration: 200 * scale,
  //     useNativeDriver: false,
  //   }).start();
  // }

  // function handlePressOut() {
  //   Animated.timing(elevation, {
  //     toValue: 0,
  //     duration: 150 * scale,
  //     useNativeDriver: false,
  //   }).start();
  // }


  function borderColor() {
    let bdrColor =
      props.mode === 'outlined'
        ? color(
          props.selected
            ? props.selectedColor
            : props.backgroundColor
        )
          .alpha(0.29)
        : props.backgroundColor;

    return String(bdrColor);
  }


  function textColor() {
    let txColor = color(
      props.selected
        ? props.selectedColor
        : props.unselectedColor
    ).alpha(0.87);

    return String(txColor);
  }


  function iconColor() {
    let iconCloseColor = (props.selected
      ? color(props.selectedColor).darken(props.mode === 'outlined' ? 0.08 : 0.45)
      : props.selectedColor
    );

    return String(iconCloseColor);
  }


  function selectedBackgroundColor() {
    let bgColor = (props.selected
      ? color(props.backgroundColor).darken(props.mode === 'outlined' ? 0.08 : 0.3)
      : props.backgroundColor
    );

    return String(bgColor);
  }


  // const underlayColor = selectedColor
  //   ? color(selectedColor)
  //       .fade(0.5)
  //       .rgb()
  //       .string()
  //   : selectedBackgroundColor;

  // const accessibilityTraits: AccessibilityTrait[] = ['button'];
  // const accessibilityStates: AccessibilityState[] = [];

  // if (selected) {
  //   accessibilityTraits.push('selected');
  //   accessibilityStates.push('selected');
  // }

  // if (disabled) {
  //   accessibilityTraits.push('disabled');
  //   accessibilityStates.push('disabled');
  // }



  return (

    <TouchableOpacity
      activeOpacity={props.activeOpacity || 0.75}
      disabled={props.disabled}
      onPress={props.onPress}
      style={[
        styles.container,
        {
          backgroundColor: selectedBackgroundColor(),
          borderColor: borderColor(),
          borderRadius: 16,
        },
        props.style,
      ]}>

      <View style={styles.content}>

        {/* {avatar && !icon && (
          <View
            style={[styles.avatarWrapper, disabled && { opacity: 0.26 }]}
          >
            {React.isValidElement(avatar)
              React.cloneElement(avatar, {
                style: [styles.avatar, avatar.props.style],
              })
              : avatar}
          </View>
        )}
        */}


        {props.thumb && (
          <View style={styles.thumb}>
            {props.thumb}
          </View>
        )}


        <Text
          // numberOfLines={1}
          style={[
            styles.text,
            {
              color: textColor(),
            },
            props.textStyle,
          ]}>
          {props.title}
        </Text>


        {props.selected && (
          <TouchableOpacity
            activeOpacity={props.activeOpacity}
            onPress={props.onClose}
            accessibilityTraits="button"
            accessibilityComponentType="button">
            <View style={styles.icon}>
              <Icon
                type="material-community"
                name="close-circle"
                size={18}
                color={iconColor()}
              />
            </View>
          </TouchableOpacity>
        )}
      </View>

    </TouchableOpacity>

  );
};



const styles = StyleSheet.create({

  container: {
    alignSelf: 'flex-start',
    height: 35,
    paddingLeft: 15,
    paddingRight: 15,
    margin: 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderStyle: 'solid',
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  thumb: {
    marginRight: 8,
  },

  icon: {
    marginLeft: 8,
    marginRight: -2,
    paddingTop: 4,
    paddingBottom: 4,
  },

  text: {
    fontSize: 14,
  },

  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },



  avatarWrapper: {
    marginRight: 4,
  },

  avatarSelected: {
    position: 'absolute',
    top: 4,
    left: 4,
    backgroundColor: 'rgba(0, 0, 0, .29)',
  },

});



export default Chip;

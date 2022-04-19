import React from 'react';

import color from 'color';

import Icon from '../Icon';

import {
  ChipContainer,
  ChipContent,
  ChipIcon,
  ChipText,
  ChipThumb,
} from './styled';



export interface IProps {
  // Button Props,
  activeOpacity?: number;
  disabled?: boolean;


  // Chip Mode
  mode?: 'outlined' | 'normal';
  selected?: boolean;


  // Container Chip
  style?: any;
  backgroundColor?: string;
  selectedBackgroundColor?: string;

  title?: string;
  textColor?: string;
  selectedTextColor?: string;
  textStyle?: any;

  icon?: any;
  iconColor?: string;
  selectedIconColor?: string;


  // Button Press Props
  onPress?: any;
  onLongPress?: any;

  onCloseDisabled?: boolean;
  onClose?: any;


  // Visual Label
  thumb?: any;
}



const Chip: React.FC<IProps> = (props: any) => {
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


  function textColor() {
    const txColor = color(
      props.selected
        ? props.selectedTextColor || props.textColor
        : props.textColor,
    ).alpha(0.87);

    return String(txColor);
  }


  function iconColor() {
    const iconCloseColor = props.mode === 'outlined'
      ? color(
        props.selected
          ? props.selectedIconColor
          : props.iconColor,
      )
        .darken(props.mode === 'outlined' ? 0.08 : 0.45)
      : textColor();

    return String(iconCloseColor);
  }


  function selectedBackgroundColor() {
    const bgColor = (props.selected
      ? props.selectedBackgroundColor || (color(props.backgroundColor).darken(props.mode === 'outlined' ? 0.08 : 0.3))
      : props.backgroundColor
    );

    return String(bgColor);
  }


  function borderColor() {
    const bdrColor = props.mode === 'outlined'
      ? color(
        props.selected
          ? props.selectedColor
          : props.backgroundColor,
      )
        .alpha(0.29)
      : selectedBackgroundColor();

    return String(bdrColor);
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

    <ChipContainer
      // activeOpacity={props.activeOpacity || 0.75}
      // disabled={props.disabled}
      onClick={!props.disabled && props.onPress}
      backgroundColor={selectedBackgroundColor()}
      borderColor={borderColor()}
      borderRadius={16}
      style={props.style}>

      <ChipContent>

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
          <ChipThumb>
            {props.thumb}
          </ChipThumb>
        )}


        <ChipText
          // numberOfLines={1}
          color={textColor()}
          style={props.textStyle}>
          {props.title}
        </ChipText>


        <ChipIcon
          // activeOpacity={props.activeOpacity}
          // disabled={props.onCloseDisabled}
          onClick={!props.onCloseDisabled && props.onClose}>
          {props.icon || (props.selected
            ? (
              <Icon
                type="material-community"
                name="close-circle"
                size={18}
                color={iconColor()}
              />
            )
            : (
              <Icon
                type="material-community"
                name="close-circle"
                size={18}
                color={iconColor()}
              />
            )
          )}
        </ChipIcon>
      </ChipContent>

    </ChipContainer>

  );
};



export default Chip;

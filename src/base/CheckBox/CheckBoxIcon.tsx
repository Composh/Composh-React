import React from 'react';

// import PropTypes from 'prop-types';

import FAIcon from 'react-native-vector-icons/FontAwesome';

import GetIconType from '../../core/config/IconsType';



interface IProps {
  checked?: boolean;
  onIconPress?: Function;
  onLongIconPress?: Function;
  size?: number;
  checkedIcon?: any;
  // checkedIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  uncheckedIcon?: any;
  // uncheckedIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  iconType?: string;
  checkedColor?: string;
  uncheckedColor?: string;
}



const CheckBoxIcon: React.FC<IProps> = (props: any) => {
  if (props.checked && React.isValidElement(props.checkedIcon)) {
    return props.checkedIcon;
  }

  if (!props.checked && React.isValidElement(props.uncheckedIcon)) {
    return props.uncheckedIcon;
  }

  const VectorIcon = props.iconType ? GetIconType(props.iconType) : FAIcon;

  return (
    <VectorIcon
      color={props.checked ? props.checkedColor : props.uncheckedColor}
      name={props.checked ? props.checkedIcon : props.uncheckedIcon}
      size={props.size}
      onLongPress={props.onLongIconPress}
      onPress={props.onIconPress}
    />
  );
};



export default CheckBoxIcon;

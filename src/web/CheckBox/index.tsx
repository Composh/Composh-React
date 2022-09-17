import React from 'react';

import ButtonCheck from '../Button/ButtonCheck';

import {
  CheckBoxButton,
  CheckBoxWrapper,
  CheckboxFlexText,
  CheckboxText,
} from './styled';



export interface IProps {
  activeOpacity?: any;
  center?: any;
  checked?: any;
  disabled?: any;

  title?: string | object;
  checkedTitle?: any;
  uncheckedTitle?: any;
  checkedIcon?: Element;
  uncheckedIcon?: Element;

  checkedColor?: any;
  uncheckedColor?: any;
  checkedTitleColor?: any;
  uncheckedTitleColor?: any;

  onPress?: any;
  onLongPress?: any;

  titleProps?: any;
  titleStyle?: any;

  direction?: 'LEFT' | 'RIGHT';
  containerStyle?: any;
  wrapperStyle?: any;

  size?: any;
}



const CheckBox: React.FC<IProps> = (props) => {
  function renderIconInstance() {
    return (

      <ButtonCheck
        active={props.checked}
        size={props.size}
        activeColor={props.checkedColor}
        deactiveColor={props.uncheckedColor}
        activeIcon={props.checkedIcon}
        deactiveIcon={props.uncheckedIcon}
      />

    );
  }



  return (

    <CheckBoxButton
      onClick={!props.disabled && props.onPress}>

      <CheckBoxWrapper>

        {props.direction === 'LEFT' && renderIconInstance()}

        <CheckboxFlexText>
          {React.isValidElement(props.title)
            ? props.title
            : (
              <CheckboxText>
                {props.checked
                  ? props.checkedTitle || props.title
                  : props.uncheckedTitle || props.title
                }
              </CheckboxText>
            )}
        </CheckboxFlexText>

        {props.direction === 'RIGHT' && renderIconInstance()}

      </CheckBoxWrapper>

    </CheckBoxButton>

  );
};



CheckBox.defaultProps = {
  checked: false,
  center: false,
  direction: 'LEFT',
  checkedColor: '#107e1f',
  uncheckedColor: '#bfbfbf',
  size: 18,
  // Component: TouchableOpacity,
  // titleProps: {},
};



export default CheckBox;
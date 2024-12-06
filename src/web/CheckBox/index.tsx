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
  style?: any;
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
  const className: any = { ...props };

  const checked = props.checked !== undefined ? props.checked : false;
  const center = props.center !== undefined ? props.center : false;
  const direction = props.direction !== undefined ? props.direction : 'LEFT';
  const checkedColor = props.checkedColor !== undefined ? props.checkedColor : '#107e1f';
  const uncheckedColor = props.uncheckedColor !== undefined ? props.uncheckedColor : '#bfbfbf';
  const size = props.size !== undefined ? props.size : 18;



  function renderIconInstance() {
    return (

      <ButtonCheck
        active={checked}
        size={size}
        activeColor={checkedColor}
        deactiveColor={uncheckedColor}
        activeIcon={props.checkedIcon}
        deactiveIcon={props.uncheckedIcon}
      />

    );
  }



  return (

    <CheckBoxButton
      className={className?.className}
      disabled={props.disabled}
      center={center}
      style={props?.style}
      onClick={() => {
        if (!props.disabled && props.onPress) {
          props.onPress();
        }
      }}>

      <CheckBoxWrapper>
        {direction === 'LEFT' && renderIconInstance()}

        {(props.checkedTitle || props.uncheckedTitle || props.title) && (
          <CheckboxFlexText
            direction={direction}>

            {React.isValidElement(props.title) ? (
              props.title
            ) : (
              <CheckboxText style={props.titleStyle}>
                {checked ? props.checkedTitle || props.title : props.uncheckedTitle || props.title}
              </CheckboxText>
            )}

          </CheckboxFlexText>
        )}

        {direction === 'RIGHT' && renderIconInstance()}

      </CheckBoxWrapper>

    </CheckBoxButton>

  );
};



export default CheckBox;

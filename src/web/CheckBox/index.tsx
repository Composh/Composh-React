import React from 'react';

import {
  CheckBoxButton,
  CheckBoxWrapper,
  CheckBoxContainer,
  CheckBoxItemContent,
  CheckBoxContent,
  CheckmarkContent,
  CheckmarkStem,
  CheckmarkCkick,
  CheckboxText,
} from './styled';



export interface IProps {
  activeOpacity?: any;
  center?: any;
  checked?: any;

  title?: string;
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
  const haveIcon = props.checkedIcon && props.uncheckedIcon;
  const checkboxBackgroundColor = props.checked ? props.checkedColor : props.uncheckedColor;


  function renderIconInstance() {
    if (haveIcon) {
      if (props.checked && React.isValidElement(props.checkedIcon)) {
        return (
          <CheckBoxContainer>
            {props.checkedIcon}
          </CheckBoxContainer>
        );
      }

      if (!props.checked && React.isValidElement(props.uncheckedIcon)) {
        return (
          <CheckBoxContainer>
            {props.uncheckedIcon}
          </CheckBoxContainer>
        );
      }
    }
    else {
      return (

        <CheckBoxContainer
          border={!haveIcon}
          onClick={props.onPress}>

          {props.checked && (
            <CheckBoxItemContent
              backgroundColor={checkboxBackgroundColor}>

              <CheckBoxContent>
                <CheckmarkContent
                  backgroundColor={checkboxBackgroundColor} />
                <CheckmarkStem />
                <CheckmarkCkick />
              </CheckBoxContent>

            </CheckBoxItemContent>
          )}

        </CheckBoxContainer>

      );
    }
  }



  return (

    <CheckBoxButton>

      <CheckBoxWrapper>

        {props.direction === 'LEFT' && renderIconInstance()}

        {React.isValidElement(props.title) ? (
          props.title
        ) : (
          <CheckboxText>
            {props.checked
              ? props.checkedTitle || props.title
              : props.uncheckedTitle || props.title
            }
          </CheckboxText>
        )}

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
  size: 24,
  // Component: TouchableOpacity,
  // titleProps: {},
};



export default CheckBox;

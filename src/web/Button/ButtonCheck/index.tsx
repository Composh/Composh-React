import React from 'react';

import {
  CheckBoxContainer,
  CheckBoxItemContent,
  ButtonCheckboxIconContent,
  CheckBoxContent,
  CheckmarkContent,
  CheckmarkStem,
  CheckmarkCkick,
} from './styled';



export interface IProps {
  active: boolean;
  size: number;
  activeColor?: string;
  deactiveColor?: string;
  activeIcon?: any;
  deactiveIcon?: any;
}



const ButtonCheck: React.FC<IProps> = (props) => {
  const width28 = props.size + 10;
  const width26 = props.size + 8;
  const width22 = props.size + 2;

  const haveIcon = props.activeIcon && props.deactiveColor;
  const validIcon = React.isValidElement(props.activeIcon) && React.isValidElement(props.deactiveColor);



  return (

    <CheckBoxContainer
      size={width28}>

      <CheckBoxItemContent
        size={width26}
        borderColor={props.active ? props.activeColor : props.deactiveColor}>

        {props.active && (
          <ButtonCheckboxIconContent
            backgroundColor={props.active ? props.activeColor : 'transparent'}>
            {haveIcon
              ? validIcon
                ? props.active && React.isValidElement(props.activeIcon)
                : !props.active && React.isValidElement(props.deactiveColor)
              : <CheckBoxContent
                size={width22}>

                <CheckmarkContent
                  size={width22}
                  backgroundColor={props.activeColor}
                />

                <CheckmarkStem size={width22} />
                <CheckmarkCkick size={width22} />

              </CheckBoxContent>
            }
          </ButtonCheckboxIconContent>
        )}

      </CheckBoxItemContent>

    </CheckBoxContainer>

  );
};



export default ButtonCheck;

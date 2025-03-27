import React from 'react';

import {
  IconCircleView,
  ButtonIconCircle,
  CircleFill,
  LeftProductBox,
} from './styled';



export interface IProps {
  active: boolean;
  margin?: boolean;
  size: number;
  activeColor?: string;
  deactiveColor?: string;
  activeIcon?: any;
  deactiveIcon?: any;
}



const ButtonCircle: React.FC<IProps> = (props: IProps) => {
  const marginReceived = props.margin === false ? false : true;

  const width28 = props.size + 10;
  const width26 = props.size + 8;

  const haveIcon = props.activeIcon && props.deactiveColor;
  const validIcon = React.isValidElement(props.activeIcon) && React.isValidElement(props.deactiveColor);



  return (

    <LeftProductBox
      margin={marginReceived}
      size={width28}>

      <IconCircleView
        size={width26}
        borderColor={
          validIcon
            ? 'transparent'
            : props.active ? props.activeColor : props.deactiveColor
        }>

        {props.active && (
          <ButtonIconCircle>
            {haveIcon
              ? validIcon
                ? props.active && React.isValidElement(props.activeIcon)
                : !props.active && React.isValidElement(props.deactiveColor)
              : <CircleFill
                style={{
                  backgroundColor: props.active ? props.activeColor : props.deactiveColor,
                  borderColor: props.active ? props.activeColor : props.deactiveColor,
                  width: props.size,
                  height: props.size,
                }}
              />
            }
          </ButtonIconCircle>
        )}
      </IconCircleView>

    </LeftProductBox>

  );
};



export default ButtonCircle;

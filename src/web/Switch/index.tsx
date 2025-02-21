import React from 'react';

import {
  SwitchContainer,
  SwitchContent,
  ToggleButton,
  SwitchTextOn,
} from './styled';



export interface IProps {
  style?: any;

  selected?: boolean;
  disabled?: boolean;
  hideText?: boolean;

  size?: number;
  color?: string;
  selectedColor?: string;

  textOn?: string;
  textOff?: string;
  textColor?: string;

  textSize?: number;
  onPress?: any;
}



const Switch: React.FC<IProps> = (props) => {
  const className = { ...props } as any;

  const colorSwitch = props.selected
    ? props.selectedColor ? props.selectedColor : props.color
    : props.color;


  const textColorSwitch = props.textColor || props.color;



  return (

    <SwitchContainer
      className={className?.className}
      style={props.style}

      disabled={props.disabled}
      onClick={() => {
        if (!props.disabled && props.onPress) {
          props.onPress();
        }
      }}>

      {!props.hideText && (
        <SwitchTextOn
          color={textColorSwitch}
          textSize={props.textSize || 16}>
          {props.selected
            ? props.textOn
              ? props.textOn
              : 'ON'
            : props.textOff
              ? props.textOff
              : 'OFF'
          }
        </SwitchTextOn>
      )}


      <SwitchContent
        size={props.size}
        color={colorSwitch}>
        <ToggleButton
          selected={props.selected}
          size={props.size}
          color={colorSwitch}
        />
      </SwitchContent>

    </SwitchContainer>

  );
};



export default Switch;

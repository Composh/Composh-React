import React from 'react';

import {
  SwitchContainer,
  SwitchContent,
  ToggleButton,
  SwitchTextOn,
} from './styled';



export interface IProps {
  selected?: boolean;
  disabled?: boolean;
  hideText?: boolean;

  size?: number;
  color?: string;
  selectedColor?: string;

  textOn?: string;
  textOff?: string;
  textSize?: number;
  onPress?: any;
}



const Switch: React.FC<IProps> = (props) => {
  const colorSwitch = props.selected ? props.selectedColor : props.color;



  return (

    <SwitchContainer
      onClick={props.disabled ? null : props.onPress}>

      {!props.hideText && (
        <SwitchTextOn
          textSize={props.textSize}>
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



Switch.defaultProps = {
  selected: false,
  textSize: 16,
  selectedColor: '#00f000',
  color: '#000000',
};



export default Switch;

import React,
{
  useEffect,
  useState,
} from 'react';

// import {
//   Colors,
// } from '../../constants';

import {
  ToggleButtonContent,
  // ToggleButtonStyle,
  ToggleIconLeftView,
  ToggleText,
  ToggleIconRightView,
} from './styled';



export interface IProps {
  disabled?: boolean;
  noPress?: boolean;

  noToggle?: boolean;
  selected?: boolean;
  flexToggle?: number;

  height?: number;
  width?: number;

  backgroundColor?: string;
  backgroundTintColor?: string;

  textColor?: string;
  textTintColor?: string;

  value?: string | number;
  displayValue?: string | number;

  borderColor?: string;
  borderTintColor?: string;
  borderRadius?: number;
  borderWidth?: number;

  iconContent?: any;
  iconRight?: any;
  onPress?: any;

  textStyle?: any;
  style?: any;

  children?: any;
}



const Toggle: React.FC<IProps> = (props: IProps) => {
  const className: any = { ...props };


  const flexToggle = props.flexToggle || 0;
  const height = props.height || 35;
  const backgroundColor = props.backgroundColor || '#ffffff'; // Colors.WHITE
  const backgroundTintColor = props.backgroundTintColor || '#020279'; // Colors.PRIMARY
  const textColor = props.textColor || '#020279'; // Colors.PRIMARY
  const textTintColor = props.textTintColor || '#ffffff'; // Colors.WHITE
  const displayValue = props.displayValue ? String(props.displayValue) : '-';
  const borderColor = props.borderColor || '#808080'; // Colors.GREY
  const borderTintColor = props.borderTintColor || '#7c0303'; // Colors.SECONDARY
  const borderRadius = props.borderRadius || 4;
  const borderWidth = props.borderWidth || 0;

  const selectedProp = props.selected;

  const opacityValue = props.disabled ? 0.5 : 1;

  const [selectedState, setSelectedState] = useState(selectedProp);



  function onPressToggle() {
    if (!props.disabled && props.onPress) {
      props.onPress();
    }

    if (!props.noToggle) {
      setSelectedState(!selectedProp);
    }
  }


  function renderTextToggle() {
    const value = props.value ? String(props.value) : '-';

    if (displayValue === '' || displayValue === null || displayValue === undefined) {
      return value;
    }

    return displayValue || '-';
  }



  useEffect(() => {
    if (!props.noToggle) {
      setSelectedState(selectedState);
    }
  }, []);



  return (

    <ToggleButtonContent
      className={className?.className}
      style={{
        ...props.style,
        opacity: opacityValue,
      }}

      disabled={props.disabled}
      flexContent={flexToggle}
      width={props.width}
      height={height}
      borderColor={((!props.disabled && !props.noToggle) ? selectedState : selectedProp) ? borderTintColor : borderColor}
      borderWidth={borderWidth}
      borderRadius={borderRadius}
      backgroundColor={((!props.disabled && !props.noToggle) ? selectedState : selectedProp) ? backgroundTintColor : backgroundColor}
      iconContent={props.iconContent}
      onClick={() => {
        if (!props.noPress) {
          onPressToggle();
        }
      }}>

      {props.children && props.children}


      {!props.children && props.iconContent && (
        <ToggleIconLeftView>
          {props.iconContent}
        </ToggleIconLeftView>
      )}


      {!props.children && (
        <ToggleText
          colorText={((!props.disabled && !props.noToggle) ? selectedState : selectedProp) ? textTintColor : textColor}
          marginLeftText={props.iconContent ? 5 : 0}
          style={props.textStyle}>


          {renderTextToggle()}

        </ToggleText>
      )}


      {!props.children && props.iconRight && (
        <ToggleIconRightView>
          {props.iconRight}
        </ToggleIconRightView>
      )}

    </ToggleButtonContent>

  );
};



export default Toggle;

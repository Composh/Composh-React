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
  ToggleIconView,
  ToggleText,
} from './styled';



interface IProps {
  disabled?: boolean;
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
  onPress?: any;

  textStyle?: any;
  style?: any;
}



const Toggle: React.FC<IProps> = (props: any) => {
  const selectedProp = props.selected;

  const [selectedState, setSelectedState] = useState(selectedProp);


  useEffect(() => {
    if (!props.noToggle) {
      setSelectedState(selectedState);
    }
  }, []);


  // componentWillReceiveProps(nextProps) {
  //   const {
  //     selected,
  //   } = this.props;

  //   if (selected !== nextProps.selected) {
  //     this.setState({
  //       selected: nextProps.selected,
  //     });
  //   }
  // }


  function onPressToggle() {
    if (props.onPress) {
      props.onPress();
    }

    if (!props.noToggle) {
      setSelectedState(!selectedState);
    }
  }



  return (

    <ToggleButtonContent
      {...props}
      disabled={props.disabled}
      flexContent={props.flexToggle}
      width={props.width}
      height={props.height}
      borderColor={((!props.disabled && !props.noToggle) ? selectedState : selectedProp) ? props.borderTintColor : props.borderColor}
      borderWidth={props.borderWidth}
      borderRadius={props.borderRadius}
      backgroundColor={((!props.disabled && !props.noToggle) ? selectedState : selectedProp) ? props.backgroundTintColor : props.backgroundColor}
      iconContent={props.iconContent}
      style={props.style}
      onClick={() => {
        onPressToggle();
      }}>


      {props.iconContent && (
        <ToggleIconView>
          {props.iconContent}
        </ToggleIconView>
      )}


      <ToggleText
        colorText={((!props.disabled && !props.noToggle) ? selectedState : selectedProp) ? props.textTintColor : props.textColor}
        marginLeftText={props.iconContent ? 5 : 0}
        style={props.textStyle}>


        {props.displayValue === '' || props.displayValue === null || props.displayValue === undefined
          ? props.value
          : props.displayValue
        }

      </ToggleText>

    </ToggleButtonContent>

  );
};



Toggle.defaultProps = {
  disabled: false,
  noToggle: false,
  selected: false,
  flexToggle: 0,

  height: 35,

  backgroundColor: '#ffffff', // Colors.WHITE,
  backgroundTintColor: '#020279', // Colors.PRIMARY,

  textColor: '#020279', // Colors.PRIMARY,
  textTintColor: '#ffffff', // Colors.WHITE,

  displayValue: 'Toggle',

  borderColor: '#808080', // Colors.GREY,
  borderTintColor: '#7c0303', // Colors.SECONDARY,
  borderRadius: 4,
  borderWidth: 0,
};



export default Toggle;

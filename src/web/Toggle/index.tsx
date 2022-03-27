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
  ToggleButtonStyle,
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

    <ToggleButtonStyle
      // disabled={props.disabled}
      onClick={() => {
        onPressToggle();
      }}>

      <ToggleButtonContent
        // props.style,
        flexContent={props.flexToggle ? 1 : 0}
        alignSelf={props.flexToggle ? 'auto' : 'flex-start'}
        width={props.flexToggle ? props.flexToggle : props.width}
        height={props.height}
        borderColor={(!props.noToggle ? selectedState : selectedProp) ? props.borderTintColor : props.borderColor}
        borderWidth={props.borderWidth}
        borderRadius={props.borderRadius}
        backgroundColor={(!props.noToggle ? selectedState : selectedProp) ? props.backgroundTintColor : props.backgroundColor}
        iconContent={props.iconContent}>


        <ToggleIconView>
          {props.iconContent}
        </ToggleIconView>


        <ToggleText
          // props.textStyle,
          colorText={(!props.noToggle ? selectedState : selectedProp) ? props.textTintColor : props.textColor}
          marginLeftText={props.iconContent ? 5 : 0}>

          {props.displayValue === '' || props.displayValue === null || props.displayValue === undefined
            ? props.value
            : props.displayValue
          }

        </ToggleText>

      </ToggleButtonContent>

    </ToggleButtonStyle>

  );
};



Toggle.defaultProps = {
  disabled: false,
  noToggle: false,
  selected: false,
  flexToggle: 0,

  height: 35,

  backgroundColor: 'white', // Colors.WHITE,
  backgroundTintColor: 'darkblue', // Colors.PRIMARY,

  textColor: 'darkblue', // Colors.PRIMARY,
  textTintColor: 'white', // Colors.WHITE,

  displayValue: 'Toggle',

  borderColor: 'gray', // Colors.GREY,
  borderTintColor: 'darkred', // Colors.SECONDARY,
  borderRadius: 4,
  borderWidth: 0,
};



export default Toggle;

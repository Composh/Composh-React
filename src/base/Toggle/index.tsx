import React,
{
  useEffect,
  useState,
} from 'react';

import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {
  Colors,
} from '../../constants';



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

    <TouchableWithoutFeedback
      disabled={props.disabled}
      onPress={() => {
        onPressToggle();
      }}>

      <View
        style={[
          props.style,
          styles.button,
          {
            flex: props.flexToggle ? 1 : 0,
            alignSelf: props.flexToggle ? 'auto' : 'flex-start',
            height: props.height,
            width: props.flexToggle ? props.flexToggle : props.width,
            borderWidth: props.borderWidth,
            borderRadius: props.borderRadius,
            borderColor: (!props.noToggle ? selectedState : selectedProp) ? props.borderTintColor : props.borderColor,
            backgroundColor: (!props.noToggle ? selectedState : selectedProp) ? props.backgroundTintColor : props.backgroundColor,
          },
          props.iconContent ? styles.buttonIconPadding : styles.buttonNoIconPadding,
        ]}>


        <View style={styles.icon}>
          {props.iconContent}
        </View>


        <Text
          style={[
            styles.text,
            {
              color: (!props.noToggle ? selectedState : selectedProp) ? props.textTintColor : props.textColor,
              marginLeft: props.iconContent ? 5 : 0,
            },
            props.textStyle,
          ]}>

          {props.displayValue === '' || props.displayValue === null || props.displayValue === undefined
            ? props.value
            : props.displayValue
          }

        </Text>

      </View>

    </TouchableWithoutFeedback>

  );
};



Toggle.defaultProps = {
  disabled: false,
  noToggle: false,
  selected: false,
  flexToggle: 0,

  height: 35,

  backgroundColor: Colors.WHITE,
  backgroundTintColor: Colors.PRIMARY,

  textColor: Colors.PRIMARY,
  textTintColor: Colors.WHITE,

  displayValue: 'Toggle',

  borderColor: Colors.GREY,
  borderTintColor: Colors.SECONDARY,
  borderRadius: 4,
  borderWidth: 0,
};



const styles = StyleSheet.create({

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 6,
    paddingTop: 8,
    paddingBottom: 8,
  },

  buttonIconPadding: {
    paddingLeft: 10,
    paddingRight: 15,
  },

  buttonNoIconPadding: {
    paddingLeft: 15,
    paddingRight: 15,
  },

  imageStyle: {
    width: 55,
    height: 25,
    marginRight: 6,
    resizeMode: 'contain',
  },

  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 2,
  },

  text: {
    fontSize: 14,
    textAlign: 'center',
  },

});



export default Toggle;

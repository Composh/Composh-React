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
  selected?: boolean;
  flexToggle?: number;

  height?: number;
  width?: number;

  backgroundColor?: string;
  backgroundTintColor?: string;

  textColor?: string;
  textTintColor?: string;

  value?: any; // PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  displayValue?: string; // PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  borderColor?: string;
  borderTintColor?: string;
  borderRadius?: number;
  borderWidth?: number;

  iconContent?: any;
  onPress?: any;

  textStyle?: any;
  style?: any;

  externalValue?: any;
}



const Toggle: React.FC<IProps> = (props: any) => {
  const [selected, setSelected] = useState(props.selected);


  useEffect(() => {
    setSelected(selected);
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

    setSelected(!selected);
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
            borderColor: (props.externalValue
              ? props.externalValue() : selected)
              ? props.borderTintColor : props.borderColor,
            backgroundColor: (props.externalValue
              ? props.externalValue() : selected)
              ? props.backgroundTintColor : props.backgroundColor,
          },
          props.iconContent ? styles.buttonIconPadding : styles.buttonNoIconPadding,
        ]}>


        {props.iconContent}


        <Text
          style={[
            styles.text,
            {
              color: (props.externalValue ? props.externalValue() : selected)
                ? props.textTintColor
                : props.textColor,
              marginLeft: props.iconContent ? 5 : 0,
            },
            props.textStyle,
          ]}>

          {props.displayValue === undefined
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
    marginHorizontal: 6,
    marginVertical: 6,
    paddingVertical: 8,
  },

  buttonIconPadding: {
    paddingLeft: 5,
    paddingRight: 15,
  },

  buttonNoIconPadding: {
    paddingHorizontal: 15,
  },

  imageStyle: {
    width: 55,
    height: 25,
    marginRight: 6,
    resizeMode: 'contain',
  },

  text: {
    fontSize: 14,
    textAlign: 'center',
    // marginVertical: 5,
  },

});



export default Toggle;

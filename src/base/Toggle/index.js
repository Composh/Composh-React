// React Components Import
import React, { PureComponent } from 'react';

import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// Application Configs Import
import {
  Colors,
} from '~/common/constants';



// ButtonToggleSelect.propTypes = {
//   selected: PropTypes.bool,

//   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

//   displayValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

//   // highlightStyle: PropTypes.shape({
//   // borderColor: PropTypes.string.isRequired,
//   // backgroundColor: PropTypes.string.isRequired,
//   // textColor: PropTypes.string.isRequired,
//   // borderTintColor: PropTypes.string.isRequired,
//   // backgroundTintColor: PropTypes.string.isRequired,
//   // textTintColor: PropTypes.string.isRequired,
//   // }),

//   buttonViewStyle: PropTypes.object,
//   textStyle: PropTypes.object,
//   // singleTap: PropTypes.func,
// };



class Toggle extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }



  componentDidMount() {
    const {
      selected,
    } = this.props;

    // eslint-disable-next-line react/no-did-mount-set-state
    this.setState({
      selected: selected,
    });
  }

  componentWillReceiveProps(nextProps) {
    const {
      selected,
    } = this.props;

    if (selected !== nextProps.selected) {
      this.setState({
        selected: nextProps.selected,
      });
    }
  }


  onPressToggle() {
    const {
      onPress,
      selected,
    } = this.props;

    if (onPress) {
      onPress();
    }

    this.setState({
      selected: !selected,
    });
  }



  render() {
    const {

      // Props State
      disabled,

      // Toggle Style
      flexToggle,
      style,

      // Props Value
      value,
      displayValue,

      // Props Background
      backgroundColor,
      backgroundTintColor,

      // Props Border
      borderRadius,
      borderWidth,
      borderColor,
      borderTintColor,

      // Props Text Style
      textTintColor,
      textColor,
      textStyle,

      // Icon Content
      iconContent,

    } = this.props;

    return (

      <TouchableWithoutFeedback
        disabled={disabled}
        onPress={() => {
          this.onPressToggle();
        }}>

        <View
          style={[
            styles.button,
            {
              flex: flexToggle ? 1 : 0,
              alignSelf: flexToggle ? 'auto' : 'flex-start',
              //   width: this.props.highlightStyle.widthButton,
              borderWidth: borderWidth || 1,
              borderRadius: borderRadius || 4,
              borderColor: this.state.selected ? borderTintColor : borderColor || Colors.GREY,
              backgroundColor: this.state.selected ? backgroundTintColor : backgroundColor || Colors.WHITE,
            },
            iconContent ? styles.buttonIconPadding : styles.buttonNoIconPadding,
            style,
          ]}>


          {iconContent}


          <Text
            style={[
              styles.text,
              {
                color: this.state.selected
                  ? textTintColor
                  : textColor,
                marginLeft: iconContent ? 5 : 0,
              },
              textStyle,
            ]}>
            {displayValue === undefined
              ? value
              : displayValue}
          </Text>

        </View>

      </TouchableWithoutFeedback>

    );
  }
}



Toggle.defaultProps = {
  textColor: Colors.BLACK,
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

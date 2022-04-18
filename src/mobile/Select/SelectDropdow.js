// https://github.com/hossein-zare/react-native-dropdown-picker
// 3.0.4

/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React from 'react';

import {
  Animated,
  Easing,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import color from 'color';
import PropTypes from 'prop-types';


// Application Configs Import
import {
  Colors,
  Sizes,
} from '../../constants';
import {
  inputLayout,
} from '../../theme/Layout';


import Icon from '../Icon';
import Input from '../Input';


// import Feather from 'react-native-vector-icons/Feather';



class DropDownPicker extends React.Component {
  constructor(props) {
    super(props);

    let choice;
    let items = [];

    if (!props.multiple) {
      if (props.defaultValue) {
        choice = props.items.find((item) => item.value === props.defaultValue);
      }
      else if (props.items.filter((item) => item.hasOwnProperty('selected') && item.selected === true).length > 0) {
        choice = props.items.filter((item) => item.hasOwnProperty('selected') && item.selected === true)[0];
      }
      else {
        choice = this.null();
      }
    }
    else {
      if (props.defaultValue && Array.isArray(props.defaultValue) && props.defaultValue.length > 0) {
        props.defaultValue.forEach((value, index) => {
          items.push(
            props.items.find((item) => item.value === value),
          );
        });
      }
      else if (props.items.filter((item) => item.hasOwnProperty('selected') && item.selected === true).length > 0) {
        items = props.items.filter((item, index) => item.hasOwnProperty('selected') && item.selected === true);
      }
    }

    this.state = {
      choice: props.multiple ? items : {
        label: choice.label,
        value: choice.value,
      },
      searchableText: null,
      isVisible: props.isVisible,
      props: {
        multiple: props.multiple,
        defaultValue: props.defaultValue,
        isVisible: props.isVisible,
      },

      rotationAnims: new Animated.Value(0),

    };
  }

  static getDerivedStateFromProps(props, state) {
    // Change default value (!multiple)
    if (!state.props.multiple && props.defaultValue !== state.props.defaultValue) {
      const { label, value } = props.defaultValue === null ? {
        label: null,
        value: null,
      } : props.items.find((item) => item.value === props.defaultValue);
      return {
        choice: {
          label, value,
        },
        props: {
          ...state.props,
          defaultValue: props.defaultValue,
        },
      };
    }

    // Change default value (multiple)
    if (state.props.multiple && JSON.stringify(props.defaultValue) !== JSON.stringify(state.props.defaultValue)) {
      let items = [];
      if (props.defaultValue && Array.isArray(props.defaultValue) && props.defaultValue.length > 0) {
        props.defaultValue.forEach((value, index) => {
          items.push(
            props.items.find((item) => item.value === value),
          );
        });
      }

      return {
        choice: items,
        props: {
          ...state.props,
          defaultValue: props.defaultValue,
        },
      };
    }

    // Change visibility
    if (props.isVisible !== state.props.isVisible) {
      return {
        isVisible: props.isVisible,
        props: {
          ...state.props,
          isVisible: props.isVisible,
        },
      };
    }

    // Change disability
    if (props.disabled !== state.props.disabled) {
      return {
        props: {
          ...state.props,
          disabled: props.disabled,
        },
      };
    }

    return null;
  }


  null() {
    return {
      label: null,
      value: null,
    };
  }


  toggle() {
    this.setState({
      isVisible: !this.state.isVisible,
    }, () => {
      const isVisible = this.state.isVisible;

      if (isVisible) {
        this.props.onOpen();
        this.openPanel();
      }
      else {
        this.props.onClose();
        this.closePanel();
      }
    });
  }


  openPanel() {
    Animated.timing(
      this.state.rotationAnims,
      {
        toValue: 0.5,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.linear,
      },
    ).start();
  }


  closePanel() {
    Animated.timing(
      this.state.rotationAnims,
      {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.linear,
      },
    ).start();
  }


  select(item, index) {
    const {
      multiple,
    } = this.state.props;

    if (!multiple) {
      this.setState({
        choice: {
          label: item.label,
          value: item.value,
        },
        isVisible: false,
        props: {
          ...this.state.props,
          isVisible: false,
        },
      });

      // onChangeItem callback
      this.props.onChangeItem(item, index);
    }
    else {
      let choice = [...this.state.choice];
      const exists = choice.findIndex((i) => i.label === item.label && i.value === item.value);

      if (exists > -1 && choice.length > this.props.min) {
        choice = choice.filter((i) => i.label !== item.label && i.value !== item.value);
      }
      else if (exists === -1 && choice.length < this.props.max) {
        choice.push(item);
      }

      this.setState({
        choice,
      });

      // onChangeItem callback
      this.props.onChangeItem(choice.map((i) => i.value));
    }

    // onClose callback (!multiple)
    if (!multiple) {
      this.props.onClose();
    }

    this.closePanel();
  }


  getLayout(layout) {
    this.setState({
      top: layout.height - 22,
    });
  }


  getItems() {
    if (this.state.searchableText) {
      const text = this.state.searchableText.toLowerCase();

      return this.props.items.filter((item) => {
        return item.label && (item.label.toLowerCase()).indexOf(text) > -1;
      });
    }

    return this.props.items;
  }


  getNumberOfItems() {
    return this.props.multipleText.replace('%d', this.state.choice.length);
  }


  renderDropDownArrow() {
    const {
      family,
      icon,
      iconSize,
    } = this.props;

    const colorSelectedComponent = [
      this.state.isVisible
        ? this.props.tintColor || Colors.BLACK
        : this.props.placeholderTextColor || Colors.PLACEHOLDER,
    ];

    return (

      <Animated.View
        style={{
          marginLeft: 8,
          marginRight: 4,
          transform: [{
            rotateZ: this.state.rotationAnims.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg'],
            }),
          }],
        }}>
        <Icon
          type={family || 'ionicon'}
          name={icon || Platform.select({ android: 'md-arrow-dropdown', ios: 'ios-arrow-down' })}
          size={iconSize || 19}
          color={String(colorSelectedComponent)}
        />
      </Animated.View>

    );
  }


  placeholderColorFunction() {
    let colorPlaceholder;

    if (!this.state.choice.value) {
      colorPlaceholder = color(this.props.placeholderTextColor || Colors.PLACEHOLDER).alpha(0.5);
    }
    else {
      if (this.state.choice.value && this.state.isVisible) {
        colorPlaceholder = this.props.tintColor || Colors.BLACK;
      }
      else {
        if (this.props.inputTextColor) {
          colorPlaceholder = this.props.inputTextColor || Colors.PRIMARY;
        }
        else {
          colorPlaceholder = this.props.placeholderTextColor || Colors.PLACEHOLDER;
        }
      }
    }

    return colorPlaceholder;
  }



  render() {
    const {
      multiple,
      disabled,
    } = this.state.props;

    const {
      placeholder,
      // activeOpacity,
      backgroundColor,
      dropdownBackgroundColor,
    } = this.props;

    const isPlaceholderActive = this.state.choice.label === null;
    const label = isPlaceholderActive ? (placeholder) : this.state.choice.label;
    const placeholderStyle = isPlaceholderActive && this.props.placeholderStyle;
    const opacity = disabled ? 0.5 : 1;
    const items = this.getItems();



    return (
      <View style={[
        inputLayout.inputMasterViewContent,
        {
          ...(Platform.OS !== 'android' && {
            zIndex: this.props.zIndex,
          }),
        },
        this.props.containerStyle,
      ]}>

        <TouchableOpacity
          onLayout={(event) => this.getLayout(event.nativeEvent.layout)}
          disabled={disabled}
          activeOpacity={0.85}
          style={[
            {
              flex: 1,
              alignContent: 'center',
            },
          ]}
          // style={[
          //   styles.dropDown,
          //   this.props.style,
          //   this.state.isVisible && styles.noBottomRadius, {
          //     flexDirection: 'row', flex: 1,
          //   },
          // ]}
          onPress={() => this.toggle()}>


          {multiple
            ? (
              <View style={[styles.dropDownDisplay]}>
                <Text style={[this.props.labelStyle, placeholderStyle, { opacity }]}>
                  {this.state.choice.length > 0 ? this.getNumberOfItems() : placeholder}
                </Text>
              </View>
            )
            // : (
            // <Text style={[this.props.labelStyle, placeholderStyle, { opacity }]}>
            //   {label}
            // </Text>
            // )
            : (
              <Input {...this.props}
                inputLikeButton
                editable={!disabled}
                placeholder={label}
                placeholderTextColor={String(this.placeholderColorFunction())}

                backgroundColor={this.props.backgroundColor}

                inputTextColor={this.props.inputTextColor}

                style={{ marginVertical: 0 }}
                containerStyle={
                  this.state.isVisible && styles.noBottomRadius
                }

                right
                iconContent={this.renderDropDownArrow()}
              />
            )

          }

          {/* {this.props.showArrow && (
            <View style={[styles.arrow]}>
              <View style={[this.props.arrowStyle, { opacity }]}>
                {
                  !this.state.isVisible ? (
                    this.props.customArrowDown(this.props.arrowSize, this.props.arrowColor)
                  ) : (
                      this.props.customArrowUp(this.props.arrowSize, this.props.arrowColor)
                    )
                }
              </View>
            </View>
          )} */}

        </TouchableOpacity>



        <View style={[
          styles.dropDown,
          styles.dropDownBox,
          !this.state.isVisible && styles.hidden, {
            top: this.state.top,
            maxHeight: this.props.dropDownMaxHeight,
            zIndex: this.props.zIndex,
          },
          {
            backgroundColor: dropdownBackgroundColor
              ? dropdownBackgroundColor || Colors.WHITE
              : backgroundColor || Colors.WHITE,
          },
          this.props.dropDownStyle,
        ]}>
          {
            this.props.searchable && (
              <View style={{ width: '100%', flexDirection: 'row' }}>
                <TextInput
                  style={[styles.inputSearch, this.props.searchableStyle]}
                  defaultValue={this.state.searchableText}
                  placeholder={this.props.searchablePlaceholder}
                  onChangeText={(text) => {
                    this.setState({
                      searchableText: text,
                    });
                  }}
                />
              </View>
            )
          }



          <ScrollView
            style={{ width: '100%' }}
            nestedScrollEnabled>
            {
              items.length > 0
                ? items.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.dropDownItem,
                      this.props.itemStyle,
                      this.state.choice.value === item.value && this.props.activeItemStyle,
                      {
                        opacity: item?.disabled || false === true ? 0.3 : 1,
                        ...(
                          multiple && {
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          }
                        ),
                      },
                    ]}
                    disabled={item?.disabled || false === true}
                    onPress={() => this.select(item, index)}>

                    <Text
                      style={[
                        this.props.labelStyle,
                        this.state.choice.value === item.value && this.props.activeLabelStyle,
                      ]}>
                      {item.label}
                    </Text>

                    {/* {true && (
                      <Icon
                        type="ionicon"
                        name={Platform.select({ android: 'md-checkmark', ios: 'ios-checkmark-circle-outline' })}
                        size={19}
                        color={'red'}
                      // color={String(colorSelectedRow)}
                      />
                    )} */}

                    {
                      multiple && this.state.choice.findIndex((i) => i.label === item.label && i.value === item.value) > -1 && (
                        this.props.customTickIcon()
                      )
                    }

                    {this.props.divisorItemColor && (
                      <View style={{
                        backgroundColor: this.props.divisorItemColor,
                        height: 1,
                        marginTop: 7,
                      }}
                      />
                    )}

                  </TouchableOpacity>
                ))
                : (
                  <Text style={[styles.notFound, {
                    fontFamily: this.props.labelStyle?.fontFamily,
                  }]}>
                    {this.props.searchableError}
                  </Text>
                )
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}



DropDownPicker.defaultProps = {
  placeholder: 'Select an item',
  dropDownMaxHeight: 150,
  style: {},
  dropDownStyle: {},
  containerStyle: {},
  itemStyle: {},
  labelStyle: {},
  placeholderStyle: {},
  activeItemStyle: {},
  activeLabelStyle: {},
  arrowStyle: {},
  arrowColor: '#000',
  showArrow: true,
  arrowSize: 15,

  // customArrowUp: (size, color) => (
  //   <Feather name="chevron-up" size={size} color={color} />
  // ),
  // customArrowDown: (size, color) => (
  //   <Feather name="chevron-down" size={size} color={color} />
  // ),
  // customTickIcon: () => (
  //   <Feather name="check" size={15} />
  // ),

  zIndex: 5000,
  disabled: false,
  searchable: false,
  searchablePlaceholder: 'Search for an item',
  searchableError: 'Not Found',
  searchableStyle: {},
  isVisible: false,
  multiple: false,
  multipleText: '%d items have been selected',
  min: 0,
  max: 10000000,
  onOpen: () => { },
  onClose: () => { },
  onChangeItem: () => { },
};



DropDownPicker.propTypes = {
  items: PropTypes.array.isRequired,
  defaultValue: PropTypes.any,
  placeholder: PropTypes.string,
  dropDownMaxHeight: PropTypes.number,
  style: PropTypes.object,
  dropDownStyle: PropTypes.object,
  containerStyle: PropTypes.object,
  itemStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  activeItemStyle: PropTypes.object,
  activeLabelStyle: PropTypes.object,
  showArrow: PropTypes.bool,
  arrowStyle: PropTypes.object,
  arrowColor: PropTypes.string,
  arrowSize: PropTypes.number,
  customArrowUp: PropTypes.func,
  customArrowDown: PropTypes.func,
  customTickIcon: PropTypes.func,
  zIndex: PropTypes.number,
  disabled: PropTypes.bool,
  searchable: PropTypes.bool,
  searchablePlaceholder: PropTypes.string,
  searchableError: PropTypes.string,
  searchableStyle: PropTypes.object,
  isVisible: PropTypes.bool,
  multiple: PropTypes.bool,
  multipleText: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onChangeItem: PropTypes.func,
};



const styles = StyleSheet.create({

  arrow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingVertical: 8,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },

  dropDown: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderWidth: 1,
    borderColor: '#dfdfdf',
  },

  dropDownDisplay: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    flexGrow: 1,
  },

  dropDownBox: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
  },

  dropDownItem: {
    paddingVertical: 8,
    width: '100%',
    justifyContent: 'center',
  },

  inputSearch: {
    flex: 1,
    borderColor: '#dfdfdf',
    borderBottomWidth: 1,
    paddingHorizontal: 0,
    paddingVertical: 8,
    marginBottom: 10,
  },

  hidden: {
    position: 'relative',
    display: 'none',
    borderWidth: 0,
  },

  noBottomRadius: {
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
  },

  notFound: {
    textAlign: 'center',
    color: 'grey',
    marginVertical: 10,
    marginBottom: 15,
  },

});



export default DropDownPicker;

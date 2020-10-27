// 'use strict';

import React from 'react';

import PropTypes from 'prop-types';

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  Easing,
  StyleSheet,
} from 'react-native';

// Application Configs Import
import {
  inputLayout,
} from '../../theme/Layout';

import {
  Colors,
  Sizes,
} from '../../constants';

import Icon from '../Icon';
import Input from '../Input';

const marginLeftItem = 15;
const marginRightItem = 5;



class DropdownMenu extends React.Component {


  constructor(props, context) {
    super(props, context);

    var selectIndex = new Array(this.props.data.length);
    for (var i = 0; i < selectIndex.length; i++) {
      selectIndex[i] = 0;
    }
    this.state = {
      activityIndex: -1,
      selectIndex: selectIndex,
      rotationAnims: props.data.map(() => new Animated.Value(0))
    };

    this.defaultConfig = {
      // bgColor: 'grey',
      // tintColor: '#333333',
      // activityTintColor: "red",
      // arrowImg: require('./img/dropdown_arrow.png'),
      // checkImage: require('./img/menu_check.png')
    };

  }



  openOrClosePanel(index) {

    // var toValue = 0.5;

    if (this.state.activityIndex == index) {
      this.closePanel(index);
      this.setState({
        activityIndex: -1,
      });
      // toValue = 0;
    } else {
      if (this.state.activityIndex > -1) {
        this.closePanel(this.state.activityIndex);
      }
      this.openPanel(index);
      this.setState({
        activityIndex: index,
      });
      // toValue = 0.5;
    }

    // Animated.timing(
    //   this.state.rotationAnims[index],
    //   {
    //     toValue: toValue,
    //     duration: 300,
    //     useNativeDriver: false,
    //     easing: Easing.linear
    //   }
    // ).start();

  }


  openPanel(index) {
    Animated.timing(
      this.state.rotationAnims[index],
      {
        toValue: 0.5,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.linear,
      }
    ).start();
  }


  closePanel(index) {
    Animated.timing(
      this.state.rotationAnims[index],
      {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
        easing: Easing.linear,
      }
    ).start();
  }


  itemOnPress(index) {
    if (this.state.activityIndex > -1) {
      var selectIndex = this.state.selectIndex;
      selectIndex[this.state.activityIndex] = index;
      this.setState({
        selectIndex: selectIndex
      });
      if (this.props.handler) {
        this.props.handler(this.state.activityIndex, index);
      }
    }
    this.openOrClosePanel(this.state.activityIndex);
  }



  renderActivityPanel() {
    if (this.state.activityIndex >= 0) {

      var currentTitles = this.props.data[this.state.activityIndex];

      var heightStyle = {};
      if (this.props.maxHeight && this.props.maxHeight < currentTitles.length * 44) {
        heightStyle.height = this.props.maxHeight;
      }

      return (

        <View
          style={{
            // position: 'absolute',
            // left: 0,
            // right: 0,
            // top: 40,
            // bottom: 0,
            // zIndex: 999,
          }}>

          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.openOrClosePanel(this.state.activityIndex)}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}>
            <View style={{ opacity: 0.4, backgroundColor: 'black', flex: 1 }} />
          </TouchableOpacity>

          <ScrollView style={[
            inputLayout.inputComponentContainer,
            {
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              backgroundColor: this.props.dropdownBackgroundColor
                ? this.props.dropdownBackgroundColor || Colors.WHITE
                : this.props.backgroundColor || Colors.WHITE,
            },
            heightStyle,
          ]} >
            {
              currentTitles.map((title, index) =>
                <TouchableOpacity
                  key={index}
                  activeOpacity={1}
                  style={{
                    flex: 1,
                    height: 44,
                  }}
                  onPress={this.itemOnPress.bind(this, index)} >

                  {/* Content List */}
                  {this.renderContentList(index, title)}

                  {/* Divisor */}
                  {this.props.divisorItemColor && (
                    <View style={{
                      backgroundColor: this.props.divisorItemColor,
                      height: 1,
                      marginLeft: marginLeftItem,
                      marginRight: marginRightItem,
                    }}
                    />
                  )}
                </TouchableOpacity>
              )
            }
          </ScrollView>
        </View>

      );
    } else {
      return (null);
    }
  }


  renderContentList(index, title) {
    var activityIndex = this.state.activityIndex;

    const colorSelectedRow = [
      this.state.selectIndex[activityIndex] == index
        ? this.props.inputTextColor || Colors.BLACK
        : this.props.placeholderTextColor || Colors.PLACEHOLDER
    ];


    if (this.props.componentList) {
      return componentList;
    } else {
      return (

        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: "center",
            paddingHorizontal: marginLeftItem,
            flexDirection: 'row',
          }}>

          <Text
            style={[
              styles.item_text_style,
              { color: colorSelectedRow },
            ]}>
            {title}
          </Text>

          {(this.state.selectIndex[activityIndex] == index) && (
            <Icon
              type="ionicon"
              name={Platform.select({ android: 'md-checkmark', ios: 'ios-checkmark-circle-outline' })}
              size={19}
              color={String(colorSelectedRow)}
            />
          )}
        </View>

      );
    }
  }



  renderDropDownArrow(index) {

    const colorSelectedComponent = [
      index === this.state.activityIndex
        ? this.props.tintColor || Colors.BLACK
        : this.props.placeholderTextColor || Colors.PLACEHOLDER
    ];

    return (

      <Animated.View
        style={{
          marginLeft: 8,
          transform: [{
            rotateZ: this.state.rotationAnims[index].interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })
          }]
        }}>
        <Icon
          type="ionicon"
          name={Platform.select({ android: 'md-arrow-dropdown', ios: 'ios-arrow-down' })}
          size={19}
          color={String(colorSelectedComponent)}
        />
      </Animated.View>

    );
  }


  renderItemSelect(rows, index) {

    const colorSelectedComponent = [
      index === this.state.activityIndex
        ? this.props.tintColor || Colors.BLACK
        : this.props.placeholderTextColor || Colors.PLACEHOLDER
    ];

    return (

      <TouchableOpacity
        disabled={!this.props.editable}
        activeOpacity={this.props.activeOpacity}
        style={{
          flex: 1,
          alignContent: 'center',
        }}
        key={index}
        activeOpacity={1}
        onPress={this.openOrClosePanel.bind(this, index)}>

        <Input {...this.props}
          editable={this.props.editable}
          placeholder={rows[this.state.selectIndex[index]]}
          placeholderTextColor={String(colorSelectedComponent)}

          backgroundColor={this.props.backgroundColor}

          inputTextColor={this.props.inputTextColor}

          style={{ marginVertical: 0 }}

          right
          iconContent={this.renderDropDownArrow(index)}
        />

      </TouchableOpacity>

    );
  }



  render() {

    const inputComponentContainer = [
      {
        flex: 1,
        opacity: this.props.editable ? 1 : 0.3,
      },
      inputLayout.inputMasterViewContent,
    ];


    return (

      <View style={inputComponentContainer}>

        <View style={{
          flexDirection: 'row',
          // backgroundColor: 'yellow'
          // zIndex: 999,
        }} >
          {
            this.props.data.map((rows, index) =>
              this.renderItemSelect(rows, index)
            )
          }
        </View>

        {this.renderActivityPanel()}

      </View>

    );
  }

}



// DropdownMenu.propTypes = {
//   // bgColor: PropTypes.string,
//   tintColor: PropTypes.string,
//   inputTextColor: PropTypes.string,
//   arrowImg: PropTypes.number,
//   checkImage: PropTypes.number,
//   data: PropTypes.array,
//   bannerAction: PropTypes.func,
//   titleStyle: PropTypes.object,
//   maxHeight: PropTypes.number
// }



const styles = StyleSheet.create({

  titleSelectStyle: {
    flex: 1,
    fontSize: 14
  },

  item_text_style: {
    // color: '#333333',
    fontSize: 14
  }

});



export default DropdownMenu;
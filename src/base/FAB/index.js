// https://github.com/santomegonzalo/react-native-floating-action
// https://github.com/GeekyAnts/NativeBase/blob/master/src/basic/Fab.js
// https://github.com/mastermoo/react-native-action-button
// https://callstack.github.io/react-native-paper/fab.html


import React, { Component } from 'react';

// import PropTypes from "prop-types";

import {
  Animated,
  Dimensions,
  Keyboard,
  LayoutAnimation,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

// Lib Configs Import
import LinearGradient from 'react-native-linear-gradient';
import { isIphoneX } from '../../config/PlatformsConfig';
import {
  Colors,
  Metrics,
} from '../../constants';

// Utils

// Components
// import FloatingActionItem from "./FloatingActionItem";
import Overlay from '../Overlay';

// Imports

const DEVICE_WIDTH = Dimensions.get('window').width;

const DEFAULT_SHADOW_PROPS = {
  shadowOpacity: 0.35,
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowColor: '#000000',
  shadowRadius: 3,
};



class FAB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false,
    };

    this.mainBottomAnimation = new Animated.Value(
      this.distanceToVerticalEdge + props.mainVerticalDistance,
    );
    this.actionsBottomAnimation = new Animated.Value(
      props.buttonSize +
      this.distanceToVerticalEdge +
      props.actionsPaddingTopBottom +
      props.mainVerticalDistance,
    );
    this.animation = new Animated.Value(0);
    this.actionsAnimation = new Animated.Value(0);
    this.visibleAnimation = new Animated.Value(props.visible ? 0 : 1);
    /*
     * this animation will fix an error on ReactNative (Android) where
     * interpolations with 0 and 1 don't work as expected.
     */
    this.fadeAnimation = new Animated.Value(props.visible ? 1 : 0);
  }



  componentDidMount() {
    const { openOnMount, listenKeyboard } = this.props;

    if (openOnMount) {
      this.animateButton();
    }

    if (listenKeyboard) {
      const showEvent =
        Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow';
      const hideEvent =
        Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide';
      this.keyboardWillShowListener = Keyboard.addListener(
        showEvent,
        this.onKeyboardShow,
      );
      this.keyboardWillHideListener = Keyboard.addListener(
        hideEvent,
        this.onKeyboardHide,
      );
    }
  }

  componentDidUpdate(prevProps) {
    const { visible } = this.props;

    if (prevProps.visible !== visible) {
      if (visible) {
        Animated.parallel([
          Animated.spring(this.visibleAnimation, { toValue: 0, useNativeDriver: false }),
          Animated.spring(this.fadeAnimation, { toValue: 1, useNativeDriver: false }),
        ]).start();
      }
      if (!visible) {
        Animated.parallel([
          Animated.spring(this.visibleAnimation, { toValue: 1, useNativeDriver: false }),
          Animated.spring(this.fadeAnimation, { toValue: 0, useNativeDriver: false }),
        ]).start();
      }
    }
  }

  componentWillUnmount() {
    const { listenKeyboard } = this.props;

    if (listenKeyboard) {
      this.keyboardWillShowListener.remove();
      this.keyboardWillHideListener.remove();
    }
  }



  //#region Distance from button to edge
  get distanceToHorizontalEdge() {
    const { distanceToEdge } = this.props;
    return typeof distanceToEdge === 'number'
      ? distanceToEdge - 5 // -5 fix to same distance
      : distanceToEdge.horizontal;
  }

  get distanceToVerticalEdge() {
    const { distanceToEdge } = this.props;
    return typeof distanceToEdge === 'number'
      ? distanceToEdge
      : distanceToEdge.vertical;
  }
  //#endregion



  //#region Keyboard Show And Hide
  onKeyboardShow = (e) => {
    const { buttonSize, actionsPaddingTopBottom } = this.props;
    const { height } = e.endCoordinates;

    Animated.parallel([
      Animated.spring(this.actionsBottomAnimation, {
        bounciness: 0,
        toValue:
          buttonSize +
          this.distanceToVerticalEdge +
          actionsPaddingTopBottom +
          height -
          (isIphoneX() ? 40 : 0),
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.spring(this.mainBottomAnimation, {
        bounciness: 0,
        toValue: this.distanceToVerticalEdge + height - (isIphoneX() ? 40 : 0),
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start();
  };


  onKeyboardHide = () => {
    const { buttonSize, actionsPaddingTopBottom } = this.props;

    Animated.parallel([
      Animated.spring(this.actionsBottomAnimation, {
        bounciness: 0,
        toValue: buttonSize + this.distanceToVerticalEdge + actionsPaddingTopBottom,
        duration: 250,
        useNativeDriver: false,
      }),
      Animated.spring(this.mainBottomAnimation, {
        bounciness: 0,
        toValue: this.distanceToVerticalEdge,
        duration: 250,
        useNativeDriver: false,
      }),
    ]).start();
  };
  //#endregion



  getShadow = () => {
    const { shadow } = this.props;

    return {
      ...DEFAULT_SHADOW_PROPS,
      ...shadow,
    };
  };


  reset = () => {
    const { animated, onClose } = this.props;

    if (animated) {
      Animated.spring(this.animation, {
        toValue: 0,
        useNativeDriver: false,
      }).start();

      Animated.spring(this.actionsAnimation, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }

    this.updateState(
      {
        active: false,
      },
      () => {
        if (onClose) {
          onClose();
        }
      },
    );
  };


  animateButton = () => {
    const {
      // overrideWithAction,
      // actions,
      floatingIcon,
      animated,
      dismissKeyboardOnPress,
      onPressMain,
      onOpen,

      children,
      onPress,
    } = this.props;
    const { active } = this.state;

    if (dismissKeyboardOnPress) {
      Keyboard.dismiss();
    }


    // if (overrideWithAction) {
    //   this.handlePressItem(actions[0].name);

    //   return;
    // }


    if (onPressMain) {
      onPressMain(!active);
    }


    if (onPress && !children) {
      // console.log('FAB With Action');
      onPress();
      return;
    }
    else if (children) {
      // console.log('FAB With Children');

      if (!active) {
        if (!floatingIcon) {
          if (animated) {
            Animated.spring(
              this.animation,
              {
                toValue: 1,
                useNativeDriver: false,
              }).start();
          }
        }

        if (animated) {
          Animated.spring(
            this.actionsAnimation,
            {
              toValue: 1,
              useNativeDriver: false,
            }).start();

          // only execute it for the background to prevent extra calls
          LayoutAnimation.configureNext({
            duration: 180,
            create: {
              type: LayoutAnimation.Types.easeInEaseOut,
              property: LayoutAnimation.Properties.opacity,
            },
          });
        }

        this.updateState(
          {
            active: true,
          },
          () => {
            if (onOpen) {
              onOpen();
            }
          },
        );
      }
      else {
        this.handlePressBackdrop();
      }
    }
    else {
      this.reset();
    }
  };


  updateState = (nextState, callback) => {
    const { onStateChange } = this.props;
    const { active } = this.state;

    this.setState(nextState, () => {
      if (callback) {
        callback();
      }
      if (onStateChange) {
        onStateChange({
          isActive: active,
        });
      }
    });
  };


  handlePressBackdrop = () => {
    const { onPressBackdrop } = this.props;
    if (onPressBackdrop) {
      onPressBackdrop();
    }
    this.reset();
  };


  // handlePressItem = itemName => {
  //   const { onPressItem } = this.props;

  //   if (onPressItem) {
  //     onPressItem(itemName);
  //   }

  //   this.reset();
  // };


  renderMainButton() {
    const {
      animated,
      position,

      content,

      fabColor,
      fabColorTop,
      fabColorBottom,
      gradientLinear,
      disabled,

      // overrideWithAction,
      activeOpacity,

      // relativePosition,

      deg180,

      children,
    } = this.props;


    const { active } = this.state;

    const mainButtonColor = fabColor || fabColorTop;


    let animatedVisibleView;
    let animatedViewStyle;

    if (animated) {
      animatedVisibleView = {
        opacity: this.fadeAnimation,
        transform: [
          {
            rotate: this.visibleAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '90deg'],
            }),
          },
          {
            scale: this.visibleAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [1, 0],
            }),
          },
        ],
      };

      animatedViewStyle = {};

      let deg = deg180 ? '180deg' : '45deg';

      if (children) {
        animatedViewStyle = {
          transform: [
            {
              rotate: this.animation.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', deg],
              }),
            },
          ],
        };
      }
    }
    else if (active) {
      animatedVisibleView = {};

      animatedViewStyle = {
        transform: [
          {
            rotate: '45deg',
          },
        ],
      };
    }
    else {
      animatedVisibleView = {};

      animatedViewStyle = {
        transform: [
          {
            rotate: '0deg',
          },
        ],
      };
    }

    const propStyles = {
      backgroundColor: mainButtonColor,
      bottom: this.mainBottomAnimation, // I need to imporove this to run on native thread and not on JS thread
    };

    if (['left', 'right'].indexOf(position) > -1) {
      propStyles[position] = this.distanceToHorizontalEdge;
    }



    const buttonSize = 56; // Metrics.FAB_WIDTH;

    const sizeStyle = {
      width: buttonSize,
      height: buttonSize,
      borderRadius: buttonSize / 2,
    };


    let fabContentObject = (
      <Animated.View
        style={[
          styles.buttonTextContainer,
          sizeStyle,
          animatedViewStyle,
        ]}>
        {content}
      </Animated.View>
    );

    let objectToButton;

    if (fabColorTop && fabColorBottom) {
      objectToButton = (

        <TouchableOpacity
          disabled={disabled}
          activeOpacity={activeOpacity}
          style={sizeStyle}
          onPress={this.animateButton}>

          <LinearGradient
            colors={[
              fabColorTop || Colors.PRIMARY,
              fabColorBottom || Colors.PRIMARY_DARK,
            ]}
            start={
              gradientLinear === 'row'
                ? { x: 0, y: 1 }
                : gradientLinear === 'linear'
                  ? { x: 1, y: 1 }
                  : { x: 0, y: 0 }
            }
            end={
              gradientLinear === 'row'
                ? { x: 1, y: 1 }
                : gradientLinear === 'linear'
                  ? { x: 0, y: 0 }
                  : { x: 0, y: 1 }
            }
            style={[
              {
                overflow: 'hidden',
                flex: 1,
                width: '100%',
              },
              styles.button,
            ]}>

            {fabContentObject}

          </LinearGradient>
        </TouchableOpacity>

      );
    }
    else {
      objectToButton = (

        <TouchableOpacity
          disabled={disabled}
          activeOpacity={activeOpacity}
          style={[
            styles.button,
            sizeStyle,
          ]}
          onPress={this.animateButton}>

          {fabContentObject}

        </TouchableOpacity>

      );
    }


    return (
      <Animated.View
        style={[
          styles.buttonContainer,
          sizeStyle,
          styles[`${position}Button`],
          propStyles,
          animatedVisibleView,
          this.getShadow(),
        ]}>
        {objectToButton}
      </Animated.View>
    );
  }



  renderActions() {
    const {
      actions,
      position,
      overrideWithAction,
      distanceToEdge,
      actionsPaddingTopBottom,
      animated,

      onPress,

      children,
    } = this.props;

    const { active } = this.state;


    if (!children || children.length === 0) {
      return undefined;
    }

    //   if (overrideWithAction) {
    //     return null;
    //   }

    let animatedActionsStyle;

    if (animated) {
      animatedActionsStyle = {
        opacity: this.actionsAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      };
    }
    else {
      animatedActionsStyle = { opacity: active ? 1 : 0 };
    }

    const actionsStyles = [
      styles.actions,
      styles[`${position}Actions`],
      animatedActionsStyle,
      {
        bottom: this.actionsBottomAnimation,
      },
    ];

    if (active) {
      actionsStyles.push(styles[`${position}ActionsVisible`]);
    }

    //   const sortedActions = actions.sort((a, b) => a.position - b.position);

    return (
      <Animated.View style={actionsStyles} pointerEvents="box-none">
        {
          React.Children.map(children, (child) => (
            React.cloneElement(child,
              {
                position: position,
                paddingTopBottom: actionsPaddingTopBottom,
                distanceToEdge: distanceToEdge,
                active: active,
                animated: animated,
                resetClick: () => {
                  this.reset();
                },

                shadow: this.getShadow(),
                // style: { ...child.props.style, opacity: 0.5 }
              },
            )
          ))
        }

      </Animated.View>
    );
  }



  // renderActions() {
  //   const {
  //     actions,
  //     position,
  //     overrideWithAction,
  //     distanceToEdge,
  //     actionsPaddingTopBottom,
  //     animated
  //   } = this.props;

  //   const { active } = this.state;

  //   if (!actions || actions.length === 0) {
  //     return undefined;
  //   }

  //   if (overrideWithAction) {
  //     return null;
  //   }

  //   let animatedActionsStyle;

  //   if (animated) {
  //     animatedActionsStyle = {
  //       opacity: this.actionsAnimation.interpolate({
  //         inputRange: [0, 1],
  //         outputRange: [0, 1]
  //       })
  //     };
  //   } else {
  //     animatedActionsStyle = { opacity: active ? 1 : 0 };
  //   }

  //   const actionsStyles = [
  //     styles.actions,
  //     styles[`${position}Actions`],
  //     animatedActionsStyle,
  //     {
  //       bottom: this.actionsBottomAnimation
  //     }
  //   ];

  //   if (active) {
  //     actionsStyles.push(styles[`${position}ActionsVisible`]);
  //   }

  //   const sortedActions = actions.sort((a, b) => a.position - b.position);

  //   return (
  //     <Animated.View style={actionsStyles} pointerEvents="box-none">
  //       {sortedActions.map(action => {
  //         const textColor = action.textColor || action.actionsTextColor;
  //         const textBackground =
  //           action.textBackground || action.actionsTextBackground;

  //         return (
  //           <FloatingActionItem
  //             paddingTopBottom={actionsPaddingTopBottom}
  //             distanceToEdge={distanceToEdge}
  //             key={action.name}
  //             textColor={textColor}
  //             textBackground={textBackground}
  //             shadow={this.getShadow()}
  //             {...action}
  //             position={position}
  //             active={active}
  //             onPress={this.handlePressItem}
  //             animated={animated}
  //           />
  //         );
  //       })}
  //     </Animated.View>
  //   );
  // }



  // renderTappableBackground() {
  //   const { overlayColor } = this.props;

  //   // TouchableOpacity don't require a child
  //   return (
  //     <TouchableOpacity
  //       activeOpacity={1}
  //       style={[
  //         { backgroundColor: overlayColor },
  //         styles.overlay,
  //       ]}
  //       onPress={this.handlePressBackdrop}
  //     />
  //   );
  // }



  render() {
    const { active } = this.state;

    const {
      showBackground,
      overlayColor,
      noPressOverlay,
    } = this.props;

    return (
      <Animated.View
        pointerEvents="box-none"
        style={[
          styles.overlay,
          { backgroundColor: Colors.TRANSPARENT },
        ]}>

        <Overlay
          visible={active}
          showBackground={showBackground}
          overlayColor={overlayColor || Colors.OVERLAY_BACKGROUND}
          onOverlayPress={noPressOverlay ? null : this.handlePressBackdrop}
        />

        {/* {active && showBackground && this.renderTappableBackground()} */}
        {this.renderActions()}
        {this.renderMainButton()}
      </Animated.View>
    );
  }
}



// FAB.propTypes = {
//   actions: PropTypes.arrayOf(
//     PropTypes.shape({
//       color: PropTypes.string,
//       icon: PropTypes.any,
//       name: PropTypes.string.isRequired,
//       buttonSize: PropTypes.number,
//       text: PropTypes.string,
//       textBackground: PropTypes.string,
//       textColor: PropTypes.string,
//       component: PropTypes.func,
//       animated: PropTypes.bool
//     })
//   ),
//   animated: PropTypes.bool,
//   color: PropTypes.string,
//   distanceToEdge: PropTypes.oneOfType([
//     PropTypes.number,
//     PropTypes.shape({
//       vertical: PropTypes.number,
//       horizontal: PropTypes.number
//     })
//   ]),
//   mainVerticalDistance: PropTypes.number,
//   visible: PropTypes.bool,
//   overlayColor: PropTypes.string,
//   position: PropTypes.oneOf(["right", "left", "center"]),
//   overrideWithAction: PropTypes.bool, // replace mainAction with first action from actions
//   floatingIcon: PropTypes.any,
//   showBackground: PropTypes.bool,
//   openOnMount: PropTypes.bool,
//   actionsPaddingTopBottom: PropTypes.number,
//   buttonSize: PropTypes.number,
//   iconHeight: PropTypes.number,
//   iconWidth: PropTypes.number,
//   listenKeyboard: PropTypes.bool,
//   dismissKeyboardOnPress: PropTypes.bool,
//   shadow: PropTypes.shape({
//     shadowOpacity: PropTypes.number,
//     shadowOffset: PropTypes.shape({
//       width: PropTypes.number,
//       height: PropTypes.number
//     }),
//     shadowColor: PropTypes.string,
//     shadowRadius: PropTypes.number
//   }),
//   onPressItem: PropTypes.func,
//   onPressMain: PropTypes.func,
//   onClose: PropTypes.func,
//   onOpen: PropTypes.func,
//   onPressBackdrop: PropTypes.func,
//   onStateChange: PropTypes.func
// };



FAB.defaultProps = {
  activeOpacity: 0.5,
  dismissKeyboardOnPress: false,
  listenKeyboard: false,
  actionsPaddingTopBottom: 8,
  overrideWithAction: false,
  visible: true,
  color: '#1253bc',
  overlayColor: 'rgba(68, 68, 68, 0.6)',
  position: 'right',
  distanceToEdge: 30,
  openOnMount: false,
  showBackground: true,
  buttonSize: 56,
  iconHeight: 15,
  iconWidth: 15,
  iconColor: '#fff',
  mainVerticalDistance: 0,
  animated: true,
  shadow: {},
};



const styles = StyleSheet.create({

  actions: {
    position: 'absolute',
    bottom: 85,
    zIndex: 10,
  },

  rightActions: {
    alignItems: 'flex-end',
    right: -1000, // this magic number will make always disspear the text from screen
  },

  leftActions: {
    alignItems: 'flex-start',
    left: -1000, // this magic number will make always disspear the text from screen
  },

  centerActions: {
    left: -1000,
  },

  rightActionsVisible: {
    right: 0,
  },

  leftActionsVisible: {
    left: 0,
  },

  centerActionsVisible: {
    left: DEVICE_WIDTH / 2 - 30,
  },



  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    elevation: 0,
    zIndex: 0,
  },

  buttonContainer: {
    // overflow: Platform.OS === "ios" ? "visible" : "hidden",
    overflow: 'hidden',
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    position: 'absolute',
  },

  button: {
    zIndex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },

  centerButton: {
    left: DEVICE_WIDTH / 2 - 28,
  },

  buttonTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // rightButton: {},

  // leftButton: {},



  // OTHERS ***********************

  // fabStyleMaster: {
  // zIndex: 2,
  // },

  // fabStyleContainer: {
  // height: Sizes.FAB_WIDTH,
  // width: Sizes.FAB_WIDTH,
  // borderRadius: Sizes.FAB_WIDTH / 2,
  // },

  // buttonContainer: {
  // overflow: 'hidden',
  // alignItems: 'center',
  // justifyContent: 'center',
  // },

  // absoluteLayout: {
  // position: 'absolute',
  // bottom: 30,
  // left: 275,
  // zIndex: 10,
  // },

  // relativeLayout: {
  // position: 'relative',
  // zIndex: 10,
  // },



  // standard: {
  // height: 56,
  // width: 56,
  // },
  // small: {
  // height: 40,
  // width: 40,
  // },
  // extended: {
  // height: 48,
  // paddingHorizontal: 16,
  // },
  // content: {
  // flexDirection: 'row',
  // alignItems: 'center',
  // justifyContent: 'center',
  // },
  // label: {
  // marginHorizontal: 8,
  // },

});



export default FAB;

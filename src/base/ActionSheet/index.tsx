import React,
{
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  Animated,
  Dimensions,
  PanResponder,
  Platform,
  View,
} from 'react-native';

import Overlay from '../Overlay';

import {
  Wrapper,
  Mask,
  Container,
  DraggableContainer,
  DraggableIcon,
} from './styled';

const {
  width,
} = Dimensions.get('window');

const AnimatedContainer = Animated.createAnimatedComponent(Container);

// const SUPPORTED_ORIENTATIONS = [
//   'portrait',
//   'portrait-upside-down',
//   'landscape',
//   'landscape-left',
//   'landscape-right',
// ];



export interface IProps {
  // animationType: PropTypes.oneOf(['none', 'slide', 'fade']),

  visible?: boolean;
  // onOverlayPress?: any; // Function

  overlayColor?: string;
  height?: number;
  minClosingHeight?: number;
  openDuration?: number;
  closeDuration?: number;
  closeOnDragDown?: boolean;
  closeOnPressMask?: boolean;
  dragFromTopOnly?: boolean;
  closeOnPressBack?: boolean;
  keyboardAvoidingViewEnabled?: boolean;
  customStyles?: any; // PropTypes.objectOf(PropTypes.object),
  onClose?: any; // PropTypes.func,
  onOpen?: any; // PropTypes.func,
  children?: any; // PropTypes.node,
}



const ActionSheet: React.FC<IProps> = (props) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const [modalVisible, setModalVisible] = useState(props.visible);
  const [animatedHeight, setAnimatedHeight] = useState(new Animated.Value(0));



  function setModalComponentVisible(visibleValue: boolean) {
    const {
      onClose,
      onOpen,
    } = props;


    if (visibleValue) {
      setModalVisible(visibleValue);

      if (typeof onOpen === 'function') onOpen(props);
      Animated.timing(animatedHeight, {
        toValue: props.height,
        duration: props.openDuration,
        useNativeDriver: false,
      }).start();
    }
    else {
      Animated.timing(animatedHeight, {
        toValue: props.minClosingHeight,
        duration: props.closeDuration,
        useNativeDriver: false,
      }).start(() => {
        pan.setValue({ x: 0, y: 0 });

        setTimeout(() => {
          setAnimatedHeight(new Animated.Value(0));
          setModalVisible(visibleValue);
        }, props.closeDuration);

        if (typeof onClose === 'function') onClose(props);
      });
    }
  }



  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => props.closeOnDragDown,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy > 0) {
          Animated.event([null, { dy: pan.y }], { useNativeDriver: false })(e, gestureState);
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        if (props.height / 4 - gestureState.dy < 0) {
          setModalComponentVisible(false);
        }
        else {
          Animated.spring(pan, { toValue: { x: 0, y: 0 }, useNativeDriver: false }).start();
        }
      },
    }),
  ).current;



  function open() {
    setModalComponentVisible(true);
  }


  function close() {
    setModalComponentVisible(false);
    if (props.onClose) {
      props.onClose();
    }
  }



  useEffect(() => {
    if (props.visible) {
      setModalVisible(true);

      open();
    }
    else {
      close();

      setTimeout(() => {
        setModalVisible(false);
      }, props.closeDuration);
    }
  }, [props.visible]);



  const panStyle = {
    transform: pan.getTranslateTransform(),
  };



  return (

    <Overlay
      visible={modalVisible}
      showBackground={true}
      overlayColor={props.overlayColor}
      onOverlayPress={props.onClose}>

      <Wrapper
        enabled={props.keyboardAvoidingViewEnabled}
        behavior={'padding'}
        style={props.customStyles.overlay}>


        <Mask
          activeOpacity={1}
          onPress={() => (props.closeOnPressMask ? close() : null)}
        />


        <AnimatedContainer
          {...(!props.dragFromTopOnly && panResponder.panHandlers)}
          style={[
            panStyle,
            {
              width: width,
              height: animatedHeight,
            },
            props.customStyles.container,
          ]}>


          {props.closeOnDragDown && (
            <DraggableContainer
              {...(props.dragFromTopOnly && panResponder.panHandlers)}>
              <DraggableIcon
                style={props.customStyles.draggableIcon}
              />
            </DraggableContainer>
          )}


          {props.children}

        </AnimatedContainer>

      </Wrapper>

    </Overlay>

  );
};



ActionSheet.defaultProps = {
  // animationType: 'none',
  visible: false,

  overlayColor: 'rgba(0, 0, 0, 0.5)',
  height: 260,
  minClosingHeight: 0,
  openDuration: 300,
  closeDuration: 200,
  closeOnDragDown: false,
  dragFromTopOnly: false,
  closeOnPressMask: true,
  closeOnPressBack: true,
  keyboardAvoidingViewEnabled: Platform.OS === 'ios',
  customStyles: {},
  onClose: null,
  onOpen: null,
  children: <View />,
};



export default ActionSheet;

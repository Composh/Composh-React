import React,
{
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  Animated,
  StyleSheet,
  View,
} from 'react-native';

import {
  ButtonRadioContainer,
  ButtonRadioTouchable,
  LeftProductBox,
  // ProductBox,
  // ProductBoxLess,
  // CircleRadioView,
  // IconView,
  CircleFill,
  CenterProductBox,
  TextRadio,
} from './styled';



interface IProps {
  data: any; //PropTypes.array,
  initial?: number;

  animationTypes?: any; //PropTypes.array,
  duration?: number;

  activeColor?: string;
  deactiveColor?: string;
  direction?: string;

  box?: boolean;
  boxDirection?: string;
  boxActiveBgColor?: string;
  boxDeactiveBgColor?: string;
  boxStyle?: object;

  // textActiveColor: PropTypes.string,
  // textDeactiveColor: PropTypes.string,
  textStyle?: object;

  circleSize?: number;

  icon?: any;

  onPress?: any; //PropTypes.func,

  style?: object;
}



const Radio: React.FC<IProps> = (props) => {
  const mounted = useRef(false);


  const [activeIndex, setActiveIndex] = useState(-1);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [anim, setAnim] = useState([]);

  const animations = ([
    {
      name: 'zoomIn',
      animation: {
        scale: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
        }),
      },
    },
    {
      name: 'pulse',
      animation: {
        scale: fadeAnim.interpolate({
          inputRange: [0, 0.4, 0.7, 1],
          outputRange: [0.7, 1, 1.3, 1],
        }),
      },
    },
    {
      name: 'shake',
      animation: {
        scale: fadeAnim.interpolate({
          inputRange: [0, 0.2, 0.4, 0.6, 0.8, 1],
          outputRange: [0.8, 1.2, 0.8, 1.2, 0.8, 1],
        }),
      },
    },
    {
      name: 'rotate',
      animation: {
        rotate: fadeAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
    },
  ]);



  function _checkAnimatons() {
    setAnim([]);

    const newAnim = [];
    props.animationTypes && props.animationTypes.map((item, index) => {
      const itm = animations.find((e) => e.name === item);
      if (itm) {
        newAnim.push(itm.animation);
      }
    });
    setAnim(newAnim);
  }


  function _changeRadio(item, activeIndex) {
    setActiveIndex(activeIndex);
    if (activeIndex !== activeIndex) {
      fadeInAnimation();
    }
    props.onPress(item);
  }


  const fadeInAnimation = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 0,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: props.duration,
        delay: 10,
        useNativeDriver: true,
      }).start();
    });
  };



  useEffect(() => {
    if (!mounted.current) {
      // ComponentDidMount logic
      _checkAnimatons();
      mounted.current = true;
    }
    else {
      // ComponentDidUpdate logic
      if (activeIndex === -1 && props.initial > 0) {
        const initialActive = props.initial - 1;
        _changeRadio(props.data[initialActive], initialActive);
      }
      if (props.initial !== props.initial) {
        const initialActive = props.initial - 1;
        _changeRadio(props.data[initialActive], initialActive);
      }
      if (props.animationTypes !== props.animationTypes) {
        _checkAnimatons();
      }
    }
  });


  // componentDidMount() {
  //   this._checkAnimatons();
  // }


  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.activeIndex === -1 && this.props.initial > 0) {
  //     const initialActive = this.props.initial - 1;
  //     this._changeRadio(this.props.data[initialActive], initialActive);
  //   }
  //   if (this.props.initial !== prevProps.initial) {
  //     const initialActive = this.props.initial - 1;
  //     this._changeRadio(this.props.data[initialActive], initialActive);
  //   }
  //   if (this.props.animationTypes !== prevProps.animationTypes) {
  //     this._checkAnimatons();
  //   }
  // }



  return (

    <ButtonRadioContainer
      style={[
        {
          flexDirection: props.direction,
          flex: 1,
        },
        props.style,
      ]}>
      {props.data.map((item, index) => {
        return (

          <ButtonRadioTouchable
            key={index}
            activeOpacity={0.9}
            onPress={() => {
              _changeRadio(item, index);
            }}
            style={[
              // box ? styles.productBox : styles.productBoxLess,
              // box && {
              //   backgroundColor: activeIndex === index ? boxActiveBgColor : boxDeactiveBgColor,
              // },
              {
                flexDirection: props.boxDirection,
                borderColor: activeIndex === index ? props.activeColor : props.deactiveColor,
              },
              props.boxStyle,
            ]}>


            <LeftProductBox>
              <View style={[
                props.icon
                  ? styles.icon
                  : styles.circle,
                {
                  borderColor: activeIndex === index ? props.activeColor : props.deactiveColor,
                  width: props.circleSize + 8,
                  height: props.circleSize + 8,
                },
                props.icon && {
                  borderColor: activeIndex === index ? 'transparent' : props.deactiveColor,
                },
              ]}>


                <Animated.View style={{
                  opacity: activeIndex === index ? fadeAnim : 0,
                }}>
                  <Animated.View
                    style={{
                      transform: anim,
                    }}>
                    {props.icon ?
                      props.icon
                      :
                      <CircleFill
                        style={{
                          backgroundColor: activeIndex === index ? props.activeColor : props.deactiveColor,
                          borderColor: activeIndex === index ? props.activeColor : props.deactiveColor,
                          width: props.circleSize,
                          height: props.circleSize,
                        }}
                      />
                    }
                  </Animated.View>
                </Animated.View>
              </View>

            </LeftProductBox>



            <CenterProductBox>
              <TextRadio
                style={[
                  {
                    color: activeIndex === index ? props.activeColor : props.deactiveColor,
                  },
                  props.textStyle,
                ]}>
                {item.label}
              </TextRadio>
            </CenterProductBox>

          </ButtonRadioTouchable>

        );
      })}
    </ButtonRadioContainer>

  );
};



const styles = StyleSheet.create({

  productBox: {
    flexDirection: 'row',
    borderRadius: 7,
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginTop: 10,
  },

  productBoxLess: {
    flexDirection: 'row',
    marginTop: 10,
  },

  circle: {
    borderWidth: 1,
    borderRadius: 10000,
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    borderWidth: 1,
    borderRadius: 10000,
    alignItems: 'center',
    justifyContent: 'center',
  },

});



Radio.defaultProps = {
  style: {},
  boxStyle: {},
  textStyle: {},
  initial: -1,
  circleSize: 18,
  duration: 500,
  data: [],
  animationTypes: [],
  onPress: () => { },
  activeColor: '#03a9f4',
  deactiveColor: '#e2e2e2',
  boxActiveBgColor: '#e1f5fe33',
  boxDeactiveBgColor: '#fff',
  box: false,
  direction: 'row',
  boxDirection: 'row',
};



export default Radio;

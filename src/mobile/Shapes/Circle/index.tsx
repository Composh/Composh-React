// React Components Import
import React from 'react';

import {
  View,
} from 'react-native';

// Plugins Import
import LinearGradient from 'react-native-linear-gradient';



export interface IProps {
  backgroundColor?: string;

  backgroundColorTop?: string;
  backgroundColorBottom?: string;
  gradientLinear?: string;

  opacity?: number;
  diameter?: number;

  style?: object;

  children?: any;
}



const Circle: React.FC<IProps> = (props) => {
  const circleStyle = [
    {
      width: props.diameter,
      height: props.diameter,
      borderRadius: props.diameter ? props.diameter / 2 : 50,
      opacity: props.opacity || 1,
    },
    props.style,
  ];



  function circleComponent() {
    if (props.backgroundColorTop && props.backgroundColorBottom) {
      return (

        <LinearGradient
          colors={[
            props.backgroundColorTop || 'white',
            // backgroundColorMiddle || Colors.SECONDARY,
            props.backgroundColorBottom || 'lightgray',
          ]}
          start={
            props.gradientLinear === 'row'
              ? { x: 0, y: 1 }
              : props.gradientLinear === 'linear'
                ? { x: 1, y: 1 }
                : { x: 0, y: 0 }
          }
          end={
            props.gradientLinear === 'row'
              ? { x: 1, y: 1 }
              : props.gradientLinear === 'linear'
                ? { x: 0, y: 0 }
                : { x: 0, y: 1 }
          }
          style={circleStyle}>

          {props.children}

        </LinearGradient>

      );
    }
    else {
      return (

        <View
          style={[
            { backgroundColor: props.backgroundColor || 'white' },
            circleStyle,
          ]}>

          {props.children}

        </View>

      );
    }
  }

  return circleComponent();
};



export default Circle;

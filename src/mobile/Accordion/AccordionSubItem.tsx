import React,
{
  useEffect,
} from 'react';

import {
  Animated,
} from 'react-native';

import {
  AccordionSubItemTitle,
} from './styled';



export interface IProps {
  content?: any;
  contentStyle?: any;
  style?: any;
  children?: any;
};



const AccordionSubItem: React.FC<IProps> = (props) => {
  const fadeAnim = new Animated.Value(0.3);

  const AnimatedAccordionSubItemTitle = Animated.createAnimatedComponent(AccordionSubItemTitle);


  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  });



  return (

    <AnimatedAccordionSubItemTitle
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}>
      {props.children}
    </AnimatedAccordionSubItemTitle>

  );
};



export default AccordionSubItem;

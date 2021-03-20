// React Components Import
import React,
{
  useEffect,
  useState,
} from 'react';

import {
  Animated,
} from 'react-native';

// Styled Component Common Import
import {
  ContainerLinearHeader,
  ContainerBackgroundHeader,
  ContentFlexComponent,
  TitleComponent,
  IconContentView,
} from './styled';

// Constants Import
const AnimatedTitleIconHeader = Animated.createAnimatedComponent(IconContentView);



interface IProps {
  colors?: any;
  start?: any;
  end?: any;

  expanded?: boolean;
  // elipsing?: boolean;

  text?: string;
  textColor?: string;
  textSize?: number;

  noBorderBottom?: boolean;
  borderBottomColor?: string;
  borderBottomWidth?: number;

  icon?: any;

  style?: any;
}



const ListHeader: React.FC<IProps> = (props) => {
  const [expandedState, setExpandedState] = useState(props.expanded);

  const animation = new Animated.Value(0);


  useEffect(() => {
    if (props.expanded) {
      Animated.spring(animation, {
        toValue: 1,
        useNativeDriver: false,
      }).start();
    }
    else {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: false,
      }).start();
    }
  }, []);



  function renderHeaderChildren() {
    return (

      <ContentFlexComponent>
        <TitleComponent
          textColor={props.textColor}
          textSize={props.textSize}
          numberOfLines={1}
          ellipsizeMode="tail">
          {props.text.toUpperCase()}
        </TitleComponent>


        <AnimatedTitleIconHeader
          style={{
            transform: [
              {
                rotate: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "180deg"]
                })
              }
            ]
          }}>
          {props.icon}
        </AnimatedTitleIconHeader>
      </ContentFlexComponent>

    );
  }



  if (props.colors) {
    return (

      <ContainerLinearHeader
        colors={props.colors}
        start={props.start}
        end={props.end}
        style={props.style}>
        {renderHeaderChildren()}
      </ContainerLinearHeader>

    );

  } else {
    return (

      <ContainerBackgroundHeader
        style={props.style}>
        {renderHeaderChildren()}
      </ContainerBackgroundHeader>

    );
  }
};



export default ListHeader;

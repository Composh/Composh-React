// React Components Import
import React,
{
  useEffect,
  useState,
} from 'react';

// import {
//   Animated,
// } from 'react-native';

import {
  ContainerSection,
  TitleSectionView,
  IconView,
  TitleComponent,
  IconContentView,
} from './styled';

// const AnimatedTitleIconHeader = Animated.createAnimatedComponent(IconContentView);



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

  leftIcon?: any;
  rightIcon?: any;

  style?: any;
}



const ListSection: React.FC<IProps> = (props) => {
  const [expandedState, setExpandedState] = useState(props.expanded);

  // const animation = new Animated.Value(0);


  useEffect(() => {
    // if (props.expanded) {
    //   Animated.spring(animation, {
    //     toValue: 1,
    //     useNativeDriver: false,
    //   }).start();
    // }
    // else {
    //   Animated.spring(animation, {
    //     toValue: 0,
    //     useNativeDriver: false,
    //   }).start();
    // }
  }, []);



  return (

    <ContainerSection
    // style={[
    //   props.style,
    //   !props.noBorderBottom && {
    //     borderBottomColor: props.borderBottomColor || 'green',
    //     borderBottomWidth: props.borderBottomWidth || 2,
    //   },
    //   props.noBorderBottom && {
    //     borderBottomColor: 'transparent',
    //     borderBottomWidth: 0,
    //   },
    // ]}
    >


      <TitleSectionView>
        {props.leftIcon && (
          <IconView>
            {props.leftIcon}
          </IconView>
        )}

        <TitleComponent
          textColor={props.textColor}
          textSize={props.textSize}>
          {props.text?.toUpperCase()}
        </TitleComponent>
      </TitleSectionView>


      <IconContentView
      // style={{
      //   transform: [
      //     {
      //       rotate: animation.interpolate({
      //         inputRange: [0, 1],
      //         outputRange: ['0deg', '180deg'],
      //       }),
      //     },
      //   ],
      // }}
      >
        {props.rightIcon}
      </IconContentView>

    </ContainerSection>

  );
};



export default ListSection;

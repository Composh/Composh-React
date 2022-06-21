import React,
{
  useEffect,
  useState,
} from 'react';

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
  IconCircleView,
} from './styled';



interface IProps {
  data: any; // PropTypes.array,
  initial?: number;

  animationTypes?: any; // PropTypes.array,
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

  onPress?: any; // PropTypes.func,

  style?: object;
}



const Radio: React.FC<IProps> = (props: any) => {
  const [activeIndex, setActiveIndex] = useState(-1);



  function _changeRadio(item: any, activeIndexA: any) {
    setActiveIndex(activeIndexA);
    props.onPress(item);
  }



  useEffect(() => {
    if (activeIndex === -1 && props.initial > 0) {
      const initialActive = props.initial - 1;
      _changeRadio(props.data[initialActive], initialActive);
    }
  });



  return (

    <ButtonRadioContainer
      direction={props.direction}
      style={props.style}>
      {props.data.map((item: any, index: any) => {
        return (

          <ButtonRadioTouchable
            key={index}
            onClick={() => {
              _changeRadio(item, index);
            }}
            direction={props.boxDirection}
            borderColor={activeIndex === index ? props.activeColor : props.deactiveColor}
            style={props.boxStyle}>


            <LeftProductBox>
              <IconCircleView
                width={props.circleSize + 8}
                height={props.circleSize + 8}
                borderColor={
                  props.icon
                    ? activeIndex === index ? 'transparent' : props.deactiveColor
                    : activeIndex === index ? props.activeColor : props.deactiveColor
                }>

                <div style={{
                  opacity: activeIndex === index ? 1 : 0,
                }}>
                  <div>
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
                  </div>
                </div>
              </IconCircleView>

            </LeftProductBox>



            <CenterProductBox>
              <TextRadio
                color={activeIndex === index ? props.activeColor : props.deactiveColor}
                style={props.textStyle}>
                {item.label}
              </TextRadio>
            </CenterProductBox>

          </ButtonRadioTouchable>

        );
      })}
    </ButtonRadioContainer>

  );
};



Radio.defaultProps = {
  style: {},
  boxStyle: {},
  textStyle: {},
  initial: -1,
  circleSize: 18,
  duration: 500,
  data: [],
  animationTypes: [],
  onPress: null, // () => { },
  activeColor: '#03a9f4',
  deactiveColor: '#e2e2e2',
  boxActiveBgColor: '#e1f5fe33',
  boxDeactiveBgColor: '#fff',
  box: false,
  direction: 'row',
  boxDirection: 'row',
};



export default Radio;

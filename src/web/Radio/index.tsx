import React,
{
  useEffect,
  useState,
} from 'react';

import ButtonCircle from '../Button/ButtonCircle';

import {
  ButtonRadioContainer,
  ButtonRadioTouchable,
  // ProductBox,
  // ProductBoxLess,
  // CircleRadioView,
  // IconView,
  CenterProductBox,
  TextRadio,
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

  circleMargin?: boolean;
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
            style={props.boxStyle}>


            <ButtonCircle
              margin={props.circleMargin}
              active={activeIndex === index}
              size={props.circleSize}
              deactiveColor={props.deactiveColor}
              activeColor={props.activeColor}
            />



            <CenterProductBox>
              {React.isValidElement(item.label)
                ? item.label
                : (
                  <TextRadio
                    color={activeIndex === index ? props.activeColor : props.deactiveColor}
                    style={props.textStyle}>
                    {item.label}
                  </TextRadio>
                )}
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

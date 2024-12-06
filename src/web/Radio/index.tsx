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
  disabled?: boolean;

  data: any; // PropTypes.array
  initial?: number;

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

  onPress?: any; // PropTypes.func

  style?: object;
}



const Radio: React.FC<IProps> = (props: any) => {
  // Constantes com valores padrão usando operador ternário
  const initial = props.initial !== undefined ? props.initial : -1;
  const circleSize = props.circleSize !== undefined ? props.circleSize : 18;
  const activeColor = props.activeColor !== undefined ? props.activeColor : '#03a9f4';
  const deactiveColor = props.deactiveColor !== undefined ? props.deactiveColor : '#e2e2e2';
  const boxActiveBgColor = props.boxActiveBgColor !== undefined ? props.boxActiveBgColor : '#e1f5fe33';
  const boxDeactiveBgColor = props.boxDeactiveBgColor !== undefined ? props.boxDeactiveBgColor : '#fff';
  const direction = props.direction !== undefined ? props.direction : 'row';
  const boxDirection = props.boxDirection !== undefined ? props.boxDirection : 'row';


  const [activeIndex, setActiveIndex] = useState(-1);



  function _changeRadio(item: any, activeIndexA: any) {
    setActiveIndex(activeIndexA);
    if (props.onPress) {
      props.onPress(item);
    }
  }



  useEffect(() => {
    if (initial > 0) {
      const initialActive = initial - 1;
      _changeRadio(props.data[initialActive], initialActive);
    }
  }, [initial]);



  return (

    <ButtonRadioContainer
      disabled={props.disabled}
      direction={direction}
      style={props.style}>

      {props.data.map((item: any, index: any) => (
        <ButtonRadioTouchable
          key={index}
          onClick={() => {
            if (!props.disabled) {
              _changeRadio(item, index);
            }
          }}
          direction={boxDirection}
          style={{
            ...props.boxStyle,
            backgroundColor:
              activeIndex === index ? boxActiveBgColor : boxDeactiveBgColor,
          }}>


          <ButtonCircle
            active={activeIndex === index}
            size={circleSize}
            deactiveColor={deactiveColor}
            activeColor={activeColor}
          />


          <CenterProductBox>
            {React.isValidElement(item.label)
              ? item.label
              : (
                <TextRadio
                  color={activeIndex === index ? activeColor : deactiveColor}
                  style={props.textStyle}>
                  {item.label}
                </TextRadio>
              )
            }
          </CenterProductBox>
        </ButtonRadioTouchable>
      ))}

    </ButtonRadioContainer>

  );
};



export default Radio;

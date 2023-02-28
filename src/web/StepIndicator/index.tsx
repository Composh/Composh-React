import React from 'react';

import {
  StepContainer,
  StepIndicatorContainer,
  StepText,
} from './styled';



export interface IProps {
  data: any;
  stepCurrent: number;

  // onPress?: any;
  colorPassed?: string;
  textColorPassed?: string;

  colorAccent?: string;

  colorMoreStep?: string;

  backgroundColor?: string;
}



const StepIndicator: React.FC<IProps> = (props: any) => {
  const {
    stepCurrent,
    data,
  } = props;


  function chooseBackgroundColor(index: number) {
    if (index > stepCurrent && index !== stepCurrent) {
      return props.backgroundColor;
    }
    else if (index < stepCurrent) {
      return props.colorAccent;
    }
    else if (index === stepCurrent) {
      return props.colorPassed;
    }
    else {
      return 'black';
    }
  }



  function chooseBorderColor(index: number) {
    if (index > stepCurrent && index !== stepCurrent) {
      return props.colorMoreStep;
    }
    else if (index < stepCurrent) {
      return props.colorAccent;
    }
    else if (index === stepCurrent) {
      return props.colorPassed;
    }
    else {
      return 'black';
    }
  }



  function chooseTextColor(index: number) {
    if (index > stepCurrent && index !== stepCurrent) {
      return props.colorMoreStep;
    }
    else if (index < stepCurrent) {
      return props.textColorPassed;
    }
    else if (index === stepCurrent) {
      return props.textColorPassed;
    }
    else {
      return 'red';
    }
  }


  return (

    <StepContainer>

      {data.map((label: string, index: number) => (
        <StepIndicatorContainer
          key={index}
          style={{
            backgroundColor: chooseBackgroundColor(index),
            borderColor: chooseBorderColor(index),
            borderWidth: 1,
          }}>

          {/*
          <Text>
            {i + 1}
          </Text>
          */}

          <StepText
            style={{
              color: chooseTextColor(index),
            }}>
            {label}
          </StepText>

        </StepIndicatorContainer>
      ))}

    </StepContainer>

  );
};



export default StepIndicator;

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
  colorMoreStep?: string;
  colorAccent?: string;
  backgroundColor?: string;

  textColorAccept?: string;
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
      return props.textColorAccept;
    }
    else if (index === stepCurrent) {
      return props.textColorAccept;
    }
    else {
      return 'red';
    }
  }


  return (

    <StepContainer>

      {data.map((label: string, i) => (
        <StepIndicatorContainer
          key={i}
          style={{
            backgroundColor: chooseBackgroundColor(i),
            borderColor: chooseBorderColor(i),
            borderWidth: 1,
          }}>

          {/*
          <Text>
            {i + 1}
          </Text>
          */}

          <StepText
            style={{
              color: chooseTextColor(i),
            }}>
            {label}
          </StepText>

        </StepIndicatorContainer>
      ))}

    </StepContainer>

  );
};



export default StepIndicator;

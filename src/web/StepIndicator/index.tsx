import React from 'react';

import {
  StepContainer,
  StepIndicatorContainer,
  StepText,
} from './styled';



export interface IProps {
  data: Array<string>;
  stepsValidity?: boolean[];

  stepCurrent: number;

  height?: number;
  backgroundColor?: string;

  colorPassed?: string;
  textColorPassed?: string;

  colorAccent?: string;

  colorMoreStep?: string;

  onStepPress: (index: number) => void;
}



const StepIndicator: React.FC<IProps> = (props: IProps) => {
  const stepReceivedCurrent = props.stepCurrent;
  const dataStep = props.data && Array.isArray(props.data) && props.data?.length > 0 ? props.data : [];


  function chooseBackgroundColor(index: number) {
    if (index > stepReceivedCurrent && index !== stepReceivedCurrent) {
      return props.backgroundColor;
    }

    if (index < stepReceivedCurrent) {
      return props.colorAccent;
    }

    if (index === stepReceivedCurrent) {
      return props.colorPassed;
    }

    return '#000000';
  }



  function chooseBorderColor(index: number) {
    if (index > stepReceivedCurrent && index !== stepReceivedCurrent) {
      return props.colorMoreStep;
    }

    if (index < stepReceivedCurrent) {
      return props.colorAccent;
    }

    if (index === stepReceivedCurrent) {
      return props.colorPassed;
    }

    return '#000000';
  }



  function chooseTextColor(index: number) {
    if (index > stepReceivedCurrent && index !== stepReceivedCurrent) {
      return props.colorMoreStep;
    }

    if (index < stepReceivedCurrent) {
      return props.textColorPassed;
    }

    if (index === stepReceivedCurrent) {
      return props.textColorPassed;
    }

    return '#ff0000';
  }



  return (

    <StepContainer
      height={props.height || 46}>

      {dataStep?.map((label: string, index: number) => (
        <StepIndicatorContainer
          key={index}
          disabled={!props.stepsValidity[index]}
          backgroundColor={chooseBackgroundColor(index)}
          borderColor={chooseBorderColor(index)}
          onClick={() => {
            if (!props.stepsValidity[index]) {
              return;
            }

            if (props.onStepPress) {
              props.onStepPress(index);
            }
          }}>

          <StepText
            color={chooseTextColor(index)}>
            {label}
          </StepText>

        </StepIndicatorContainer>
      ))}

    </StepContainer>

  );
};



export default StepIndicator;

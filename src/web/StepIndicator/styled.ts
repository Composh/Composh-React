import styled from 'styled-components';



export const StepContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${46}px;
  padding-top: 3px;
  padding-bottom: 6px;
`;


export const StepIndicatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: ${5}px;
  margin-left: 4px;
  margin-right: 4px;
  align-items: center;
  justify-content: center;
`;

export const StepText = styled.p`
  margin: 0;
  font-size: 14px;
`;

import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  disabled?: boolean;
  height?: number;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
}



export const StepContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: ${(props: IProps) => props.height}px;
  padding-top: 3px;
  padding-left: 2px;
  padding-right: 2px;
  padding-bottom: 6px;
`;


export const StepBorderStyle = css`
  border-color: ${(props: IProps) => props.borderColor};
  border-style: solid;
  border-width: 1px;
`;

export const StepIndicatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  margin-left: 3px;
  margin-right: 3px;
  background-color: ${(props: IProps) => props.backgroundColor};
  border-radius: ${5}px;
  cursor: ${(props: IProps) => props.disabled ? 'pointer' : 'not-allowed'};

  ${(props: IProps) => props.borderColor && StepBorderStyle}
`;

export const StepText = styled.p`
  margin: 0;
  color: ${(props: IProps) => props.color};
  font-size: 13px;
  line-height: 16px;
  text-align: center;
`;

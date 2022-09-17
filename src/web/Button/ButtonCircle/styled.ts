import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  direction?: string;
  size?: number;
  color?: string;
  borderColor?: string;
}



export const LeftProductBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props: IProps) => props.size}px;
  height: ${(props: IProps) => props.size}px;
  margin-left: 3px;
  margin-right: 12px;
`;



export const RadioBorderStyle = css`
  border-color: ${(props: IProps) => props.borderColor || '#000000'};
  border-style: solid;
  border-width: 1.8px;
`;

export const IconCircleView = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props: IProps) => props.size}px;
  height: ${(props: IProps) => props.size}px;
  border-radius: 50%;

  ${RadioBorderStyle};
`;

export const ButtonIconCircle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CircleFill = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 1px;
  border-radius: 50%;
`;

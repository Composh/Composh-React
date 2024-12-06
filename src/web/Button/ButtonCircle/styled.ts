import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  margin?: boolean;
  direction?: string;
  size?: number;
  color?: string;
  borderColor?: string;
}



export const LeftMarginProductStyle = css`
  margin-left: 3px;
  margin-right: 12px;
`;

export const LeftProductBox = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props: IProps) => props.size}px;
  height: ${(props: IProps) => props.size}px;

  ${(props: IProps) => props.margin && LeftMarginProductStyle};
`;



export const RadioBorderStyle = css<IProps>`
  border-color: ${(props: IProps) => props.borderColor || '#000000'};
  border-style: solid;
  border-width: 1.8px;
`;

export const IconCircleView = styled.div<IProps>`
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

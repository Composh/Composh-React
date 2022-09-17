import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  size: number;
  backgroundColor?: string;
  borderColor?: string;
}

export interface IContentProps {
  backgroundColor?: string;
}



export const CheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props: IProps) => props.size}px;
  height: ${(props: IProps) => props.size}px;
  margin-left: 3px;
  margin-right: 12px;
`;



export const CheckBoxBorderStyle = css`
  border-color: ${(props: IProps) => props.borderColor || '#000000'};
  border-style: solid;
  border-width: 1.8px;
`;

export const CheckBoxItemContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${(props: IProps) => props.size}px;
  height: ${(props: IProps) => props.size}px;
  border-radius: 3px;

  ${CheckBoxBorderStyle};
`;

export const ButtonCheckboxIconContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props: IContentProps) => props.backgroundColor};
  border-radius: 3px;
`;

export const CheckBoxContent = styled.div`
  display: flex;
  width: ${(props: IProps) => props.size}px;
  height: ${(props: IProps) => props.size}px;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

export const CheckmarkContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props: IProps) => props.size}px;
  height: ${(props: IProps) => props.size}px;
  background-color: ${(props: IProps) => props.backgroundColor};
  border-radius: 3px;
  border-radius: 50px;
`;

export const CheckmarkStem = styled.div`
  position: absolute;
  top: ${(props: IProps) => props.size * (5 / 22)}px;
  left: ${(props: IProps) => props.size * 0.5}px;
  width: ${(props: IProps) => props.size * (3 / 22)}px;
  height: ${(props: IProps) => props.size * (5 / 11)}px;
  background-color: #ffffff;
`;
// top: 5px;
// left: 11px;
// width: 3px;
// height: 10px;

export const CheckmarkCkick = styled.div`
  position: absolute;
  top: ${(props: IProps) => props.size * (6 / 11)}px;
  left: ${(props: IProps) => props.size * (4 / 11)}px;
  width: ${(props: IProps) => props.size * (3 / 22)}px;
  height: ${(props: IProps) => props.size * (3 / 22)}px;
  background-color: #ffffff;
`;
// top: 12px;
// left: 8px;
// width: 3px;
// height: 3px;

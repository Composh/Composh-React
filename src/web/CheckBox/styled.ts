import styled,
{
  css,
} from 'styled-components';



export interface IProps {
  backgroundColor?: string;
  border?: boolean;
}



export const CheckBoxButton = styled.a`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  cursor: pointer;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CheckBoxBorderStyle = css`
  border-color: #000000;
  border-style: solid;
  border-width: 1.8px;
  border-radius: 3px;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 28px;
  height: 28px;
  padding: 2px;

  ${(props: IProps) => props.border && CheckBoxBorderStyle};
`;


export const CheckBoxItemContent = styled.div`
  display: flex;
  width: 22px;
  height: 22px;
  background-color: ${(props: IProps) => props.backgroundColor};
  border-radius: 3px;
`;

export const CheckBoxContent = styled.div`
  display: flex;
  width: 22px;
  height: 22px;
  transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`;

export const CheckmarkContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 22px;
  height: 22px;
  background-color: ${(props: IProps) => props.backgroundColor};
  border-radius: 3px;
  border-radius: 50px;
`;

export const CheckmarkStem = styled.div`
  position: absolute;
  top: 5px;
  left: 11px;
  width: 3px;
  height: 10px;
  background-color: #fff;
`;

export const CheckmarkCkick = styled.div`
  position: absolute;
  top: 12px;
  left: 8px;
  width: 3px;
  height: 3px;
  background-color: #fff;
`;

export const CheckboxText = styled.p`
  font-size: 14px;
`;

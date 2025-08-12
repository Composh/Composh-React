import styled from 'styled-components';



interface IProps {
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  borderRadius?: number;
}



export const ChipContainer = styled.div<IProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  height: 35px;
  margin-top: 4px;
  margin-left: 2px;
  margin-right: 2px;
  margin-bottom: 4px;
  background-color: ${(props: IProps) => props.backgroundColor};
  border-color: ${(props: IProps) => props.borderColor};
  border-style: solid;
  border-width: 1px;
  border-radius: ${(props: IProps) => props.borderRadius || 0}px;
`;

export const ChipButtonContent = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
`;

export const ChipThumb = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 8px;
`;


export const ChipText = styled.p<IProps>`
  font-size: 14px;
  color: ${(props: IProps) => props.color};
`;

export const ChipIcon = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  margin-right: -2px;
  padding-top: 4px;
  padding-bottom: 4px;
`;


export const ThumbRightIcon = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  margin-right: -2px;
  padding-top: 4px;
  padding-bottom: 4px;
`;



export const ChipAvatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 12px;
`;

export const ChipAvatarWrapper = styled.div`
  margin-right: 4px;
`;

export const ChipAvatarSelected = styled.div`
  position: absolute;
  top: 4px;
  left: 4px;
  background-color: rgba(0, 0, 0, .29);
`;

import styled from 'styled-components';

const marginComponent = `${5}px`;



export interface IProps {
  disabled?: boolean;
  center?: boolean;
  direction?: 'LEFT' | 'RIGHT';
  backgroundColor?: string;
  border?: boolean;
  borderColor?: string;
}



export const CheckBoxButton = styled.a<IProps>`
  display: flex;
  flex-direction: column;
  margin-top: ${marginComponent};
  margin-bottom: ${marginComponent};
  padding-top: 2px;
  padding-bottom: 2px;
  cursor: pointer;

  opacity: ${(props: IProps) => props.disabled ? 0.4 : 1};

  ${(props: IProps) => props.center && 'align-items: center'};
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const CheckboxFlexText = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  align-self: center;

  ${(props: IProps) => props.direction === 'LEFT' && 'margin-left: 7px'};
  ${(props: IProps) => props.direction === 'RIGHT' && 'margin-right: 7px'};
`;

export const CheckboxText = styled.p`
  display: flex;
  font-size: 14px;
`;

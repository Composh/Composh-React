import styled from 'styled-components';
import LinearGradient from '../LinearGradient';



interface IProps {
  textSize?: number;
  textColor?: string;
}



export const ContainerLinearHeader = styled(LinearGradient)`
  min-height: 40px;
  margin-vertical: 3px;
  padding-horizontal: 15px;
`;

export const ContainerBackgroundHeader = styled.div`
  min-height: 40px;
  margin-vertical: 3px;
  padding-horizontal: 15px;
`;

export const ContentFlexComponent = styled.div`
  flex-direction: row;
  flex: 1;
  align-items: center;
`;



export const ContainerSection = styled.div`
  flex-direction: row;
  align-items: center;
  min-height: 40px;
  margin-top: 5px;
  margin-bottom: 7px;
  padding-left: 7px;
  padding-right: 5px;
  padding-vertical: 5px;
`;


export const TitleSectionView = styled.div`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const IconView = styled.div`
  margin-right: 10px;
`;

export const TitleComponent = styled.p`
  flex: 1;
  color: ${(props: IProps) => props.textColor || 'green'};
  font-size: ${(props: IProps) => props.textSize || 15}px;
  font-weight: 200;
  letter-spacing: 0.5px;
`;

export const IconContentView = styled.div`
  align-items: center;
  justify-content: center;
  min-height: 25px;
  min-width: 25px;
  margin-left: 5px;
`;

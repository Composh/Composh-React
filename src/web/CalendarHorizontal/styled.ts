import styled,
{
  css,
} from 'styled-components';

import { Colors } from '../../constants';

// import LinearGradient from 'react-native-linear-gradient';

import LinearGradient from '../LinearGradient';



export interface IProps {
  active?: boolean;
}



// Dates Style

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  min-height: 50px;
`;

export const CalendarArrowButton = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 100%;
  min-height: 50px;
  cursor: pointer;
`;

export const CalendarArrowText = styled.p`
  color: #ffffff;
  font-size: 18px;
`;



// Date Style

export const ContainerActive = css`
  border-bottom-color: ${Colors.accent};
`;

export const DateContainer = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  border-bottom-color: transparent;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  cursor: pointer;

  ${(props: IProps) => props.active && ContainerActive};
`;

export const LinearDayGradient = styled(LinearGradient)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 4px;
  padding-bottom: 2px;
  justify-content: center;
`;


export const TextStyle = css`
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
`;


export const DayActive = css`
  color: ${Colors.accent};
  font-size: 9px;
`;

export const DayItem = styled.p`
  ${TextStyle};
  font-size: 8px;
  ${(props: IProps) => props.active && DayActive};
`;


export const DateActive = css`
  color: ${Colors.accent};
  font-size: 12px;
`;

export const DateItem = styled.p`
  ${TextStyle};
  font-size: 11px;
  ${(props: IProps) => props.active && DateActive};
`;


export const YearActive = css`
  margin-bottom: 3px;
  color: ${Colors.accent};
  font-size: 8px;
`;

export const YearItem = styled.p`
  ${TextStyle};
  font-size: 7px;
  letter-spacing: 1px;
  ${(props: IProps) => props.active && YearActive};
`;



// Dates Style

export const DatesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;

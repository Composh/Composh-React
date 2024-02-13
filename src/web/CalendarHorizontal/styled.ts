import styled from 'styled-components';

// import LinearGradient from 'react-native-linear-gradient';

import color from 'color';

import {
  LinearGradient,
} from '..';

const normalColor = '#000000';
const accentColor = '#FE2472';



export interface IProps {
  active?: boolean;
  color?: string;
  size?: number;
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
`;

export const CalendarArrowText = styled.p`
  color: ${(props: IProps) => props.color || normalColor};
  font-size: 18px;
`;



// Date Style

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

  ${(props: IProps) => props.active && `
    border-bottom-color: ${props.color || accentColor};
  `};
`;

export const LinearDayGradient = styled(LinearGradient)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 2px;
  padding-bottom: 1px;
  justify-content: center;
`;

export const DayView = styled.div`
  display: flex;
  flex-direction: column;
`;



export const DayItem = styled.p`
  margin-bottom: 1px;
  color: ${(props: IProps) => color(props.color || normalColor).alpha(0.6).toString()};
  font-size: ${(props: IProps) => props.size ? `${props.size * 0.9}px` : '9px'};
  text-align: center;
`;

export const DateItem = styled.p`
  color: ${(props: IProps) => color(props.color || normalColor).alpha(0.6).toString()};
  font-size: ${(props: IProps) => props.size ? `${props.size * 1.1}px` : '11px'};
  text-align: center;
`;


export const YearItem = styled.p`
  color: ${(props: IProps) => color(props.color || normalColor).alpha(0.6).toString()};
  font-size: ${(props: IProps) => props.size ? `${props.size * 0.8}px` : '8px'};
  letter-spacing: 1px;
  margin-bottom: 2px;
  text-align: center;
`;



// Dates Style

export const DatesContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
`;

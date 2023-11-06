import React from 'react';

import {
  DayView,
  DayItem,
  DateItem,
  YearItem,
} from './styled';



export interface IProps {
  textColor?: string;

  // Date to render
  date: Date;

  // Size text
  size?: number;
}



const DateViewCalendar: React.FC<IProps> = (props: IProps) => {
  const date = props.date;

  const weekday = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];


  function convertToDate() {
    let dd: any = date.getDate();
    let mm: any = date.getMonth() + 1; // Months start at 0!

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm;
    return formattedToday;
  }



  return (

    <DayView>

      <DayItem
        color={props.textColor}
        size={props.size}>
        {weekday[date.getDay()]}
      </DayItem>


      <DateItem
        color={props.textColor}
        size={props.size}>
        {convertToDate()}
      </DateItem>


      <YearItem
        color={props.textColor}
        size={props.size}>
        {date.getFullYear()}
      </YearItem>

    </DayView>

  );
};



export default DateViewCalendar;

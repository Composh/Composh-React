import React from 'react';

import {
  DateContainer,
  LinearDayGradient,
  DayItem,
  DateItem,
  YearItem,
} from './styled';



export interface IProps {
  // No press date
  noPress?: boolean;

  // Date to render
  date: Date;

  // Index for `onPress` and `onRender` callbacks
  index: number;

  // Whether it's the currently selected date or no
  isActive: boolean;

  // Called when user taps a date
  onPress: (index: number) => void;

  // Called after date is rendered to pass its width up to the parent component
  // onRender: (index: number, width: number) => void;
}



const DateCalendar: React.FC<IProps> = (props: IProps) => {
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


  // Call 'onPress' passed from the parent component when date is pressed
  const onPress = () => {
    if (props.onPress) {
      props.onPress(props.index);
    }
  };


  function isDateActive() {
    return props.isActive;
  }



  return (

    <DateContainer
      active={isDateActive()}
      onClick={onPress}>

      <LinearDayGradient
        // locations={[0.3, 0.6, 0.99]}
        colors={
          isDateActive()
            ? [
              'transparent',
              '#FE2472',
              '#FFFFFF',
            ]
            : [
              'transparent',
              'transparent',
              'transparent',
            ]
        }>

        <DayItem
          active={isDateActive()}>
          {weekday[date.getDay()]}
        </DayItem>


        <DateItem
          active={isDateActive()}>
          {convertToDate()}
        </DateItem>


        <YearItem
          active={isDateActive()}>
          {date.getFullYear()}
        </YearItem>

      </LinearDayGradient>

    </DateContainer>

  );
};



export default DateCalendar;

import React from 'react';

import Colors from '@noitada/shared/common/constants/Colors';

import {
  DateContainer,
  LinearDayGradient,
  DayItem,
  DateItem,
  YearItem,
} from './styled';



interface IProps {
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



const DateCalendar: React.FC<IProps> = (props: any) => {
  // Call 'onPress' passed from the parent component when date is pressed
  const onPress = () => {
    props.onPress(props.index);
  };

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
    let mm = date.getMonth() + 1; // Months start at 0!
    let dd = date.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const formattedToday = dd + '/' + mm;
    return formattedToday;
  }



  return (

    <DateContainer
      active={props.isActive}
      onClick={onPress}>

      <LinearDayGradient
        // locations={[0.3, 0.6, 0.99]}
        colors={
          props.isActive
            ? [
              'transparent',
              Colors.calendarColorLight,
              Colors.calendarColor,
            ]
            : [
              'transparent',
              'transparent',
              'transparent',
            ]
        }>

        <DayItem
          active={props.isActive}>
          {weekday[date.getDay()]}
        </DayItem>


        <DateItem
          active={props.isActive}>
          {convertToDate()}
        </DateItem>


        <YearItem
          active={props.isActive}>
          {date.getFullYear()}
        </YearItem>

      </LinearDayGradient>

    </DateContainer>

  );
};



export default DateCalendar;

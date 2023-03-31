import React,
{
  useEffect,
  useState,
} from 'react';

import DatesCalendar from './Dates';

import {
  CalendarArrowButton,
  CalendarArrowText,
  CalendarContainer,
} from './styled';



export interface IProps {
  color?: string;

  backgroundColor?: Array<string> | string;

  // Optional prop to pass a custom date to use instead of today
  currentDate?: Date;

  // Callback executed when user taps on a date
  onSelectDate?: any; // (date: Moment | Date) => any;

  // Number of days to show before today or custom current date
  showDaysAfterCurrent?: number;

  // Number of days to show after
  showDaysBeforeCurrent?: number;

  dates?: any;
};



const CalendarHorizontal: React.FC<IProps> = (props: any) => {
  const [allDatesHaveRendered, setAllDatesHaveRendered] = useState(false);

  const [currentDateIndex, setCurrentDateIndex] = useState(0);
  const [showDaysBeforeCurrent, setShowDaysBeforeCurrent] = useState(0);

  const [dates, setDates] = useState(new Array<Date>());

  const [dayWidths, setDayWidths] = useState(undefined);
  const [visibleMonths, setVisibleMonths] = useState(undefined);
  const [visibleYears, setVisibleYears] = useState(undefined);



  const formatMonth = (date: Date): string => ''; // date.format('MMMM');
  const formatYear = (date: Date): string => ''; // date.format('YYYY');


  // Get an array of dates for showing in a horizontal scroll view
  const getDates = (): Array<Date> => {
    const {
      currentDate,
      showDaysAfterCurrent,
      dates,
    } = props;

    // Go 'showDaysBeforeCurrent' ago before today or custom 'currentDate'
    const startDay = new Date(currentDate);
    startDay.setDate(startDay.getDate() - (showDaysBeforeCurrent + 1));

    // Number of days in total
    // const totalDaysCount = showDaysBeforeCurrent + showDaysAfterCurrent + 1;
    const totalDaysCount = showDaysBeforeCurrent + showDaysAfterCurrent;

    // And return an array of 'totalDaysCount' dates
    return dates ? dates : [...Array(totalDaysCount)].map((_) => new Date(startDay.setDate(startDay.getDate() + 1)));
  };


  // Update visible month(s) and year(s) of the dates currently visible on the screen
  const onRenderPastWeek = () => {
    // TODO
    console.log('FOWARD');
  };


  const onSelectDay = (index: number) => {
    setCurrentDateIndex(index);
    props.onSelectDate(dates[index]);
  };


  const onRenderNextWeek = () => {
    // TODO
    console.log('NEXT');
  };



  useEffect(() => {
    setDates(getDates);
  }, []);



  return (

    <CalendarContainer>

      <CalendarArrowButton
        onClick={() => {
          onRenderPastWeek();
        }}>
        <CalendarArrowText>
          {'<'}
        </CalendarArrowText>
      </CalendarArrowButton>


      <DatesCalendar
        color={props.color}
        backgroundColor={props.backgroundColor}
        dates={dates}
        currentDateIndex={currentDateIndex}
        onSelectDay={(index: number) => {
          onSelectDay(index);
        }}
      // onRenderDay={onRenderDay}
      />


      <CalendarArrowButton
        onClick={() => {
          onRenderNextWeek();
        }}>
        <CalendarArrowText>
          {'>'}
        </CalendarArrowText>
      </CalendarArrowButton>

    </CalendarContainer>

  );
};



CalendarHorizontal.defaultProps = {
  // Show days before the current day
  showDaysBeforeCurrent: 0,
  // And after
  showDaysAfterCurrent: 7,
};



export default CalendarHorizontal;

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
  hideArrows?: boolean;

  color?: string;
  textColor?: string;
  backgroundColor?: Array<string> | string;

  quantityDates?: 1 | 2 | 3 | 4 | 5 | 6 | 7;

  selectedDate?: Date;
  startDate: Date;
  endDate: Date;

  onSelectDate?: any; // (date: Moment | Date) => any; // Callback executed when user taps on a date

  showDaysAfterCurrent?: number; // Number of days to show before today or custom current date
  showDaysBeforeCurrent?: number; // Number of days to show after
};



const CalendarHorizontal: React.FC<IProps> = (props: IProps) => {
  const showDates = props?.quantityDates || 7;

  const [dates, setDates] = useState(new Array<Date>());
  const [currectCount, setCurretCount] = useState(1);
  const [totalDates, setTotalDates] = useState(1);



  const getArrayDates = (): Array<Date> => {
    const startDay = new Date(props.startDate);
    startDay.setDate(startDay.getDate() - 1);

    const endDay = new Date(props.endDate);

    const totalDaysCount = Math.abs((endDay.getTime() - startDay.getTime()) / (1000 * 60 * 60 * 24)) + 1;
    const startDate = new Date(props.startDate);

    const datesFormatted: Date[] = [];

    if (totalDaysCount > 0) {
      for (let index = 0; index < totalDaysCount; index++) {
        const newDate = new Date(startDate);
        newDate.setDate(startDate.getDate() + index);
        datesFormatted.push(newDate);
      }
    }
    else {
      datesFormatted.push(startDay);
    }

    setTotalDates(datesFormatted.length);

    return datesFormatted;
  };


  const onRenderPastWeek = () => {
    if (currectCount > 1) {
      setCurretCount((prev) => prev - 1);
    }
  };


  const onRenderNextWeek = () => {
    if (currectCount < totalDates - showDates) {
      setCurretCount((prev) => prev + 1);
    }
  };


  const formattedDays = () => {
    let result: Array<any> = [];

    if (dates?.length > 0) {
      const initial = currectCount - 1;
      const final = showDates + initial;
      result = dates?.slice(initial, final);

      if (!result?.includes(props?.selectedDate || new Date())) {
        const last_date = result?.slice(-1)[0];

        if (last_date > (props.selectedDate || new Date())) {
          props.onSelectDate(result[0]);
        }
        else {
          props.onSelectDate(last_date);
        }
      }
    }

    return result;
  };



  useEffect(() => {
    setDates(getArrayDates);
  }, [props.startDate, props.endDate]);



  return (

    <CalendarContainer>

      {!props.hideArrows && (
        <CalendarArrowButton
          onClick={() => {
            onRenderPastWeek();
          }}>
          <CalendarArrowText
            color={props.textColor}>
            {'<'}
          </CalendarArrowText>
        </CalendarArrowButton>
      )}


      <DatesCalendar
        color={props.color}
        textColor={props.textColor}
        selectDate={props?.selectedDate || new Date()}
        backgroundColor={props.backgroundColor}
        dates={formattedDays()}
        onSelectDay={(date: Date) => {
          props.onSelectDate(date);
        }}
      // onRenderDay={onRenderDay}
      />


      {!props.hideArrows && (
        <CalendarArrowButton
          onClick={() => {
            onRenderNextWeek();
          }}>
          <CalendarArrowText
            color={props.textColor}>
            {'>'}
          </CalendarArrowText>
        </CalendarArrowButton>
      )}

    </CalendarContainer>

  );
};



export default CalendarHorizontal;

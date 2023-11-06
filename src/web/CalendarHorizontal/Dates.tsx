import React from 'react';

import DateCalendar from './Date';

import {
  DatesContainer,
} from './styled';



export interface IProps {
  color?: string;

  textColor?: string;

  backgroundColor?: Array<string> | string;

  selectDate?: Date;

  // Array of dates to render
  dates: Array<Date>;

  // Callback to handle date select
  onSelectDay: (date: Date) => void;

  // Callback to handle date render
  // onRenderDay: (index: number, width: number) => void;
}



const DatesCalendar: React.FC<IProps> = (props: IProps) => {
  return (

    <DatesContainer>
      {props.dates?.map((date: Date, index: any) => (

        <DateCalendar
          index={index}
          color={props.color}
          textColor={props.textColor}
          backgroundColor={props.backgroundColor}
          date={date}
          isActive={date === props.selectDate}
          onPress={props.onSelectDay}
          // onRender={props.onRenderDay}
          key={index}
        />

      ))}
    </DatesContainer>

  );
};



export default DatesCalendar;

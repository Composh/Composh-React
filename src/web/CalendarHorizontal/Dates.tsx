import React from 'react';

import DateCalendar from './Date';

import {
  DatesContainer,
} from './styled';



interface IProps {
  // Currently active date index
  currentDateIndex?: number;

  // Array of dates to render
  dates: Array<Date>;

  // Callback to handle date select
  onSelectDay: (index: number) => void;

  // Callback to handle date render
  // onRenderDay: (index: number, width: number) => void;
}



const DatesCalendar: React.FC<IProps> = (props: any) => {
  return (

    <DatesContainer>
      {props.dates?.map((date: any, index: any) => (

        <DateCalendar
          index={index}
          date={date}
          isActive={index === props.currentDateIndex}
          onPress={props.onSelectDay}
          // onRender={props.onRenderDay}
          key={index}
        />

      ))}
    </DatesContainer>

  );
};



export default DatesCalendar;

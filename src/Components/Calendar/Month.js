import React from 'react';
import CalendarDates from "calendar-dates";


const Month = ({key}) => {
    const calendarDates = new CalendarDates();
    const daysNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className='month'>
        {daysNames.map((item) => {
            return (
                <p className='month__day-name body-medium' key={item}>{item}</p>
            )
        })}
    </div>
  )
}

export default Month;
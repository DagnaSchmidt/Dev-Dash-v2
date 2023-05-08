import React, { useEffect, useState } from 'react';
import CalendarDates from "calendar-dates";


const Month = ({month}) => {
    const calendarDates = new CalendarDates();
    const daysNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const monthDays = [];

    const fetchDays = async () => {
        for (const meta of await calendarDates.getDates(new Date(2023, month))) {
            monthDays.push(meta);
          }
    }

    useEffect(() => {
        fetchDays();
        console.log(monthDays);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div className='month'>
        {daysNames.map((item) => {
            return (
                <p className='month__day-name body-medium' key={item}>{item}</p>
            )
        })}
        {/* {monthDays.length !== 0 &&
            monthDays.map((item) => {
                return (
                    <p key={item.iso}>{item.date}</p>
                )
            })
        } */}
    </div>
  )
}

export default Month;
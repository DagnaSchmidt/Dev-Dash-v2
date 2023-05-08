import React, { useEffect, useState } from 'react';
import CalendarDates from "calendar-dates";


const Month = ({month}) => {
    const calendarDates = new CalendarDates();
    const [data, setData] = useState([]);
    const daysNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let monthDays = [];

    const fetchDays = async () => {
        for (const meta of await calendarDates.getDates(new Date(2023, month))) {
            monthDays.push(meta);
          }
    }

    useEffect(() => {
        fetchDays();
        setData(monthDays);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div className='month'>
        {daysNames.map((item) => {
            return (
                <p className='month__day-name body-medium' key={item}>{item}</p>
            )
        })}
        {data.length !== 0 && data.map((item) => {
            return (
                <p key={item.iso} className={`month__day title-medium ${item.type}`}>{item.date}</p>
            )
        })}
    </div>
  )
}

export default Month;
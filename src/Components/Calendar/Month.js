import React, { useEffect, useState } from 'react';
import CalendarDates from "calendar-dates";
import { connect } from "react-redux";
import { CALENDAR_SET_DISPLAYED_DATE } from '../../actions';


const Month = ({month, activeDate, setDisplayedDate}) => {
    const calendarDates = new CalendarDates();
    const [data, setData] = useState([]);
    const daysNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let monthDays = [];
    console.log(activeDate);

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
                <p key={item.iso} className={`month__day ${item.type}`} onClick={() => setDisplayedDate(item.date)}>{item.date}</p>
            )
        })}
    </div>
  )
}

const mapStateToProps = store => {
    return { 
      blackTheme: store.activeUser.blackTheme,
      activeWidgetColor: store.activeUser.activeWidgetColor,
      activeMonth: store.activeUser.calendar.activeMonth,
      activeDate: store.activeUser.calendar.activeDate
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
        setDisplayedDate: (activeDate) => dispatch({type: CALENDAR_SET_DISPLAYED_DATE, payload: {activeDate}})
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Month);
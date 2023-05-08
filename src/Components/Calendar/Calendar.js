import React, { useEffect } from 'react';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import '../../Styles/Components_Styles/Calendar/Calendar.css';
import Month from './Month';
import { connect } from "react-redux";
import { CALENDAR_SET_DISPLAYED_DATE, CALENDAR_SET_DISPLAYED_MONTH, CALENDAR_SET_DISPLAYED_YEAR } from '../../actions';

const Calendar = ({setDisplayedDate, setDisplayedMonth, setDisplayedYear}) => {
    const month = new Date().getMonth();
    const date = new Date().getDate();
    const year = new Date().getFullYear();

    useEffect(() =>{

    }, [])

    const allMonths = [];
    for(let i = month; allMonths.length < 12; i++){
        allMonths.push(i);
        if(i === 12){
            i = -1;
        }
    }
    console.log(allMonths);
    console.log(month, date, year);

  return (
    <section className='calendar'>
        <div className='calendar__left'>
            <div className='calendar__left__displayed-month'>
                <h5 className='calendar__left__displayed-month__title title-large'>February</h5>
                <div className='calendar__left__displayed-month__nav'>
                    <button className='scroll-btn'>
                        <IoChevronBack />
                    </button>
                    <button className='scroll-btn'>
                        <IoChevronForward />
                    </button>
                </div>
            </div>
            <div className='calendar__left__displayed-days'>
                {allMonths.length !== 0 &&
                  allMonths.map((item) => {
                    return (
                        <Month
                            key={item}
                        />
                    )
                })}
            </div>
        </div>
        <div className='calendar__right'>

        </div>
    </section>
  )
}

const mapStateToProps = store => {
    return { 
      blackTheme: store.activeUser.blackTheme,
      activeWidgetColor: store.activeUser.activeWidgetColor
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      setDisplayedDate: (activeDate) => dispatch({type: CALENDAR_SET_DISPLAYED_DATE, payload: {activeDate}}),
      setDisplayedMonth: (activeMonth) => dispatch({type: CALENDAR_SET_DISPLAYED_MONTH, payload: {activeMonth}}),
      setDisplayedYear: (activeYear) => dispatch({type: CALENDAR_SET_DISPLAYED_YEAR, payload: {activeYear}})
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
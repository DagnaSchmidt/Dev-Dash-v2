import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import '../../Styles/Components_Styles/Calendar/Calendar.css';
import Month from './Month';

const Calendar = () => {
    const month = new Date().getMonth();
    const allMonths = [];
    for(let i = month; allMonths.length < 12; i++){
        allMonths.push(i);
        if(i === 12){
            i = -1;
        }
    }
    console.log(allMonths);

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
                        <Month />
                    )
                })}
            </div>
        </div>
        <div className='calendar__right'>

        </div>
    </section>
  )
}

export default Calendar;
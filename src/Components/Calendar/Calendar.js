import React, { useState } from 'react';
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import '../../Styles/Components_Styles/Calendar/Calendar.css';
import Month from './Month';

const Calendar = () => {
    const [allMonths, setAllMonths] = useState([1, 2, 3, 4]);

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
                {allMonths.map((item) => {
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